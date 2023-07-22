const wrapper = document.querySelector(".wrapper");
const generateButton = wrapper.querySelector(".form button");
const qrInput = wrapper.querySelector(".form input");
const qrImg = wrapper.querySelector(".qr-code img")

generateButton.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateButton.innerText = "Generating a QR Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active")
        generateButton.innerText = "Generate a QR Code"
    })  
})

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})