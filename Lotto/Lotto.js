//내가 뽑은 6개의 숫자.
m = [0, 0, 0, 0, 0, 0];
m[0] = 3;
m[1] = 7;
m[2] = 9;
m[3] = 14;
m[4] = 22;
m[5] = 30;

//뽑힌 7개의 숫자. (7번째가 보너스 숫자)
var r = [0, 0, 0, 0, 0, 0, 0];

//1번째 숫자뽑기
r[0] = Math.floor(Math.random() * 45) + 1;

//2번째 숫자뽑기. 중복되면 다시 추첨
while (true) {
    r[1] = Math.floor(Math.random() * 45) + 1;
    if (r[1] != r[0]) {
        break;
    }
}

//3번째 숫자뽑기. 중복되면 다시 추첨
while (true) {
    r[2] = Math.floor(Math.random() * 45) + 1;
    if (r[2] != r[0] && r[2] != r[1]) {
        break;
    }
}

//4번째 숫자뽑기. 중복되면 다시 추첨
while (true) {
    r[3] = Math.floor(Math.random() * 45) + 1;
    if (r[3] != r[0] && r[3] != r[1] && r[3] != r[2]) {
        break;
    }
}

//5번째 숫자뽑기. 중복되면 다시 추첨
while (true) {
    r[4] = Math.floor(Math.random() * 45) + 1;
    if (r[4] != r[0] && r[4] != r[1] && r[4] != r[2] && r[4] != r[3]) {
        break;
    }
}

//6번째 숫자뽑기. 중복되면 다시 추첨
while (true) {
    r[5] = Math.floor(Math.random() * 45) + 1;
    if (r[5] != r[0] && r[5] != r[1] && r[5] != r[2] && r[5] != r[3] && r[5] != r[4]) {
        break;
    }
}

//보너스 숫자뽑기. 중복되면 다시 추첨
while (true) {
    r[6] = Math.floor(Math.random() * 45) + 1;
    if (r[6] != r[0] && r[6] != r[1] && r[6] != r[2] && r[6] != r[3] && r[6] != r[4] && r[6] != r[5]) {
        break;
    }
}

// 맞춘 숫자 수를 변수지정
var same = 0;
var bonus = 0;

//컴퓨터의 7개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세는 작업을 반복문으로 처리
for (var i = 0; i <= 5; i = i + 1) {
    for (var j = 0; j <= 5; j = j + 1) {
        if (m[i] == r[j]) {
            same = same + 1;
        }
    }
    if (r[6] == m[i]) {
        bonus = bonus + 1;
    }
}

// 맞춘 숫자에 따라 등수매기기
if (same == 0 || same == 1 || same == 2) {
    var rank = "꽝입니다.";
} else if (same == 3) {
    var rank = "5등입니다.";
} else if (same == 4) {
    var rank = "4등입니다.";
} else if (same == 5) {
    var rank = "3등입니다.";
    if (bonus == 1) {
        var rank = "2등입니다.";
    }
} else if (same == 6) {
    var rank = "1등입니다.";
}

//출력될 화면
window.onload = function () {
    var myNumIndex = "내 숫자" + "<br>" + "<br>" + "1) " + m[0] + "<br>" + "2) " + m[1] + "<br>" + "3) " + m[2] + "<br>" + "4) " + m[3] + "<br>" + "5) " + m[4] + "<br>" + "6) " + m[5];
    var myNum = document.getElementById("myNum");
    myNum.innerHTML = myNumIndex;

    var ranNumIndex = "뽑힌 숫자" + "<br>" + "<br>" + "1) " + r[0] + "<br>" + "2) " + r[1] + "<br>" + "3) " + r[2] + "<br>" + "4) " + r[3] +
        "<br>" + "5) " + r[4] + "<br>" + "6) " + r[5] + "<br><br>" + "보너스) " + r[6];
    var ranNum = document.getElementById("ranNum");
    ranNum.innerHTML = ranNumIndex;

    var resultIndex = "결과" + "<br>" + "<br>" + rank;
    var result = document.getElementById("result");
    result.innerHTML = resultIndex;
}

/*로또 복권 ???	1~45 번 숫자 공에서 6개를 뽑아서 그걸로 당첨 여부를 확인하는 복권.
보너스 번호도 추가로 뽑고 5개 맞추고 1개 틀렸지만 그 틀린 번호가 이 보너스 번호와 일치하면 2등.		

컴퓨터가 1~45 수를 6개 뽑아서 출력(중복 허용)
이 버전에서는 중복처리는 안함. 다른 버전에서 처리 예정

내가 살때 칠했다 가정할 숫자 6개 변수지정.
컴퓨터의 6개의 숫자랑 내꺼랑 각각 비교해서(6*6회) 몇개가 일치하는 지 세어 출력하기
컴퓨터의 두번째 번호가 첫번째 번호와 같을 경우 다시 뽑도록 하기
내가 뽑은 숫자와 랜덤숫자가 표시되게 변경 
컴퓨터의 세번째 번호가 첫번째,두번째 번호와 같을 경우 다시 뽑도록 하기
남은 네번째,다섯,여섯번째의 번호도 다 중복 검사하여 중복 시 다시 뽑게 하기
내번호들을 기존 일반변수에서 배열로 바꾸기
뽑힌 번호들을 기존 일반변수에서 배열로 바꾸기
등수 지정하여 띄우기
보너스 숫자 만들기 

new) 보너스 숫자로 2등 만들기. */
