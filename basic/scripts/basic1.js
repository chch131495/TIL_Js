// basic1. js
// var 변수명;//변수생성(비어있음)
// var 변수명 = 대입값;//변수생성과 대입
// 변수명 = 대입값;//변수대입(이미 생성된 변수)
// 변수 연습
// 객체.속성; 
// 객체.함수(); //괄호존재
var a; //undefinde 값이 정의되지 않음 (함수를 적용하지않았기때문)
console.log(a); // console에 a를 log를 보이게 하는 것.
var b = 10; //초기값부터 정의됨
a = b; //10
a = 20; //값이 정의됨 -> 최종 마지막만 보이는 것
console.log(a, b); //값이 동시에 보이는것
var c1;//undefinde 값이 정의되지 않음 (함수를 적용하지않았기때문)
c1 = 30; //30정의됨
c1 = 40; //기존값 30 제거 -> 40 새로 정의
console.log(c1, b);
c1 = b; //b가 가진 10을 c1에 대입하라 = 10
//데이터타입 구분함수 typeof() ->객체 없이 그냥 typeof
//콘솔에 로그를 출력하는 객체와 함수 console.log()
//Q. 콘솔 로그에 변수 a의 데이터타입을 출력하세요.
console.log(typeof(a));
//출력 형식 : a의 데이터타입은 number다.
console.log('a의 데이터타입은',typeof(a),'다.'); /* ''->정적인 동작은 ''를 사용, 동적인 타입은 typeof()사용 */
//Q. 콘솔 로그에 a와 b를 더한 결과는 30이고 데이터타입은 numer다.
console.log('a와b를 더한 결과는',(a+b),'데이터타입은',typeof(a+b),'다.');
//Q. 콘솔 로그에 a와 b를 더한 결과는 25이고 데이터타입은 numer다.
b = 5; // 변수의 값을 변경해야지 결과값이 다르게 나온다.
b = '1';//20+'1'->201
console.log('a와b를 더한 결과는',(a+b),'데이터타입은',typeof(a+b),'다.'); 
//Q. 콘솔 로그에 a와 b를 더한 결과는 201이고 데이터타입은 string다.
console.log('a와b를 더한 결과는',(a+b),'데이터타입은',typeof(a+b),'다.');
console.log('------------------------------------') // 의미없이 구분하기 위해 구분선을 넣는것
//사용자 정보 변수
// 김가을/10/130/인천
let user_name = '김가을'; // var -> let (바뀔수 있는 값이여서 let를 사용) 
let user_age = 10;
let user_height = 130;
let user_area = '인천';
const plus = 1;//나이 한살 먹는 것은 바뀌지않기때문에 const를 사용 (최초 선언의 값)
console.log(user_name, user_age, user_height, user_area);
//Q. 김가을은 내년에 11살입니다.
//console.log(user_name,'은 내년에',user_age+1,'살입니다.');
console.log(`${user_name}은 내년에 ${user_age+plus}살입니다.`);
//Q. 현재는 인천에 살지만
console.log('현재는',user_area,'에 살지만');
//Q. 다음 달 서울로 이사갑니다.
user_area = '서울' // 데이터변경
console.log(`다음 달 ${user_age}로 이사갑니다.`);
//console.log('다음 달',user_area,'로 이사갑니다.')
console.log('--------------------------------')//템플릿 문자열로 변환한것

//장바구니 변수
let cart = '';//장바구니 초기상태(비어있음)
cart = '사과';//사과 추가
cart = cart+'바나나';//기존 사과 유지, 바나나 추가(오른쪽부터 대입하기때문에)
cart = null; //cart = '';//장바구니 비우기(삭제버튼클릭 시)
console.log(cart);

console.log('--------------------------')
//ES6 새로운 변수 let, const
var webStudy = 'html';
var webStudy = webStudy + 'css';//중복 구분 안함
console.log(webStudy);

let webStudy2 = 'sass';
webStudy2 = webStudy2 + 'javascript'; //중복 구분함(이름)
console.log(webStudy2);

//const webStudy3;//undefined
//webStudy3 = 'figma';//undefined -> 'figma'
const webStudy3 = 'figma';//생성과 대입이 동시에 일어나야함(바뀌면 오류발생)
console.log(webStudy3);

//자바스크립트 기초 함수
//1. log(); 기록 실행 함수
//2. typeof(); 데이터타입을 확인하는 용도(실행함수)
//3. print(); 인쇄 실행 함수
//4. prompt(); 질문답변 실행 함수
//5. confirm(); 확인취소창 실행 함수

//print();
//prompt('1+1은?');
//confirm('html은 동적언어다.');
//const que1 = Number(prompt('1+1은?'));//숫자 변경함수
//console.log(que1);
//console.log(typeof(que1));//string->number(변경)
//confirm(que1);

//const kurly_order_num = Number(prompt ('주문수량은?'));
//const kurly_price = 10000;
//const kyrly_total = kurly_price * kurly_order_num;//결과 변수는 따로 작성

//console.log(typeof(kurly_order_num)); //string->number
//console.log(`주문수량은 ${kurly_order_num}, 총 주문가는 ${kyrly_total}원입니다.`);

//구구단
const dan99 = Number(prompt('구구단 몇단이 궁금해요?'));
//console.log(typeof(dan99));
console.log(`${dan99}X1=${dan99*1}`);
console.log(`${dan99}X2=${dan99*2}`);
console.log(`${dan99}X3=${dan99*3}`);
console.log(`${dan99}X4=${dan99*4}`);
console.log(`${dan99}X5=${dan99*5}`);
console.log(`${dan99}X6=${dan99*6}`);
console.log(`${dan99}X7=${dan99*7}`);
console.log(`${dan99}X8=${dan99*8}`);
console.log(`${dan99}X9=${dan99*9}`);