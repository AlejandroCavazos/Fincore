import { describe, expect, it } from 'vitest'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { StoreProvider } from '../state/store'
import { ExerciseRunner } from '../components/ExerciseRunner'
import { defaultState } from '../lib/progress'
import type { McqExercise } from '../types'
import App from '../App'

const mk = (id: string): McqExercise => ({
  id,
  level: 1,
  module: 'L1-01',
  kind: 'mcq',
  prompt: { es: `Pregunta ${id}`, en: `Question ${id}` },
  explanation: { es: 'Explicación', en: 'Explanation' },
  difficulty: 1,
  points: 10,
  competency: 'test',
  options: ['a', 'b', 'c', 'd'].map((o) => ({ id: `${id}-${o}`, text: { es: `Opción ${o}`, en: `Option ${o}` } })),
  correctOptionId: `${id}-a`,
})

const onboarded = () => ({ ...defaultState(), settings: { ...defaultState().settings, onboarded: true } })
const optionOrder = () => Array.from(document.querySelectorAll('[data-option-id]')).map((e) => e.getAttribute('data-option-id'))

describe('ExerciseRunner (React Testing Library)', () => {
  it('keeps the option order stable across re-render, selection and feedback; grades by ID', async () => {
    const ex = mk('RTL1')
    const ui = (
      <StoreProvider initial={onboarded()}>
        <ExerciseRunner sessionKey="rtl" exercises={[ex]} mode="lesson" />
      </StoreProvider>
    )
    const { rerender } = render(ui)
    await waitFor(() => expect(optionOrder()).toHaveLength(4))
    const order = optionOrder()
    expect([...order].sort()).toEqual(['RTL1-a', 'RTL1-b', 'RTL1-c', 'RTL1-d'])

    rerender(ui)
    expect(optionOrder()).toEqual(order)

    // select the correct option wherever it landed
    const correctBtn = document.querySelector('[data-option-id="RTL1-a"]') as HTMLElement
    fireEvent.click(correctBtn)
    expect(correctBtn.getAttribute('aria-checked')).toBe('true')
    expect(optionOrder()).toEqual(order)

    fireEvent.click(screen.getByRole('button', { name: /Comprobar/ }))
    await screen.findByText('¡Correcto!', { exact: false })
    expect(optionOrder()).toEqual(order)
    // letters shown to the learner follow display order
    expect(Array.from(document.querySelectorAll('[data-position]')).map((e) => e.getAttribute('data-position'))).toEqual(['A', 'B', 'C', 'D'])
  })

  it('a wrong choice is graded wrong even if it sits where the correct option was authored (position A)', async () => {
    const ex = mk('RTL2')
    render(
      <StoreProvider initial={onboarded()}>
        <ExerciseRunner sessionKey="rtl2" exercises={[ex]} mode="lesson" />
      </StoreProvider>,
    )
    await waitFor(() => expect(optionOrder()).toHaveLength(4))
    fireEvent.click(document.querySelector('[data-option-id="RTL2-c"]') as HTMLElement)
    fireEvent.click(screen.getByRole('button', { name: /Comprobar/ }))
    await screen.findByText(/Respuesta incorrecta/)
  })
})

describe('App navigation', () => {
  it('shows onboarding when not onboarded, and dashboard + routes when onboarded', async () => {
    window.location.hash = '#/'
    const { unmount } = render(
      <StoreProvider initial={defaultState()}>
        <App />
      </StoreProvider>,
    )
    await waitFor(() => expect(window.location.hash).toBe('#/welcome'))
    unmount()

    window.location.hash = '#/'
    render(
      <StoreProvider initial={onboarded()}>
        <App />
      </StoreProvider>,
    )
    await screen.findByTestId('total-xp')
    for (const [hash, text] of [
      ['#/courses', /Catálogo|Cursos/],
      ['#/stats', /Estadísticas|Progreso/],
      ['#/settings', /Configuración/],
      ['#/no-existe', /no existe|No encontrada|404/i],
    ] as const) {
      await act(async () => {
        window.location.hash = hash
        window.dispatchEvent(new HashChangeEvent('hashchange'))
      })
      expect((await screen.findAllByText(text)).length).toBeGreaterThan(0)
    }
  })
})
