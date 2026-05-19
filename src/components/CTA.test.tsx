import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CTA from './CTA'

describe('CTA', () => {
  it('renders the CTA heading', () => {
    render(<CTA />)
    expect(screen.getByText('Ready to work smarter?')).toBeInTheDocument()
  })

  it('renders the CTA button linking to claude.ai', () => {
    render(<CTA />)
    const link = screen.getByRole('link', { name: /get started for free/i })
    expect(link).toHaveAttribute('href', 'https://claude.ai')
  })
})
