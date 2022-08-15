var counter = 0;
let custumerName;
let adress;

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
        const footerDiv = document.querySelector('footer div')
    
        if (footerBgColor === null) {
            footerDiv.classList.add('green-button-footer')
        }

    }
}

function showReceipt(){

    if(counter === 3) {
        const receiptHidden = document.querySelector(".container .hidden");
        receiptHidden.classList.toggle('hidden');
    }
    receiptFunction();
    custumerName = prompt('Qual é o seu nome?');
    adress = prompt('Qual é o seu endereço?');
}
function hideReceipt(){

    const receiptHidden = document.querySelector(".container .receipt-screen");
    receiptHidden.classList.add('hidden');
}
function receiptFunction(){
    const plateName = document.querySelector(".plates .selectedBox h2");
    const drinkName = document.querySelector(".drinks .selectedBox h2");
    const disertName = document.querySelector(".diserts .selectedBox h2");
    
    const platePrice = document.querySelector(".plates .selectedBox .price");
    const drinkPrice = document.querySelector(".drinks .selectedBox .price");
    const disertPrice = document.querySelector(".diserts .selectedBox .price");


    const chosenPlate = document.querySelector(".receipt .food")
    const chosenDrink = document.querySelector(".receipt .beverage")
    const chosenDisert = document.querySelector(".receipt .sweets")

    const chosenPlatePrice = document.querySelector(".receipt .food-price");
    const chosenDrinkPrice = document.querySelector(".receipt .beverage-price");
    const chosenDisertPrice = document.querySelector(".receipt .sweets-price");
    const chosenTotalPrice = document.querySelector(".receipt .total-price");

    chosenPlate.innerHTML = plateName.innerHTML;
    chosenDrink.innerHTML = drinkName.innerHTML;
    chosenDisert.innerHTML = disertName.innerHTML;
    chosenPlatePrice.innerHTML = platePrice.innerHTML;
    chosenDrinkPrice.innerHTML = drinkPrice.innerHTML;
    chosenDisertPrice.innerHTML = disertPrice.innerHTML;
   
    const platePriceNumbers = chosenPlatePrice.innerHTML.replace("R$ ", "");
    const drinkPriceNumbers = chosenDrinkPrice.innerHTML.replace("R$ ", "");
    const disertPriceNumbers = chosenDisertPrice.innerHTML.replace("R$ ", "");
    const totalPriceNumber = (Number(platePriceNumbers) + Number(drinkPriceNumbers) + Number(disertPriceNumbers))

    chosenTotalPrice.innerHTML = "R$ " + totalPriceNumber.toFixed(2);
}

function linkToWhatsapp(){

    const chosenPlate = document.querySelector(".receipt .food")
    const chosenDrink = document.querySelector(".receipt .beverage")
    const chosenDisert = document.querySelector(".receipt .sweets")

    const chosenPlatePrice = document.querySelector(".receipt .food-price");
    const chosenDrinkPrice = document.querySelector(".receipt .beverage-price");
    const chosenDisertPrice = document.querySelector(".receipt .sweets-price");

    const platePriceNumbers = chosenPlatePrice.innerHTML.replace("R$ ", "");
    const drinkPriceNumbers = chosenDrinkPrice.innerHTML.replace("R$ ", "");
    const disertPriceNumbers = chosenDisertPrice.innerHTML.replace("R$ ", "");
    const totalPriceNumber = (Number(platePriceNumbers) + Number(drinkPriceNumbers) + Number(disertPriceNumbers))

    const textURI = encodeURI(`Olá, gostaria de fazer o pedido: \n - Prato: ${chosenPlate.innerHTML} \n - Bebida: ${chosenDrink.innerHTML} \n - Sobremesa: ${chosenDisert.innerHTML} \n Total: R$ ${totalPriceNumber.toFixed(2)} \n\n Nome: ${custumerName} \n Endereço: ${adress}`);
    const linkURL = `https://wa.me/21999999999?text=${textURI}`

    window.open(linkURL,'_blank');
}
