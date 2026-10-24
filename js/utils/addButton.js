import { renderBoard } from "../renderBoard.js";
import { AppState } from "../state.js";

export function addButton() {
  const addButton = document.querySelector(".setting__add-column");

  addButton.addEventListener("click", () => {
    const title = prompt("Введите название для колонки");

    if (title) {
      let newColumn = {
        id: "col-" + Date.now(),
        title: title,
        tasks: [],
      }

      AppState.push(newColumn);

      localStorage.setItem("KB__columns", JSON.stringify(AppState));

      renderBoard();
    }
  });
}
