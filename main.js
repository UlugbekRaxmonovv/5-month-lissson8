
import { PRODUCTS } from "./app.js";

const prodactCards = document.querySelector(".hammasi");

function cardCreator(data) {
  data.forEach((el) => {
    let card = document.createElement("div");
    card.classList.add("hammasi");
    card.innerHTML = `


    <div class="container">
    <div class="all">
        <div class="all-row">
            <div class="hammasi-all">
                <img src="./img/rasm1.png" alt="">
                </div>
                <div class="hammasi-all">
                    <p>SALE</p>
                    </div>
</div>
<div class="img">
<img class="img1"  style="max-width: 300px; height: 230px; width: 100%; padding: 0px 40px;" src="${el.img}" alt="">
</div>
    </div>
    <div class="bottom">
        <div class="bottom-all">
            <div class="bottom-row">
                <img src="./img/rasm2.png" alt="">
             </div>
             <div class="bottom-row">
               <p>(12) отзывов</p>
             </div>
        </div>
        <p class="p-1" >
           ${el.p3}
        </p>
        <div class="teg">
            <div class="p-2">
                <p>${el.p4}</p>
            </div>  
            <div class="p-2">
                <p class="p-3">${el.p5}</p>
            </div>
        </div>
    </div>
</div>
    

 `;
    prodactCards.appendChild(card);
  });
}
cardCreator(PRODUCTS);


const menu = document.querySelector('.menu')
const botA = document.querySelector('.botA')
menu.addEventListener('click',() =>{
    botA.classList.toggle('google')
})