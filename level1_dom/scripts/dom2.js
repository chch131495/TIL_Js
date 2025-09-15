// dom2.js
// 1. 변수 section*2, a*2, btn*2(동적대상 체크 후 변수생성)
const sectionTag = document.querySelectorAll('section');
const linkCls = document.querySelectorAll('section .link');
const btnCls = document.querySelectorAll('section .btn');
console.log(btnCls, btnCls[0], btnCls.length, linkCls, linkCls[1], linkCls.length, sectionTag, sectionTag[0], sectionTag.length);

// 2. 이벤트와 함수, 속성
// 초기값(즉시실행)
sectionTag[0].style.backgroundColor = '#ff0'
sectionTag[1].style.backgroundColor = '#0cf'

// 이벤트, 콜백함수 추가 생성
// a2 클릭시 section[1] 배경색 변경
// a태그에 클릭, 터치 이벤트 적용 시 href 속성때문에 스크롤이 위로 올라가는 문제 발생-> a의 기본속성기능 해체 preventDefalut()
/* linkCls[1].addEventListener('click',bgFunc);
function bgFunc(e){
    console.log(e);
    e.preventDefault();
    return sectionTag[1].style.backgroundColor = '#0ff'
} */
/* linkCls[1].addEventListener('click',function(event){
    console.log(event)
    event.preventDefault();
    return sectionTag[1].style.backgroundColor = '#0ff'
}) */
linkCls[1].addEventListener('click',(e)=>{
    e.preventDefault(); // -> 마우스 올라가는 것을 초기화하는 것
    return sectionTag[1].style.backgroundColor = '#0ff'
})
linkCls[0].addEventListener('click',function(e){
    console.log(e)
    e.preventDefault();
    return sectionTag[0].style.backgroundColor = 'pink'
})
// a, button(type=button) -> a:페이지 이동할때, button:현재페이지에서 동적기능이거나 사용자의 로그인 성공이나 실패를 보여줄때 사용
// button 이용 JS 진행 시 특정 페이지 이동이 필요할 때 location.href 를 사용한다 ((예)로그인성공 시 메인페이지로 이동)
// JS 상대경로 작성은 html 위치 기준으로 작성한다.
/* btnCls[0].addEventListener('click',()=>{
    window.location.href = './dom1.html'
})
btnCls[1].addEventListener('click',function(){
    window.location.href = '../sass_study/project2/index.html'
}) */
btnCls[0].addEventListener('click',sassProjectFunc('project1'))//project1/index
btnCls[1].addEventListener('click',sassProjectFunc('project2'))//project2/index
function sassProjectFunc(src){
    return function(){
        window.location.href = `../sass_study/${src}/index.html`
    }
}

// 쇼핑몰 수량 변수
const inputNum = document.querySelector('#num');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const priceCls = document.querySelector('#numFrm .price')
let count = 1; // 초기값 변수(변경가능->let)
let price = 12900;
console.log(inputNum, plusBtn, minusBtn);
// 수량이 1로 시작해서 + 클릭하면 수량 증가, - 클릭하면 수량 감소
// 1개당 가격 12900원
// 초기값
inputNum.value = count;
priceCls.textContent = price.toLocaleString('ko-kr'); // 일시적으로 문자로 변환한것, 출력만 한것
// 이벤트, 함수
// + 클릭하면 수량 증가
plusBtn.addEventListener('click',plusFunc);
minusBtn.addEventListener('click',minusFunc);
function plusFunc(){
    console.log(typeof(inputNum.value), typeof(count))
    // return inputNum.value = Number(inputNum.value) + 1
    // 1. 증감연산자 ++ --
    inputNum.value = ++count
    let totalPrice = price * count
    return priceCls.textContent = totalPrice.toLocaleString('ko-kr')
    //return priceCls.textContent = (price * count).toLocaleString('ko-kr')-> 깔끔하지못하기때문에 통합결과값의 변수를 만들어서 작성하는게 보기 깔끔함.
};
function minusFunc(){
    inputNum.value = --count
    let totalPrice = price / count
    return priceCls.textContent = totalPrice.toLocaleString('ko-kr')
};