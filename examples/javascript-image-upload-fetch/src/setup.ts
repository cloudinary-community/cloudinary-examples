import {handleChange, handleSubmit} from "./handlers"

const setupInput = () => {
    const input = document.getElementById("images") as HTMLInputElement
    input.addEventListener("change", handleChange)
}

const setupForm = () => {
    const form = document.getElementById("upload") as HTMLFormElement
    form?.addEventListener("submit", handleSubmit)
}

export {setupForm, setupInput}
