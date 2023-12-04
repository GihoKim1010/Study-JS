var random = Math.floor(Math.random() * 6) + 1;

switch (random) {
    case 1:
        document.write("<img src='dice6_1.jpg'>")
        break;
    case 2:
        document.write("<img src='dice6_2.jpg'>")
        break;
    case 3:
        document.write("<img src='dice6_3.jpg'>")
        break;
    case 4:
        document.write("<img src='dice6_4.jpg'>")
        break;
    case 5:
        document.write("<img src='dice6_5.jpg'>")
        break;
    case 6:
        document.write("<img src='dice6_6.jpg'>")
        break;
}


// 위의 내용들을 document.write("<img src='dice6_" + (Math.floor(Math.random() * 6) + 1) +".jpg'>"); 로 한줄 요약 시킬 수 있다.