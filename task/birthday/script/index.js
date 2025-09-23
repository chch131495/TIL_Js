//index.js
const input = document.querySelectorAll('label')
const birthdayFlower = [
{
    month:1,
    flower:'수선화',
    content:'자기애, 자존심, 외로움',
},{
    month:2,
    flower:'제비꽃',
    content:'겸손, 양보',
    },{
    month:3,
    flower:'수선화',
    content:'자기애, 자존심, 외로움',
},{
    month:4,
    flower:'스위트피',
    content:'추억, 즐거움'
},{
    month:5,
    flower:'은방울꽃',
    content:'희망, 섬세함'
},{
    month:6,
    flower:'백합',
    content:'순결'
},{
    month:7,
    flower:'미나리아재비',
    content:'아름다움, 인격'
},{
    month:8,
    flower:'글라디올러스',
    content:'비밀, 상상, 견고함'
},{
    month:9,
    flower:'물망초',
    content:'진실한 사랑'
},{
month:10,
    flower:'금잔화',
    content:'실망, 비애'
},{
    month:11,
    flower:'국화',
    content:'성실, 진실'
},{
    month:12,
    flower:'포인세티아',
    content:'축하, 감사'
}
]
console.log(birthdayFlower, input);
//사용자가 년/월/일을 입력 → 버튼 클릭 → 해당 월의 탄생화 이미지 + 꽃말 출력
const showBtn = document.querySelector('.submit');
const monthInput = document.getElementById('month');
const flowerImg = document.querySelector('.flower-img');
const resultSpan = document.querySelector('.result span');

showBtn.addEventListener('click', () => {
    const month = parseInt(monthInput.value); // 월 숫자 가져오기
    const flowerData = birthdayFlower.find(f => f.month === month);
    if(flowerData) {
    flowerName.textContent = flowerData.flower;
    flowerMeaning.textContent = flowerData.content;
    flowerImg.src = `./images/month001.jpg`; 
    flowerImg.alt = flowerData.flower;
    } else {
    flowerName.textContent = '잘못된 입력';
    flowerMeaning.textContent = '';
    flowerImg.src = '';
    }
});