function naverLink(){
    return window.open('https://naver.com', '_blank') //새탭으로 사이트를 열어주는것
};
//naverLink();

const writeFunc = function(){
    return window.location.href('https;//google.com') //현재 탭에서 사이트르르 열어주는것
};
//writeFunc();

//DOM
const btn = document.getElementsByTagName('button'); // 태그 이름이기때문에 ''사용 -> 문자열이기때문
const div = document.getElementsByTagName('div');
console.log(btn,div);
btn[2].style.color = 'red'; //인덱스를 기본으로 작성해야한다 -> 인덱스([])를 생략할 경우 적용 안됨
btn[0].style.backgroundColor = 'yellow';
btn[0].style.border = '1px  solid red'; // 동적인 움직이나 사용자의 움직임에 따라서 JS에서 CSS를 제어하는 것
div[1].style.transform = 'rotate(5deg)';
// JS - HTML(변경가능), CSS(제어할수있고)
// DOM.style.color;-> 들어가는 색깔을 무엇있지 읽는// 읽기
// DOM.style.color = '값';-> 대입연산자를 사용//수정
// 객체.속성.속성
// 객체.함수()

//클래스 선택하기
const slide = document.getElementsByClassName('slide')
const slideWrap = document.getElementsByClassName('slide_wrap')
console.log(slide, slideWrap);
slide[0].style.backgroundColor = '#ff0';
slide[1].style.backgroundColor = 'rgba(0,0,0,0.1)';
slideWrap[0].style.border = '5px solid purple';
/* 태그와 클래스 DOM은 반드시 인덱스 붙여서 사용하기 ->추가될수있기때문에 []를 반드시 사용*/

// 아이디 DOM
const container = document.getElementById('slide_container');
console.log(container);
container.style.backgroundColor = 'blue';
container.style.margin = '0 auto';
// 아이디는 단 하나의 요소로 인덱스를 붙이지 않고 작성한다.
slide_container.style.filter = 'invert(1)'; 

//ES6 querySelector
const tag_es6 = document.querySelectorAll('div');
const cls_es6 = document.querySelectorAll('.slide');
const id_es6 = document.querySelector('#slide_container');
console.log(tag_es6, cls_es6, id_es6);

//메뉴 구조
const navMain = document.querySelector('#main'); //document -> body
const navGnb = document.querySelector('.gnb'); 
const navLi = document.querySelectorAll('.gnb > li');
const navLi_v2 = navGnb.querySelectorAll('li');
const navA = document.querySelectorAll('.gnb > li > a')
const navA_v2 = navLi[0].querySelectorAll('a')
console.log(navMain, navGnb, navLi,navLi_v2, navA, navA_v2);

navGnb.style.display = 'flex';
navLi[2].style.transition = 'transform 0.3s linear 2s'
navGnb.style.fontSize = '2.0rem'
navA[0].style.animation = 'rotate360 1s alternate infinite'
//DOM 변수 사용 시 All 키워드 유무에 따라 [인덱스] 사용 주의하기

//로그인 알고리즘
//버튼 클릭 시 사용자가 입력한 아이디, 이름, 비밀번호 확인 알고리즘
const loginBtn = document.querySelector('#loginFrm button');
const loginId = document.querySelector('#id') ;
const loginName = document.querySelector('#name');
const loginPw = document.querySelector('#pw');
console.log(loginBtn, loginId, loginName, loginPw);
//console.log(loginId.name);
//console.log(loginId.type);
//객체.속성; // 속성 읽기
//객체.속성.속성 = 대입값; 
//이미지객체.src = '경로'
//loginId.type = 'password'
function userInfo(){
    //버튼 클릭 시 사용자가 입력한 아이디, 이름, 비밀번호 확인 알고리즘
    let data = loginId.value;
    data += loginPw.value;
    data += loginName.value;//이전데이터를 지우기때문에 복합대입자를 사용->+=(연결)
    return console.log(data);
}