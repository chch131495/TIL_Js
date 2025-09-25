// index.js
// jquery ver
// 초기 세팅 : 결과 숨기기, 공유버튼 숨기기
const $resultFlower = $('.result_flower')
const $shareBtn = $('#share_btn')
console.log($resultFlower, $shareBtn);
console.log($shareBtn.length);
$resultFlower.hide();
$shareBtn.hide();
//'만나기' 버튼 클릭 시 입력한 년/월/일 중 '월' 인식해서 해당 값과 동일한 탄생화 배열 출력하기
const $resultBtn = $('#result_btn')
const $year = $('#year')
const $month = $('#month')
const $day = $('#day')
const $flowerImg = $('.flower img')

$resultBtn.click(function(){
    //조건 ? 참 : 거짓; ->삼항조건
    console.log(Boolean($year.val()))
    const ymd = $year.val() && $month.val() && $day.val() //년,월,일을 변수로 지정
    ymd ? flowerFunc() : alert('생년월일을 모두 입력해주세요')
    function flowerFunc(){
        const $userMonth = $month.val(); //사용자 입력값 변수로 지정
        const resultFlower = birthday_flower[$userMonth-1].flower //db.js에 있는 birthday_flower를 불러오고, 사용자가 입력한 값에 따라서 꽃이 출력
        const resultFlowerLang = birthday_flower[$userMonth-1].content //db.js에 있는 내용
        const resultFlowerSrc = birthday_flower[$userMonth-1].src //db.js에 있는 src
        $resultFlower.show() //결과 꽃 말 보이기
        $year.hide() //년 숨기기
        $month.hide() //월 숨기기
        $day.hide() //일 숨기기
        $shareBtn.show() //공유 버튼 보이기
        $resultBtn.hide() //결과 버튼 숨기기
        $resultFlower.find('em').text(resultFlower) 
        $resultFlower.find('span').text(resultFlowerLang)
        $flowerImg.attr('src',resultFlowerSrc)
    }
})