export class Color {
    getRandomColor(): string {
        const randomValue = (): number => Math.floor(Math.random() * 256)
        return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`
    }
}