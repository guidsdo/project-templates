export function render(text: string) {
    document.getElementById("wrapper")!.innerHTML = `<h1> Hello World!</h1><p>${text}</p>`;
}
