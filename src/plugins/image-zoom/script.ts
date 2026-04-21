function isDesktop(): boolean {
    return window.matchMedia("(pointer: fine)").matches;
}

function zoomImage(overlay: Element, img: HTMLImageElement): void {
    const overlayImg = overlay.querySelector("img") as HTMLImageElement;
    overlayImg.src = img.currentSrc || img.src;
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function unzoomImage(overlay: Element): void {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
}

document.addEventListener("click", (e) => {
    // NOTE: add !isDesktop guard here to prevent on mobile

    const overlay = document.querySelector(".zoom-overlay");
    if (!overlay) return;

    const img = (e.target as Element | null)?.closest<HTMLImageElement>(".zoomable-img");

    if (img) {
        zoomImage(overlay, img);
        return;
    }

    if (overlay.classList.contains("active")) {
        unzoomImage(overlay);
    }
});
