console.log(Math); // Math -> 내장함수
console.log(Math.PI);
// Math.floor, round, random
let num1 = Math.floor(3.7) //소수점 버리고 정수 출력
console.log(num1) // 결과값 3
num1 = Math.floor(3.3)
console.log(num1) // 결과값 3 
console.log('------------------------------------------')
let num2 = Math.round(3.7) //소수점 자리수에 따라 반올림
console.log(num2) // 결과값 4
num2 = Math.round(3.2)
console.log(num2) // 결과값 3
console.log('------------------------------------------')
let num3 = Math.random() // 소수점 랜덤으로 나옴 (0과 1 사이 소수점이 보이는 것)
console.log(num3)
num3 = Math.random() * 5; //0~5사이 사이값(끝자리(5)는 나오지않음)
console.log(num3)
num3 = Math.floor(Math.random() * 10) + 1; //1~10사이 (+1를해서)
//Math.floor(Math.random()  0~10사이의 정수가 랜덤으로 나오는 것, 가장 많이 사용
console.log(num3)
console.log('------------------------------------------')
// 10%, 20%, 30%, 40%, 50% 랜덤 출력
const couponDB = ['10%', '20%', '30%', '40%', '50%'] //값만 있기때문에 배열
const couponBtn = document.querySelector('#coupon')

//버튼 클릭 시 쿠폰 5개 중 1개가 랜덤하게 alert() 출력메세지 실행
couponBtn.addEventListener('click',()=>{
    let randomNum = Math.floor(Math.random() * 5)
    alert(couponDB[randomNum])
})
console.log('------------------------------------------')
//화면에 접속했을 때 광고 2개가 랜덤 표시
const adDB = [{//배열.객체
    name : '호주 여행', //alt에 작성
    src : 'https://i.pinimg.com/736x/13/bf/93/13bf9354f9ffae15aed2a30c6040e319.jpg', //img
    link : 'https://naver.com', //a
},{
    name : '이탈리아 여행',
    src : 'https://i.pinimg.com/736x/57/bf/de/57bfde1dfe0dc25101c967d47010faf5.jpg',
    link : 'https://google.com',
}]

//링크, 이미지가 랜덤으로 변환
window.addEventListener('load',()=>{//window에 들어갈때마다 바뀌는것.
    const adSection = document.querySelector('.ad')
    const adRandom = Math.floor(Math.random() * 2)
    adSection.children[0].href = adDB[adRandom].link
    adSection.children[0].children[0].src = adDB[adRandom].src
    adSection.children[0].children[0].alt = adDB[adRandom].alt
})

console.log('------------------------------------------')

//더치페이 계산기
//계산하기 클릭 시 총 금액과 인원 수에 따라 계산결과 출력하기
//금액이 소수점일 경우 소수점 값에 따라 반올림하기 (round)
const priceInput = document.querySelector('#price') //금액
const personInput = document.querySelector('#person') //인원수
const totalBtn = document.querySelector('#total_btn') //계산하기
const calcResult = document.querySelector('.calc .result') //결과
console.log(priceInput, personInput, totalBtn, calcResult)

totalBtn.addEventListener('click',()=>{
    //금액과 인원수 계산
    const num = priceInput.value / personInput.value //금액과 인원수를 나누는 것을 변수로 작성
    const price = Math.round(num) //소수점을 반올림
    calcResult.children[0].textContent = price.toLocaleString('ko-kr')
})

//DB
const shopDB = [{
    shop:'쿠팡',
    id:'하루견과',
    price:1000,
},{
    shop:'네이버 스마트스토어',
    id:'하루견과',
    price:2000,
},{
    shop:'마켓컬리',
    id:'하루견과',
    price:3000,
}]
//변수
const minPriceBtn = document.querySelector('#min_price_btn') //최저가 찾기 버튼
const minPriceP = document.querySelector('.min_price') //결과 P
const listDl = document.querySelector('#list')
console.log(minPriceBtn, minPriceP)

window.addEventListener('load', ()=>{
    const shopSort = [...shopDB].sort((a,b) => b.price - a.price) //내림차순
    console.log(shopSort) //확인용
    for(let i of shopSort){
        const dt = document.createElement('dt')//<dt></dt>
        dt.textContent = i.shop;
        listDl.appendChild(dt)
        const dd = document.createElement('dd')//<dd></dd>
        dd.textContent = i.id;
        listDl.appendChild(dd)
    }
})

const pp = [1000,2000,3000,4000] //test
//클릭 이벤트
minPriceBtn.addEventListener('click',()=>{
    //1. 쇼핑몰, 상품명, 가격을 가지고 있는 배열에서 가격만 추출하기
    //map문
    const priceMap = shopDB.map(i => i.price) //=text와 같은 결과
    console.log(priceMap)

    //2. 추출한 가격에서 최저가 찾기
    console.log('최저가 : ', Math.min(...priceMap)) //스프레드연산자

    //3. 최저가 ''원 출력하기
    const minPrice = Math.min(...priceMap)
    minPriceP.textContent = `최저가 : ${minPrice}`
    //minPriceP.textContent = '최저가 :' +minPrice

    //스프레드연산자(...배열명) 여러 배열값을 한번에 처리하는 배열처리법
    console.log(Math.min(...pp)) //최저가
    console.log(Math.max(...pp)) //최고가
})


console.log('------------------------------------------')
const shopDB2 = [{
    shop: '쿠팡',
    name:'고구마',
    price:5000,
    delivery:2500,
},{
    shop: '이마트몰',
    name:'고구마',
    price:2900,
    delivery:0,
},{
    shop: '네이버',
    name:'고구마',
    price:4000,
    delivery:1000,
}]
//변수 만들기
const priceBtn = document.querySelector('.min2 #price_btn')
const deliveryBtn = document.querySelector('.min2 #delivery_btn')
const resultPrice = document.querySelector('.result1')
const resultdelivery = document.querySelector('.result2')
const shopListUl = document.querySelector('#shop_list')
console.log(priceBtn, deliveryBtn)
//최저가찾기 버튼 클릭 시 최저가 표시
priceBtn.addEventListener('click',()=>{
    const priceM = shopDB2.map(i => i.price); //배열
    resultPrice.textContent = '최저가 : ' + Math.min(...priceM) + '원';

    //최저가 -> 최고가 오름차순 정렬하기  JS
    //매개변수 순서를 이용한 오름차순(계산속성 기준) a.price - b.price (매개변수 순서만 달라짐)
    //매개변수 순서를 이용한 내림차순(계산속성 기준) b.price - a.price
    const sort = [...shopDB2].sort((a, b) => a.price - b.price) //한번에 인식하기 위해서 스프레드 연산자 사용
    console.log(sort)

    //반복문 for 이용 위 sort li 생성 후 ul에 최종 삽입하기
    //for~in, for~of, forEach
    for(let i of sort){
        console.log(i.shop)
        const li = document.createElement('li') //<li></li>
        //li.textContent = i.shop 
        li.innerHTML = `<a href="#">${i.shop}</a>` //태그를 추가할꺼면 innerHTML
        li.innerHTML += `<span>${i.price}원</span>`
        li.innerHTML += `<em>${i.delivery}원</em>`
        console.log(li, i.shop)
        shopListUl.appendChild(li)
        //createElement로 생성한 JS태그는 appendChild함수로 대입한다.
    }
})
//배송비무료 버튼 클릭시 배송비가격 표시
deliveryBtn.addEventListener('click',()=>{
    const deliveryM = shopDB2.map(i => i.delivery)
    resultdelivery.textContent = '배송비 : '+ Math.min(...deliveryM) + '원';
})
