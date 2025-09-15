const inputTag = document.querySelectorAll('input');
const buttonTag = document.querySelectorAll('button');
console.log(inputTag, buttonTag);
console.log(inputTag[0], buttonTag[0]);
console.log(inputTag[1], buttonTag[1]);
console.log(inputTag.length, buttonTag.length);

const searhInput = document.querySelector('input');
const searhBtn = document.querySelector('#search_btn');
const shopNumInput = document.querySelector('input#num');
const shopCartBtn = document.querySelector('#cart_btn');
console.log(searhInput, searhBtn, shopNumInput, shopCartBtn);
//const searhInput = document.querySelector('input[type=search]');
//const searhInput = document.querySelector('section:first-child input');
//const searhInput = document.querySelector('#s');
//const searhInput = document.querySelector('input[name*=s]');
//console.log(searhInput); //querySelectorAll이 아니므로 [인덱스] 사용금지

/* 태그 속성★, 함수 테스트 */
console.log(searhInput.type, searhInput.placeholder); //속성 읽기
//console.log()//속성을 변경하려면 콘솔 밖에다가 작성 -> 콘솔은 정확하게 하고 있는지 확인하려는 용도
//searhInput.placeholder () // 함수일때
searhInput.placeholder = "" //속성일때
let checkValue = ''; // 빈 값 초기화
searhInput.value = '인기검색어 : HTML'; /* 대입되는 위치를 잘 확인하기 */ //value 값 변경
checkValue = searhInput.value; // 변경값 변수 담기
console.log(checkValue); //출력확인

console.log(shopNumInput.type);
console.log(shopNumInput.name);
console.log(shopNumInput.value + 1); // 문자 + 숫자 = 문자 ->앞에껄 문자인식
console.log(typeof(shopNumInput.value)); //string, typeof -> 문자인지 숫자인지 확인하는것

checkValue = Number(shopNumInput.value) + 1 ; // 문자로 처리된 것을 숫자로 변경
console.log(`주문수량 : ${checkValue}`);

searhInput.style.backgroundColor = '#aaa';
searhInput.style.color = '#fff';
searhInput.style.padding = '10px';
searhInput.style.textAlign = 'center';
searhInput.style.borderRadius = '10px';
searhBtn.style.backgroundColor = '#aaa';
searhBtn.style.color = '#fff';
searhBtn.style.padding = '15px';
searhBtn.style.borderRadius = '10px';
shopNumInput.style.backgroundColor = '#aaa';
shopNumInput.style.color = '#fff';
shopNumInput.style.width = '50px';
shopNumInput.style.textAlign = 'center';
shopNumInput.style.borderRadius = '10px';
shopNumInput.style.padding = '10px';
shopCartBtn.style.backgroundColor = 'hotpink';
shopCartBtn.style.borderRadius = '10px';
shopCartBtn.style.width = '100px';
shopCartBtn.style.padding = '10px';
shopCartBtn.style.color ='#fff';

//이벤트 활용 콜백함수 호출
//이벤트 문법
//객체.addEventListener('이벤트종류', 콜백함수)
const orderBtn = document.querySelector('#order');
console.log(orderBtn);

//주문 버튼 클릭시 '상품을 선택하세요' 경고창 출력
//이벤트 뒤 함수 작성방식 : 콜백함수호출(추천), 익명함수
/* orderBtn.addEventListener('click',function(){ -> 익명함수
    alert('상품을 선택하세요')
}) */
orderBtn.addEventListener('click',orderFunc_v2('상품'));
// 이벤트 뒤 콜백함수는 함수 그 자ㅔ를 호출하는 개념으로 결과값만 받고 수정값은 따로 전달하지 않는다.
// 매개변수의 수정이 필요한 콜백함수는 이벤트 뒤 익명함수 또는 화살표함수 추가 제작으로 수정가능한 함수로 재작성하는게 일반적인 방법이다.
/* orderBtn.addEventListener('click',function(){ // ->익명함수를 사용
    orderFunc('장바구니에')
}) */
/* orderBtn.addEventListener('click',()=>{ //-> 화살표 이용
    orderFunc('장바구니에')
}) */
/* cart.addEventListener('click',function(){
    orderFunc('상품에')
}) */
/* function orderFunc(data){
    return alert(data+ '담으세요.')
} */
function orderFunc_v2(data){
    return function(){/* 클로저(Closure)(함수안에서 함수를 처리하는 방법) */
        // 내부 함수는 외부 함수의 매개변수를 기억한다. 
        alert(data+ '담으세요.')
    }
};

//주문하기 클릭 시 '장바구니에 담으세요'
//장바구니 클릭 시 '상품을 담으세요'
// 콜백함수 1개만 활용 각각 DOM 이벤트 클릭 시 다른 메세지 출력하기

//아이디, 비밀번호 중복확인 클릭시
//아이디가 중복되었습니다.
//비밀번호가 중복되었습니다.
//1. 제어 DOM 대상 변수 등록
const idOverlapBtn = document.querySelector('#id');
const pwOverlapBtn = document.querySelector('#pw');
console.log(idOverlapBtn, pwOverlapBtn);
//2. "클릭 시 " 이벤트 콜백함수 제작
idOverlapBtn.addEventListener('click',()=>{overlapFunc('아이디')})
idOverlapBtn.addEventListener('click',overlapFunc_v2('비밀번호'))
//3. 실행 메세지가 통일된 특징에 맞춰서 콜백함수 1개 제작
/* function overlapFunc(){
    return alert('아이디가 중복되었습니다.')
} */
//3-1. 콜백함수 내에 함수호출 시 다른 내용이 있으면 매개변수 제작
function overlapFunc(msg){
    return alert(msg+'가 중복되었습니다.')
}
function overlapFunc_v2(msg){
    return function(){
        alert(msg+'가 중복되었습니다.')
    }
}
//4. 3번 콜백함수를 2번 이벤트에서 호출

// 이벤트 콜백함수 연습
// Q1. textarea 값을 아무거나 입력했을 때 콘솔창에 '50자 이상 입력하세요' 출력
// Q2. textarea를 활성화했을 때 테두리 빨강색
// Q2. textarea를 비활성화했을 때 테두리 회색
const reviewText = document.querySelector('textarea#review');
console.log(reviewText);
reviewText.addEventListener('keydown', lengthFunc);
reviewText.addEventListener('focus', ()=>{borderFunc('#f00')});/* 활성 */
reviewText.addEventListener('blur', ()=>{borderFunc('#aaa')});/* 비활성 */
function lengthFunc(){return console.log('50자 이상 입력하세요')};
function borderFunc(color){
    return reviewText.style.border = `1px solid ${color}`
}
borderFunc('#aaa') //초기값
reviewText.style.outline = 'none' /* 활성화 시 검은색 테두리 제거 -> 안전한 방법은 reset.css에서 초기값을 변경해줘야한다.*/

// 배경 버튼에 마우스 올리면 부모 article 배경색 변경하기
const articleTag = document.querySelector('article');
const bgBtn = document.querySelectorAll('button[class*=bg]');
const bgP = articleTag.querySelector('p');
console.log(bgBtn, bgP);
//bgP.textContent = '현재<br> 배경색상 : #eee'
// articleTag.addEventListener('mouseover',bgFunc); -> 잘못된 경로 -> 모든 button이 다 잡히기때문에
bgBtn[0].addEventListener('mouseover',bgChangeFunc);
bgBtn[0].addEventListener('mouseover',bgChangeFunc('pink'));
bgBtn[1].addEventListener('mouseover',bgChangeFunc('#ffc'));
bgBtn[2].addEventListener('mouseover',bgChangeFunc('hotpink'));
function bgChangeFunc(color){
    return function(){
        articleTag.style.backgroundColor = color
        bgP.textContent = `현재 배경색상 : ${color}`
    }
};
articleTag.style.width = '430px'
articleTag.style.height = '90vh'
articleTag.style.backgroundColor = '#eee'