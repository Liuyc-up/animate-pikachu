!function(){
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(()=>{
            n+=1
            container.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css, 'css');
            container.scrollTop = container.scrollHeight;
            styleTag.innerHTML = prefix + code.substring(0,n)
            if(n >= code.length){
                window.clearInterval(id)
                fn&&fn.call()
            }
        },40)
    }
    let code = `
/*给皮卡丘来一身皮*/
.preview{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background:#FEE433;
    position: relative;
}
.wrapper{
    width: 100%;
    height: 165px;
    position: relative;
}
/*给个小鼻子*/
.nose{
    width: 0px;
    height: 0px;
    border-radius: 50%;
    border-style:solid;
    border-width: 11px;
    border-color: black transparent transparent transparent;
    position: absolute;
    top: 20px;
    left: 50%;
    margin-left: -11px;
}
/*来画小眼睛吧*/
.eye{
    height: 49px;
    width: 49px;
    background: black;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
}
.eye::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left:5px;
    top:1px;
    border: 2px solid #000;
}
/*左眼在左边*/
.eye.left{
    left: 50%;
    margin-left: 90px;
}
/*右眼在右边*/
.eye.right{
    right: 50%;
    margin-right: 90px;
}
/*左右给红红的小脸颊*/
.face{
    height: 66px;
    width: 66px;
    background: red;
    border-radius: 50%;
    border:2px solid black;
    position: absolute;
    top:85px;
}/*左边一个*/
.face.left{
    left: 50%;
    margin-left: 120px;
}/*右边一个*/
.face.right{
    right: 50%;
    margin-right: 120px;
}
/*上嘴唇*/
.upLip{
    height: 20px;
    width: 79px;
    border: 2px solid black;
    position: absolute;
    top: 49px;
    background: #FEE433;
}
.upLip.left{
    border-bottom-left-radius: 20px 15px;
    border-top: none;
    border-right: none;
    transform: rotate(-19deg);
    right: 50%;
}
.upLip.right{
    left: 50%;
    border-bottom-right-radius: 20px 15px;
    border-top: none;
    border-left: none;
    transform: rotate(19deg);
}
/*下嘴唇*/
.lowLip-wrapper{
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -100px;
    height: 109px;
    width: 200px;
    overflow: hidden;
}
.lowLip{
    width: 200px;
    height: 1000px;
    background: #990513;
    border-radius: 100px/500px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
.lowLip::before{
    content: '';
    position: absolute;
    bottom: -16px;
    width: 109px;
    height: 100px;
    background: #FC4A62;
    left: 50%;
    margin-left: -55px;
    border-radius: 50%;
}
/*-------------------完成---------------------*/
`
    writeCode('',code,()=>{})
}.call()