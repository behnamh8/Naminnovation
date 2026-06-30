const nodes = document.querySelectorAll(".node");

nodes.forEach((node) => {
  node.addEventListener("mouseenter", () => {
    nodes.forEach(n => n.classList.remove("active"));
    node.classList.add("active");
  });

  node.addEventListener("mouseleave", () => {
    node.classList.remove("active");
  });
});
