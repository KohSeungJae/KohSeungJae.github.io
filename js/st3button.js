const st3buttons = document.querySelectorAll("#stage3buts button");
const stage3img = document.querySelector("#stage3-img");
const stage3Text = document.querySelector("#stage3-text");

st3buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        switch(button.innerText){
            case '1': 
                stage3img.src = `img/proj1img/st3-1.png`; 
                stage3Text.innerHTML =
                `
                <p style="line-height: 35px;"> 1. 시민들
                <br>
                스테이지3 에서는 시민들이 여러명 존재합니다.
                각각의 시민들을 왼쪽에서부터 0, 1, 2라는 번호가 주어집니다.
                시민의 이동은 0번 시민부터 이동하며,시민의 앞을 시민이 가로막
                고 있다면 뒤의 시민은 움직일 수 없습니다.</p>
                `
                break;
            case '2':
                stage3img.src = `img/proj1img/st3-2.png`; 
                stage3Text.innerHTML =
                `
                <p style="line-height: 35px;">2. 게임종료
                <br>
                시민이 좀비에게 공격당하게되면, 공격당한 시민은 삭제시킵니다.
                시민이 탈출하면, 탈출한 시민은 삭제되며 기차 안에 남은 시민이
                없을때 까지 게임은 진행됩니다. 시민의 수에 변동이 생기게되면
                사라진 시민의 번호를 표시하며, 남은 시민의 수를 표시합니다.
                탈출한 시민이 1명이라도 존재할 경우, 시민이 승리합니다.</p>
                `
                break;
        }
    })
})
