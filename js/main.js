
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

    //canvasPixi.style.width = '100%';
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
var slider2;

var dbg;
var containerFibo;
function init() {
    containerFibo = document.getElementById('containerFibo');
    containerFibo.addEventListener('mousemove', onMousemove, false);

     dbg = document.getElementById('dbg');  //just for debug div instead of console

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
        mouseDrag: false,
        arrowKeys: false,
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




    slider2 = tns({
        container: '.my-slider2',
        slideBy: 1,
        controlsContainer: ".controls2",
        nav: false,
        mouseDrag: false,
        arrowKeys: false,
        touch: false,
        speed: 300,
        items: 1,
        loop: false,
    });




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
    cantSlider = document.getElementById("myRange");

    canvasPixi = document.getElementById("canvasPixi");
    var app = new PIXI.Application(canvasPixi.clientWidth, canvasPixi.clientHeight, {
        transparent:true, antialias: true, view: canvasPixi, 
        forceCanvas: true, autoResize: true
    });
    cant = 300;
    
    var graphics = new PIXI.Graphics();


    app.stage.addChild(graphics);
    var angleXiba = 0;

    cantSlider.value = 350;

    var tempoBom = 0;
    app.ticker.add(function (delta) {
        cant = cantSlider.value;

        offset = 2 / cant;
        increment = Math.PI * (3 - Math.sqrt(5));

        //angleXiba = Math.sin(app.ticker.lastTime*1.5 / 1000);
        
        angleXiba -= delta*speedX * 0.001;
        /* if (angleXiba > 1000)
            angleXiba=0; */
        graphics.clear();
        //console.log(graphics.width);
        /* if (!isElementInViewport(containerFibo)) {
            cant = 0;
        } */
        for (var i = 0; i < cant; i++) {
            var x, y, z, r, a, opacity;
            

            y = (i * offset - 1) + (offset / 2);
            r = Math.sqrt(1 - Math.pow(y, 2));
            a = ((i + 1) % cant) * increment + angleXiba;
            x = Math.cos(a) * r;
            z = Math.sin(a) * r;

            opacity = (1 + z) / 1.5;
            opacity = opacity > 1 ? 1 : opacity;
            graphics.beginFill(0x3a0839, opacity);

            //graphics.drawRect((canvasPixi.clientWidth / 2 + x * 92), (100 + y * 92), 2.9, 2.9); 
            graphics.drawCircle((canvasPixi.clientWidth / 2 + x * 92), (canvasPixi.clientHeight/2 + y * 92), 1.6);
        }
    });


}
var speedX = 5;

var canvasPixi;
var cantSlider;

var canvas;
var circle;
var cant;
var offset;
var increment;
var points = [];

var giraNice=0;



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






function onMousemove(e) {
    var m_posx = 0, m_posy = 0, e_posx = 0, e_posy = 0,
        obj = this;
    //get mouse position on document crossbrowser
    if (!e) { e = window.event; }
    if (e.pageX || e.pageY) {
        m_posx = e.pageX;
        m_posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        m_posx = e.clientX + document.body.scrollLeft
            + document.documentElement.scrollLeft;
        m_posy = e.clientY + document.body.scrollTop
            + document.documentElement.scrollTop;
    }
    //get parent element position in document
    if (obj.offsetParent) {
        do {
            e_posx += obj.offsetLeft;
            e_posy += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }
    // mouse position minus elm position is mouseposition relative to element:
    
    let f = (m_posx - e_posx) / containerFibo.clientWidth;
    speedX = lerp(-50,50, f);

}

function mouseOutFibo() {
    if (speedX > 0)
        speedX = 5;
    else {
        speedX = -5;
    }
}


function isElementInViewport(el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
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



