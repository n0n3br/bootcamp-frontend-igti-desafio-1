const rangeInputs = Array.from(
  document.body.querySelectorAll('input[type="range"]')
);
const previewDiv = document.querySelector(".preview");

const updatePreviewColor = () => {
  const rgbColor = `rgb(${rangeInputs.map(range => range.value).join(",")})`;
  previewDiv.style.backgroundColor = rgbColor;
};
const initRangeInput = () => {
  rangeInputs.forEach(range => {
    const input = document.querySelector(`#${range.id}-value`);
    range.value = 0;
    input.value = range.value;
    range.addEventListener("input", event => {
      input.value = event.target.value;
      updatePreviewColor();
    });
  });
};

const init = () => {
  initRangeInput();
  updatePreviewColor();
};

window.addEventListener("load", init);
