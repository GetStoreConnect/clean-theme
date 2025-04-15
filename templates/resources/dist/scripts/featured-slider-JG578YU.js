function sliderInit() {
  ;[...document.querySelectorAll('[data-featured-slider]:not([data-initialized])')].forEach((sliderEl) => {
    sliderEl.setAttribute('data-initialized', true)
    const container = {
      container: '[data-featured-slider=' + sliderEl.getAttribute('data-featured-slider') + ']',
    }
    const slideshow = tns({ ...CUSTOM_PARAMS, ...container })

    let resizeId

    sliders.push(sliderEl)
    window.addEventListener('resize', () => {
      clearTimeout(resizeId)
      resizeId = setTimeout(() => slideshow.updateSliderHeight(), 300)
    })
  })
}

document.addEventListener('DOMContentLoaded', sliderInit);