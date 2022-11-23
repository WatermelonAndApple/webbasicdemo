let choice=4;
let index=0;
cloneItem();
//设置定时器
let time=setInterval(c,3000);
function c(){
    // console.log('我是计时器');
    switch(choice){
        case 1:
        case 2:
        case 4:
        case 5:
        case 6:
            a();break;
        case 3:
            b();break;
    }
}
function b(){
    document.querySelectorAll('.item').forEach(item=>{
        item.style.transform=`translate3d(${parseInt(Math.random()*250)}px,${parseInt(Math.random()*250)}px,-2400px) `;
    });
    setTimeout(()=>{
        document.querySelectorAll('.item').forEach(item=>{
            item.style.transform=`rotateY(${index*180}deg)`;
        });
    },300);
    index++;
}
function a(){
    document.querySelectorAll('.item').forEach(item=>{
        item.style.transform=`rotateY(${index*180}deg)`;
        // item.style.borderRadius='25%';
    });
    index++;
}


function cloneItem(){
    // item的数量
    let item_amount=12;
    let width=96;
    let height=54;
    let imgX=0;
    let imgY=0;
    // 容器
    let container=document.querySelector('.container');
    for(let i=0;i<item_amount;i++){
        for(let j=0;j<item_amount;j++)
        {
            let item=document.createElement('div');
            let one=document.createElement('div');
            let two=document.createElement('div');
            // 类名
            item.className='item';
            one.className='one';
            two.className='two';

            // item距离
            item.style.left=`${j*width}px`;
            item.style.top=`${i*height}px`;
            // item.style.transition=`all linear 0.3s ${(i+j)*0.05}s`;
            // 每一面的图片位置
            imgX=j*width;
            imgY=i*height;
            one.style.backgroundPositionX=`${-imgX}px`;
            one.style.backgroundPositionY=`${-imgY}px`;
            two.style.backgroundPositionX=`${-imgX}px`;
            two.style.backgroundPositionY=`${-imgY}px`;
            // 将one和two放入到item中
            item.append(one);
            item.append(two);
            // 将item放入到容器中
            container.append(item);
        }
    }
    whichChangeStyle();
}

//获得选择的转换方式
function getChoiced(ev){
    choice=parseInt(ev.value);
    // 改变转换方式
    whichChangeStyle();
}
//选择的图片轮播转换方式
function whichChangeStyle(){
    index++;
    let item=document.querySelectorAll('.item');
    switch(choice){
        case 1:
            ChangeStyle1(item);//随机转换
            break;
        case 2://左上到右下
            ChangeStyle2(item);
            break;
        case 3:
            ChangeStyle3(item);
            break;
        case 4:
            ChangeStyle4(item);
            break;
        case 5:
            ChangeStyle5(item);
            break;
        case 6:
            ChangeStyle6(item);
            break;
    }
}
//随机转换
function ChangeStyle1(item){
    item.forEach(item=>{
        item.style.transition=`all linear 0.3s ${Math.random()*1}s`;
    });
}
// 从左上到右下
function ChangeStyle2(item){
    let itemIndex=0;
    for(let i=0;i<12;i++){
        for(let j=0;j<12;j++){
            item[itemIndex++].style.transition=`all linear 0.3s ${(i+j)*0.05}s`;
        }
    }
}
// 向屏幕里扩散
function ChangeStyle3(item){
    item.forEach(item=>{
        item.style.transition=`all linear 0.3s`;
    });
}
//往左上和右下
function ChangeStyle4(item){
    let itemIndex=0;
    let wait;
    for(let i=0;i<12;i++){
        for(let j=0;j<12;j++){
            wait=Math.abs(12-(i+j));
            // console.log(wait);
            item[itemIndex++].style.transition=`all linear 0.3s ${wait*0.08}s`;
        }
    }
}
//有四周向中间
function ChangeStyle5(item){
    let itemIndex=0;
    let wait;
    for(let i=0;i<12;i++){
        for(let j=0;j<12;j++){
            if(i==0||i==11||j==0||j==11){
                wait=0;
            }
            else if(i==1||i==10||j==1||j==10){
                wait=2;
            }
            else if(i==2||i==9||j==2||j==9){
                wait=4;
            }
            else if(i==3||i==8||j==3||j==8){
                wait=6;
            }
            else if(i==4||i==7||j==4||j==7){
                wait=8;
            }
            else{
                wait=10;
            }
            item[itemIndex++].style.transition=`all linear 0.3s ${wait*0.12}s`;
        }
    }
}
//中间向四周
function ChangeStyle6(item){
    let itemIndex=0;
    let wait;
    for(let i=0;i<12;i++){
        for(let j=0;j<12;j++){
            if(i==0||i==11||j==0||j==11){
                wait=10;
            }
            else if(i==1||i==10||j==1||j==10){
                wait=8;
            }
            else if(i==2||i==9||j==2||j==9){
                wait=6;
            }
            else if(i==3||i==8||j==3||j==8){
                wait=4;
            }
            else if(i==4||i==7||j==4||j==7){
                wait=2;
            }
            else{
                wait=0;
            }
            item[itemIndex++].style.transition=`all linear 0.3s ${wait*0.12}s`;
        }
    }
}




