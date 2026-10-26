import { renderBoard } from "../renderBoard.js";
import { AppState } from "../state.js";

export function addButton() {
  const addColumnButton = document.querySelector(".setting__add-column");
  const Board = document.querySelector(".column-list");

  addColumnButton.addEventListener("click", () => {
    const title = prompt("Введите название для колонки");

    if (title) {
      let newColumn = {
        id: "col-" + Date.now(),
        title: title,
        tasks: [],
      };

      AppState.push(newColumn);

      localStorage.setItem("KB__columns", JSON.stringify(AppState));

      renderBoard();
    }
  });

  Board.addEventListener("click", (e) => {
    const btn = e.target.closest(".header__add-task");

    if (!btn) return;

    const columnEl = btn.closest(".column-list__column");
    const columnId = columnEl.dataset.id;

    const column = AppState.find((col) => col.id === columnId);

    let title;

    if (column) {
      title = prompt("Введите название задачи");
    }
    console.log(column);

    column.tasks.push({
      id: "task-" + Date.now(),
      title: title,
    });

    renderBoard();
  });
}
