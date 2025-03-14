document.addEventListener("DOMContentLoaded", () => {
  let slider = (function () {
    let defaults = {
        items: 1,
        responsive: {
          768: { items: 3 },
          992: { items: 4 },
          1700: { items: 5 }
        },
        gutter: 20,
        nav: false,
        swipeAngle: false,
        speed: 400
      },
      sliders = [];

    return (
      $(() => {
        document.querySelectorAll("[data-featured-slider]") &&
          [...document.querySelectorAll("[data-featured-slider]")].map((el) => {
            slider.init("[data-featured-slider=" + el.getAttribute("data-featured-slider") + "]");
          });
      }),
      {
        init(container, options) {
          let tinySlider = tns({ ...defaults, ...options, container: container });
          sliders.push(tinySlider);
        }
      }
    );
  })();

  const header = document.querySelector("#sc-header");
  const nav = document.querySelector("nav.sc-header_inner");
  let isSticky = false;

  const handleSticky = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0 && !isSticky) {
      nav.classList.add("sticky");
      isSticky = true;
    } else if (scrollPosition === 0 && isSticky) {
      nav.classList.remove("sticky");
      isSticky = false;
    }
  };

  window.addEventListener("scroll", handleSticky);
  handleSticky();
});
