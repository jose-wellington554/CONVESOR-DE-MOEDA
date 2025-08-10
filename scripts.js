
const convertButtom = document.querySelector(".conver-button")
const conrrencytSelect = document.querySelector(".currency-select")

function convertValues() {

    const inputCurrecyValue = document.querySelector(".inpunt-currency").value
    const currencyValueToCovert = document.querySelector(".curreny-value-to-covert") //valor a converter
    const currencyValueConverted = document.querySelector(".curreny-value") //valor convertido
    const dolartody = 5.2
    const eurotody = 6.2
    const libratody =7.30
    const bitcointody = 633799.00
    const real =1.0

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

    if (conrrencytSelect.value == "Libra")
        //SE O SELECT  SELECIONADO FOR "UERO", ENTRE AQUI 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrecyValue / libratody)

    if (conrrencytSelect.value == "bitcoin")
        //SE O SELECT  SELECIONADO FOR "UERO", ENTRE AQUI 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrecyValue / bitcointody)  




    if (currencyValueToCovert. value== "real")
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

    if (conrrencytSelect.value == "Libra"){
        currencyName.innerHTML = "Libra" 
        currecyImagem.src = "assets/libra.png"
    }

     if (conrrencytSelect.value == "bitcoin"){
        currencyName.innerHTML = "bitcoin" 
        currecyImagem.src ="./assets/BITCOIN.png"
    }

    convertValues()
}

conrrencytSelect.addEventListener("change", changeCurrency)
convertButtom.addEventListener("click", convertValues)

















