import {
    initViewer,
    listModels,
    loadModel
  } from "https://aps-codepen.autodesk.io/utils.js";
  
  const viewer = await initViewer(document.getElementById("viewer"));
  const models = await listModels();
  const dropdown = document.getElementById("models");
  dropdown.innerHTML = models
    .map((m) => `<option value="${m.urn}">${m.name}</option>`)
    .join("");
  dropdown.onchange = () => dropdown.value && loadModel(viewer, dropdown.value);
  dropdown.onchange();
  
  document.getElementById("explode").addEventListener("click", function () {
    if (viewer.getExplodeScale() > 0.0) {
      viewer.explode(0.0);
    } else {
      viewer.explode(0.5);
    }
  });