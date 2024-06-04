const st1buttons = document.querySelectorAll("#stage1nav button");
const stage1img = document.querySelector("#stage1-img");
const stageText = document.querySelector("#stage1-text");

st1buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        switch(button.innerText){
            case '1': 
                stage1img.src = `img/proj1img/st1-1.png`; 
                stageText.innerHTML =
                `
                <p>1. 게임 시작전</p>
                <br>
                <p>플레이어는 기차의 길이, 마동석의 체력, 좀비가 이동할 확률</p>
                <p>위의 요소를 입력하면 게임이 시작됩니다. 기차가 생성되며, </p>
                <p>시민, 좀비, 마동석이 기차위에 생성됩니다.</p>
                <p>유닛들의 위치는 다음과 같습니다.</p>
                <br>
                <p>시민 : 기차끝칸 - 5</p>   
                <p>좀비 : 기차끝칸 - 3</p>
                <p>마동석 : 기차 끝칸 -2</p>
                `
                break;
            case '2':
                stage1img.src = `img/proj1img/st1-2.png`; 
                stageText.innerHTML =
                `
                <p>2. 어그로 설명</p>
                <br>
                <p>게임 내 유닛들에게는 어그로가 존재하며, 좀비는 어그로가 더 </p>
                <p>높은 유닛을 향해 움직입니다. 어그로는 이동시 1이 증가하고, </p>
                <p>움직이지 않을 시 1이 감소합니다. 어그로의 최댓값은 5이며</p>
                <p>어그로가 최대값인 경우에는 움직이더라도 어그로가 증가하지</p>
                <p>않습니다.</p>   
                `
                break;
            case '3': 
                stage1img.src = `img/proj1img/st1-3.png`; 
                stageText.innerHTML =
                `
                <p>3. 이동 페이즈</p>
                <br>
                <p>이동 페이즈에서는 시민, 좀비, 마동석이 이동할 수 있습니다.</p>
                <p>시민은 모든 턴 이동이 가능하고 좀비는 홀수턴에만 가능합니다.<p>
                <p>좀비는 처음에 입력한 확률대로 움직이고, 시민은(100 - 좀비확</p>
                <p>률)에 따라 움직입니다. 마동석의 경우 플레이어가 이동을 선택할</p>
                <p>수 있습니다. 좀비가 옆에 있을 경우에는 이동할 수 없으며, 좀비</p>
                <p>가 바로 옆에 있지 않은 경우에는 이동할 수 있습니다.</p>  
                `
                break;
            case '4':
                     stage1img.src = `img/proj1img/st1-4.png`; 
                     stageText.innerHTML =
                     `
                     <p>4. 행동 페이즈</p>
                     <p>행동페이즈에서는 각 유닛들이 행동을 취할 수 있습니다.</p>
                     <p>시민은 자신의 위치가 기차의 맨 왼쪽칸(탈출구)라면 탈출하고,</p>
                     <p>좀비의 경우 자신에게 인접한 유닛을 공격합니다. 이때 두 유닛이</p>
                     <p>모두 인접한 경우에는 어그로가 더 높은 유닛을 공격합니다.</p>
                     <p>마동석이 취할 수 있는 행동은 휴식, 도발, 붙잡기가 있습니다.</p>
                     <p>휴식할시 체력이 1증가하며, 어그로가 2 낮아집니다.</p>   
                     <p>도발할시 어그로가 최대치가 됩니다. 붙잡기는 좀비와 인접할 때</p>
                     <p>만 가능합니다. 붙잡기는 어그로가 2 증가하며 체력이 1 감소합니</p>
                     <p>다. 붙잡기는 일정 확률로 성공하며, 성공시 다음턴의 좀비를 이동</p>
                     <p>할수 없게 합니다.</p>
                     `
                     break;
            case '5': stage1img.src = `img/proj1img/st1-5.png`; 
                      stageText.innerHTML =
                       `
                      <p>5. 게임종료</p>
                      <br>
                      <p>시민승리 : 시민이 탈출구로 탈출한경우, 승리합니다.</p>
                      <p>좀비승리 : 좀비가 시민을 공격하거나, 마동석의 체력이 최소값이 </p>
                      <p>된경우, 패배합니다.</p>
                      `
                      break;
                      break;
            case '6': stage1img.src = `img/proj1img/st1-6.png`; 
                        stageText.innerHTML =
                            `
                        <p>6. 다음스테이지</p>
                        <br>
                        <p>시민이 탈출한 경우, 다음 스테이지로 이동합니다.</p>
                        <p>스테이지 2,3,4 는 스테이지 1의 게임규칙을 바탕으로 새로운 </p>
                        <p>요소들과 함께 진행됩니다.</p>
                        `
                        break;
    }
    })
})