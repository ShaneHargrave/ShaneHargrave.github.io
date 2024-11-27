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

const image1 = 'url("../images/solarSystemBackground.png")';
https://getwallpapers.com/collection/outer-space-stars-wallpaper

const image2 = 'url("../images/sun.jpg")';
//https://science.nasa.gov/image-detail/amf-gsfc_20171208_archive_e001435/

const image3 = 'url("../images/mercury.jfif")';
//https://en.wikipedia.org/wiki/File:Mercury_in_color_-_prockter07_centered.jpg

const image4 = 'url("../images/venus.png")';
//https://www.nytimes.com/2020/09/19/science/venus-planets-microbes-life.html

const image5 = 'url("../images/earth.jpg")';
https://davidmiranda.me/earth-rendering/

const image6 = 'url("../images/mars.jpg")';
https://www.rawpixel.com/image/12696807/big-mars-planet-astronomy-outdoors-generated-image-rawpixel

const image7 = 'url("../images/jupiter.jpg")';
https://wallpapers.com/wallpapers/nasa-image-of-jupiter-ur6rikbsqr7uw8q2.html

const image8 = 'url("../images/saturn.jfif")';
//https://www.nbcnews.com/slideshow/greatest-hits-cassini-s-incredible-tour-saturn-n749311

const image9 = 'url("../images/uranus.jpg")';
https://de.wikipedia.org/wiki/Uranus_(Planet)

const image10 = 'url("../images/neptune.png")';
https://www.wired.com/story/neptune-is-a-windy-chilly-and-baffling-planet-lets-go/




window.addEventListener('scroll', function(){
    let scrollPosition = window.scrollY;
    let maxScroll = this.document.documentElement.scrollHeight - this.window.innerHeight;

    let scrollRatio = scrollPosition / maxScroll;

    let backgroundImage;

    if (scrollRatio < 0.35) {
        backgroundImage = image1;
    } else if (scrollRatio < 0.65) {
        backgroundImage = image2;
    } else {
        backgroundImage = image3;
    }

    this.document.body.style.backgroundImage = backgroundImage;
});