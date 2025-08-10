
const convertButtom = document.querySelector(".conver-button")
const conrrencytSelect = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrecyValue = document.querySelector(".inpunt-currency").value
    const currencyValueToCovert = document.querySelector(".curreny-value-to-covert") //valor a converter
    const currencyValueConverted = document.querySelector(".curreny-value") //valor convertido
    const dolartody = 5.2
    const eurotody = 6.2
    if (conrrencytSelect.value == "dolar")
        //SE O SELECT  SELECIONADO FOR "DOLAR", ENTRE AQUI 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrecyValue / dolartody)

    if (conrrencytSelect.value == "euro")
        //SE O SELECT  SELECIONADO FOR "UERO", ENTRE AQUI 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrecyValue / eurotody)

     currencyValueToCovert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrecyValue)
}

function changeCurrency() {
    const currencyName= document.getElementById("currecy-name")
    const currecyImagem= document.querySelector(".currecy-img")

    if (conrrencytSelect.value == "dolar"){ 
        currencyName.innerHTML = "Dolar Americano"
        currecyImagem.src = "./assets/DOLAR.png"
    }

    if (conrrencytSelect.value == "euro"){
        currencyName.innerHTML = "Euro" 
        currecyImagem.src = "./assets/EURO.png"
    }

    convertValues()
}

conrrencytSelect.addEventListener("change", changeCurrency)
convertButtom.addEventListener("click", convertValues)

















