// 1일차 복습 (가계부앱 변수생성과 출력)
// 숫자데이터 연습
// 커피 1500원
// 도시락 6000원
//대중교통 3000원
//결과) 오늘 총 지출액은 000원입니다.
//let coffee = 1500;
//let lunch = 6000;
//let subway = 3000;
//let total = coffee + lunch + subway;//최종 출력을 단순하게 하기 위해서
//console.log(`오늘 총 지출액은 ${total}원입니다`);
//console.log(`오늘 총 지출액은 ${total.toLocaleString('ko-kr')}원입니다`);
//console.log(`오늘 총 지출액은 ${(coffee + lunch + subway).toLocaleString('ko-kr')}원입니다`);
//숫자에 3자리 간격 콤마(,) 표시하기
//10000 -> 숫자로 처리
//10,000 -> 문자로 처리(최종 결과 처리)
// 위 기능 함수 : 객체.함수(); 변환객체.toLocaleString('ko-kr');->함수는 정해진 명령어이기때문에 ''사용을 하지 않음.
// 객체.객체.객체.함수는 적용하지 못함-> 객체는 하나로만 있어야 적용된다 -> (객체.객체.객체).함수();

// 문자데이터 연습
// 리뷰 작성 기준 50자 이상
// 콘솔 출력) 현재 작성 리뷰 글자 수는 000자 입니다.
// 객체.함수()
// 객체.속성;
// 글자 수 체크 속성 length
// let review = prompt('리뷰를 작성하세요');//prompt는 결과를 넣는것//ㅋㅋ(결과값)
// let review_length = review.length;//2
// console.log(review, typeof(review)); -> 태스트체크용//ㅋㅋ strring
// console.log(review_length);
// console.log(`현재 작성 리뷰 글자 수는 ${review_length}자 입니다`);

// 오브젝트형 데이터 - 객체
// 변수생성키워드 변수명 = {키:값, 키:값, 키:값...}키 ->속성
let rectagle = {
    width:300,
    height:200,
    x:0,
    y:-100,
}
console.log(rectagle.height + 'px'); //200px -> + 는 연결
console.log(rectagle.height, 'px'); //200px
console.log(`${rectagle.height}px`); //200px
// 300px, 200px
console.log(`${rectagle.width}px, ${rectagle.height}px`);

// 도형의 정보
let rectangle = {
    width:300,
    height:200,
    x:0,
    y:-100,
};
// 회원 정보
let user_info = {
    name:'가을',
    age:3,
    gender:'female',
    area:'서울'
};
// 쇼핑몰 상품 정보
let product = {
    name:'마스크',
    price:1000,
    quantity:999,
    color:'black'
};// 데이터 수정은 변수기반으로 이루어져야한다.
// 영화관 좌석 지정
let movie_theater = {
    name:'VIP',
    position:'F1',
    price:14500
};

// 상품명 : 마스크(white)
// 상품가 : 1,000원
// 수량 : 999개
console.log(`상품명 : ${product.name}(${product.color})`);
console.log(`상품가 : ${product.price.toLocaleString('ko-kr')}원`);
console.log(`수량 : ${product.quantity}개`);

// 오브젝트 데이터 타입 2. 배열
// 변수생성키워드 변수명 = [배열값, 값2, 값3]
// 변수생성키워드 변수명 = new Array(배열값, 값2, 값3) 정해진 키워드 때문에 띄어쓰기를 해야함 -> 변수였다면 붙여서 사용해야함.
// 변수생성키워드 변수명 = new Array(자리값)
/* const yoil = [`월`, `화`, `수`, `목`, `금`, `토`, `일`];
console.log(yoil);
console.log(`오늘은 ${yoil[2]}요일`)// 오늘은 수요일

const en = new Array(`a`, `b`, `c`, `d`, `e`, `f`)
console.log(en, en[0], en.length);

const year = new Array(4);
console.log(year);
year[0] = 2025
year[1] = 2024
year[2] = 2023
year[3] = 2022
console.log(year); */

// Q1. 좋아하는 색상 6개를 배열로 저장하고 그 중 가장 좋아하는 색상 2개를 콘솔에 출력하기
const color = [`빨강색`, `핑크색`, `연보라색`, `하늘색`, `파랑색`, `주황색`]
// console.log(`가장 좋아하는 색상은 ${color[2]},${color[4]}`);
console.log(color[2], color[4]);

// Q2. 좋아하는 과일을 5개 배열로 저장하고 역순으로 모두 출력하기
// const fruit = [`사과`, `자두`, `포도`, `복숭아`, `바나나`]
const fruit = new Array(`사과`, `자두`, `포도`, `복숭아`, `바나나`);
console.log(fruit[4]);
console.log(fruit[3]);
console.log(fruit[2]);
console.log(fruit[1]);
console.log(fruit[0]);
// Q3. 요일-날씨정보 출력
// 월 - 맑음
// 화 - 비
// 수 - 흐림
// 목 - 맑음
// 금 - 맑음
// 토 - 비
// 일 - 흐림
const yoil = [`월`, `화`, `수`, `목`, `금`, `토`, `일`];
const weather = [`맑음`, `비`, `흐림`];
//풀이
console.log(`${yoil[0]}-${weather[0]}`);
console.log(`${yoil[1]}-${weather[1]}`);
console.log(`${yoil[2]}-${weather[2]}`);
console.log(`${yoil[3]}-${weather[0]}`);
console.log(`${yoil[4]}-${weather[0]}`);
console.log(`${yoil[5]}-${weather[1]}`);
console.log(`${yoil[6]}-${weather[2]}`);
/* console.log(yoil[0], weather[0]);
console.log(yoil[1], weather[1]);
console.log(yoil[2], weather[2]);
console.log(yoil[3], weather[0]);
console.log(yoil[4], weather[0]);
console.log(yoil[5], weather[1]);
console.log(yoil[6], weather[2]); 방식은 여러개 */

const megabox = new Array(8) //빈 좌석 준비
megabox[0] = 'A1' 
megabox[1] = 'A2' 
console.log(`현재 예매 좌석 : ${megabox[0]}${megabox[1]}`);
megabox[0] = ''
megabox[1] = null
console.log(`현재 예매 좌석 : ${megabox[0]}${megabox[1]}`);

// cgv 좌석 예매와 취소
const cgv = [] // 빈 배열 준비
// 좌석 A1 선택
cgv.push(`A1`);
console.log(cgv);
cgv.push(`A2`);
console.log(cgv);
cgv.pop(``); // 배열의 끝 위치의 값 1개가 제거가 되기때문에 따로 `A2`를 작성하지 않아도 된다.
console.log(cgv);
cgv.unshift(`A3`);
console.log(cgv);
cgv.shift(``);
console.log(cgv);
cgv.push(`B1`, `B2`);
console.log(cgv);
// length 함수 -> 개수를 나타내는 함수
console.log(cgv.length >= 8); 
// 선택 좌석이 8개일때 좌석 추가 금지 -> >=
const price = 11000
// 출력결과예시
// 선택 좌석 수 : 00
// 총 결제 금액 : 000원
let cgv_length = cgv.length;
let cgv_total_price = (cgv_length * price).toLocaleString(`ko-kr`); 
//변수명을 먼저 작성해주기!!!
console.log(`선택 좌석 수 : ${cgv_length}`);
console.log(`총 결제 금액 : ${cgv_total_price}원`);

console.log('---------------------------------------------------------');

// 연산자 연습
// 1. 산술연산자
let num1 = 5;
let num2 = 2;
let result = num1 + num2
console.log(result);
result = num1 - num2
console.log(result);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);
// Q. 이항 연산자 활용 두 수를 사용자에게 입력받고 입력받은 값 활용 더하기만 되는 계산기 만들기
const firstNum = 2;
const lastNum =  2;
console.log(firstNum, lastNum); //출력 테스트(1 2)
console.log(firstNum + lastNum); //연산 테스트(1+2 = 12 오류)
console.log(typeof(firstNum), typeof(lastNum));
// 오류찾기, 데이터타입 확인 typeof() -> string string
// 문자 + 문자 = 문자, 1+2 = 12
// 오류해결 -> 문자를 숫자로 변환, 변환하는 함수가 ? Number()
console.log(Number(firstNum), Number(lastNum)); 
// 일회성 출력으로 문제해결안됨-> 원인은 prompt 가 문자열로 바꾸기 때문 -> prompt를 Number로 감싸기
console.log(`${firstNum}*${lastNum}=${firstNum * lastNum}`); // 최종 1+1 = 2(결과값)
//결과보다는 과정(중간기록)!!

// 증감연산자
console.log(`-----------------`);
let x = 5;
let y = 0;
console.log(x,y); // 초기값-> 5,0
y = x++; // x의 값을 y값에 대입을 하고 난 다음에 x의 값을 증가시킨다는 뜻
console.log(x,y); // 결과값 -> 6,5
x = ++y; // y의 값을 증가시킨 다음에 x에 대입한다는 뜻
console.log(x,y); // 결과값 -> 6,6
x++; 
--y;
console.log(x, y); // 결과값 -> 7,5

let a = 10
let b = 20
let c = 30
let d = 40
console.log(a, b, c, d);
//a=10 , b=20, c=30, d=40
a++
b--
c++
d--
console.log(a, b, c, d);
//a=11, b=19, c=31, d=39
a = ++b
b = a++
console.log(a, b, c, d);
//a= 21, b=20, c=31, d=39
c = a+b;
d = ++c;
console.log(a, b, c, d);
//a= 21, b=20, c=42, d=42
a = ++c + 10
b = --d + 1
console.log(a, b, c, d);
//a=53, b=42, c=43, d=41 // c의 값이 나온 이유는 앞에 ++c를 했기때문에 43, d의 값도 앞에 --d가 있기때문에 41
console.log('------------------------------------')
// 연산자 3. 복합대입연산자★
let number = 10;
//number = number + 5;
number += 5; //복합대입(위에 number를 반복적으로 사용한걸 효율적이게 단축한것.)
console.log(number); // 결과값 -> 15
number -= 5;
console.log(number); // 10
number *= 10;
console.log(number); // 100
number /= 2;
console.log(number); // 50
number %= 2;
console.log(number); // 0

//var number = 1;
//number += 1;
//number++; -> 상품 수량이나 인원 수 등에는 증감연산자를 사용함

//number += 2; -> 조금 더 복잡한 연산을 사용할때에는 복합대입연산자
//number++;
//number++;
