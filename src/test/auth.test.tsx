import { describe, expect, it, vi, beforeEach } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { friendlyError, validateCredentials } from '../lib/auth'

const signInWithPassword = vi.fn()
const signUp = vi.fn()
vi.mock('../lib/auth', async (orig) => {
  const real = await orig<typeof import('../lib/auth')>()
  return {
    ...real,
    getClient: () => Promise.resolve({ auth: { signInWithPassword, signUp, signInWithOAuth: vi.fn(), resetPasswordForEmail: vi.fn(), updateUser: vi.fn() } }),
  }
})

import AuthScreen from '../pages/Auth'
import { StoreProvider } from '../state/store'
import { defaultState } from '../lib/progress'

const ui = () => (
  <StoreProvider initial={{ ...defaultState(), settings: { ...defaultState().settings, onboarded: true } }}>
    <AuthScreen />
  </StoreProvider>
)

describe('auth helpers', () => {
  it('validates email, password length and confirmation', () => {
    expect(validateCredentials('bad', 'longenough')).toBe('invalid-email')
    expect(validateCredentials('a@b.co', 'short')).toBe('short-password')
    expect(validateCredentials('a@b.co', 'longenough', 'other')).toBe('mismatch')
    expect(validateCredentials(' a@b.co ', 'longenough', 'longenough')).toBeNull()
  })
  it('maps provider errors to friendly text', () => {
    expect(friendlyError('Invalid login credentials').es).toMatch(/incorrectos/)
    expect(friendlyError('User already registered').en).toMatch(/already has an account/)
    expect(friendlyError('weird').es).toMatch(/Intenta de nuevo/)
  })
})

describe('AuthScreen', () => {
  beforeEach(() => {
    signInWithPassword.mockReset()
    signUp.mockReset()
  })

  it('shows validation errors and does not call the server', async () => {
    render(ui())
    fireEvent.click(screen.getByRole('button', { name: 'Crear cuenta' }))
    expect(await screen.findByText('Escribe un correo válido.')).toBeTruthy()
    expect(signUp).not.toHaveBeenCalled()
  })

  it('sign up asks to confirm the email when no session comes back', async () => {
    signUp.mockResolvedValue({ data: { session: null }, error: null })
    render(ui())
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'ana@example.com' } })
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'secreta123' } })
    fireEvent.change(screen.getByLabelText('Confirma la contraseña'), { target: { value: 'secreta123' } })
    fireEvent.click(screen.getByRole('button', { name: 'Crear cuenta' }))
    await waitFor(() => expect(signUp).toHaveBeenCalledOnce())
    expect(signUp.mock.calls[0][0]).toMatchObject({ email: 'ana@example.com', password: 'secreta123' })
    expect(await screen.findByText(/Te enviamos un correo a ana@example.com/)).toBeTruthy()
  })

  it('sign in shows a friendly error on wrong credentials', async () => {
    signInWithPassword.mockResolvedValue({ data: {}, error: new Error('Invalid login credentials') })
    render(ui())
    fireEvent.click(screen.getByRole('tab', { name: 'Iniciar sesión' }))
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'ana@example.com' } })
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'secreta123' } })
    fireEvent.click(screen.getByRole('button', { name: 'Entrar' }))
    expect(await screen.findByText('Correo o contraseña incorrectos.')).toBeTruthy()
  })
})
