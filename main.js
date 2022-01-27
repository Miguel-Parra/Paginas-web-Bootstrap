const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 150
});

typewriter
.typeString('La capital del sol')
.pauseFor(200)
.start();