console.log("Hello World!");

// Loading particle effects

window.onload = function() {
    Particles.init({
        selector: '.background',
        maxParticles: 150,
        connectParticles: true
    });
};