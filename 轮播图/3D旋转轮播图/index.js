// 克隆item
function cloneItem(){
    // 获取container容器
    let container=document.querySelector('.container');
    // 数量（有几个立体方块）
    let amount=10;
    let width=96;
    let left_distance;
    for(let i=0;i<amount;i++){
        // 创建素所有的item立体盒子
        let item=document.createElement('div');
        item.className='item';
        // 创建立体盒子的四个面
        let one=document.createElement('div');
        let two=document.createElement('div');
        let three=document.createElement('div');
        let four=document.createElement('div');
        let five=document.createElement('div');
        let six=document.createElement('div');
        five.className='surface_five';
        one.className='surface_one';
        two.className='surface_two';
        three.className="surface_three";
        four.className='surface_four';
        six.className='surface_six';
        // 设置每一面的图片位置
        left_distance=i*width;
        one.style.backgroundPositionX=`${-left_distance}px`;
        two.style.backgroundPositionX=`${-left_distance}px`;
        three.style.backgroundPositionX=`${-left_distance}px`;
        four.style.backgroundPositionX=`${-left_distance}px`;
        item.style.left=`${left_distance}px`;
        item.style.transitionDelay=`${0.1*i}s`;
        // 将每一面放入到item中
        item.append(one);
        item.append(two);
        item.append(three);
        item.append(four);
        item.append(five);
        item.append(six);
        // 将item加入到container容器中
        container.append(item);
    }
}
// cloneItem();
function main(){
    let count=1;
    let num=1;//当前为第几面
    cloneItem();
    // 每3000毫秒就换下一张轮播图
    setInterval(()=>{
        document.querySelectorAll('.item').forEach(item=>{
            item.style. transform=`translateZ(-270px) rotateX(${-90*count}deg)`;
        });
        count++;
    },3000);
}
main();