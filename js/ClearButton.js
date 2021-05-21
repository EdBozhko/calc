class ClearButton extends CalcButton {
    #board
    constructor(board, onclick) {
        super(board, "C", 'clear', onclick)
        this.#board = board
    }
    render(container) {
        super.render(container)
        super.button.classList.add('button--clear')
    }
}