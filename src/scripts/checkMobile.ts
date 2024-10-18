const isMobile = () => window.matchMedia("(max-width: 768px)").matches || isPortrait();


function isPortrait() {
    return window.innerWidth < window.innerHeight;
}
export default isMobile