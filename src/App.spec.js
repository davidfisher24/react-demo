import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('<App />', () => {
  beforeEach(() => {
    render(<App />)
  })

  describe('when page is initialized', () => {
    it('shows the show notification button by default', () => {
      expect(screen.getByText(/Show notifcation/i)).toBeTruthy()
    })

    it("doesn't show the notification modal by default", () => {
      expect(() => screen.getByText(/Notification modal/i)).toThrow()
    })
  })

  describe('when the show notification button is clicked', () => {
    beforeEach(() => {
      userEvent.click(screen.getByText(/Show notifcation/i))
    })

    it('shows the notification modal', () => {
      expect(screen.getByText(/Notification modal/i)).toBeTruthy()
    })

    it('closes the notification when clicking on close', () => {
      userEvent.click(screen.getByLabelText(/close/i))
      expect(screen.getByText(/Show notifcation/i)).toBeTruthy()
    })
  })
})
