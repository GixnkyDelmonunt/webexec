const dragBar = document.getElementById("dragBar");
const executor = document.getElementById("executor");
let isDragging = false;
let offsetX, offsetY;

dragBar.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - executor.offsetLeft;
  offsetY = e.clientY - executor.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    executor.style.left = `${e.clientX - offsetX}px`;
    executor.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

function clearEditor() {
  document.getElementById("editorBox").innerText = "";
}

function executeCode() {
  const output = document.getElementById("output");
  output.innerText = '[00:21:42] Test is not a valid member of Model "Workspace.Part"';
}
