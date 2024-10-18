import getLogo from "./getLogo";

export const updateFavicon = (color: string)=>{
    const encodedLogo = encodeURIComponent(getLogo(color));
    const faviconURL = `data:image/svg+xml;charset=utf-8,${encodedLogo}`;
  
    const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = faviconURL;
  
    document.head.appendChild(link);
  }

export const  getRandomItem = <T>(array: T[]) => {
    if (array.length === 0) {
        throw new Error("Empty array");
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}