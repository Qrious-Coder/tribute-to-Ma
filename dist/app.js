
const themeBtn = document.querySelectorAll(".themeBtn")
              .forEach( btn => 
                btn.addEventListener('click',
                () => {
                  document.body.style.background = btn.id
                  document.body.style.color = getComputedStyle(btn).getPropertyValue('color')
                  document.querySelector("#title-h1").style.color = getComputedStyle(btn).getPropertyValue('background-color')
                  
                }))
