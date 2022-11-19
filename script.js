let clickCount = 0
let timer = null
const heart = document.getElementById('heart')
const button = document.getElementById('button-container')

// クリック回数によって動作を分岐
heart.addEventListener('click', () => {
    clickCount += 1
    console.log(clickCount)
    if (window.matchMedia && window.matchMedia('(max-device-width: 479px)').matches) {  
        button.style.transform = "scale(" +  ( 1 - clickCount /10 ) + ")";
        heart.style.width = 20 + clickCount * clickCount /1.5 + "%";
        if (clickCount === 1) {
            timer = setTimeout(() => {heart.style.width ="10.5%";
                    timer = null
                    clickCount = 0
            }, timeout)
        }
        if (20 + clickCount * clickCount /1.5 >= 70){
            if ( clickCount >= 110){
                heart.style.width ="10.5%";
                timer = null
                clickCount = 0
                button.style.transform = "scale(1)";
            }else{
                heart.style.width ="100%";
                clickCount = 150
            }
        }
      } else {
        heart.style.height = 30 + clickCount * clickCount /1.5 + "%";
        if (clickCount === 1) {
            timer = setTimeout(() => { heart.style.height ="5%";
            timer = null
            clickCount = 0
            }, timeout)
        }
        if (10 + clickCount * clickCount /1.5 >= 70){
            if ( clickCount >= 120){
                heart.style.height ="5%";
                timer = null
                clickCount = 0
            }else{
                heart.style.height ="100%";
                clickCount = 150
            }
        }
      }

})