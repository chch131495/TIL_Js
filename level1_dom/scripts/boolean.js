// boolean.js
// 거짓으로 평가되는 값
// false, null, undefinde, NaN, 0, ""
// 위 제외 모든 값 참으로 평가됨 [], {} 포함
let a = ""
console.log(Boolean(a));
a = []
console.log(Boolean(a));
// 비교연산자
// == 일치연산자, === 데이터타입까지 일치
let b = 10;
let c ="10";
let result = b == c; // 앞에 = -> 대입연산자, ==는 일치연산자
console.log(result); // 값만 비교 => true
result = b === c;
console.log(result); // 값 + 데이터타입 비교 => false
b +=5; // 기존 b에 5를 추가대입
result = b != c;
console.log(result) // 값만 비교 => true(같으면 거짓)
result = b !== c;
console.log(result); // 값+데이터타입 비교 => true
c = 2; // 대입연산자를 사용했기때문에 c의 값는 2 // b 15, c 2
result = b < c;
console.log(result); //false
result = b > c;
console.log(result); //ture
result = b >= c;
console.log(result); //ture
result = b <= c;
console.log(result); //false
console.log('-------------------------------------')
// 논리연산자 &&, ||, !
console.log("A" && null) //null
console.log("A" && "B") //B -> 뒤에도 참인지 읽었으니깐 B가 출력
console.log(0 && "B") //0 -> B를 확인하지않고 0이 출력 -> 0이 거짓이기때문
console.log(0 || "B") //B
console.log("A" || "B") //A
console.log("" || {}) //{} -> 빈문자열(거짓)과 빈객체를 하면 빈객체가 나옴 (빈객체가 참)
console.log(!"A") //false -> 결과값이 반전해서 나옴
let d; //unte -> f
result = !d; //f->t
console.log(result); // true
let e = [] // 빈배열 -> t
result = !e; // t->f
e += ['사과'] //아무런 상관없음
console.log(result); // false
//---------------------------------------------
console.log('조건문------------')
//if(조건식){조건식이 참일 때 실행문}
let x = [] //빈배열은 true
let y = 0 //숫자는 초기화하는 값이기때문에 false
if(x){console.log('x는 참이다1');}
if(y){console.log('y는 참이다');} // 거짓이기때문에 출력되지않음
if(x == true){console.log('x는 참이다2');} //데이터타입을 보는게 아니라 배열과 true은 다르기때문에 아무것도 실행되지않는것.
if(x !== true){console.log('x는 참이다2');}
if(x && y){console.log('x,y는 참이다1');}//y=0이기때문에 아무것도 출력되지않음
if(x || y){console.log('x만 참이다');}//x->빈배열이기때문에 true여서 출력
x = 7;
y = 2;
if(x>y && x==y){alert('참일때 실행되는 문구1');}//실행안됨
//if(x>y || x==y){alert('참일때 실행되는 문구2')}//실행
if(!x){console.log('참일때 실행되는 문구3');}// 결과는 나오지않음(결과값이 true0> false로 변경)
if(y || !x){console.log('참일때 실행되는 문구4');} 
if(!y || x){console.log('참일때 실행되는 문구5');}
if(!y && x){console.log('참일때 실행되는 문구6');}

//에버랜드 놀이기구 탑승조건 확인 JS
//나이 입력 후 버튼 클릭시(이벤트 함수) 10살 이하면(참일때, 조건문) '탑승불가' 메시지 출력
const ageInput = document.querySelector('.everland #age');
const ageBtn = document.querySelector('.everland #age_btn')
const ageResult = document.querySelector('.everland .result')
console.log(ageInput, ageBtn, ageResult);

//console.log(ageInput.value);
//이벤트 함수 밖에 작성하는건 초기값 확인용(처음실행했을때)
//나이 입렵 후 버튼 클릭 시 콘솔에 입력한 나이값 표시
//1. 버튼 클릭 시 특정동작(입력한 나이값 가져오기)이 일어나야 한다.
ageBtn.addEventListener('click',()=>{
    console.log(ageInput.value)
    //ageInput변수의 value값이 숫자 10 이하면(조건문->이하)
    //ageInput변수에 '탑승불가' 문자데이터 출력(조건문이 참일때 실행)
    //if(조건식){조건식 결과가 참일대 실행결과}
    //if(ageInput변수의 value값이 숫자 10 이하면){ageInput변수에 '탑승불가' 문자데이터 출력}
    if(ageInput.value <= 10){
        ageResult.textContent = '탑승불가';
        ageInputReset()
        //ageInput.value = '' // 입력하고 난 다음에 사용자가 직접 지우는게 아니라 초기화되어서 번거로움을 줄여주기위해서 초기값으로 돌리는것.
    }
    //10살보다 크면 '탑승가능' 메세지 출력
    if(ageInput.value > 10){
        ageResult.textContent = '탑승가능';
        //ageInput.value = '' 
    }
    //값 입력안하고 클릭 시 '값을 입력하세요' 메세지 출력
    if(ageInput.value == ''){ageResult.textContent = '값을 입력하세요.'}
})
function ageInputReset(){
    return ageInput.value = '';
}
// 인쇄 알고리즘 -> 변수 작성 
// 인쇄하기 버튼 클릭 시 '인쇄 하시겠습니까?' 물어보고 확인 누르면 인쇄창 실행
// '인쇄 하시겠습니까?' 물어보고(BOM 내장함수 활용 confirm())
const printBtn = document.querySelector('#print_btn')
console.log(printBtn);
printBtn.addEventListener('click',printFunc)
function printFunc(){
    let confirmResult = confirm('인쇄 하시겠습니까?')
    console.log(confirmResult)
    if(confirmResult){ print() }
    return
}

console.log('-----------------------------------------------------------');
// 참과 거짓에 따른 결과출력 조건문
// if(조건식){참일때실행}else{거짓일때실행}
// 관리자 로그인
// 관리자(admin) 로그인사용자 아이디 admin 일 경우 '관리자님 어서오세요'(참) 아니면 '관리자페이지 접근불가'(거짓)
/* const userId = prompt('아이디')
if(userId !== 'admin'){
    alert('관리자페이지 접근불가') // 참일경우
}else{
    alert('관리자님 어서오세요')
} */

//로그인 조건문
//변수확인
//아이디(미입력) 비밀번호(입력) 로그인 클릭시 -> 아이디입력경고 메세지 출력 (조건 하나)
//아이디(입력) 비밀번호(미입력) 로그인 클릭시 -> 비밀번호입력경고 메세지 출력 (조건 둘)
//아이디(입력) 비밀번호(입력) 로그인 클릭시 -> (맞는 정보 기준)index.html 이동 
//아이디(입력) 비밀번호(입력) 로그인 클릭시 -> (틀린 정보 기준)정보오류 메세지 출력
const userId = document.querySelector('#user_id')
const userPw =document.querySelector('#user_pw')
const loginBtn =document.querySelector('#login_btn')
const loginErrorMsg =document.querySelector('#loginFrm .error')
console.log(userId, userPw, loginBtn, loginErrorMsg);

//회원정보 저장 DB
//관리자 이름 : 봄, 나이 : 30
//일반회원 이름 : 여름, 나이 : 20
const userDB = [{ //userDB[배열].객체속성
    name:'봄',
    age:30,
    pst:'관리자',
    id:'admin',
    pw:'admin1234',
},{
    name:'여름',
    age:20,
    pst:'일반회원',
    id:'summer',
    pw:'summer1234',
},]
console.log(userDB[0].id, userDB[0].pw) // 위 회원정보 변수의 id 확인 테스트
//로그인 클릭 이벤트
loginBtn.addEventListener('click',()=>{
    //아이디 미입력 기준 에러 메세지 출력 (조건 하나)
    if(userId.value == ''){
        loginErrorMsg.textContent = '아이디를 입력해주세요'
    }else if(userPw.value == ''){//비번 미입력 기준 에러 메세지 출력(조건 둘)
        //if의 조건이 거짓이고 else if 조건이 참일 때 실행
        //loginErrorMsg.textContent = '비밀번호를 입력해주세요'
        loginErrorMsg.innerHTML = '비밀번호를<br> 입력해주세요' // innerHTML를 사용한 이유는 태그를 고쳐야하기때문
    }else if(userId.value == userDB[0].id){//입력한 id이 관리자의 저장된 id동일 시 index 이동
        if(userPw.value == userDB[0].pw){
        //location.href = '../index.html';
        //isLogin = true;
        //console.log('로그인 성공', isLogin)
        // ★로컬 환경에서 확인가능한 브라우저 데이터 저장법★
        localStorage.setItem('isLogin2','true') 
        //localStorage.setItem('속성', '값') //저장한다는 것은 setItem
        //localStorage.getItem('가져오는 속성') //저장한것을 불러오는 속성값은 getItem
        }// 이중조건으로 한번 더 확인해서 값이 맞으면 출력되는 것
    }else{// 모든 조건이 거짓일 때 (입력 id, pw 저장된 정보와 다를 때)
        loginErrorMsg.textContent = '아이디 또는 비밀번호가 잘못되었습니다. 다시한번 확인해주세요.'
    }
})

//boolean_common.js 변수 확인
console.log(isLogin);