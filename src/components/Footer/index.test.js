import Footer from "./"
import { render, screen, fireEvent } from "@testing-library/react"
import { ThemeProvider } from "../../utils/context";

describe('Footer', () => {
    test('should render without crash', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
        const nightModeButton = screen.getByRole('button')
        expect(nightModeButton.textContent).toBe('changer de mode : ☀️')
        fireEvent.click(nightModeButton)
        expect(nightModeButton.textContent).toBe('changer de mode : 🌙')
    })
})