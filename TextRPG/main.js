//Monster와 Player안에 각각 객체 생성
var orc = new Monster("오크", 100, 100, 10);
var elf = new Player("엘프", 200, 200, 1, 0, 300, 30);

function hpInfo() {  //HP 상태창
    hr();
    dw(" [ " + orc.name + " ( " + orc.hp + " / " + orc.maxhp + " ) ] ");
    dw(" [ " + elf.name + " ( " + elf.hp + " / " + elf.maxhp + " ) ] ");
    hr();
    br();
}

hpInfo();

//전투시작 메세지 출력

hr();
dw("전투시작");
hr();
br();

//전투 1회 + 상태창 띄우기
function fight() {

    //실제로 가하는 데미지를 0~공격력 사잇값으로 별도 지정.
    function dmg(attack) {
        var random = Math.floor(Math.random() * attack) + 1;
        return random;
    }

    var orcDMG = dmg(orc.attack);
    var elfDMG = dmg(elf.attack);

    //오크와 엘프가 서로 한대씩 때림. HP가 음수로 가지않도록 설정.
    orc.hp = orc.hp - elfDMG;
    if (orc.hp < 0) {
        orc.hp = 0;
    }

    elf.hp = elf.hp - orcDMG;
    if (elf.hp < 0) {
        elf.hp = 0;
    }

    //전투결과 출력
    hr();
    dw("엘프가 오크에게 " + elfDMG + "만큼의 데미지를 입혔습니다.")
    br();
    dw("오크가 엘프에게 " + orcDMG + "만큼의 데미지를 입혔습니다.")
    hpInfo();
    br();
}


//몬스터 사냥시 얻는 경험치. 일단 100으로 지정.
var gainExp = 100;

elf.exp=elf.exp+gainExp;

//승리시 알림창
function win() {
    hr();
    dw("전투종료");
    br(); br();
    dw("경험치를 " + gainExp + "만큼 획득하셨습니다.");
    br(); br();
    info(elf);
    hr();
    br();
}

//패배시 알림창
function lose() {
    hr();
    dw("전투종료");
    br(); br();
    dw("플레이어가 사망하였습니다.");
    hr();
    br();
}

while (true) {
    fight();
    if (orc.hp == 0) {
        win();
        break;
    }else if(elf.hp == 0){
        lose();
        break;
    }
}
