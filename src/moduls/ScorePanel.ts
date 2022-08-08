class ScorePanel {
    score = 0;
    level = 1;
    //分数和等级所在的元素，在构造函数进行初始化
    scoreSC: HTMLElement;
    levelLE: HTMLElement;

    //等级上限
    MaxLevel: number;
    //分数判断
    scoreIf: number

    constructor(MaxLevel = 10, scoreIf = 3) {//MaxLevel为默认值
        this.scoreSC = document.getElementById('score')!;
        this.levelLE = document.getElementById('level')!;
        this.MaxLevel = MaxLevel;
        this.scoreIf = scoreIf;
    }

    scoreAdd() {
        //增加分数
        this.scoreSC.innerHTML = ++this.score + '';
        // console.log(this.score)
        // console.log(this.scoreIf)
        if (this.score % this.scoreIf ==0) {//升级判断
            this.levelAdd();
            this.scoreIf = this.scoreIf
        }
    }

    levelAdd() {
        if (this.level <= this.MaxLevel) {
            this.levelLE.innerHTML = ++this.level + '';
        }

    }

}

export default ScorePanel;