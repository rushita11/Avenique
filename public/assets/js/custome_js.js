
   // default video pause
   $(window).load(function () {
    $(".pop__up_video").get(0).pause();
});
$('.pop__up_video_button').click(function () {
    $(".pop__up_video").get(0).play();
});
$('.modal .btn-close').click(function () {
    $(".pop__up_video").get(0).pause();
});
$(document).on('ready', function () {
    $(".review_slider").owlCarousel({
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
                loop: true,
            },
            400: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
                loop: true,
            },

            767: {
                items: 1
            },
            1000: {
                items: 1
            },
            1199: {
                items: 1
            }
        }
    });
    $('.before-after_slider').owlCarousel({
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1,
                // autoplay: true,
                // autoplayTimeout: 2000,
                // autoplayHoverPause: true,
                // loop: true,
            },
            400: {
                items: 1,
                // autoplay: true,
                // autoplayTimeout: 2000,
                // autoplayHoverPause: true,
                // loop: true,
            },

            767: {
                items: 1
            },
            1000: {
                items: 1
            },
            1199: {
                items: 1
            }
        }
    });

});

$(window).load(function () {
    $('.modal').modal({
        backdrop: 'static',
        keyboard: false
    });
});







 // close the menu
 $(document).ready(function(){
     
    $('.menu_close_button').click(function(){
        // $(this).animate(function(){
            $('.navbar-collapse').removeClass('show');
        // });
        
    })
})

// navbar fix
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navigation_fixed_container').addClass('nav_menu_fix');
        } else {
            $('.navigation_fixed_container').removeClass('nav_menu_fix');
        }
    });
});


class BeerSlider {
    constructor(element, {
    start = "30"
    } = {}) {
        this.start = parseInt(start) ?
            Math.min(100, Math.max(0, parseInt(start))) :
            30;
        this.element = element;
        this.revealContainer = this.element.children[1];
        this.revealElement = this.revealContainer.children[0];
        this.range = this.addElement("input", {
            type: "range",
            class: `beer-range`,
            "aria-label": "Percent of revealed content",
            "aria-valuemin": "0",
            "aria-valuemax": "100",
            "aria-valuenow": this.start,
            value: this.start,
            min: "0",
            max: "100"
        });
        this.handle = this.addElement("span", {
            class: `beer-handle`
        });
        this.onImagesLoad();
    }
    init() {
        this.element.classList.add(`beer-ready`);
        this.move();
        this.addListeners();
    }
    loadingImg(src) {
        return new Promise((resolve, reject) => {
            if (!src) {
                resolve();
            }
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => reject();
            img.src = src;
        });
    }
    loadedBoth() {
        const mainImageSrc =
            this.element.children[0].src ||
            this.element.children[0].getAttribute(`data-beer-src`);
        const revealImageSrc =
            this.revealElement.src ||
            this.revealElement.getAttribute(`data-beer-src`);
        return Promise.all([
            this.loadingImg(mainImageSrc),
            this.loadingImg(revealImageSrc)
        ]);
    }
    onImagesLoad() {
        if (!this.revealElement) {
            return;
        }
        this.loadedBoth().then(
            () => {
                this.init();
            },
            () => {
                console.error("Some errors occurred and images are not loaded.");
            }
        );
    }
    addElement(tag, attributes) {
        const el = document.createElement(tag);
        Object.keys(attributes).forEach((key) => {
            el.setAttribute(key, attributes[key]);
        });
        this.element.appendChild(el);
        return el;
    }
    addListeners() {
        const eventTypes = ["input", "change"];
        eventTypes.forEach((i) => {
            this.range.addEventListener(i, () => {
                this.move();
            });
        });
    }
    move() {
        this.revealContainer.style.setProperty("--width", `${this.range.value}%`);
        this.handle.style.left = `${this.range.value}%`;
        this.range.setAttribute("aria-valuenow", this.range.value);
        if (this.range.value > 55) {
            this.element.classList.add("more");
        } else {
            this.element.classList.remove("more");
            if (this.range.value < 45) {
                this.element.classList.add("less");
            } else {
                this.element.classList.remove("less");
            }
        }
    }
}

new BeerSlider(document.getElementById("slider"), {
    start: 51
});



var $header = $('#header');
var $slider = $('.ctnr');

var $window = $(window).on('resize', function () {
    var height = $(this).height() - $header.height();
    $slider.height(height);

}).trigger('resize'); //on page load




/(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", function () { var t, e = location.hash.substring(1); /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus()) }, !1);