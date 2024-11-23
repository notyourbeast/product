function scrollLeft(id) {
    const container = document.getElementById(id).querySelector(".carousel-items");
    container.scrollBy({ left: -300, behavior: "smooth" });
  }
  
  function scrollRight(id) {
    const container = document.getElementById(id).querySelector(".carousel-items");
    container.scrollBy({ left: 300, behavior: "smooth" });
  }
  