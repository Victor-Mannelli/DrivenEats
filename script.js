let counter = 0;
let custumerName = "";
let adress = "";

const overTheScreen = document.querySelector('.over-the-screen');

function selectedPlates(selector) {

    const greenBox = document.querySelector('.plates .selectedBox');
    const selectingBox = document.querySelector(selector);

    if (greenBox !== null) {
        greenBox.classList.remove("selectedBox")
        counter--;

    } 
    selectingBox.classList.add("selectedBox")
    counter++;
    changeFooterTextAndColor();

    
}
function selectedDrinks(selector) {

    const greenBox = document.querySelector('.drinks .selectedBox');
    const selectingBox = document.querySelector(selector);

    if (greenBox !== null) {
        greenBox.classList.remove("selectedBox")
        counter--;
    
    } 
    selectingBox.classList.add("selectedBox");
    counter++;
    changeFooterTextAndColor();
}
function selectedDiserts(selector) {

    const greenBox = document.querySelector('.diserts .selectedBox');
    const selectingBox = document.querySelector(selector);

    if (greenBox !== null) {
        greenBox.classList.remove("selectedBox")
        
        counter--;

    } 
    selectingBox.classList.add("selectedBox")
    
    counter++;
    changeFooterTextAndColor();
    
} 

function changeFooterTextAndColor() {
    
    if(counter === 3){
        const textFooter = document.querySelector('footer h1')
        textFooter.innerHTML = "Fechar pedido"

        const footerBgColor = document.querySelector('green-button-footer')
        const footerDiv = document.querySelector('footer button')
    
        if (footerBgColor === null) {
            footerDiv.classList.add('green-button-footer')
        }
    }
}

function NameAdressRequest(){
    if(counter === 3) {

        overTheScreen.innerHTML = "";
        overTheScreen.innerHTML += `
            <div class="pop-up-screen">
                <div class="inputs-before-receipt">
                    <h1> Informações necessarias! </h1>
                    <div>
                        <input class="name-input" placeholder="Digite seu nome!" > </input>
                        <p class="name-input-error"> </p>
                        <input class="adress-input" placeholder="Digite seu endereço!"> </input>
                        <p class="adress-input-error"> </p>
                    </div>
                    <button class="show-receipt-button" onclick="showReceipt()" alt=""> Confirme seu pedido! </button>
                </div>
            </div>
        `
    }
}
function showReceipt(){
    custumerName = document.querySelector('.name-input').value;
    adress = document.querySelector('.adress-input').value;

    const nameInput = document.querySelector('.name-input');
    const adressInput = document.querySelector('.adress-input');
    const nameInputError = document.querySelector('.name-input-error');
    const adressInputError = document.querySelector('.adress-input-error');

    if (nameInput.value === ""){
        nameInputError.innerHTML = "Não esqueça de colocar o seu nome!"
    } else {
        nameInputError.innerHTML = ""
    }
    if (adressInput.value === ""){
        adressInputError.innerHTML = "Não esqueça de colocar o seu endereço!"
    } else {
        adressInputError.innerHTML = ""
    }
    
    const plateName = document.querySelector(".plates .selectedBox h2").innerHTML;
    const drinkName = document.querySelector(".drinks .selectedBox h2").innerHTML;
    const disertName = document.querySelector(".diserts .selectedBox h2").innerHTML;
    
    const platePrice = document.querySelector(".plates .selectedBox .price").innerHTML;
    const drinkPrice = document.querySelector(".drinks .selectedBox .price").innerHTML;
    const disertPrice = document.querySelector(".diserts .selectedBox .price").innerHTML;

    const platePriceNumbers = platePrice.replace("R$ ", "");
    const drinkPriceNumbers = drinkPrice.replace("R$ ", "");
    const disertPriceNumbers = disertPrice.replace("R$ ", "");
    const totalPriceNumber = (Number(platePriceNumbers) + Number(drinkPriceNumbers) + Number(disertPriceNumbers))

    const FinalPrice = "R$ " + totalPriceNumber.toFixed(2);

    if (nameInput.value !== "" && adressInput.value !== ""){
        overTheScreen.innerHTML = ""
        overTheScreen.innerHTML += `
        <div class="pop-up-screen">
            <div class="receipt">
                <div class="confirmation" onclick="receiptFunction()"> <h4> Confirme seu pedido </h4> </div>
                <div class="food-price-tags">
                    <div>
                        <p> ${plateName} </p>
                        <p> ${drinkName} </p>
                        <p> ${disertName} </p>
                        <p> Total </p>
                    </div>
                    <div>
                        <p> ${platePrice} </p>
                        <p> ${drinkPrice} </p>
                        <p> ${disertPrice} </p>
                        <p> ${FinalPrice} </p>
                    </div>
                </div>
                <button class="ready-to-ask" onclick="linkToWhatsapp()" alt=""> Tudo certo, pode pedir! </button>
                <button class="cancel-request" onclick="hideReceipt()" alt=""> Cancelar </button>
            </div>
        </div>
        `
    } 
}
function hideReceipt(){
    overTheScreen.innerHTML = ""
}
    
function linkToWhatsapp(){

    const plateName = document.querySelector(".plates .selectedBox h2").innerHTML;
    const drinkName = document.querySelector(".drinks .selectedBox h2").innerHTML;
    const disertName = document.querySelector(".diserts .selectedBox h2").innerHTML;

    const platePrice = document.querySelector(".plates .selectedBox .price").innerHTML;
    const drinkPrice = document.querySelector(".drinks .selectedBox .price").innerHTML;
    const disertPrice = document.querySelector(".diserts .selectedBox .price").innerHTML;

    const platePriceNumbers = platePrice.replace("R$ ", "");
    const drinkPriceNumbers = drinkPrice.replace("R$ ", "");
    const disertPriceNumbers = disertPrice.replace("R$ ", "");
    const totalPriceNumber = (Number(platePriceNumbers) + Number(drinkPriceNumbers) + Number(disertPriceNumbers))

    const FinalPrice = "R$ " + totalPriceNumber.toFixed(2);

    const textURI = encodeURI(`Olá, gostaria de fazer o pedido: \n - Prato: ${plateName} \n - Bebida: ${drinkName} \n - Sobremesa: ${disertName} \n Total: R$ ${FinalPrice} \n\n Nome: ${custumerName} \n Endereço: ${adress}`);
    const linkURL = `https://wa.me/5521997790964?text=${textURI}`

    window.open(linkURL,'_blank');
}