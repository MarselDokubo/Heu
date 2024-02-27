import { PaintCanvas } from "./src/canvas.js";
import { drawGrid } from "./src/util.js";
import Line from "./src/line.js";
import Rectangle from "./src/rectangle.js";
import Circle from "./src/circle.js";

// canvas context
let canvas = document.querySelector("#canvas"),
  ctx = canvas.getContext("2d", { willReadFrequently: true }),
  toolbar = document.querySelector(".toolbar"),
  paintCanvas = new PaintCanvas(ctx),
  dragging = false,
  shape = "rect",
  currentShape;

// CONTROL PANEL
let controlPanel = document.getElementById("control-panel");

// PROPERTIES PANEL
let propertiesPanel = document.querySelector(".properties-panel");

// GLOBAL STYLE
let elementStyle = {
  fillColor: "",
  strokeColor: "",
  strokeWidth: "",
  opacity: "",
};

// CONTROL PANEL INPUT LISTENERS
controlPanel.addEventListener("change", (e) => {
  elementStyle[e.target.id] = e.target.value;
  paintCanvas.setELementStyle(elementStyle);
});

// REGISTERED EVENTS
toolbar.addEventListener("click", (e) => {
  if (e.target.matches(".tool[data-shape]")) {
    shape = e.target.getAttribute("data-shape");
    if (shape === "selection") {
      canvas.style.cursor = "move";
    } else {
      canvas.style.cursor = "crosshair";
    }
  }
});

canvas.addEventListener("mousedown", ({ clientX: x, clientY: y }) => {
  let msePos = paintCanvas.getMousePos(x, y);
  dragging = true;
  paintCanvas.save();
  currentShape = createShape(shape, msePos);
});

canvas.addEventListener("mousemove", ({ clientX: x, clientY: y }) => {
  let msePos = paintCanvas.getMousePos(x, y);
  if (dragging) {
    currentShape.setSize(msePos);
    paintCanvas.clear();
    paintCanvas.restore();
    paintCanvas.draw(currentShape);
  }
});

canvas.addEventListener("mouseup", () => {
  dragging = false;
});

function createShape(shape, pos) {
  let { xpos, ypos } = pos;
  let shapes = {
    rect: Rectangle,
    circle: Circle,
    line: Line,
  };

  return new shapes[shape](pos);
}

drawGrid(ctx);
