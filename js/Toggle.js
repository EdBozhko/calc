class Toggle {
  #container;
  #toggle;
  #toggleLabel;
  #sync;
  constructor() {
    this.#sync = false;
  }
  get sync() {
    return this.#sync;
  }

  toggle() {
    this.#sync = !this.#sync;
  }

  render(container) {
    this.#container = container;
    this.#toggleLabel = document.createElement('label');
    this.#toggleLabel.innerText = 'Включити синхронний режим';
    this.#toggle = document.createElement('input');
    this.#toggle.setAttribute('type', 'checkbox');
    this.#toggle.checked = this.#sync;
    this.#toggle.addEventListener('change', this.toggle.bind(this));
    this.#toggleLabel.appendChild(this.#toggle);
    this.#container.appendChild(this.#toggleLabel);
  }
}
