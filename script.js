let clickCount = 0
const heart = document.getElementById('heart')

// クリック回数によって動作を分岐
heart.addEventListener('click', () => {
    clickCount += 1
    console.log(clickCount)
    if (window.matchMedia && window.matchMedia('(max-device-width: 479px)').matches) {  
        heart.style.width = 20 + clickCount * clickCount /1.5 + "%";
        if (clickCount === 1) {
                clickCount = 0
        }
        if (20 + clickCount * clickCount /1.5 >= 70){
            if ( clickCount >= 110){
                heart.style.width ="20%";
                clickCount = 0
            }else{
                heart.style.width ="100%";
                clickCount = 150
            }
        }
      } else {
        heart.style.height = 10 + clickCount * clickCount /1.5 + "%";
        if (clickCount === 1) {
            clickCount = 0
        }
        if (10 + clickCount * clickCount /1.5 >= 70){
            if ( clickCount >= 120){
                heart.style.height ="10%";
                clickCount = 0
            }else{
                heart.style.height ="100%";
                clickCount = 150
            }
        }
      }

})
