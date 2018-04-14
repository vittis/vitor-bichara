
function init2() {
    var stage = new PIXI.Container();
    var renderer = PIXI.autoDetectRenderer(
        window.innerWidth,
        200,
        { view: document.getElementById("game-canvas") }
    );

    var farTexture = PIXI.Texture.fromImage("img/montanhaPrincipal.svg");
    var far = new PIXI.Sprite(farTexture);
    far.anchor.set(0.5, 0.5);
    far.position.x = window.innerWidth / 2;
    far.position.y = 200 - 63;
    stage.addChild(far);
    renderer.backgroundColor = '#'
    renderer.backgroundColor '#3a0839ff';
    requestAnimationFrame(update);
}
function update2() {
    renderer.render(stage);

    requestAnimationFrame(update);
}
/*
var app = new PIXI.Application(window.innerWidth, 200, { view: document.getElementById("game-canvas") });

// create a new Sprite from an image path
var bunny = PIXI.Sprite.fromImage('montanhaPrincipal.png')

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

// Listen for animate update
app.ticker.add(function (delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    bunny.rotation += 0.1 * delta;
});
*/