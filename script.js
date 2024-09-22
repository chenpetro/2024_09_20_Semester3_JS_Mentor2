

const counter = document.getElementById('counter')
const clickBtn = document.querySelector('.click')
let count = 0
clickBtn.addEventListener('click',function(){
    count++
    if(count == 1){
        clickBtn.classList.add('activeBtn')
    }
    counter.textContent=count
})