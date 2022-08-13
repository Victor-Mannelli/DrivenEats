var counter = 0;

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

function receiptFunction(){
    
    if(counter === 3) {
        const receiptHidden = document.querySelector(".container .hidden");
        receiptHidden.classList.toggle('hidden');
    }
}

function hideReceipt(){
    const receiptHidden = document.querySelector(".container .receipt-screen");
    receiptHidden.classList.add('hidden');
}









