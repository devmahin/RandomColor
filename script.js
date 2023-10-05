const btn = document.getElementById("btn")
const random = () => {
    let random = Math.floor(Math.random() * 16777215)
    let genaretorRandom = "#" + random.toString(16)
    document.body.style.backgroundColor = genaretorRandom
    document.querySelector("#text").innerText = genaretorRandom

    navigator.clipboard.writeText(genaretorRandom)
    alert("Copy value : " + genaretorRandom)
}
btn.addEventListener("click", random)