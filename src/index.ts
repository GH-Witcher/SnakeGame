//引入样式
import './style/index.less';
// import Food from './moduls/Food';
// import ScorePanel from './moduls/ScorePanel';
import GameControl from './moduls/GameControl';
import Snake from './moduls/Snake';

// const scpan = new ScorePanel()
// let i
// for (i = 1; i <= 11; i++) {
//     scpan.scoreAdd()
// }

// const food = new Food();
// console.log(food.X,food.Y);
const snake = new Snake
console.log(snake.X,snake.Y)
// food.change()
// console.log(food.X, food.Y)
const gc = new GameControl()
// setInterval(()=>{
//     console.log(gc.direaction)
// },1000)