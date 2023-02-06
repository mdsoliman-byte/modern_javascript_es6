// // function 
// function name() {
//     return "md soliman "
// }

// const number1 = () => {
//     return ("Im Soliman From Arrow Function ")
// }
// const number2 = () => ("im short arrow function for single value ")

// const javaScript = {
//     name: "Shakil ",
//     lngList: ["javascript ", "python ", "java ", "php"],
//     playGround: function () {
//         this.lngList.forEach((a) => {
//             console.log(`${this.name} love ${a}`)
//         })
//     }
// }
// module.exports = { name, number1, number2, javaScript }


const searchInput = document.querySelector("#searchInput");
const display = document.querySelector("#display");
const thanks = document.querySelector("#thanks")

function showes() {
    display.innerHTML = this.value;
    setTimeout(() => {
        thanks.innerHTML = `your Typing text ${this.value}`
    }, 1000)
}




searchInput.addEventListener("keyup", showes)