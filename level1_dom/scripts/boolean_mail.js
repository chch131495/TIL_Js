//boolean_mail.js
//console.log(isLogin);
window.addEventListener('load',()=>{
    let loginStatus = localStorage.getItem('isLogin2') //true
    console.log(loginStatus == 'true') // null이 나오는 이유는 셋팅한 값이 없기때문에 나오는 것.
    //console.log(typeof(loginStatus))
    
    //DOM 변수
    const mailLogin = document.querySelector('#login')
    const mailLogout = document.querySelector('#logout')
    
    if(loginStatus == 'true'){
        console.log('로그인 화면')
        mailLogin.style.display = 'block' //디자인의 형태에 따라 원래 디자인 형태를 적어주는 것 (ex,'flex'일 경우에는 'flex'로 작성해줘야한다.)
        mailLogout.style.display = 'none'
    }else{
        console.log('로그아웃 화면')
    }
})