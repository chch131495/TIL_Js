// 상/하/좌/우 버튼 클릭 시 캐릭터 10px 이동
const moveBtn = document.querySelectorAll('#control .btn');
const charater = document.querySelector('#map img');
console.log(moveBtn, charater);
let num = 0; //초기값 (변수)
//상 버튼
moveBtn[0].addEventListener('click',()=>{
    num += 10; //복합대입으로 증가로 (연산대입을 사용하면 1씩 증가하기때문에 복합대입을 사용)
    console.log(num)
    charater.style.transform = `rotate(90deg) translateX(-${num}px)`;
})
//하 버튼
moveBtn[1].addEventListener('click',()=>{
    num -= 10;
    console.log(num)
    charater.style.transform = `rotate(-90deg) translateX(${num}px)`;
})
//좌 버튼
moveBtn[2].addEventListener('click',()=>{
    num += 10;
    console.log(num)
    charater.style.transform = `rotate(90deg) translateY(${num}px)`;
})
//우 버튼
moveBtn[3].addEventListener('click',()=>{
    num -= 10;
    console.log(num)
    charater.style.transform = `rotate(90deg) translateY(${num}px)`;
})
// input 입력창에 영어로 이동방향 작성하고 Enter 누르면 캐릭터 10px 이동
// 이동방향) left, right, top, bottom
const controlInput = document.querySelector('#control #txt');
console.log(controlInput);
/* if(left){}else if(right){}else if(top){}else if(bottom){}else{}오답 */
controlInput.addEventListener('keyup',(e)=>{//keyup-> 잘못눌렀을때 옆으로 빼는 기능
    if(e.key == 'Enter') {
        const inputVal = controlInput.value; // enter 쳤을 때 입력 값을 inputVal를 작성해라
        if(inputVal == 'left' || inputVal == 'right' || inputVal == 'top' || inputVal == 'bottom'){ // 반복되는 조건문이면 논리연산자를 사용
            console.log(`${inputVal} 이동`)
            controlInput.value = ''; // 다음 입력할때 사용자가 지우지 않아도 빈문자열로 초기값 
        }else{
            console.log('오답')
            controlInput.value = '';
        }
        /* if(controlInput.value === 'left'){console.log('왼쪽 이동')}
        else if(controlInput.value === 'right'){console.log('오른쪽 이동')}
        else if(controlInput.value === 'top'){console.log('위로 이동')}
        else if(controlInput.value === 'bottom'){console.log('아래로 이동')}
        else {console.log('오답')} -> 유지보수가 좋지않음: 일일히 controlInput를 작성해야하기때문 */
    }
})

// 학점에 따라 A~F 등급 나오는 프로그래밍
// 100~90 A
// 89~80 B
// 79~70 C
// 69~60 D
// 59 이하 F
const score = 90 //prompt('학점을 입력하세요')
// 논리연산 0~100 범위값 조건식
// 추가 조건식 100~90 A
if(score >= 0 && score <= 100){// 두가지 조건이 맞아야하기때문에 &&(논리연산자)사용
    if(score >=90 ){console.log('A')}
    else if(score >=80){console.log('B')}
    else if(score >=70){console.log('C')}
    else if(score >=60){console.log('D')}
    else{console.log('F')}
}else{
    console.log('0~100 값만 인력해주세요')
}

//switch ~ case
//쇼핑몰 검색창에 사용자가 입력한 값 조건확인
//딸기 -> 1000원
//사과 -> 2000원
//딸기, 사과가 아닐 경우 판매상품이 아닙니다.

const fruit = '과일' //prompt('검색어를 입력하세요') //input으로 생각하면서 작성하기
console.log(fruit);
switch(fruit){
    case '딸기':
        console.log('1000원')// 검사하고 싶은 변수의 값을 확인하는 것
        break;//강제종료
    case '사과':
        console.log('2000원'); break;
    default:console.log('판매상품이 아닙니다.') // 모든 값이 아닐 경우
}
//if 처럼 시작과 끝을 나누는 값이 없기때문에 결과값이 다 나오기때문에 break -> 강제종료를 만들어서 값이 다 나오지않게 함
//if(fruit == '딸기'){console.log('1000원')}
//else if(fruit == '사과'){console.log('2000원')}

//전화 단축키
const phoneNumber = 1 //prompt('단축키 입력')
// 1 누르면 엄마
// 2 누르면 아빠
// 다른 숫자는 "해당 단축키가 없습니다."
console.log(phoneNumber);
switch(phoneNumber){
    case '1':
    console.log('엄마')
    break;
    case '2':
    console.log('아빠')
    break;
    default:console.log("해당 단축키가 없습니다.")
}

//쇼핑몰 수량+가격 알고리즘
// - 버튼 클릭 시 수량감소+가격감소(1일때 - 누르면 경고)
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const numberInput = document.querySelector('#num');
const priceP = document.querySelector('p.price');
console.log(minusBtn, plusBtn, numberInput, priceP);

let numVal = 1; //초기값 
let originalPrice = 900;
let stock = 10; //재고
console.log(numVal);

minusBtn.addEventListener('click', ()=>{//-클릭시 실행함수는
    //삼항조건연산자(ES6)
    //numVal == 1 ? console.log('최소 구매 수량') : numVal--;
    //numVal 값이 1과 같으면 오류출력, 1이 아니면 감소
    numVal > 1 ? numVal-- : console.log('최소 구매 수량을 확인해주세요.')
    numFunc()
})

plusBtn.addEventListener('click', ()=>{
    numVal < stock ?  numVal++ : console.log('최대 구매 수량');
    numFunc()
})

function numFunc(){
    numberInput.value = numVal; //초기값 대입
    priceP.textContent = `${(numVal*originalPrice).toLocaleString('kr-ko')}원` //초기값(가격)
}