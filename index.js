const handleMobileMenu = () => {
    const mobileMenuBtn = document.querySelector("#menu-button-mobile");
    const mobileLinks = document.querySelector("#mobile-links");
    
    // If the Mobile links are shown, hide them, and if they are hidden, show them
    const toggleHidden = (toToggle=mobileLinks) => {
        toToggle.classList.toggle("hidden");
    }

    mobileMenuBtn.addEventListener("mousedown", () => {
        toggleHidden(mobileLinks);
    
        hideMenu(30);
    });
    
    const hideMenu = (delay) => {
        const handleMouseDown = () => {
            console.log("mousedown");
            toggleHidden(mobileLinks);
        }
        setTimeout(() => {
            document.body.addEventListener("click", handleMouseDown);
        }, delay);
        document.body.removeEventListener("click", handleMouseDown);
    }
}

handleMobileMenu();