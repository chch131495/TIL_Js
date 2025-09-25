//DB
const shopDB = [{//배열[].객체{}
    shop:'쿠팡',
    id:'손거울',
    price:1000,
},{
    shop:'11번가',
    id:'손거울',
    price:1500,
},{
    shop:'G마켓',
    id:'손거울',
    price:2000
}]
console.log(shopDB) // DB(정보) 확인
//클릭이벤트
//변수 만들기 -> shopDB이용
const prcieBtn = document.querySelector('#price_btn')//최저가 찾기 버튼
const price = document.querySelector('.price')//최저가 값이 출력되는 곳
console.log(prcieBtn, price)
//1. 쇼핑몰, 상품명, 가격을 가지고 있는 배열에서 가격만 추출하기
//shopDB에서 가격만
prcieBtn.addEventListener('click',()=>{
    // 1. 가격만 추출
    const minMap = shopDB.map(i => i.price) // -> 변수로 작성해서 map을 통해서 i라는 변수에 i.price만 추출한것
    console.log(minMap)
    //2. 추출한 가격에서 최저가 찾기
    console.log('최저가 : ', Math.min(...minMap)) //변수로 제작한 값만 나오는 minMap에서 최저가를 찾아야하니깐 Math.min(...)을 사용
    //3.최저가 ''원 추출하기
    const priceP = Math.min(...minMap)
    price.textContent = '최저가 : ' + priceP + '원'
})
//2. 추출한 가격에서 최저가 찾기
//3. 최저가 ''원 출력하기


//최저가 버튼 클릭 시 최저가 사이트 나오게 하기
/* priceBtn.addEventListener('click',()=>{
    //2. 추출한 가격에서 최저가 찾기
    console.log('최저가 : ', Math.min(...minMap)) //최저가 찾음
    //3. 최저가 '' 원 출력하기
    const minprice = Math.min(...minMap)
    priceP.textContent = `최저가 : ${minprice}`// ${최저가 값의 변수를 넣는것}
})
 */

