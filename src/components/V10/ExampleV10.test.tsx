import "@testing-library/jest-dom"
import ExampleV10 from "./ExampleV10"
import { render, screen, fireEvent } from "@testing-library/react"

describe("ExampleV10", () => {


    let article: HTMLElement
    let button: HTMLElement
    beforeEach(()=>{
        render(<ExampleV10 />)
        article = screen.getByRole("article", { name: "articulo 1" })
        button = screen.getByRole("button", { name: "Cambiar color" })
    })

    it("Se renderiza correctamente", () => {
        expect(article).toBeInTheDocument()
    })

    it("Se renderiza con estilo", () => {
        expect(article).toHaveClass("bg-[red]")
    })

    it("Se cambia el estilo", () => {
        fireEvent.click(button)
        expect(article).toHaveClass("bg-[blue]")
    })




})

