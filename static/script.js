//Google Code
(function(){
    var script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-VRQKTXG4CR";
    script.async = true;
    document.head.appendChild(script);

    script.onload = function(){
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VRQKTXG4CR');
    };
})();

const images = [
    'url("../images/solarSystemBackground.png")',
    'url("../images/sun.jpg")',
    'url("../images/mercury.jfif")',
    'url("../images/venus.png")',
    'url("../images/earth.jpg")',
    'url("../images/mars.jpg")',
    'url("../images/jupiter.jpg")',
    'url("../images/saturn.jfif")',
    'url("../images/uranus.jpg")',
    'url("../images/neptune.png")'
];

//Star Background
https://getwallpapers.com/collection/outer-space-stars-wallpaper

//Sun
//https://science.nasa.gov/image-detail/amf-gsfc_20171208_archive_e001435/

//Mercury
//https://en.wikipedia.org/wiki/File:Mercury_in_color_-_prockter07_centered.jpg

//Venus
//https://www.nytimes.com/2020/09/19/science/venus-planets-microbes-life.html

//Earth
//https://davidmiranda.me/earth-rendering/

//Mars
//https://www.rawpixel.com/image/12696807/big-mars-planet-astronomy-outdoors-generated-image-rawpixel

//Jupiter
//https://wallpapers.com/wallpapers/nasa-image-of-jupiter-ur6rikbsqr7uw8q2.html

//Saturn
//https://www.nbcnews.com/slideshow/greatest-hits-cassini-s-incredible-tour-saturn-n749311

//Uranus
//https://de.wikipedia.org/wiki/Uranus_(Planet)

//Neptune
//https://www.wired.com/story/neptune-is-a-windy-chilly-and-baffling-planet-lets-go/




scrollThresholds = [1080, 2160, 3240, 4320, 5400, 6480, 7560, 8640, 9720, 10800];

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let index = scrollThresholds.findIndex(threshold => scrollPosition < threshold);

    if (index === -1) {
        index = scrollThresholds.length - 1;
    }

    document.body.style.transition = 'background-image 0.5s ease';
    document.body.style.backgroundImage = images[index];
});