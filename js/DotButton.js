class DotButton extends Button {
    #board;
    constructor(board, onclick) {
      super(board, ".", "dot", onclick);
      this.#board = board;
    }
    render(containerId) {
      super.render(containerId)
      super.button.classList.add("class", "button--dot")
    }
  }