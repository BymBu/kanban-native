import { renderBoard } from "../renderBoard.js";
import { AppState } from "../state.js";

export function addButton() {
  const addButton = document.querySelector(".setting__add-column");

  addButton.addEventListener("click", () => {
    const title = prompt("Введите название для колонки");

    if (title) {
      AppState.columns.push({
        id: "col-" + Date.now(),
        title: title,
        tasks: []
      });

      renderBoard();
    }
  });
}
