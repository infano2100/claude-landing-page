import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Features from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByText('Everything you need')).toBeInTheDocument()
  })

  it('renders all 6 feature cards', () => {
    render(<Features />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(6)
  })

  it('renders the Coding Assistant feature', () => {
    render(<Features />)
    expect(screen.getByText('Coding Assistant')).toBeInTheDocument()
  })
})
