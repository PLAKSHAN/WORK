let movies = [
    {
        name:"falcon and the winter soldier",
        des:
        "God of Mischief and brother to Thor, Loki's tricks and schemes wreak havoc across the realms",
        image:"./images/slider 2.png"
    },
    {
    name:"Loki",
    des:
    "God of Mischief and brother to Thor, Loki's tricks and schemes wreak havoc across the realms",
    image:"./images/slider 1.png"
},
{
    name:"wanda vision",
    des:
    "God of Mischief and brother to Thor, Loki's tricks and schemes wreak havoc across the realms",
    image:"./images/slider 3.png"
},
{
    name:"raya and the last dragon",
    des:
    "God of Mischief and brother to Thor, Loki's tricks and schemes wreak havoc across the realms",
    image:"./images/slider 4.png"
},
{
    name:"luca",
    des:
    "God of Mischief and brother to Thor, Loki's tricks and schemes wreak havoc across the realms",
    image:"./images/slider 5.png"
},
];

const carousel=document.querySelector('.carousel');
let slider=[];

let sliderIndex=0;

const createSlide = () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    let slide=document.createElement('div');
    var imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src=movies[slideIndex].image;
    slideIndex++

    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-des";

    slider.push(slide);

    if (slider.length) {
        slider[0].style.marginLeft = `calc(-${100 * (slider.length - 2)}% - ${30 * (slider.length - 2)}px)`;
      }

}
for (let i=0; i<3; i++){
    createSlide();
}
setInterval(()=>{
    createSlide();
}, 3000); 


//video
videocard.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video =item.children[1];
        video.play();
    })
    item.addEventListener("mouseleave",() =>{
        let video = item.children[1];
        video.push();
    })
})
let cardcontainers = [...document.querySelector('.card-container')];
let preBtn = [...document.querySelector('.pre-btn')];
let nxtBtn = [...document.querySelector('.nxtBtn')];

cardcontainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.Width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})
 