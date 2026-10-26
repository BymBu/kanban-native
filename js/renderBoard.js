import { AppState } from "./state.js";

export function renderBoard() {
  const Board = document.querySelector(".column-list");
  Board.innerHTML = "";

  AppState.forEach((column) => {

    const columnList = document.createElement("div");
    columnList.className = "column-list__column";
    columnList.dataset.id = column.id; // присваиваем айди колонки через дата сет. Ибо id глобальный, чтобы не конфликтовать

    const columnHeader = document.createElement("div");
    columnHeader.className = "column__header";

    const title = document.createElement("div");
    title.textContent = column.title;
    title.className = "header__name";
    columnHeader.appendChild(title);

    const addTask = document.createElement("button");
    addTask.textContent = '+';
    addTask.className = "header__add-task";
    columnHeader.appendChild(addTask);

    const taskContainer = document.createElement("div");
    taskContainer.className = "column__tasks";
    column.tasks.forEach((task) => {
      const taskEl = document.createElement("div");
      taskEl.className = "column__task";
      taskEl.textContent = task.title;
      taskContainer.appendChild(taskEl);
    });

    columnList.appendChild(columnHeader);
    columnList.appendChild(taskContainer);
    Board.appendChild(columnList);
  });
}
