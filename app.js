// Легка «пульсація» логотипа
(function () {
    const logoMark = document.querySelector(".logo-mark");
    if (!logoMark) return;

    let glowUp = true;

    setInterval(() => {
        if (glowUp) {
            logoMark.style.textShadow = "0 0 16px rgba(255,157,89,0.95)";
            logoMark.style.transform = "scale(1.06)";
        } else {
            logoMark.style.textShadow = "0 0 7px rgba(255,157,89,0.7)";
            logoMark.style.transform = "scale(1)";
        }
        glowUp = !glowUp;
    }, 1200);
})();

// Ефект «жаринок» / попелу на фоні
(function () {
    const PARTICLE_COUNT = 14;
    const body = document.body;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p = document.createElement("div");
        p.className = "stalker-particle";
        const size = 2 + Math.random() * 3;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}vw`;
        p.style.top = `${Math.random() * 100}vh`;
        p.style.animationDuration = `${8 + Math.random() * 12}s`;
        p.style.animationDelay = `${Math.random() * 7}s`;
        body.appendChild(p);
    }
})();
