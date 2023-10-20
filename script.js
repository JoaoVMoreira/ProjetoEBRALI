const modal = document.querySelector("dialog")
const btnClose = document.querySelector("dialog button")

window.onload = function OpenModal(){
    console.log("foi")
    modal.showModal()
}

btnClose.onclick = function CloseModal(){
    modal.close()
}