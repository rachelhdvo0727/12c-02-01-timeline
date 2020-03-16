"use strict";
window.addEventListener("DOMContentLoaded", init);
let data;

function init() {
  // load the SVGs
  loadInfoboxSVG();
  loadTimelineSVG();

  //create boxes
  createInfoBoxes();
}
async function loadTimelineSVG() {
  const response = await fetch("timeline/final_timeline.svg");
  const svg = await response.text();
  document.querySelector("#timeline_container").innerHTML = svg;
}

async function loadInfoboxSVG() {
  const response = await fetch("timeline/final_infobox.svg");
  const svg = await response.text();
  document.querySelector("#infobox_container").innerHTML = svg;
}

function createInfoBoxes() {
  for (let i = 0; i < 8; i++) {
    createBox();
  }
}

function createBox() {
  let box = document.createElementNS("http://www.w3.org/2000/svg", "use");
  let fragment = document.createDocumentFragment();
  box.setAttributeNS("http://www.w3.org/2000/svg", "href", "svg#theinfobox");
  box.setAttributeNS("http://www.w3.org/2000/svg", "x", 450);
  box.setAttributeNS("http://www.w3.org/2000/svg", "y", 180);
  box.setAttributeNS("http://www.w3.org/2000/svg", "width", 600);
  box.setAttributeNS("http://www.w3.org/2000/svg", "height", 450);
  console.log(box);
  fragment.append(box);
  document.querySelector("#timeline_infoboxes").append(fragment);
}
