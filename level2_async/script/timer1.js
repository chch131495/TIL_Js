//timer1.js
// setInterval(콜백함수, 시간)
/* let num1 = 1; //1을 가진 변수를 먼저 만듦
const timer1 = setInterval(function(){ //익명함수로 변수로 만듦
    console.log('timer test' +num1) // 콘솔에 timer test1로 찍힘
    num1++//증감 연산자를 사용해서 하나씩 올라가게 설정 (timer test1),하나씩 증가
    //조건문 작성 (증가한것이 5보다 크면 1로 돌아가 출력)
    if(num1 > 5) num1 = 1 
}, 1000) //1초동안 계속 실행되는 것 */

//0~6 반복타이머 (123456, 0123456, 0123456)
//변수 만들기
/* let num = 0;
const timer = setInterval(function(){
    num++ //증가
    if(num > 6 ) num = 0 // 6보다 커지면 0으로 돌아가는것(조건)
    console.log('timer' +num)  // 출력
},500) */

//3~0 반복타이 (3210, 3210, 3210)
/* let num1 = 3;
const timer = setInterval(function(){
    console.log('timer'+num1) //출력
    num1-- //감소
    if(num1 <0 ) num1 = 3 //0보다 작으면 3으로 만들어가는 조건
},500) */

//이미지 슬라이드 타이머 활용
const gentleSlide = document.querySelectorAll('.gentel_slide_container1 .slide')
const gentleSlideCurrentNum = document.querySelector('.page_number .current')
const gentleSlideTotalNum =document.querySelector('.page_number .total') //슬라이드 모든 번호
console.log(gentleSlide, gentleSlideCurrentNum, gentleSlideTotalNum)
let gentleNum = 0; //초기값

//슬라이드 총 번호 표시
gentleSlideTotalNum.textContent = gentleSlide.length
gentleSlideCurrentNum.textContent = gentleNum+1 //초기값

//012345 : 현재 존재하는 슬라이드 인덱스
//12345 012345 012345 ...(반복) : 진행해야하는 인덱스 순서
/* let gentleNum = 0; //초기값
let gentleTimer = setInterval(function(){
    gentleNum++
    if(gentleNum >= gentleSlide.length) gentleNum = 0
    console.log(gentleNum)
    for(let i of gentleSlide) i.style.display = 'none' //모두 숨기기
    gentleSlide[gentleNum].style.display = 'block' //해당 슬라이드 보이기
},500) */

//이미지 슬라이드(역순)
//012345 :현재 존재하는 슬라이드 인덱스
//43210 543210 543210(반복) : 진행해야하는 인덱스 순서
/* const gentleSlide2 = document.querySelectorAll('.gentel_slide_container2 .slide')
let gentleNum2 = gentleSlide2.length - 1; //초기값
console.log('초기값 : ', gentleNum2)
let gentleTimer2 = setInterval(function(){
    gentleNum2--
    if(gentleNum2 <0 ) gentleNum2 = gentleSlide2.length - 1
    console.log(gentleNum2)
    for(let i of gentleSlide2) i.style.display = 'none'
    gentleSlide2[gentleNum2].style.display = 'block'
},500) */

// opacity + visiblity 서서히 나타나는 슬라이드 애니메이션
//012345 : 현재 존재하는 슬라이드 인덱스
//12345 012345 012345 ...(반복) : 진행해야하는 인덱스 순서
//gentleSlide 모든 슬라이드에 속성 변경 시 애니메이션 기능 적용 transition
for(let i of gentleSlide) i.style.transiton = 'opacity 0.5s' 


let gentleTimer = setInterval(function(){
    gentleNum++
    if(gentleNum >= gentleSlide.length) gentleNum = 0
    console.log(gentleNum)
    for(let i of gentleSlide) {
        i.style.visibility = 'hidden';
        i.style.opacity = '0';
    } //모두 숨기기
    gentleSlide[gentleNum].style.visibility = 'visible' //해당 슬라이드 보이기
    gentleSlide[gentleNum].style.opacity = '1' //해당 슬라이드 보이기
    //이미지가 변경 될때 숫자 변경
    gentleSlideCurrentNum.textContent = gentleNum +1
},3000)


