import "./Slider.js";
import "./Slider.css";
import { Component } from "react";

class Slider extends Component {
  currentSlideIndex = 0;
  intervalId;
  showNextImage = () => {
    this.currentSlideIndex++;
    const slides = document.querySelectorAll(".slide");
    if (this.currentSlideIndex >= slides.length) {
      this.currentSlideIndex = 0;
    }
    slides.forEach((slide, index) => {
      if (index === this.currentSlideIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  };

  showPrevImage = () => {
    this.currentSlideIndex--;
    const slides = document.querySelectorAll(".slide");
    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
      if (index === this.currentSlideIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  };
  startSlide = () => {
    this.intervalId = setInterval(() => {
      this.showNextImage();
    }, 1000);
  };
  stopSlide = () => {
    clearInterval(this.intervalId);
  };

  render() {
    return (
      <div>
        <div className="contenedor">
          <div id="slider">
            <div className="slide active">
              <img
                src="https://p4.wallpaperbetter.com/wallpaper/439/553/103/minimalist-minimal-art-fox-night-wallpaper-preview.jpg"
                alt="Imagen 1"
              />
            </div>
            <div className="slide">
              <img src="https://fondosmil.com/fondo/13706.jpg" alt="Imagen 2" />
            </div>
            <div className="slide">
              <img src="https://fondosmil.com/fondo/13698.jpg" alt="Imagen 3" />
            </div>
          </div>
          <div className="buttons">
            <input type="button" value="Next" onClick={this.showNextImage} />
            <input type="button" value="Prev" onClick={this.showPrevImage} />
            <input type="button" value="Slide" onClick={this.startSlide} />
            <input type="button" value="Stop" onClick={this.stopSlide} />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
