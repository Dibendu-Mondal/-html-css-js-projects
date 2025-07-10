const htmlEditor = document.getElementById("html");
const cssEditor = document.getElementById("css");
const jsEditor = document.getElementById("js");
const output = document.getElementById("output");

function updateOutput() {
  const html = htmlEditor.value;
  const css = `<style>${cssEditor.value}</style>`;
  const js = `<script>${jsEditor.value}<\/script>`;
  output.srcdoc = html + css + js;
}

htmlEditor.addEventListener("input", updateOutput);
cssEditor.addEventListener("input", updateOutput);
jsEditor.addEventListener("input", updateOutput);

function switchTab(tab) {
  htmlEditor.style.display = "none";
  cssEditor.style.display = "none";
  jsEditor.style.display = "none";

  document.getElementById(tab).style.display = "block";
}

switchTab('html'); // Show HTML tab by default
updateOutput();     // Initial empty preview
