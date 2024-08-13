let allQuestions = document.querySelectorAll(".fAQuestions");
allQuestions.forEach((v, index)=> {
    v.addEventListener("click", ()=>{
        v.nextElementSibling.classList.toggle("h-[auto]");
        v.nextElementSibling.classList.toggle("scale-y-100");
        v.nextElementSibling.classList.toggle("p-[20px]");
        v.children[1].classList.toggle("rotate-45"); // rotate '+' to 45 deg

        allQuestions.forEach((el, i) => {
            if (index !== i) {
                el.nextElementSibling.classList.remove("h-[auto]", "scale-y-100", "p-[20px]");
                el.children[1].classList.remove("rotate-45");
            }
        })

    })
});