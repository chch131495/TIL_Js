//1. input 할일 입력 후 '추가하기' 버튼 클릭하면 ul의 마지막 자식 위치 li 할일 추가하기
const listInpuut = document.querySelector('#list') //input
const listAddBtn = document.querySelector('#list_add') //추가하기
const listWrapUl = document.querySelector('#list_wrap') //ul
console.log(listInpuut, listAddBtn, listWrapUl)

listAddBtn.addEventListener('click',()=>{
    // 입력안하면 '할일을 입력하고 추가하세요' 메세지 출력(삼항조건)
    listInpuut.value == '' ? alert('할일을 입력하세요') : toDoFunc(); //함수를 만들어서 호출
})

listInpuut.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){listInpuut.value == '' ? alert('할일을 입력하세요') : toDoFunc();}
    //e.key 조건식-> 행위 (enter, click 등)
})

function toDoFunc(){
    console.log(listInpuut.value) //값 확인
    console.log(listWrapUl) //대입할 대상 확인
    //대입연산자만 사용하면 앞에 입력한 값이 지워짐 -> 복합연산자를 사용해야해
    listWrapUl.innerHTML += `<li><span>${listInpuut.value}</span><button type="button" class="close">x</button></li>` 
    listInpuut.value = ''; // Enter를 누르면 빈문자열로 초기화
    const toDoClose = document.querySelectorAll('li .close');
    console.log(toDoClose)
    //부모 parentNode
    //삭제내장함수 remove()
    for(let i of toDoClose){
        i.addEventListener('click',()=>{
            i.parentNode.remove() //객체.속성(함수)
        })
    }
    return console.log('할일출력 테스트')
}

