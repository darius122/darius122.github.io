if(document.URL.includes("index.html")){
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);
let video = document.querySelector('video');
window.addEventListener('scroll', function(){
    let value = 1 + window.scrollY/ -600;
    video.style.opacity = value;
})
}
const mobile_menu = document.querySelector('.mobile-nav');
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',function(){
    this.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
}); 
if(document.URL.includes("types.html")){
    const popup_buttons = document.querySelectorAll('.popup-button');
    popup_buttons.forEach(button =>{
        button.addEventListener('click',e =>{
            const target = e.target.dataset.target;
            const popup_el = document.querySelector(target);
            if(popup_el != null){
                popup_el.classList.toggle('is-active');
                var audio = new Audio('sounds/mouseclick.mp3');
                audio.play();
            }
        });
    });
}
if(document.URL.includes("ingredients.html")){
    const popup_buttons = document.querySelectorAll('.popup-button');
    popup_buttons.forEach(button =>{
        button.addEventListener('click',e =>{
            const target = e.target.dataset.target;
            const popup_el = document.querySelector(target);
            if(popup_el != null){
                popup_el.classList.toggle('is-active');
                var audio = new Audio('sounds/mouseclick.mp3');
                audio.play();
            }
        });
    });
}
if(document.URL.includes("nutrition.html")){
    const readMoreBtn = document.querySelector('.readmore-btn');
    const text = document.querySelector('.card-readmore');
    const cardHolder = document.querySelector('.card-holder');
    cardHolder.addEventListener('click', e => {
        const current = e.target;
        const isReadMoreBtn = current.className.includes('readmore-btn');
        if(!isReadMoreBtn)
          return;
        const currentText = e.target.parentNode.querySelector('.card-readmore');
        currentText.classList.toggle('card-readmore--open');
        current.textContent = current.textContent.includes('Read more') ? 'Read less' : 'Read more';
        var audio = new Audio('sounds/flip.mp3');
        audio.play();
    });
}
if(document.URL.includes("game.html")){
    const draggableElements = document.querySelectorAll(".draggable");
    const droppableElements = document.querySelectorAll(".droppable");

    draggableElements.forEach(e =>{
        e.addEventListener("dragstart", dragStart);
        // e.addEventListener("drag", drag);
        // e.addEventListener("dragend", dragEnd)
    });
    droppableElements.forEach(e =>{
        e.addEventListener("dragenter", dragEnter);
        e.addEventListener("dragover", dragOver);
        e.addEventListener("dragleave", dragLeave);
        e.addEventListener("drop", drop);
    });

    //functions
    function dragStart(event){
       event.dataTransfer.setData("text", event.target.id);
    }

    function dragEnter(event){
        if(!event.target.classList.contains("dropped")){
            event.target.classList.add("droppable-hover");
        }
      
    }

    function dragLeave(event){
        if(!event.target.classList.contains("dropped")){
            event.target.classList.remove("droppable-hover");
        }
    }

    function dragOver(event){
        if(!event.target.classList.contains("dropped")){
            event.preventDefault();
        }
    }

    function drop(event){
        event.preventDefault();
        event.target.classList.remove("droppable-hover");
        const draggableElementData = event.dataTransfer.getData("text");
        const droppableElementData = event.target.getAttribute("data-draggable-id");
        if(draggableElementData == droppableElementData){
            event.target.classList.add("dropped");
            const draggableElement = document.getElementById(draggableElementData);
            event.target.style.backgroundColor = draggableElement.style.color;
            draggableElement.classList.add("dragged");
            draggableElement.setAttribute("draggable", false);
            event.target.insertAdjacentHTML("afterbegin", `<img src=${draggableElement.src} alt=${draggableElement.alt}>`);
            var audio = new Audio('sounds/correct.mp3');
            audio.play();
        }
        if(draggableElementData != droppableElementData){
            var audio = new Audio('sounds/wrong.mp3');
            audio.play();
        }
    }
}