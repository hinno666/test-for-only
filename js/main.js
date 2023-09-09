const pointsParent = document.querySelector(".map");

const showPoint = (point) => {
  if (point.classList.contains("map__point")) {
    point.classList.toggle("active");
    const pointIcon = point.querySelector(".map__point-icon");
    point.classList.contains("active")
      ? (pointIcon.textContent = "-")
      : (pointIcon.textContent = "+");
  }
};

pointsParent.addEventListener("click", (e) => {
  const point = e.target.closest(".map__point");

  if (!point) return;

  if (!pointsParent.contains(point)) return;

  showPoint(point);
});
