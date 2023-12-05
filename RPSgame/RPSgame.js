window.onload = function () {
    userinput = document.getElementById("user_input");
    rpcResultScreen = document.getElementById("resultarea");
    userimage = document.getElementById("userimg");
    comimage = document.getElementById("comimg");
}

function rpcInputButtonClick() {

    resultBT = "";  //결과 화면 초기화
    resultarea.value = resultBT;   // 텍스트 에어리어 지움

    var cominput = Math.floor(Math.random() * 3) + 1; //1=가위, 2=바위, 3=보 할당.

    if (userinput.value === "가위") {
        userimage.innerHTML = "<img src='scissors.png'>";
        if (cominput === 1) {
            resultarea.value = ("User:가위 \n\n Com:가위 \n\n결과:비겼습니다!");   //    \n : 줄바꿈.
        } else if (cominput === 2) {
            resultarea.value = ("User:가위 \n\n Com:바위 \n\n결과:졌습니다!");
        } else if (cominput === 3) {
            resultarea.value = ("User:가위 \n\n Com:보 \n\n결과:이겼습니다!");
        }
    } else if (userinput.value === "바위") {
        userimage.innerHTML = "<img src='rock.png'>";
        if (cominput === 1) {
            resultarea.value = "User:바위 \n\n Com:가위 \n\n결과:이겼습니다!";
        } else if (cominput === 2) {
            resultarea.value = "User:바위 \n\n Com:바위 \n\n결과:비겼습니다!";
        } else if (cominput === 3) {
            resultarea.value = "User:바위 \n\n Com:보 \n\n결과:졌습니다!";
        }
    } else if (userinput.value === "보") {
        userimage.innerHTML = "<img src='paper.png'>";
        if (cominput === 1) {
            resultarea.value = "User:보 \n\n Com:가위 \n\n결과:졌습니다!";
        } else if (cominput === 2) {
            resultarea.value = "User:보 \n\n Com:바위 \n\n결과:이겼습니다!";
        } else if (cominput === 3) {
            resultarea.value = "User:보 \n\n Com:보 \n\n결과:비겼습니다!";
        }
    } else {
        resultarea.value = "장난치지마세요.";
    }

    if (cominput === 1) {
        comimage.innerHTML = "<img src='scissors.png'>";
    } else if (cominput === 2) {
        comimage.innerHTML = "<img src='rock.png'>";
    } else if (cominput === 3) {
        comimage.innerHTML = "<img src='paper.png'>";
    }
}
