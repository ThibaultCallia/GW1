class Carousel2 {
  constructor(container) {
    this.container = container;
    this.position = 1;
    this.rightButton = this.createRightBtn();
    this.leftButton = this.createLeftBtn();

    this.carouselLength =
      this.container.querySelectorAll(".img-container").length;

    this.leftButton.addEventListener("click", this.slideLeft);
    this.rightButton.addEventListener("click", this.slideRight);
  }

  createLeftBtn() {
    this.container.insertAdjacentHTML(
      "afterbegin",
      `<button class = "carousel-left carousel-btn" ><i class="fa-solid fa-chevron-left"></i></button>`
    );
    this.styleBtn("left");

    return this.container.querySelector(".carousel-left");
  }

  createRightBtn() {
    this.container.insertAdjacentHTML(
      "afterbegin",
      `<button class = "carousel-right carousel-btn" ><i class="fa-solid fa-chevron-right"></i></button>`
    );
    this.styleBtn("right");

    return this.container.querySelector(".carousel-right");
  }

  styleBtn(direction) {
    document.querySelectorAll(".carousel-btn").forEach((element) => {
      element.style.position = "absolute";
      element.style.zIndex = 1;
      element.style.width = 40 + "px";
      element.style.height = 40 + "px";
      element.style.border = "none";
      element.style.borderRadius = 50 + "%";
      element.style.color = `hsl(${0}, ${0}%, ${20}%)`;
      element.style.backgroundColor = `hsla(0, 0%, 100%, 0.369)`;
      element.style.top = 50 + "%";
      element.style.transform = `translateY(-50%)`;
      if (direction === "right") {
        element.style.right = `0`;
        // element.style.transform = `translateX(-100%)`;
        // element.style.transform = `translateX(50%)`;
      }
    });
  }

  slideLeft = () => {
    if (this.position == 1) {
      this.position = this.carouselLength;
    } else {
      this.position--;
    }

    this.animate();
  };
  slideRight = () => {
    if (this.position == this.carouselLength) {
      this.position = 1;
    } else {
      this.position++;
    }

    this.animate();
  };

  animate() {
    this.container.querySelectorAll(".img-container").forEach((element) => {
      element.classList.add("hidden");
    });
    this.container
      .querySelector(`.images figure:nth-child(${this.position})`)
      .classList.remove("hidden");
  }
}

export default Carousel2;
