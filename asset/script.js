let _arrow=document.querySelector(".arr");
let img_gallery=document.getElementsByClassName("image-cont");
let img_cont=document.querySelector(".gallery");
let item=img_cont.getElementsByClassName("item");
let imgCnt=3;

let dir_bar=document.querySelector('.direction-bar');
changeDirection();

_arrow.lastElementChild.addEventListener('click',function(){
    let temp=imgCnt;
    if(imgCnt>=3){
        imgCnt+=3;
        for(let i=0; i<img_gallery.length;i++){
            ++temp;
            for(let j=0; j<img_gallery[i].childElementCount; j++){
                img_gallery[i].children[j].setAttribute('src','asset/image/'+temp+'.jpg');
            }
            img_gallery[i].classList.add("active");
            setTimeout(function(){
                img_gallery[i].classList.remove("active");
            },500)
        }
    }
    changeDirection();
});

_arrow.firstElementChild.addEventListener('click',function(){
    let temp=imgCnt;

    if(imgCnt>=3){
        for(let i=img_gallery.length-1; i>=0; i--){
            for(let j=img_gallery[i].childElementCount-1; j>=0; j--){
                img_gallery[i].children[j].setAttribute('src','asset/image/'+temp+'.jpg');
            }temp--;

            img_gallery[i].classList.add("active");
            setTimeout(function(){
                img_gallery[i].classList.remove("active");
            },500)
        }
        imgCnt-=2;
    }
    changeDirection();
});


function changeDirection(){
    for(let i=0; i<dir_bar.childElementCount; i++){
        dir_bar.children[i].style.transform="scale(1)";
    }

    if(imgCnt<=3){
        imgCnt=3;
        active_arrow(1);
        deactive_arrow(0);
        dir_bar.children[0].style.transform="scale(1.5)";
    }else if(imgCnt >3 && imgCnt<=6){
        active_arrow(0);
        active_arrow(1);
        dir_bar.children[1].style.transform="scale(1.5)";
    }else if(imgCnt>6){
        imgCnt=6;

        active_arrow(0);
        deactive_arrow(1);
        dir_bar.children[2].style.transform="scale(1.5)";
    }   
}

function active_arrow(indeks){
    img_gallery[2].previousElementSibling.children[indeks].style.backgroundColor="rgba(255, 201, 24, 0.945)";
    img_gallery[2].previousElementSibling.children[indeks].style.borderRadius="9px";
}
function deactive_arrow(indeks){
    img_gallery[2].previousElementSibling.children[indeks].style.backgroundColor="transparent";
}


var full_img=document.createElement("div");
var add_img=document.createElement("img");

var x=document.createElement("h4");
var text=document.createTextNode('X');
x.appendChild(text);

add_img.src="asset/image/full_8.jpg";
full_img.appendChild(x);
full_img.appendChild(add_img);
full_img.style.position="fixed";
full_img.style.width="100%";
full_img.style.height="100vh";
full_img.style.textAlign="center";
full_img.style.backgroundColor="rgba(9,9,9,0.8)";
full_img.style.zIndex=1;
full_img.style.transition="0.6s ease";

add_img.style.width="50%";
add_img.style.margin="2% 0";
add_img.style.boxShadow="5px 5px 19px rgba(255,255,255,0.2)";

x.style.color="white";
x.style.width="2%"
x.style.textAlign="center";
x.style.backgroundColor="rgba(255,255,255,0.1)";
x.style.border="1px solid white";
x.style.borderRadius="5px";
x.style.margin="5em 0 -1em 72.9%";

document.body.insertBefore(full_img,document.body.firstElementChild);
full_img.style.opacity="0";
full_img.style.zIndex="-1";

for(let i=0; i<item.length; i++){
    item[i].addEventListener("mouseenter", function(){
        item[i].style.opacity="0.5";
    });
    item[i].addEventListener("mouseleave", function(){
        item[i].style.opacity="1";
    });
    item[i].addEventListener("click", function(e){
        full_img.style.opacity="1";
        full_img.style.zIndex="2";
    });
}
x.addEventListener("click",function(e){
    full_img.style.opacity="0";
    full_img.style.zIndex="-1"; 
});

x.addEventListener("mouseenter",function(e){
    e.target.style.backgroundColor="white";
});
x.addEventListener("mouseleave",function(e){
    e.target.style.backgroundColor="rgba(255,255,255,0.1)";
});


