// let target= document.querySelector("#mark")
// let theme= localStorage.getItem("theme")
// if (theme != null){
//     target.classList.toggle("#mark");
// }

// function Clickme(){
//     let theme =localStorage.getItem("theme");
//     if (theme!= null) {
//         localStorage.removeItem("theme");
//     } else {
//         localStorage.setItem("theme" , "light");
//     }
//     target.classList.toggle("#mark")
// }

info= document.querySelectorAll("#mark")
function Clickme(){
  window.localStorage.setItem('info', '#mark');
}