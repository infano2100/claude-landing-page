import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the CTA link to claude.ai', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /start for free/i })
    expect(link).toHaveAttribute('href', 'https://claude.ai')
  })

  it('renders the secondary CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /see how it works/i })).toBeInTheDocument()
  })
})
