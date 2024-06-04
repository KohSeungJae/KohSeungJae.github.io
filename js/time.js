const today = new Date();
const year = today.getFullYear(); // 연도
const month = today.getMonth() + 1; // 월(0 ~ 11)
const date = today.getDate(); // 날짜
const day1 = today.getDay(); // 요일 (0 ~ 6)
let day2 = " " // 요일명

const headdate = document.querySelector("#header-div3")

switch(day1){
    case 0 :
       day2 = "일요일"; break;
    case 1 :
        day2 = "월요일"; break;
    case 2 :
        day2 = "화요일"; break;
    case 3 :
        day2 = "수요일"; break;
    case 4 :
        day2 = "목요일"; break;
    case 5 :
        day2 = "금요일"; break;
    case 6 :
        day2 = "토요일"; break;
}
headdate.innerHTML = `<p>${year}년${month}월${date}일${day2}</p>`

