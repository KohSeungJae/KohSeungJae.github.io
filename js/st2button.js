const st2buttons = document.querySelectorAll("#stage2buts button");
const stage2img = document.querySelector("#stage2-img");
const stage2Text = document.querySelector("#stage2-text");

st2buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        switch(button.innerText){
            case '1': 
                stage2img.src = `img/proj1img/st2-1.png`; 
                stage2Text.innerHTML =
                `
                <p>1. 새로운 유닛 : 빌런</p>
                <br>
                <p>스테이지2에서는 새로운 유닛인 빌런이 존재합니다.</p>
                <p>빌런의 초기위치는 시민의 바로 뒤이며, 시민이 이동하면 함께</p>
                <p>움직입니다.</p>
                `
                break;
            case '2':
                stage2img.src = `img/proj1img/st2-2.png`; 
                stage2Text.innerHTML =
                `
                <p>2. 빌런의 행동</p>
                <br>
                <p>빌런의 행동으로는 트롤링이 있습니다. 빌런은 행동 페이즈에서</p>
                <p>30%확률로 트롤링이 가능합니다. 트롤링이 발생하면, 빌런은 시민</p>
                <p>위치를 뒤바꿉니다.</p>  
                `
                break;
        }
    })
})