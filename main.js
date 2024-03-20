import { PRODUCTS } from './app.js'
console.log(PRODUCTS);

const logoBtn = document.querySelector('.menu')
const nav = document.querySelector('.botA')
logoBtn.addEventListener('click',()=>{
    nav.classList.toggle('google')
})

function createTable(data){
    const div =document.querySelector('.hammasi').innerHTML = link
    while(div.firstChild){
        div.firstChild.remove()
    }
    data.forEach((user)=>{
      let tr = document.createElement('tr')
      tr.innerHTML = `

      <section class="hammasi">
      <div class="container">
      <div class="all">
          <div class="all-row">
              <div class="hammasi-all">
                 ${user.img}
                  </div>
                  <div class="hammasi-all">
                      <p>${user.p}</p>
                      </div>
</div>
<div class="img">
  <img src="./img/fon.webp" alt="">
</div>
      </div>
      <div class="bottom">
          <div class="bottom-all">
              <div class="bottom-row">
                  <img src="./img/rasm2.png" alt="">
               </div>
               <div class="bottom-row">
                 <p>${user.p1}</p>
               </div>
          </div>
          <p class="p-1" >
             ${user.p3}
          </p>
          <div class="teg">
              <div class="p-2">
                  <p>${user.p4}</p>
              </div>  
              <div class="p-2">
                  <p class="p-3">${user.p5}</p>
              </div>
          </div>
      </div>
  </div>
  </section>
      
      `
      div.appendChild(tr)
    })
    createTable(PRODUCTS)
  }


  let link = ''
  let javob = `
  <section class="hammasi">
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
<img src="./img/fon.webp" alt="">
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
          Вариативный замок Golden Soft для отеля
      </p>
      <div class="teg">
          <div class="p-2">
              <p>7 000₽</p>
          </div>  
          <div class="p-2">
              <p class="p-3">8 000₽</p>
          </div>
      </div>
  </div>
</div>
</section>
  `
for(let i =createTable = 1 ; i<= 9
    ; i++){
    link+=javob
}
const div =document.querySelector('.hammasi').innerHTML = link





// let list = ''
// let arry = `
// <section class="hammasi">
// <div class="container">
// <div class="all">
//     <div class="all-row">
//         <div class="hammasi-all">
//             <img src="./img/rasm1.png" alt="">
//             </div>
//             <div class="hammasi-all">
//                 <p>SALE</p>
//                 </div>
// </div>
// <div class="img">
// <img src="./img/fon.webp" alt="">
// </div>
// </div>
// <div class="bottom">
//     <div class="bottom-all">
//         <div class="bottom-row">
//             <img src="./img/rasm2.png" alt="">
//          </div>
//          <div class="bottom-row">
//            <p>(12) отзывов</p>
//          </div>
//     </div>
//     <p class="p-1" >
//         Вариативный замок Golden Soft для отеля
//     </p>
//     <div class="teg">
//         <div class="p-2">
//             <p>7 000₽</p>
//         </div>  
//         <div class="p-2">
//             <p class="p-3">8 000₽</p>
//         </div>
//     </div>
// </div>
// </div>
// </section>`
// for(let i =1; i<= 8; i++){
//     list +=arry
// }
// document.querySelector('.hammasi').innerHTML = list
