//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡
  
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  //城堡主體繪製開始
  
  //地面上的線
  ctx.beginPath() //清掉先前路徑
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2 //被吃掉看不到，所以增加寬度
  ctx.strokeStyle="black" //原先沿用到上個色彩設定，所以改回來黑色
  ctx.stroke()
  
  //避雷針
  ctx.beginPath()
  ctx.moveTo(175,0)
  ctx.lineTo(175,25)
  ctx.stroke()
 
  //尖頂三角形
ctx.beginPath()
  ctx.moveTo(175,25)
  ctx.lineTo(150,75)
  ctx.lineTo(200,75)
ctx.closePath()
ctx.fillStyle="#131F35"  
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()
  
  
 //尖頂下閣樓
 ctx.beginPath()
    ctx.moveTo(150,75)
    ctx.lineTo(200,75)
    ctx.lineTo(200,100)
    ctx.lineTo(150,100)
  ctx.closePath()
  ctx.fillStyle="#D9AF8B"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  //樓中
  ctx.beginPath()
    ctx.moveTo(200,100)
    ctx.lineTo(150,100)
    ctx.lineTo(125,150)
    ctx.lineTo(225,150)
  ctx.closePath()
  ctx.fillStyle="#131F35"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  //鐘樓
  ctx.beginPath()
    ctx.moveTo(225,150)
    ctx.lineTo(125,150)
    ctx.lineTo(125,250)
    ctx.lineTo(225,250)
  ctx.closePath()
  ctx.fillStyle="#8C6746"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
 
 ctx.beginPath()
    ctx.moveTo(215,165)
    ctx.lineTo(135,165)
    ctx.lineTo(135,235)
    ctx.lineTo(215,235)
  ctx.closePath()
  ctx.fillStyle="#D9AF8B"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
 ctx.beginPath()
 ctx.arc(175,200,35,0,Math.PI*2,true) 
 ctx.moveTo(175,175)
 ctx.lineTo(175,175)
ctx.fillStyle="white"
ctx.fill()
ctx.strokeStyle="black"
ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(175,175)
  ctx.lineTo(175,200)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(175,200)
  ctx.lineTo(200,205)
  ctx.stroke()

  
 
   
  //樓體
   ctx.beginPath()
    ctx.moveTo(100,250)
    ctx.lineTo(250,250)
    ctx.lineTo(250,350)
    ctx.lineTo(100,350)
  ctx.closePath()
  ctx.fillStyle="#D9AF8B"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
   
  
     
  
  //車子
    ctx.fillStyle="#131F35"
    let carx = time%440-40
    ctx.fillRect(carx,340,40,25)
    ctx.strokeRect(carx,340,40,25)
  
    ctx.beginPath()
    ctx.arc(carx+10,365,5,0,Math.PI*2)
    ctx.arc(carx+30,365,5,0,Math.PI*2)
  
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()
  
    ctx.beginPath()
    ctx.moveTo(175,350)
    ctx.lineTo(175,275-mouse.y/3)
    ctx.lineTo(200,300 - (time%5)-mouse.y/3)
    ctx.lineTo(175,300-mouse.y/3)
    ctx.closePath()
    ctx.fillStyle="#D3222F"
    ctx.fill()
    ctx.strokStyle = "black"
      ctx.stroke()  
  
    //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
}
// draw()

//設定連續繪製
setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})