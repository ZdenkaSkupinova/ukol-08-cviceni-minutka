const vteriny = Number(prompt("Zadejte za kolik vteřin má minutka začít zvonit"))

const alarm = document.querySelector(".alarm") 

const once = () => {
   alarm.classList.add("alarm--ring")
   audio.play()    
  }

  setTimeout(once, (vteriny * 1000))


const audioElement = document.querySelector("#audio")
audioElement.classList.add("source")

audioElement.addEventListener("click",() => {
  document.addEventListener(audioElement).play()
})


const timerId = setTimeout(once, (vteriny * 1000))

const dismissTimer = () => {
  clearTimeout(timerId)
}
  
const clear = () => {
  setTimeout(dismissTimer, 1000)
}

const btn = document.querySelector("#btn")
btn.addEventListener("click", clear)





  


