import { describe, expect, it } from 'vitest'
import { calculatePercentage } from './calculatePercentage.js'

describe('calculatePercentage', () => {
  it('returns the correct percentage', () => {
    expect(calculatePercentage(3, 4)).toBe(75)
  })

  it('returns zero when nothing is completed', () => {
    expect(calculatePercentage(0, 10)).toBe(0)
  })

  it('returns zero when total is zero', () => {
    expect(calculatePercentage(0, 0)).toBe(0)
  })

  it('rounds the result to the nearest integer', () => {
    expect(calculatePercentage(1, 3)).toBe(33)
  })
})
