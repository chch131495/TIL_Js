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
})
small[1].addEventListener('click',()=>{
    sliderImg.style.backgroundImage = 'url(./images/imgi_10_8576716a08d743c65d048d261ae1e159.jpeg)'
})
small[2].addEventListener('click',()=>{
    sliderImg.style.backgroundImage = 'url(./images/img-small003.jpg)'
})
small[3].addEventListener('click',()=>{
    sliderImg.style.backgroundImage = 'url(./images/img-small004.jpg)'
})

// 1-1. 상품 이미지가 변경 될때, 버튼 부분도 활성화/비활성화 진행
sliderBtn = document.querySelectorAll('.slider');
console.log(sliderBtn)
