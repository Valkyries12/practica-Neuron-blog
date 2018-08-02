/*let images = ["img/gallery-image1.jpg",
             "img/gallery-image2.jpg",
             "img/gallery-image3.jpg",
             "img/gallery-image4.jpg",
             "img/gallery-image5.jpg",
             "img/gallery-image6.jpg"];
*/
             



let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");
let img = document.querySelector("img");
img.src = "img/gallery-image1.jpg";
let gallery = document.querySelector(".two-col");
let imgCarrousel = document.querySelector(".carrousel img");
let carrousel = document.querySelector(".carrousel");
let images = document.querySelectorAll(".two-col img");
let current = 0;



//cambio la imagen del carrousel
function carrouselFN(){
    for(let i=0;i<images.length;i++){
        images[i].addEventListener("click", function(e){
            let imgSRC = e.target.src;
            current = images[i]
            imgCarrousel.src = imgSRC;
            carrousel.style.display = "block";
            
            console.log(current);
        });
    }
}




carrouselFN();
/*gallery.addEventListener("click", function(e){
    let counter = 0;
    let imgSrc = e.target.src;
    imgCarrousel.src = imgSrc;
    carrousel.style.display = "block";
    if(e.target.src == "img/gallery-image1.jpg"){
        counter = 1;
    }
    
    console.log(counter);
    
});*/

/*previous.addEventListener("click", function(){

});*/

    
