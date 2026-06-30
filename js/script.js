const nodes = document.querySelectorAll(".node");
const panel = document.getElementById("infoPanel");
const lines = [
  document.getElementById("line1"),
  document.getElementById("line2"),
  document.getElementById("line3")
];

const center = { x: 280, y: 280 };

function getNodeCenter(node) {
  const ecosystem = document.getElementById("ecosystem");
  const ecoRect = ecosystem.getBoundingClientRect();
  const rect = node.getBoundingClientRect();

  return {
    x: rect.left - ecoRect.left + rect.width / 2,
    y: rect.top - ecoRect.top + rect.height / 2
  };
}

nodes.forEach((node) => {
  node.addEventListener("mouseenter", () => {
    nodes.forEach(n => n.classList.remove("active"));
    node.classList.add("active");

    panel.querySelector("h3").textContent = node.dataset.title;
    panel.querySelector("p").textContent = node.dataset.text;

    const point = getNodeCenter(node);

    lines.forEach((line, index) => {
      line.setAttribute("x1", center.x);
      line.setAttribute("y1", center.y);
      line.setAttribute("x2", point.x);
      line.setAttribute("y2", point.y);
      line.style.opacity = index === 0 ? "1" : "0";
    });
  });
});
