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
const image2 = 'url("../images/sun.jpg")';

window.addEventListener('scroll', function(){
    let scrollPosition = window.scrollY;
    let maxScroll = this.document.documentElement.scrollHeight - this.window.innerHeight;

    let scrollRatio = scrollPosition / maxScroll;

    let backgroundImage = scrollRatio < 0.2 ? image1 : image2;

    this.document.body.style.backgroundImage = backgroundImage;
});