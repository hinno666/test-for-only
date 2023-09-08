const points = document.querySelectorAll(".map__point");

points.forEach((point) => {
  point.addEventListener("click", (e) => {
    const currentElement = e.currentTarget;

    points.forEach((point) => {
      if (point !== currentElement) {
        const pointIcon = point.querySelector(".map__point-icon");
        point.classList.remove("active");
        pointIcon.textContent = "+";
      }
    });

    const pointIcon = currentElement.querySelector(".map__point-icon");
    currentElement.classList.contains("active")
      ? (pointIcon.textContent = "+")
      : (pointIcon.textContent = "-");

    currentElement.classList.toggle("active");
  });
});
