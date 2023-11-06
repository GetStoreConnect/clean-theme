document.addEventListener("DOMContentLoaded", () => {
  let e = (function () {
      let t = { items: 1, responsive: { 768: { items: 3 }, 992: { items: 4 }, 1700: { items: 5 } }, gutter: 20, nav: !1, swipeAngle: !1, speed: 400 },
        r = [];
      return (
        $(() => {
          document.querySelectorAll("[data-featured-slider]") &&
            [...document.querySelectorAll("[data-featured-slider]")].map((t) => {
              e.init("[data-featured-slider=" + t.getAttribute("data-featured-slider") + "]");
            });
        }),
        {
          init(e, i) {
            let s = tns({ ...t, ...i, container: e });
            r.push(s);
          },
        }
      );
    })(),
    t = document.querySelector("#sc-header"),
    r = t.getBoundingClientRect().height / 2,
    i = document.querySelector("nav.sc-header_inner"),
    s = (e) => {
      e.forEach((e) => {
        e.target, e.isIntersecting ? i.classList.remove("sticky") : i.classList.add("sticky");
      });
    },
    a = new IntersectionObserver(s, { root: null, threshold: 0.5, rootMargin: `${r}px` });
  a.observe(t);
});
