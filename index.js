const accordionBtnEls = document.querySelectorAll(".accordion");

accordionBtnEls.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        const answer = btn.nextElementSibling.firstElementChild;
        answer.classList.toggle("hidden");


        answer.classList.contains("hidden")? btn.lastElementChild.setAttribute("src", "assets/images/icon-plus.svg"): btn.lastElementChild.setAttribute("src", "assets/images/icon-minus.svg");

        // if(answer.classList.contains("hidden")){
        //     btn.lastElementChild.setAttribute("src", "assets/images/icon-plus.svg");
        // }
        // else{
            
        //     btn.lastElementChild.setAttribute("src", "assets/images/icon-minus.svg");
        // }
    })
})
