class Snake {
  head: HTMLElement //蛇头元素
  bodies: HTMLCollection //蛇的身体（包括蛇头）
  element: HTMLElement

  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }

  get X() {//获取坐标（蛇头）
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  set X(value: number) {//设置蛇头的坐标
    if (this.X === value) {
      return//如果新值和旧值相等，则返回不在修改
    }
    if (value < 20 || value > 310) {
      console.log(value)
      throw new Error('Game Over')
    }
    //X轴判断
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      console.log("value:" + value)
      console.log("this.x:" + this.X)
      if (value > this.X) {//再向左走
        console.log("左");
        if (value < 40) {
          throw new Error('Game Over')
        } else {
          console.log(value)
          value = this.X - 10
        }
      } else {//再向右走
        console.log("右")
        if (value > 290) {
          throw new Error('Game Over')
        } else {
          console.log(value)
          value = this.X + 10
        }

      }
    }
    this.moveBody();
    this.head.style.left = value + "px";
    this.checkHeadBody();
  }
  set Y(value: number) {
    if (this.Y === value) {
      return
    }
    if (value < 20 || value > 310) {
      console.log(value)
      throw new Error('Game Over')
    }
    //Y轴判断
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      console.log("value:" + value)
      console.log("this.x:" + this.Y)
      if (value > this.Y) {
        console.log(value)
        if(value<40){
          throw new Error('Game Over')
        }else{
          value = this.Y - 10
        }
      } else {
        if(value>290){
          throw new Error('Game Over')
        }else{
          value = this.Y + 10
        }
      }
    }
    this.moveBody();
    this.head.style.top = value + "px";
    this.checkHeadBody();
  }
  addBody() {
    //向element添加一个div（beforeend向最后添加）
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }
  //蛇身体的移动
  moveBody() {//从后往前传(第四节=第三节)
    for (let i = this.bodies.length - 1; i > 0; i--) {//获取全部身体
      //获取前面身体的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      //将值设置到当前的身体
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }
  //检测蛇头是否撞到身体
  checkHeadBody(){
    for(let i =1 ;i<this.bodies.length ; i++){
      let BElement = this.bodies[i] as HTMLElement
      if(this.X === BElement.offsetLeft && this.Y === BElement.offsetTop){
        throw new Error('撞到自己了')
      }
    }
  }

}
export default Snake