const checkBtn = document.querySelector('#checkBtn');
let result = document.querySelector('#result');
let userHeight = document.querySelector('.input_hg');
let userWeight = document.querySelector('.input_wg');
console.log(checkBtn, result, userHeight, userWeight);
userHeight.value = '';
userWeight.value = '';
result.style.opacity = 0;
checkBtn.addEventListener('click',caluFunc)
function caluFunc(e){
    e.preventDefault();
    const height = Number(userHeight.value);
    const weight = Number(userWeight.value);
    const idealWeight = (height - 100) * 0.9;
    const overWeight = weight - idealWeight;
    result.textContent = `적정체중은 ${idealWeight.toFixed(1)}kg, ${overWeight.toFixed(1)}kg 초과되셨습니다.`;
    result.style.transition = 'opacity 0.8s';
    result.style.opacity = 1;
}