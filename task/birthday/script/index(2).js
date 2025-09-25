//JavaScript 버전
// 초기 세팅 : 결과 숨기기, 공유버튼 숨기기
//'만나기' 버튼 클릭 시 입력한 년/월/일 중 '월' 인식해서 해당 값과 동일한 탄생화 배열 출력하기
const resultFlower =document.querySelector('.result_flower')
const shareBtn =document.querySelector('#share_btn')
const resultBtn = document.querySelector('#result_btn')
const year = document.querySelector('#year')
const month = document.querySelector('#month')
const day = document.querySelector('#day')
const flowerImg = document.querySelector('.flower img')

// 초기 세팅 : 결과 숨기기, 공유버튼 숨기기
resultFlower.style.display = 'none'
shareBtn.style.display = 'none'

//'만나기' 버튼 클릭 시 입력한 년/월/일 중 '월' 인식해서 해당 값과 동일한 탄생화 배열 출력하기
resultBtn.addEventListener('click',()=>{
    //조건 ? 참 : 거짓; ->삼항조건
    const ymd = year.value && month.value && day.value //년,월,일 변수
    ymd ? flowerFunc() : alert('생년월일을 모두 입력해주세요'); // ymd를 입력하지 않고 버튼을 누르면 출력
    function flowerFunc(){
        if(month.value > 0 && month.value < 13){// 1~12(조건) 범위값 확인
            const userMonth = month.value; //사용자 입력값 변수 저장
            const resultFlowerName = birthday_flower[userMonth-1].flower //$이 없어져서 이름이 중복때문에 name
            const resultFlowerLang = birthday_flower[userMonth-1].content
            const resultFlowerSrc = birthday_flower[userMonth-1].src
            resultFlower.style.display = 'block'
            shareBtn.style.display = 'block'
            resultFlower.children[0].children[0].textContent = resultFlowerName //'em', 꽃 이름
            resultFlower.children[1].children[0].textContent = resultFlowerLang//'span', 꽃말
            flowerImg.src = resultFlowerSrc// 결과의 이미지
            resultBtn.style.display = 'none' // 결과버튼 숨기기
        }else{
            alert('1월~12월 중 입력하세요.') // if의 조건이 아니면
        }
    }
})