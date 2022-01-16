export default class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.container = null;
    this.boardEl = null;
    this.cells = [];
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('GamePlay not bind to DOM');
    }
  }

  /**
   * Draws boardEl
   *
   */
  drawBoard() {
    this.checkBinding();

    this.container.innerHTML = `
      <div class="board-container">
        <div data-id="board" class="board"></div>
      </div>
    `;

    this.boardEl = this.container.querySelector('[data-id=board]');

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell', 'map-tile');
      this.boardEl.appendChild(cellEl);
    }

    this.cells = Array.from(this.boardEl.children);
  }

  /**
   * Start showing the Goblin
   *
   */
  showGoblin(interval) {
    let previousCell = null;
    const { length } = this.cells;
    const { cells } = this;

    function repeatOften() {
      const random = Math.floor(Math.random() * (length - 1)) + 0;
      const randomCell = cells[random];

      if (previousCell) previousCell.classList.remove('active');
      randomCell.classList.add('active');
      previousCell = randomCell;
      setTimeout(repeatOften, interval);
    }

    setTimeout(repeatOften, interval);
  }
}
