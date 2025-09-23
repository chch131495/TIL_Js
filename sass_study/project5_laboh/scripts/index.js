// 1. 상품이미지에 마우스이벤트 시 큰상품 이미지 변경
// 1-1. 상품 이미지가 변경 될때, 버튼 부분도 활성화/비활성화 진행
// 2. 최소 수량 1개 미만 클릭시 '최소 수량 선택하세요' 경고 발생
// 3. 최대 수량 30개 이상 클릭시 '최대 구매수량은 30개입니다.' 
// 4. 😀장바구니 클릭시 비회원도 장바구니 페이지로 넘어감
// 5. 😀구매하기 클릭시 비회원 구매 페이지로 넘어감
// 6. 😀선물 클릭시 비회원은 선물할 수 없음 -> 로그인 페이지 출력, 회원은 선물 페이지로 출력

//1.상품이미지에 마우스이벤트 시 큰상품 이미지 변경
// 변수
const small = document.querySelectorAll('.small a') //작은 이미지
const sliderImg = document.querySelector('.slider_img p') //큰 이미지
console.log(small, sliderImg);
console.log(small[1]);
/* img src를 가지고 올려면 똑같이 img태그를 사용해야지 불러올수 있고 backgroundimg를 사용하면 따로 style에서 backgroundimg를 사용해서 불러와야한다. */
//1-1 작은 이미지 클릭시 큰 상품 이미지 변경
small[0].addEventListener('click',()=>{
    sliderImg.style.backgroundImage = 'url(./images/img-small001.jpg)'
    sliderBtnFunc()
})
small[1].addEventListener('click',()=>{
    sliderImg.style.backgroundImage = 'url(./images/imgi_10_8576716a08d743c65d048d261ae1e159.jpeg)'
    sliderBtnFunc()
})
small[2].addEventListener('click',()=>{
    sliderImg.style.backgroundImage = 'url(./images/img-small003.jpg)'
    sliderBtnFunc()
})
small[3].addEventListener('click',()=>{
    sliderImg.style.backgroundImage = 'url(./images/img-small004.jpg)'
    sliderBtnFunc()
})


// 1-1. 버튼 부분 활성화/비활성화 진행
const sliderBtn = document.querySelectorAll('.sliderbtn .slider') //버튼
console.log(sliderBtn, sliderImg)//인덱스 사용
/* for(let i=0; i<sliderBtn.length; i++){
    sliderBtn[i].addEventListener('click',()=>{
        for(let j=0; j<sliderBtn.length; j++){
            sliderBtn[j].style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/128/12604/12604094.png')" // 버튼 클릭 시 비 활성화
        }
        sliderBtn[i].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/128/17494/17494521.png)" // 버튼 클릭 시 활성화
        if(i === 0){sliderBtn[i] += sliderImg.style.backgroundImage = 'url(./images/img-small001.jpg)'}
        if(i === 1){sliderBtn[i] += sliderImg.style.backgroundImage = 'url(./images/imgi_10_8576716a08d743c65d048d261ae1e159.jpeg)'}
        if(i === 2){sliderBtn[i] += sliderImg.style.backgroundImage = 'url(./images/img-small003.jpg)'}
        if(i === 3){sliderBtn[i] += sliderImg.style.backgroundImage = 'url(./images/img-small004.jpg)'}
    })
} */
//버튼 클릭시 이미지 변경 -> 함수로 적용할려고하는데 적용이 되지않음
function sliderBtnFunc(){
    for(let i of sliderBtn){
        i.addEventListener('click',()=>{
            for(let j of sliderBtn){
                j.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/128/12604/12604094.png')" // 버튼 클릭 시 비 활성화
            }
            i.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/128/17494/17494521.png')" // 버튼 클릭 시 활성화
        })
    }
}// 버튼 클릭시 이미지 변경되는 것은 만들기