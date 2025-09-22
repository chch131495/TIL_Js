// index. js
// 작업 HTML 동적인 요소가 무엇이 있는지? 알고리즘 계획
// 1. 변수, 2.초기값 설정 3. 이벤트, 함수

// 동적 요소 계획하기
// 1. 상품이미지에 마우스이벤트 시 큰상품 이미지 변경
// 2. 😊저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행
// 3. 리뷰 클릭 시 스크롤 이동
// 4. 가격 정보 (i) 클릭 시 정보 팝업 출력/숨기기
// 5. 주문 목록 초기 숨기기
// 6. 사이즈select 초기 비활성화(색상 선택 시 활성화)
// 7. 색상 -> 사이즈 모두 선택 시 주문목록 출력(선택한 값이 출력, 주문금액 변경)
// 8. 주문목록 'x' 클릭 주문목록 삭제, 주문금액 초기화
// 9. 주문목록 + 클릭 시 재고수량까지 주문수량+주문금액 표시
// 10. 주문목록 - 클릭 시 주문수량+주문금액 감소(수량이1 이라면 경고창 출력)
// 11. (상품 미선택 시) 장바구니, 바로구매 클릭 시 '상품선택하세요' 경고창 출력
// 12.😊(상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동
//-----------------------------------------------------------------------------
// 1. 상품이미지에 마우스이벤트 시 큰상품 이미지 변경
// 변수 -> 초기값 -> 이벤트, 함수
const thumnailA = document.querySelectorAll('.thumnail a');
const thumnailOverView = document.querySelector('.overview img');
console.log(thumnailA, thumnailOverView); //a*2->형제이기때문에, img->외동이기때문에

//초기값(첫번째 썸네일a가 보이고 있단 뜻으로 테두리가 있음)
thumnailA[0].style.border = '2px solid #0aa5ff'

//두번째 썸네일에 마우스 올리면 큰 이미지를 두번째 썸네일 이미지로 변경하기
// 콘솔 테스트 권장 1) 두번째 썸네일 이미지 경로 출력하기
console.log(thumnailA[1].children[0].src);/* <a><img src=""></a> */
// 콘솔 테스트 권장 2) 큰 이미지 경로 출력하기
console.log(thumnailOverView.src); //읽기만 하는 것 

//이미지 자연스러운 scale 변경을 위한 transition 애니메이션 설정(초기값)
thumnailA[0].children[0].style.transform = 'transfom 0.3s'
thumnailA[1].children[0].style.transform = 'transfom 0.3s'

//이벤트 함수 시작
thumnailA[0].addEventListener('mouseover', ()=>{//변경하기 위해서는 속성은 대입
    //테두리 활성화/비활성화
    thumnailA[1].style.border = '0' //첫번째 이미지를 클릭했을 때, 두번째 이미지 -> '0'
    thumnailA[0].style.border = '2px solid #0aa5ff'
    //이미지 확대
    thumnailA[1].children[0].style.transform = 'scale(1)' /* 초기값 */
    thumnailA[0].children[0].style.transform = 'scale(1.2)'
    //이미지 큰걸로 변경
    thumnailOverView.src = thumnailA[0].children[0].src
});
thumnailA[1].addEventListener('mouseover', ()=>{//변경하기 위해서는 속성은 대입
    //테두리 활성화/비활성화
    thumnailA[0].style.border = '0' // 두번째 이미지를 클릭했을 때, 첫번째 이미지 -> '0'
    thumnailA[1].style.border = '2px solid #0aa5ff'
    //이미지 확대
    thumnailA[0].children[0].style.transform = 'scale(1)' /* 초기값 */
    thumnailA[1].children[0].style.transform = 'scale(1.2)'
    //이미지 큰걸로 변경
    thumnailOverView.src = thumnailA[1].children[0].src
});

// 로그인 정보 저장
// true == 로그인
// false == 로그아웃
localStorage.setItem('isLogin', 'false') //'속성', '값'

// 2. 😊저장하기 버튼 클릭 시 로그인 유무에 따라 다른결과 실행
const bookMark = document.querySelector('.scrap')
let isloginStatus = ''; //상태가져오기 변수 생성
console.log(bookMark);
//로그인 시 wish.html 이동
bookMark.addEventListener('click',()=>{
    isloginStatus = localStorage.getItem('isLogin')
    if(isloginStatus == 'true'){//위 변수 이용한 조건 분기
    location.href = './login.html'//로그인 시 wish.html 이동
    }else{//로그인 실패 시
        location.href = './wish.html'
    }
})
//로그아웃 시 login.html 이동

// 3. 리뷰 클릭 시 스크롤 이동
const reviewBtn = document.querySelectorAll('.review_link')
const reviewWrap = document.querySelector('.review_wrap')
const productInfoBtb = document.querySelector('.product_link')
const productWrap = document.querySelector('main > .product_info')
console.log(reviewBtn, reviewWrap, productInfoBtb, productWrap)
reviewBtn[0].addEventListener('click',(e)=>{
    e.preventDefault() //a의 새로고침 기본 기능 막기
    reviewBtn[0].addEventListener('click',(e)=>{e.preventDefault(); contentsPstFunc(reviewWrap)})
    reviewBtn[1].addEventListener('click',(e)=>{e.preventDefault(); contentsPstFunc(reviewWrap)})
    //스크롤 이동 window 함수 scrollTo(x,y) -> x,y는 얼마나 스크롤을 이동할것인지
    //productInfoBtn.addEventListener('click',(e)=>{e.preventDefault(); contentsPstFunc(productWrap)}) -> 오류
    function contentsPstFunc(target){
        return function(e){
            window.scrollTo(0, reviewWrap.offsetTop)
        }
    }
    console.log(reviewWrap.offsetTop) //리뷰위치의 위쪽 좌표값 확인
    window.scrollTo(0, reviewWrap.offsetTop) 
})
reviewBtn[1].addEventListener('click',(e)=>{
    e.preventDefault() //a의 새로고침 기본 기능 막기
    //스크롤 이동 window 함수 scrollTo(x,y) -> x,y는 얼마나 스크롤을 이동할것인지
    console.log(reviewWrap.offsetTop) //리뷰위치의 위쪽 좌표값 확인
    window.scrollTo(0, reviewWrap.offsetTop) 
})

// 4. 가격 정보 (i) 클릭 시 정보 팝업 출력/숨기기
const priceInfoBtn = document.querySelector('.price_info .info_icon')
const priceInfo = document.querySelector('.price_info .info')
console.log(priceInfoBtn, priceInfo);

//가격 정보 (i) 클릭 시 정보 팝업 출력
//초기상태 : 숨김(false)
//클릭 : 보이기(true) -> false ->true -> false ->true....

let infoBoolean = false; //초기 : 숨김(false) 
priceInfoBtn.addEventListener('click',()=>{
    //infoBoolean의 상태를 클릭할때마다 값(infoBoolean) 반전
    infoBoolean = (!infoBoolean)
    console.log(infoBoolean);
    //반전한 값을 원본 변수에 대입
    //priceInfo.style.display = 'block'
    if(infoBoolean){//() 조건이 참일때 자동실행
        priceInfo.style.display = 'block'
    }else{
        priceInfo.style.display = 'none'
    }
})

// 5. 주문 목록 초기 숨기기
// 6. 사이즈select 초기 비활성화(색상 선택 시 활성화)
const orderList = document.querySelector('.order_list')
const sizeSelect = document.querySelector('#size_select')
const colorSelect = document.querySelector('#color_select')
const orderPrice = document.querySelector('.order_price em')
console.log(orderList, size_select, colorSelect)
orderList.style.display = 'none';
sizeSelect.disabled = true;

// 6-2(색상 선택 시 활성화)
// 7. 색상 -> 사이즈 모두 선택 시 (선택한 인덱스가 0이 아닌 것) -> 콘솔 '선택완료'
// 주문목록 출력(선택한 값이 출력, 주문금액 변경)
colorSelect.addEventListener('change',()=>{
    console.log(colorSelect.selectedIndex)
    console.log(colorSelect.options[0])
    if(colorSelect.selectedIndex !=0){
        sizeSelect.disabled = false; //활성화
        //사이즈 이벤트 작성위치
        sizeSelect.addEventListener('change',()=>{
            //사이즈 옵션 인덱스 0이 아닌 것 선택 시 콘솔 선택완료
            if(sizeSelect.selectedIndex != 0){
                console.log('선택완료')
                orderList.style.display = 'block'
            }
            //선택한 옵션 안에 글자 가져오는 속성 text
            console.log(orderList.children[0].children[0])
            console.log(orderList.children[0].children[1])
            //선택 옵션(color) 출력하기
            let orderColor = colorSelect.options[colorSelect.selectedIndex].text;
            let orderSize = sizeSelect.options[sizeSelect.selectedIndex].text;
            //let orderColorReplace = orderColor.replace(찾는값, 변경값)
            //특정문구를 자바스크립트에서 찾는 것 -> 정규표현식(\) 시작과 끝 표시 / 검사내용/
            //괄호찾기 \찾는문자\(.* \)
            //괄호안에묶인 모든내용표시->.*
            let orderColorReplace = orderColor.replace(/\(.*\)/,'')
            let orderSizeReplace = orderSize.replace(/\(.*\)/,'')
            orderList.children[0].children[0].textContent = orderColorReplace;// 선택자가 뭘 선택하는지 알수없기때문에 숫자로 정의할수없음
            orderList.children[0].children[1].textContent = orderSizeReplace; // 사이즈 변경
            //선택 옵션 클릭 시 주문 금액 출력
            //주문금액 표시
            orderPrice.textContent = (productOptDB[0].price).toLocaleString('ko-kr');
        })
    }else{
        colorSelect.options[0]
        sizeSelect.disabled = true; //비활성화
    }
})
/* colorSelect.addEventListener('change',()=>{
    console.log(colorSelect.selectedIndex) //클릭하는 것의 인덱스가 나옴
    console.log(colorSelect.options[0])
    //sizeSelect.disabled = false; 
    //색상 select에서 첫번째 value=none에 해당하는 색상을 제외한 나머지 옵션이 선택되었을 때 사이즈 select 활성화하기
    if(colorSelect.selectedIndex !=0){//사용자가 선택한 options이 0이 아닌가
        sizeSelect.disabled = false; //활성화
    }else{//사용자가 선택한 opt 0일때 -> 비활성화
        colorSelect.options[0]
        sizeSelect.disabled = true; //비활성화
    }
}) */

// DB 불러오기 테스트
console.log(productOptDB[0].name) //몽셸 패딩 하네스 올인원([배열].속성)
console.log(productOptDB[0].color[0]+productOptDB[0].color[1])// 블랙, 라즈베리 (동시)
console.log(productOptDB[0].price)//가격만

// DB -> HTML 적용
// 1. JS에서 HTML 함수로 생성 -> createElement()
const colorOpt1 = document.createElement('option')
const colorOpt2 = document.createElement('option')
console.log(colorOpt1, colorOpt2)
// 2. 위에서 생성한 함수에 DB 데이터 대입 innerHTML, textContent
colorOpt1.textContent = `${productOptDB[0].color[0]}(${productOptDB[0].price.toLocaleString('ko-kr')}원)`// js안에 옵션에 블랙을 넣은것\
colorOpt2.textContent = `${productOptDB[0].color[1]}(${productOptDB[0].price.toLocaleString('ko-kr')}원)`
// 3. 위에서 만든 HTML을 실제 HTML의 마지막 자식 위치로 삽입
colorSelect.appendChild(colorOpt1)
colorSelect.appendChild(colorOpt2)
// 생성한 태그가 li면 ul,ol의 마지막 자식 위치로 삽입
// 생성한 태그가 option면 select의 마지막 자식 위치로 삽입

// 7. 색상 -> 사이즈 모두 선택 시 (선택한 인덱스가 0이 아닌 것)
// 주문목록 출력(선택한 값이 출력, 주문금액 변경)

// 8. 주문목록 'x' 클릭 주문목록 삭제, 주문금액 초기화
const closeBtn = document.querySelector('.order_list .close')
console.log(closeBtn)
/* closeBtn.addEventListener('click',()=>{
    closeBtn.parentNode.style.display = 'none'
}) -> 부모에게 적용 */
closeBtn.addEventListener('click', function(){
    this.parentNode.style.display = 'none'
    orderPrice.textContent = 0
    colorSelect.selectedIndex = colorSelect.options[0] //색상 값 초기화
    sizeSelect.selectedIndex = sizeSelect.options[0] //사이즈 값 초기화
})

// 9. 주문목록 + 클릭 시 재고수량까지 주문수량+주문금액 표시
// 필요목록 : +버튼, 재고수량(productOptDB[0].stock), 주문수량, 주문금액(orderPrice), 증가 숫자 데이터
const plusBtn = document.querySelector('#plus_btn')
const minusBtn = document.querySelector('#minus_btn')
const orderNum = document.querySelector('#order_num')
const orderListPrice = document.querySelector('.order_list .price')
console.log(plusBtn, minusBtn, orderNum, orderListPrice)
let num = 1; //초기주문수량

//초기값 : 주문수량칸에 값 1 적용하기
orderNum.value = num; // input -> valu, p -> textcontent

// +버튼 클릭 시(plusBtn)/ 주문수량이 1씩 증가하고 /주문수량(productOptDB[0].stock)에 따라 가격 증가하기
plusBtn.addEventListener('click',()=>{
    if(num < productOptDB[0].stock){
        num++;
        minusPlusFunc()
    }else{
        alert('최대 구매 수량입니다.')
    }
})// 증가 버튼 끝
//감소 버튼(minusBtn) 시작
// 10. 주문목록 - 클릭 시 주문수량+주문금액 감소(수량이1 이라면 경고창 출력)
minusBtn.addEventListener('click',()=>{
    if(num > 1){
        num--;
        minusPlusFunc()
    }else{
        alert('최소 구매 수량입니다.')
    }
})
function minusPlusFunc(){ //함수생성
        let total = num * productOptDB[0].price
        orderNum.value = num
        orderListPrice.textContent = total.toLocaleString('ko-kr')
        orderPrice.textContent = total.toLocaleString('ko-kr')
        return
}
// 11. (상품 미선택 시) 장바구니, 바로구매 클릭 시 '상품선택하세요' 경고창 출력
const cartBtn = document.querySelector('#cart_btn')
const buyBtn = document.querySelector('#buy_btn')
console.log(cartBtn, buyBtn)

cartBtn.addEventListener('click',()=>{
    cartBuyFunc('./cart.html')
})
buyBtn.addEventListener('click',()=>{
    cartBuyFunc('./buy.html')
})
function cartBuyFunc(url){ //함수
    if(colorSelect.selectedIndex == 0 || sizeSelect.selectedIndex == 0){ //상품 선택안한걸 확인하는 조건문
        alert('옵션 선택 후에 버튼을 클릭해 주세요.')
    }else{
        //장바구니 페이지 이동 (로그인 유(장바구니) 무(로그인)에 따라)
        isloginStatus = localStorage.getItem('islogin')
        if(isloginStatus == 'true'){
            location.href = url
        }else {location.href= './login.html'}
    }
}
// 12.😊(상품 선택 시) 장바구니, 바로구매 클릭 시 로그인 유무에 따라 다른 페이지로 이동