//variables
let page = 1;
let num = 0;
let currentNum = 1;
let first = true;
let vscroll = true;
let screenW = screen.availWidth;
let screenH = screen.availHeight;

window.addEventListener('load', function(event){
    document.getElementById("topScroll").addEventListener("scroll", function(){
        if(this.scrollLeft <= screenW){
            document.getElementById("dividerT").style.display = "flex";
            document.getElementById("circle").style.marginLeft = "2vw";
        } else if(this.scrollLeft <= screenW*2 && this.scrollLeft >= screenW && vscroll){
            document.getElementById("dividerT").style.display = "none";
            document.getElementById("circle").style.marginLeft = "45vw";
        } else if(this.scrollLeft <= screenW*2 && this.scrollLeft >= screenW && !vscroll){
            document.getElementById("circle").style.marginLeft = "45vw";
        } else {
            document.getElementById("dividerT").style.display = "flex";
            document.getElementById("circle").style.marginLeft = "85vw";
        }
    });

    this.document.getElementById("PortfolioSec").addEventListener("scroll", function(){
            console.log(this.scrollTop, screenH);
        if(this.scrollTop >= screenH){
            document.getElementById("dividerT").style.display = "flex";
            vscroll = false;
        } else {
            vscroll = true;
        }
    })
}, false)

window.addEventListener("keydown", function(e){
    if(e.code == "ArrowLeft"){
        this.document.getElementById("circle").style.marginLeft = this.document.getElementById("circle").style.marginLeft + 5;
    } else if(e.code == "ArrowRight"){
        this.document.getElementById("circle").style.left += 1;
    } else if(e.code == "ArrowDown"){
        console.log("down");
    }
});

function moveCircle(num){
    switch(num){
        case 1: 
            document.getElementById("topScroll").scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
            scrollLeft.scrollLeft += 0;
            document.getElementById("circle").style.marginLeft = "2vw";
            break;
        case 2:
            document.getElementById("topScroll").scroll({
                top: 0,
                left: screenW+screenW/2,
                behavior: "smooth",
            });
            window.scrollLeft += window.innerWidth;
            document.getElementById("circle").style.marginLeft = "42vw";
            break;
        case 3:
            document.getElementById("topScroll").scroll({
                top: 0,
                left: screenW*3,
                behavior: "smooth",
            });
            document.getElementById("circle").style.marginLeft = "85vw";
            break;
    }
}

function changePreview(num){
    switch(num){
        case 1:
            document.getElementById("lgPreview").style.backgroundImage = "url('images/WB_title.png')";
            document.getElementById("tagline").innerHTML = "3D survival game made in Unity C#";
            break;
        case 2:
            document.getElementById("lgPreview").style.backgroundImage = "url('images/LC_outside3.jpeg')";
            document.getElementById("tagline").innerHTML = "3D environment made in Blender";
            break;
        case 3:
            document.getElementById("lgPreview").style.backgroundImage = "url('images/zine_full1.png')";
            document.getElementById("tagline").innerHTML = "Paper zine drawn in Procreate";
            break;
        case 4:
            document.getElementById("lgPreview").style.backgroundImage = "url('images/Rb_(1).png')";
            document.getElementById("tagline").innerHTML = "2D Puzzle game made in Unity C#";
            break;
    }
    num = 1;
}

function changeSection(num){
    
    switch(num){
        case 1:
            document.getElementById("GameSec").style.display = "block";
            document.getElementById("ModelSec").style.display = "none";
            document.getElementById("DesignSec").style.display = "none";
            break;
        case 2:
            document.getElementById("GameSec").style.display = "none";
            document.getElementById("ModelSec").style.display = "block";
            document.getElementById("DesignSec").style.display = "none";
            break;
        case 3:
            document.getElementById("GameSec").style.display = "none";
            document.getElementById("ModelSec").style.display = "none";
            document.getElementById("DesignSec").style.display = "block";
            break;
    }
    num = 1;
}

function changeAbt(num){
    switch(num){
        case 1: document.getElementById("Ab1").style.display = "block";
        document.getElementById("Ab2").style.display = "none";
        document.getElementById("Ab3").style.display = "none";
        break;
        case 2: document.getElementById("Ab1").style.display = "none";
        document.getElementById("Ab2").style.display = "block";
        document.getElementById("Ab3").style.display = "none";
        break;
        case 3: document.getElementById("Ab1").style.display = "none";
        document.getElementById("Ab2").style.display = "none";
        document.getElementById("Ab3").style.display = "block";
        break;
    }
}


function previewJump(type, num, section){
    document.getElementById("PortfolioSec").scrollTop += screenH*2;
    changeSection(section);
    changeProject(type, "none");
    num = num;
}

function changeProject(type, side){
    if(type == 'PfGa'){
        var pages = [5];
        pages[0] = document.getElementById("PfGa1");
        pages[1] = document.getElementById("PfGa2");
        pages[2] = document.getElementById("PfGa3");
        pages[3] = document.getElementById("PfGa4");
        pages[4] = document.getElementById("PfGa5");
        // change max
        if(side == "left" && num != 0){
            num -= 1;
        }else if(side == "right" && num != 4){
            num += 1;
        }
        // change arrows
        if(num == 0){
            document.getElementById("Galeft").style.display = "none";
            document.getElementById("Garight").style.left = "46vw";
        } else if(num == 4){
            document.getElementById("Garight").style.display = "none";
        } else {
            document.getElementById("Galeft").style.display = "inline-block";
            document.getElementById("Garight").style.display = "inline-block";
            document.getElementById("Garight").style.left = "43vw";
        }
    } else if(type == 'Pf3D'){
        var pages = [5];
        pages[0] = document.getElementById("Pf3D1");
        pages[1] = document.getElementById("Pf3D2");
        pages[2] = document.getElementById("Pf3D3");
        pages[3] = document.getElementById("Pf3D4");
        pages[4] = document.getElementById("Pf3D5");
        // change max
        if(side == "left" && num != 0){
            num -= 1;
        }else if(side == "right" && num != 4){
            num += 1;
        }
        // change arrows
        if(num == 0){
            document.getElementById("3Dleft").style.display = "none";
            document.getElementById("3Dright").style.left = "46vw";
        } else if(num == 4){
            document.getElementById("3Dright").style.display = "none";
        } else {
            document.getElementById("3Dleft").style.display = "inline-block";
            document.getElementById("3Dright").style.display = "inline-block";
            document.getElementById("3Dright").style.left = "43vw";
        }
    } else if(type == 'PfRan'){
        var pages = [1];
        pages[0] = document.getElementById("PfRan1");
        // change max
        if(side == "left" && num != 0){
            num -= 1;
        }else if(side == "right" && num != 1){
            num += 1;
        }
        // change arrows
        if(num == 0){
            document.getElementById("Ranleft").style.display = "none";
            document.getElementById("Ranright").style.left = "46vw";
        } else if(num == 0){
            document.getElementById("Ranright").style.display = "none";
        } else {
            document.getElementById("Ranleft").style.display = "inline-block";
            document.getElementById("Ranright").style.display = "inline-block";
            document.getElementById("Ranright").style.left = "43vw";
        }
    }
    
    for(var i=0; i < pages.length; i++){
        if(i == num){
            pages[i].style.display = "grid";
        }else{
            pages[i].style.display = "none";
        }
    }
}

