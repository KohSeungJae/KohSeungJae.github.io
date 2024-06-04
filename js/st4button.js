const st4buttons = document.querySelectorAll("#stage4buts button");
const stage4img = document.querySelector("#stage4-img");

st4buttons.forEach(button =>{
    button.addEventListener('click',()=>{
        switch(button.innerText){
            case '1': 
                stage4img.src = `img/proj1img/st4-1.png`; 
                break;
            case '2':
                stage4img.src = `img/proj1img/st4-2.png`; 
                break;
        }
    })
})