window.onload = function() {
    Particles.init({
        selector: ".background"
    });
};

var particles = Particles.init({
    selector: ".background",
    color: ["#FF0099", "#00ffff"],
    connectParticles: true,
    responsive: [{
        breakpoint: 765,
        options: {
            color: ["#fFF", "#FF0099", "#00ffff"],
            maxParticles: 50,
            connectParticles: false
        }
    }]
});

// START CLOCK SCRIPT

Number.prototype.pad = function(n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
};

console.log("Hello world");