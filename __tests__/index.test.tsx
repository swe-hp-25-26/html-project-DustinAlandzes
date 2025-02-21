import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from "@/app/page";

describe('Home', () => {
    it('renders a dog emoji', () => {
        render(<Home />)

        const dog_emoji = screen.getByText("🐶")
        expect(dog_emoji).toBeInTheDocument()
    })
})