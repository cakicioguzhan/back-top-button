  // BACK TOP BUTTON 

  const back_btn_top = document.querySelector(".btn-top");

  window.addEventListener("scroll", () => {
    if(window.scrollY >= 50){
       back_btn_top.classList.add("active")
    }else{
        back_btn_top.classList.remove("active")
    }
  })
