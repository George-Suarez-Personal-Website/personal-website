// Loading particle effects
window.onload = function () {
    Particles.init({
        selector: ".background",
        color: ['#FAFAFA','#FF0011'],
        maxParticles: 250,
        connectParticles: true,
        responsive: [
            {
                breakpoint: 800,
                options: {
                    color: '#FA00DD',
                    maxParticles: 150,
                    connectParticles: false
                }
            }
        ]
    });
};

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
};

let observer 



const navLinks = document.querySelector('navigation-item');

function navigationRouter(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLinks.forEach((link) => {
                link.classList.remove('navigation-item--active');
            });
        }

        document.querySelector(`#nav-${entry.target.id}`)
        .classList.add('navigation-item--active');
    });
}

