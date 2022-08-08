class Food{
    //表示食物所定义的元素
    element :HTMLElement;
    maxLT:number;
    minLT:number;

    constructor(maxLT=29,minLT=4){
        this.element=document.getElementById('food')!;//!不为空值
        this.maxLT=maxLT;
        this.minLT=minLT;
    }

    //获取食物x轴坐标
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }

    // 改变食物移动的区间
    change(){
        //最小40px(minLT)最大290px(maxLT)
        //Math.round四舍五入取整
        let left = Math.round(Math.random()*(this.maxLT-this.minLT)+this.minLT)*10;
        let top = Math.round(Math.random()*(this.maxLT-this.minLT)+this.minLT)*10;
        this.element.style.left = left +'px';
        this.element.style.top = top +'px';
    }

}

export default Food;