import { AppState } from "./state.js";

export function renderBoard() {
  const Board = document.querySelector(".column-list");
  Board.innerHTML = "";

  AppState.columns.forEach((column) => {
    console.log(column);

    const columnList = document.createElement("div");
    columnList.className = "column-list__column";

    const title = document.createElement("div");
    title.textContent = column.title;
    title.className = "column__header";
    columnList.appendChild(title);

    const taskContainer = document.createElement("div");
    taskContainer.className = "column__tasks";
    column.tasks.forEach((task) => {
      const taskEl = document.createElement("div");
      taskEl.className = "column__task";
      taskEl.textContent = task.title;
      taskContainer.appendChild(taskEl);
    });

    columnList.appendChild(taskContainer);
    Board.appendChild(columnList);
  });
}
