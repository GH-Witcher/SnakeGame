import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
  food: Food;
  scorePanel: ScorePanel;
  snake: Snake;
  //用来存储蛇的移动方向
  direaction: string = '';
  //记录游戏是否结束
  isLive = true;
  constructor() {
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.snake = new Snake();
    this.init()
  }
  init() {//this指document
    document.addEventListener("keydown", this.keydownHandler.bind(this))//bind(this)创建一个新的函数，this绑定为this.keydownHandler.bind(this)
    this.run()
  }
  keydownHandler(event: KeyboardEvent) {//打印按键
    this.direaction = event.key
    console.log(this)
  }
  //蛇移动的方法
  run() {
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direaction) {
      case "ArrowUp": Y -= 10; break;
      case "ArrowDown": Y += 10; break;
      case "ArrowLeft": X -= 10; break;
      case "ArrowRight": X += 10; break;
    }
    this.checkEat(X,Y);
    //修改蛇的X和Y值
    try {//捕获异常
      this.snake.X = X;
      this.snake.Y = Y;
    } catch(e){
      alert(e)
      this.isLive = false
    }
    //开启一个定时调用(isLive为true执行后面的语句)
    this.isLive && setTimeout(this.run.bind(this)
      , 300 - (this.scorePanel.level - 1) * 25);
  }
  //检测蛇吃到食物
  checkEat(X: number,Y: number){
    if(X===this.food.X && Y===this.food.Y){
      this.food.change();
      this.scorePanel.scoreAdd();
      this.snake.addBody();
    }
  }

}
export default GameControl