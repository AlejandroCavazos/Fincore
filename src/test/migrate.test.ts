import { describe, expect, it } from 'vitest'
import { migrateSubtopicsV2 } from '../lib/backup'

describe('migrateSubtopicsV2', () => {
  it('moves L1-01 progress after the new "corte de caja" section', () => {
    const out = migrateSubtopicsV2({ 'L1-01:0': 'a', 'L1-01:1': 'b', 'L1-01:2': 'c', 'L1-02:1': 'x' })
    expect(out).toEqual({ 'L1-01:0': 'a', 'L1-01:2': 'b', 'L1-01:3': 'c', 'L1-02:1': 'x' })
  })
})
