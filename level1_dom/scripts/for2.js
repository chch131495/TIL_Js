// 중첩 for
// ul*2>li*5
// <ul></ul><li></li> (x)
// <ul><li></li></ul> (o) -> ul,li가 2개 이상 반복 되기때문에 중첩
let ul = ''; //빈문자열
let li = '';
for(let i=0; i<2; i++){
    //ul = '<ul>'
    li = ''; // 초기화를 시키지않으면 li이가 계속 반복되기때문에 5번 반복한 다음에 for i의 반복할때 초기화를 하면 li가 5번 반복하고 0으로 돌아감
    for(let j=0; j<5; j++){
        li += `<li>menu${j+1}</li>`
    }
    ul += `<ul>${li}</ul>` //대입연산자를 사용하면 처음 값이 지워지기때문에 복합연산자를 사용.
}
console.log(ul)
console.log('----------------------------------------------------------')
// 고객 리뷰 초기 상태
// 상품문의 클릭 시 문의내용 보이기
// 고객리뷰 클릭 시 리뷰내용 보이기
const tabTitle = document.querySelectorAll('.title a')
const tabContent = document.querySelectorAll('.contents .con')
console.log(tabTitle, tabContent) // 콘솔로 확인

tabContent[1].style.display = 'none' //초기값으로 문의 내용 안보이게 설정

/* tabTitle[0].addEventListener('click',()=>{ //고객리뷰 클릭시 리뷰내용 보이게
    contentDisplayHide() //함수를 먼저 none으로 지정(함수호출)
    tabContent[0].style.display = 'block'
})
tabTitle[1].addEventListener('click',()=>{//상품문의 클릭시 상품내용 보이게
    contentDisplayHide()
    tabContent[1].style.display = 'block'
}) */

/* for(let i of tabTitle){//객체정보만 가지고 있어서 인덱스 연결이 불가능
    i.addEventListener('click',()=>{//클릭하는게 반복되기때문에 for를 작성
        contentDisplayHide() //모든 컨텐츠를 숨김
        console.log(i) // 상품, 문의를 클릭 시 콘솔에 작성되는지 확인
        //tabContent[0].style.display = 'block' -> i,0,1를 작성하면 안에 a태그이기때문에 성립되지않음 -> 인덱스 연결이 불가능
    })
} */
//객체 정보와 서로 다른 객체를 연결한 인덱스 정보 (forEach)
//매개변수 순서대로 객체 -> 인덱스 -> 배열정보(이름 설정은 자유)
tabTitle.forEach(function(obj, ind, arr){
    console.log(obj, ind, arr.length)//모든 정보 클릭
    obj.addEventListener('click',()=>{
        contentDisplayHide()
        tabTitleDesignReset()
        console.log(ind) //클릭한 인덱스 정보만 출력
        tabContent[ind].style.display = 'block';//클릭한 것과 일치했을때 'block' -> 인덱스가 일치해야지만 성립
        obj.style.backgroundColor = 'yellow'; // 초기 디자인이 있어야함 -> 없으면 데이터가 계속 쌓이게 됨
        obj.style.height = '300px'
        obj.style.border = '1px solid #000';
        tabContent[ind].style.fontSize = '1.25rem';
    })
})

function contentDisplayHide(){
    //반복 횟수, 반복 내용
    /* tabContent[0].style.display = 'none' */
    /* tabContent[1].style.display = 'none' */
    for(let i of tabContent) i.style.display = 'none'
}

function tabTitleDesignReset(){
    for(let i of tabTitle) {
        i.style.background = 'none'
        //추가 reset 디자인 속성들 작성
        i.style.fontSize = 'none'
        i.style.height = 'max-content'
        i.style.borderColor = 'red'
    }
}

