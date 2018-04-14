
var montanha0;
var montanha1;
var montanha2;
var montanha3;
var montanha4;
var montanha5;
var montanha6;


var estrelas;

var quemSouEu = document.getElementsByClassName("quemSouEu")[0];
var meuSistema = document.getElementsByClassName("meuSistema")[0];
var meusProjetos = document.getElementsByClassName("meusProjetos")[0];
var faleComigo = document.getElementsByClassName("faleComigo")[0];

var mainGrid = document.getElementsByClassName("mainGrid")[0];

var svg8 = document.getElementById("svg8");
var smallS, mediumS, largeS, small, medium, large;





function handleMove(evt) {
    let e = evt.changedTouches[0];
    var x = lerp(-10, 10, e.clientX / window.innerWidth);
    montanha0.style.transform = "translateX(" + -x + "px)";
    montanha6.style.transform = "translateX(" + -x + "px)";

    var x = lerp(-15, 15, e.clientX / window.innerWidth);
    montanha5.style.transform = "translateX(" + -x + "px)";

    x = lerp(-25, 25, e.clientX / window.innerWidth);
    montanha1.style.transform = "translateX(" + -x + "px)";

    x = lerp(-5, 5, e.clientX / window.innerWidth);
    montanha2.style.transform = "translateX(" + -x + "px)";
    montanha4.style.transform = "translateX(" + -x + "px)";

    x = lerp(-37, 37, e.clientX / window.innerWidth);
    montanha3.style.transform = "translateX(" + -x + "px)";

    //TODO: montanha principal coisa boa
}
function onMouseGear(ele) {
    mouseOnGear = true;

    smallS.classList.add("small-shadow");
    mediumS.classList.add("medium-shadow");
    largeS.classList.add("large-shadow");

    small.classList.add("small");
    medium.classList.add("medium");
    large.classList.add("large");

}
function onMouseOutGear(ele) {
    mouseOnGear = false;
    smallS.classList.remove("small-shadow");
    mediumS.classList.remove("medium-shadow");
    largeS.classList.remove("large-shadow");

    small.classList.remove("small");
    medium.classList.remove("medium");
    large.classList.remove("large");

    clearInterval(rodaInterval);
    rodaInterval = setInterval(giraRoda, 9000);
}
var mouseOnGear = false;

function paraRoda() {
    if (smallS.classList.contains("small-shadow") && !mouseOnGear) {
        smallS.classList.remove("small-shadow");
        mediumS.classList.remove("medium-shadow");
        largeS.classList.remove("large-shadow");

        small.classList.remove("small");
        medium.classList.remove("medium");
        large.classList.remove("large");
    }
}
window.addEventListener('resize', function (event) {
    let larguraDisponivel = document.getElementById("contentID").clientWidth;

    containerSlider.style.width = larguraDisponivel - (larguraDisponivel / 5.78) + "px";

    if (slider.getInfo().items == 3) {
        dots[4].style.display = "none";
        dots[5].style.display = "none";
    }
    else {
        dots[4].style.display = "inline-block";
        dots[5].style.display = "inline-block";
    }
});

var dots;

function clickLeft() {
    if (podeClicar) {
            
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("is-active");
        }
        
        let index = slider.getInfo().index;
        if (slider.getInfo().items == 3) {
            if (index == 0) {
                dots[0].classList.add("is-active");
            }
            else if (index == 3) {
                dots[0].classList.add("is-active");
            }
            else if (index == 6) {
                dots[1].classList.add("is-active");
            }
            else if (index == 9) {
                dots[2].classList.add("is-active");
            }
        }
        else {
            if (index == 0) {
                dots[0].classList.add("is-active");
            }
            else if (index == 2) {
                dots[0].classList.add("is-active");
            }
            else if (index == 4) {
                dots[1].classList.add("is-active");
            }
            else if (index == 6) {
                dots[2].classList.add("is-active");
            }
            else if (index == 8) {
                dots[3].classList.add("is-active");
            }
            else if (index == 10) {
                dots[4].classList.add("is-active");
            }
        }
        podeClicar = false;
        setTimeout(resetaClique, 750);
    }
}
function resetaClique() {
    podeClicar = true;
}
var podeClicar=true;
function clickRight() {
    if (podeClicar) {
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("is-active");
        }

        let index = slider.getInfo().index;
        if (slider.getInfo().items == 3) {

            if (index == 0) {
                dots[1].classList.add("is-active");
            }
            else if (index == 3) {
                dots[2].classList.add("is-active");
            }
            else if (index == 6) {
                dots[3].classList.add("is-active");
            }
            else if (index == 9) {
                dots[3].classList.add("is-active");
            }
        }
        else {
            if (index == 0) {
                dots[1].classList.add("is-active");
            }
            else if (index == 2) {
                dots[2].classList.add("is-active");
            } 
            else if (index == 4) {
                dots[3].classList.add("is-active");
            }
            else if (index == 6) {
                dots[4].classList.add("is-active");
            }
            else if (index == 8) {
                dots[5].classList.add("is-active");
            }
            else if (index == 10) {
                dots[5].classList.add("is-active");
            }
        }
        podeClicar = false;
        setTimeout(resetaClique, 750);
    }
}
function giraRoda() {
    if (!smallS.classList.contains("small-shadow")) {
        smallS.classList.add("small-shadow");
        mediumS.classList.add("medium-shadow");
        largeS.classList.add("large-shadow");

        small.classList.add("small");
        medium.classList.add("medium");
        large.classList.add("large");

        setTimeout(paraRoda, 950);
    }
}
var rodaInterval;
var containerSlider;
var slider;
function init() {
    var x = document.getElementsByTagName("BODY")[0].addEventListener("mousemove", function(event){
        mouseMove(event);
    }); 
    montanha0 = document.getElementById("montanha0");
    montanha1 = document.getElementById("montanha1");
    montanha2 = document.getElementById("montanha2");
    montanha3 = document.getElementById("montanha3");
    montanha4 = document.getElementById("montanha4");
    montanha5 = document.getElementById("montanha5");
    montanha6 = document.getElementById("montanha6");
    lua = document.getElementById("lua");

    quemSouEu = document.getElementsByClassName("quemSouEu")[0];
    meuSistema = document.getElementsByClassName("meuSistema")[0];
    meusProjetos = document.getElementsByClassName("meusProjetos")[0];
    faleComigo = document.getElementsByClassName("faleComigo")[0];
    svg8 = document.getElementById("svg8");
    mainGrid = document.getElementsByClassName("mainGrid")[0];

    smallS = document.getElementById("smallS");
    mediumS = document.getElementById("mediumS");
    largeS = document.getElementById("largeS");

    small = document.getElementById("small");
    medium = document.getElementById("medium");
    large = document.getElementById("large");

    containerSlider = document.getElementById("containerSlider");

    dots = document.getElementsByClassName("dot");

    var larguraDisponivel = document.getElementById("contentID").clientWidth;

    containerSlider.style.width =  larguraDisponivel-(larguraDisponivel/5.78)+"px";

    slider = tns({
        container: '.my-slider',
        controlsContainer: ".controls",
        slideBy: 2,
        nav: false,
        //navContainer: ".dotsBom",
        /* fixedWidth: 60, */
        /* autoplay: true,
        autoplayButtonOutput: false,
        autoplayHoverPause: true, */
        mouseDrag: false,
        touch: false,
        speed: 750,
        items: 2,
        loop: false,
        responsive: {
            640: {
                items: 2,
                slideBy: 2
            },
            900: {
                items: 3,
                slideBy: 3
            },
            1300: {
                items: 3,
                slideBy: 3
            },
            1599: {
                items: 3,
                slideBy: 3
            }
        } 
    });
    document.getElementsByClassName("controls")[0].children[0].style.marginTop = (document.getElementById("containerSlider").clientHeight/2-30)+"px";
    document.getElementsByClassName("controls")[0].children[1].style.marginTop = (document.getElementById("containerSlider").clientHeight / 2-30) + "px";

    if (slider.getInfo().items == 3) {
        dots[4].style.display = "none";
        dots[5].style.display = "none";
    }


    estrelas = document.getElementsByClassName("estrelinhaOut");

    //svg8.addEventListener("touchmove", handleMove, false);

    setTimeout(iniciaPiscadaBoa, 7000);
    rodaInterval = setInterval(giraRoda, 9000);
    //setTimeout(iniciaLoopEstrelas, 6000);


    var lineDrawing = anime({
        targets: '#lineDrawing .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (el, i) { return i * 250 },
        
    });

     anime({
        targets: lua,
        translateY: 4, // Animate all divs translateX property to 250px
        loop: true,
        direction: 'alternate',
         easing: 'easeInOutQuad',
        duration: 2500
    }); 


    var loop = true;
    var easing = 'linear';
    var direction = 'alternate';

    anime({
        targets: '.ball',
        translateX: 0,
        translateY: 0,
        easing,
        loop,
        direction
    })
    var ballTimeline = anime.timeline({
        loop,
        direction,
        duration: 1500
    })
    var bar2Timeline = anime.timeline({
        loop,
        direction,
        translateY: 0
    })
    var bar1Timeline = anime.timeline({
        loop,
        direction
    })
    ballTimeline
        .add({
            targets: '.ball',
            translateY: 0,
            translateX: 0,
            easing
        }).add({
            targets: '.ball',
            translateY: 0,
            translateX: 0,
            easing
        }).add({
            targets: '.ball',
            translateY: 0,
            translateX: 0,
            easing
        })

    bar2Timeline
        .add({
            targets: '.bar2',
            translateY: 150,
            easing,
            background: '#573796'
        }).add({
            targets: '.bar2',
            translateY: 50,
            easing,
            background: '#FB89FB'
        }).add({
            targets: '.bar2',
            translateY: 50,
            easing,
            background: '#FBF38C'
        })

    bar1Timeline
        .add({
            targets: '.bar1',
            translateY: 0,
            easing: 'easeInOutSine',
            background: '#18FF92'
        }).add({
            targets: '.bar1',
            translateY: 0,
            easing: 'linear',
            background: '#5A87FF'
        }).add({
            targets: '.bar1',
            translateY: 0,
            easing: 'linear',
            background: '#FF1461'
        })

    var canvasPixi = document.getElementById("canvasPixi");
    var app = new PIXI.Application(canvasPixi.clientWidth, canvasPixi.clientHeight, {transparent:true, antialias: false, view: canvasPixi});
    cant = 250;

    offset = 2 / cant;
    increment = Math.PI * (3 - Math.sqrt(5));
    var i; 
    var graphics = new PIXI.Graphics();


    app.stage.addChild(graphics);
    var angleXiba = 0;
    app.ticker.add(function (delta) {
        
        angleXiba += delta/70;
        graphics.clear();
        for (i = 0; i < cant; i++) {
            var x, y, z, r, a, opacity;
            

            y = (i * offset - 1) + (offset / 2);
            r = Math.sqrt(1 - Math.pow(y, 2));
            a = ((i + 1) % cant) * increment + angleXiba;
            x = Math.cos(a) * r;
            z = Math.sin(a) * r;

            opacity = (1 + z) / 1.5;

            graphics.beginFill(0x3a0839, opacity);
            graphics.drawRect((canvasPixi.clientWidth / 2 + x * 85), (100 + y * 85), 5, 5);
            //graphics.drawCircle((canvasPixi.clientWidth / 2 + x * 85), (100 + y * 85), 2.5);

        }
    });


}
var canvas;
var circle;
var cant;
var offset;
var increment;
var points = [];

var giraNice=0;
function testeFrame() {
    //updatePoints(Math.random()+1*100);  
    var angle = (giraNice*1) * Math.PI / 180;
    //console.log(angle);
    giraNice++;
    updatePoints(angle);
    requestAnimationFrame(testeFrame);
}





var indice=-1;
var indice2=-1; 
var random_boolean = false;

function iniciaPiscadaBoa() {
    for (let i = 0; i < estrelas.length; i++) {
        estrelas[i].style.fill = "#ffffffff"
    }
    piscaEstrelinhaOut();
    setInterval(piscaEstrelinhaOut, 5500);
}


function piscaEstrelinhaOut() {

    indice = randomIntFromInterval(0, estrelas.length - 1)

    let estrelaAlvo = estrelas[indice];

    estrelaAlvo.classList.remove("fade-out");
    estrelaAlvo.classList.add("fade-in");


    random_boolean = Math.random() >= 0.5;
    if (random_boolean) {
        do {
            indice2 = randomIntFromInterval(0, estrelas.length - 1)
        }   while(indice2 == indice);
        let estrelaAlvo2 = estrelas[indice2];

        estrelaAlvo2.classList.remove("fade-out");
        estrelaAlvo2.classList.add("fade-in");
    }

    setTimeout(apagaEstrelinhaOut, 3000);
}
function apagaEstrelinhaOut() {
    let estrelaAlvo = estrelas[indice];

    estrelaAlvo.classList.remove("fade-in");
    estrelaAlvo.classList.add("fade-out");

    if (random_boolean) {
        let estrelaAlvo2 = estrelas[indice2];

        estrelaAlvo2.classList.remove("fade-in");
        estrelaAlvo2.classList.add("fade-out");
    }
    indice=-1;
    indice2 = -1;
}



function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var lua;
var step=0;
var subindo=false;
function frame() {
    if (subindo) {
        step -= 0.03;
        if (step < 0) {
            subindo = false;
        }
    }
    if (!subindo) {
        step += 0.03;
        if (step > 4) {
            subindo = true;
        }
    }
    
    lua.style.transform = "translateY("+step+"px)"
    
    

    requestAnimationFrame(frame); // request the next frame
}

function mouseMove(e) {
    
    var x = lerp(-10, 10, e.clientX/window.innerWidth);
    montanha0.style.transform = "translateX("+-x+"px)";
    montanha6.style.transform = "translateX(" + -x + "px)";

    var x = lerp(-15, 15, e.clientX / window.innerWidth);
    montanha5.style.transform = "translateX(" + -x + "px)";

    x = lerp(-25, 25, e.clientX / window.innerWidth);
    montanha1.style.transform = "translateX(" + -x + "px)";

    x = lerp(-5, 5, e.clientX / window.innerWidth);
    montanha2.style.transform = "translateX(" + -x + "px)";
    montanha4.style.transform = "translateX(" + -x + "px)";

    x = lerp(-37, 37, e.clientX / window.innerWidth);
    montanha3.style.transform = "translateX(" + -x + "px)";
}

function lerp(a , b, f)
{
    return (a * (1.0 - f)) + (b * f);
}



