var face_y = []
var face_x = []
var face_size = []
var face_num = 20
var song
var songIsplay=false
var amp
var vol
function preload(){
  song = loadSound("Losing My Mind - NEFFEX.mp3");

}

function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  for(var i=0;i<face_num;i++){
  face_size[i] = random(100,400)
  face_x[i] = random(0,width)
  face_y[i] = random(0,height)
  }
}

function draw() {
  background(220);
  textSize(40)
  text("X:"+mouseX+" Y:"+mouseY,50,50)
  for(var j=0;j<face_num;j++){
push()
   var f_s = face_size[j]
   translate(face_x[j],face_y[j])
   fill('#2894FF')
   ellipse(0,0,f_s)//臉
   fill(255)
   ellipse(0,f_s/4,f_s/4*3,f_s/2)//白色部分
   fill(255)
   ellipse(-f_s/10,-f_s/40*3,f_s/40*7,f_s/40*9)//左眼白
   ellipse(f_s/10,-f_s/40*3,f_s/40*7,f_s/40*9)//右眼白
   fill(0)
   ellipse(-f_s/10+map(mouseX,0,width,-f_s/80,f_s/80),-f_s/10+map(mouseX,0,height,-f_s/80,f_s/80),f_s/20)//左眼球
   ellipse(f_s/10+map(mouseX,0,width,-f_s/80,f_s/80),-f_s/10+map(mouseY,0,height,f_s/80,f_s/80),f_s/20)//右眼球
   fill(255,0,0)
   ellipse(0,0,f_s/8,f_s/8)//鼻子
   
   fill(255,0,0)
   arc(0,f_s/4,f_s/2,f_s/4,0,180)  //下弧
   fill(255)
   //if(mouseIsPressed)
   //{   //mouseIsPressed為true，代表有按下滑鼠
     //arc(0,f_s/4-1,f_s/2,f_s/10,0,180)   //上弧
   //}
   //else
   //{   //mouseIsPressed為false，代表沒有按下滑鼠
     //arc(0,f_s/4-1,f_s/2,f_s/4-10,0,180) //上弧
   //}
   if(!songIsplay){
     arc(0,f_s/4-1,f_s/2,f_s/4-10,0,180) //沒有播放
   }
   else{
     vol = amp.getLevel() //取得聲音值(值為0~1之間)
     console.log(vol)
     arc(0,f_s/4-1,f_s/2,map(vol,0,0.5,f_s/5,f_s/10),0,180)
   }
   noFill()
 pop()

}
}