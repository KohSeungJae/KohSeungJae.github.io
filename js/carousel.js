const arrows = document.querySelectorAll(".carousel div");
const carouseimg = document.querySelector("#carouselimg");

const pics = [`C.png`, "python.png","javascript.png","html5.png","css.png"];
const names = [`C언어`,`Python`,`JavaScript`,`HTML`,`CSS`];

let i = 0;

arrows.forEach(arrows => {
    arrows.addEventListener("click", (e) => {
        if(e.target.id === "left") {  // 왼쪽 화살표 클릭
            i--;
        
        if(i<0){ 
            i = pics.length -1;
        }}

        else if (e.target.id === "right"){  // 오른쪽 화살표 클릭
            i++;
            if(i >= pics.length){
                i = 0;
            }}
        carouseimg.src = `img/langimg/${pics[i]}`;
        document.querySelector("#langh3").innerText = `${names[i]}`;
    });
});
