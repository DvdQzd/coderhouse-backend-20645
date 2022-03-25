class Color {
    getRandomColor() {
        const randomValue = () => Math.floor(Math.random() * 256)
        return `rgb(${randomValue}, ${randomValue}, ${randomValue})`
    }
}