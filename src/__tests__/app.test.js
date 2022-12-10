import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import App from "../App"


beforeEach(() => {
    render(<App />)
})

// checkin whether buttons are available or not
it("Should add button available", () => {
    expect(screen.getByRole('button', {name: '+'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '-'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '/'})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '*'})).toBeInTheDocument();
})