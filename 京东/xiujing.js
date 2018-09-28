window.onload=function(){
	//头部下拉
    let cart1=document.querySelector(".l1");
    let down1=document.querySelector(".down1");
    let cart2=document.querySelector(".l5");
    let down2=document.querySelector(".down2");
    let cart3=document.querySelector(".l6");
    let down3=document.querySelector(".down3");
    let cart4=document.querySelector(".l7");
    let down4=document.querySelector(".down4");
    let cart5=document.querySelector(".l8");
    let down5=document.querySelector(".down5");
    d(cart1,down1);
    d(cart2,down2);
    d(cart3,down3);
    d(cart4,down4);
    d(cart5,down5);
    console.log(cart1);
    function d(cart1,down1){
	    cart1.onmouseover=function(){
	    	down1.style.display="block";
	    }
	    cart1.onmouseout=function(){
	    	down1.style.display="none";
	    }
    }
    //侧拉选项卡
    let li1=document.querySelectorAll(".c5>ul>div>li");
    let list=document.querySelectorAll(".c5 .list");
    console.log(li1,list);
    for(let i=0;i<li1.length;i++){
    	li1[i].onmouseover=function(){
	  		for(let j=0;j<list.length;j++){
	  			list[j].style.display="none";
	  		}
	  		list[i].style.display="block";
	  	}
	  	li1[i].onmouseout=function(){
	  		list[i].style.display="none";
	  	}
    }
    //轮播
    let dots=document.querySelectorAll(".dot");
	let imgs=document.querySelectorAll(".c6 ul li img");
	console.log(imgs);
	imgs[0].style.zIndex=2;
	for(let i=0;i<dots.length;i++){
		dots[i].onmouseover=function(){
			for(let j=0;j<imgs.length;j++){
				imgs[j].style.zIndex=1;
				dots[j].style.background="";
			}
			imgs[i].style.zIndex=2;
			dots[i].style.background="#fff";
		}
	}
	//自动轮播
	let num=0;
	let banner=document.querySelector(".c6");
	let t=setInterval(move,2000);
	imgs[0].style.opacity=1;
	dots[0].style.background="#fff";
	function move(){
		num++;
		if(num==8){
			num=0;
		}
		for(let j=0;j<imgs.length;j++){
				imgs[j].style.zIndex=1;
				dots[j].style.background="";
			}
		imgs[num].style.zIndex=2;
		dots[num].style.background="#fff";
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,2000);
		}
	}
	let rbtn=document.querySelector(".banner-right");
	let lbtn=document.querySelector(".banner-left");
	console.log(lbtn);
	rbtn.onclick=function(){
		move();
	}
	lbtn.onclick=function(){
		
		num--;
		if(num<0){
			num=7;
		}
		for(let j=0;j<imgs.length;j++){
				imgs[j].style.zIndex=1;
				dots[j].style.background="";
			}
		imgs[num].style.zIndex=2;
		dots[num].style.background="#fff";
	    
	}
	window.onblur=function(){
		clearInterval(t);
	}
	window.onfoucs=function(){
		t=setInterval(move,2000);
	}
	//平移轮播
	let left=document.querySelector(".small-left");
	let right=document.querySelector(".small-right");
	let con=document.querySelector(".pingyi");
	let widths=parseInt(getComputedStyle(con,null).width)/2;
	console.log(left,right,con,widths);
	let n=0;
	right.onclick=function(){
		n++;
		if(n==2){
			n=1;
			return;
		}
		con.style.transform="translateX("+(-widths*n)+"px)";
	}
	left.onclick=function(){
		n--;
		if(n==-1){
			n=0;
			return;
		}
		con.style.transform="translateX("+(-widths*n)+"px)";
	}
	//选项轮播
	let li8=document.querySelectorAll(".bb12 li");
    let list8=document.querySelectorAll(".sbanner ul");
    console.log(li8,list8);
    list8[1].style.display="none";
    list8[2].style.display="none";
    list8[3].style.display="none";
    list8[4].style.display="none";
    li8[0].classList.add("active");
    for(let i=0;i<li8.length;i++){
    	li8[i].onmouseover=function(){
    		for(let j=0;j<list8.length;j++){
	  			list8[j].style.display="none";
	  			li8[j].classList.remove("active");
	  		}
	  		list8[i].style.display="block";
	  		li8[i].classList.add("active");
    	}
    	li8[i].onmouseout=function(){
    		for(let j=0;j<list8.length;j++){
    			li8[j].classList.remove("active");
    		}
    		li8[i].classList.add("active");
    	}
    }
    let dot1=document.querySelectorAll(".bannr-dot1 div");
    let dot2=document.querySelectorAll(".bannr-dot2 div");
    let dot3=document.querySelectorAll(".bannr-dot3 div");
    let dot4=document.querySelectorAll(".bannr-dot4 div");
    let dot5=document.querySelectorAll(".bannr-dot5 div");
    let banner2=document.querySelector(".sbanner");
	let imgs4=document.querySelectorAll(".uu1 li");
	let imgs5=document.querySelectorAll(".uu2 li");
	let imgs6=document.querySelectorAll(".uu3 li");
	let imgs7=document.querySelectorAll(".uu4 li");
	let imgs8=document.querySelectorAll(".uu5 li");
	let w=parseInt(getComputedStyle(banner2,null).width);
	console.log(imgs8);
	liu(imgs4,dot1);
	liu(imgs5,dot2);
	liu(imgs6,dot3);
	liu(imgs7,dot4);
	liu(imgs8,dot5);
	function liu(imgs4,dot1){
	let now=0;
	let next=0;
	imgs4[0].style.left=0;
	dot1[0].style.backgroundColor="#ff6700";
    console.log(banner2,imgs4);
    for(let i=0;i<dot1.length;i++){
		dot1[i].onmouseover=function(){
			for(let j=0;j<imgs4.length;j++){
				imgs4[j].style.left=w+"px";
//				animate(imgs4[j],{left:-w},1000);
				dot1[j].style.backgroundColor="";
			}
			imgs4[i].style.left=0;
			dot1[i].style.backgroundColor="#FF6700";
//			animate(imgs4[i],{left:0},1000);
			now=i;
			next=i;
		}
	}
  }
  //小轮播
  let banner4=document.querySelector(".b5-1>a");
  let w1=parseInt(getComputedStyle(banner4,null).width);
  let rbtn1=document.querySelector(".banner-right2");
  let lbtn1=document.querySelector(".banner-left2");
  let dots4=document.querySelectorAll(".bannr-doto div");
  let imgso=document.querySelectorAll(".daily-slider");
  console.log(banner4,w1,rbtn1,lbtn1,dots4,imgso);
  let rbtn2=document.querySelector(".banner-right3");
  let lbtn2=document.querySelector(".banner-left3");
  let dots5=document.querySelectorAll(".bannr-dott div");
  let imgst=document.querySelectorAll(".daily-slider1");
  chan(imgso,dots4,rbtn1,lbtn1);
  chan(imgst,dots5,rbtn2,lbtn2);
  function chan(imgs4,dots4,rbtn1,lbtn1){
		let now=0;
		let next=0;
		imgs4[0].style.left=0;
		console.log(rbtn1);
		dots4[0].style.backgroundColor="#ff6700";
		rbtn1.onclick=function(){
			next++;
			if(next==3){
				next=2;
				return;
			}
			imgs4[now].style.left=0;
			imgs4[next].style.left=w1+"px";
			animate(imgs4[now],{left:-w1},500,
				function(){
					dots4[now].style.backgroundColor="";
				});
			animate(imgs4[next],{left:0},500,
				function(){
					for(let i=0;i<imgs4.length;i++){
						dots4[i].style.backgroundColor="";
					};
					dots4[next].style.backgroundColor="#FF6700";
				});
			now=next;
		}
		lbtn1.onclick=function(){
			next--;
			if(next==-1){
				next=0;
				return;
			}
			imgs4[now].style.left=0;
			imgs4[next].style.left=-w1+"px";
			animate(imgs4[now],{left:w1},500,
				function(){
					dots4[now].style.backgroundColor="";
				}
			);
			animate(imgs4[next],{left:0},500,
				function(){
					for(let i=0;i<imgs4.length;i++){
						dots4[i].style.backgroundColor="";
					};
					dots4[next].style.backgroundColor="#FF6700";
				}
			);
			now=next;
		}
		
		
		for(let i=0;i<dots4.length;i++){
			dots4[i].onmouseover=function(){
				for(let j=0;j<imgs4.length;j++){
					imgs4[j].style.left=w1+"px";
					// animate(imgs4[j],{left:-w},1000);
					dots4[j].style.backgroundColor="";
				}
				imgs4[i].style.left=0;
				dots4[i].style.backgroundColor="#FF6700";
				// animate(imgs4[i],{left:0},1000);
				now=i;
				next=i;
			}

		}
		let t2=setInterval(move2,2000);
            function move2(){
                    next++;
                    if(next==imgs4.length){
                            next=0;
                    }
                    imgs4[now].style.left=0;
                    imgs4[next].style.left=w1+"px";
                    animate(imgs4[now],{left:-w1},function(){
                            dots4[now].style.backgroundColor="";
                    })
                    animate(imgs4[next],{left:0},function(){
                            for(let j=0;j<dots4.length;j++){
                                   dots4[j].style.backgroundColor=""; 
                            }
                            dots4[next].style.backgroundColor="#FF6700";
                    })
                    now=next;
            }
            
             window.onblur=function(){
            	clearInterval(t2);
            }
            window.onfocus=function() {
            	t=setInterval(move2,2000);
            }

        
	}
	//小小轮播
	let banner5=document.querySelector(".bbb4");
	let w2=parseInt(getComputedStyle(banner5,null).width);
	let dots6=document.querySelectorAll(".bannr-dotf div");
    let imgsf=document.querySelectorAll(".bbb4 img");
    console.log(banner5,w2,dots6,imgsf);
    let t1=setInterval(move1,2000);
    let now1=0;
    let next1=0;
    imgsf[0].style.left=0;
    dots6[0].style.backgroundColor="#ff6700";
        function move1(){
                next1++;
                if(next1==imgsf.length){
                        next1=0;
                }
                imgsf[now1].style.left=0;
                imgsf[next1].style.left=w2+"px";
                animate(imgsf[now1],{left:-w2},function(){
                        dots6[now1].style.backgroundColor="";
                })
                animate(imgsf[next1],{left:0},function(){
                        for(let j=0;j<dots6.length;j++){
                               dots6[j].style.backgroundColor=""; 
                        }
                        dots6[next1].style.backgroundColor="#FF6700";
                })
                now1=next1;
        }
        
         window.onblur=function(){
        	clearInterval(t1);
        }
        window.onfocus=function() {
        	t1=setInterval(move1,2000);
        }
        //小平移
        let banner6=document.querySelector(".box-bd-item");
		let w3=parseInt(getComputedStyle(banner6,null).width);
		let dots7=document.querySelectorAll(".bannr-dotn div");
	    let imgss=document.querySelectorAll(".box-bd-item");
	    let now2=0;
        let next2=0;
        imgss[0].style.left=0;
        dots7[0].style.backgroundColor="#ff6700";
        for(let i=0;i<dots7.length;i++){
			dots7[i].onmouseover=function(){
				 next2++;
                if(next2==imgss.length){
                        next2=0;
                }
                imgsf[now2].style.left=0;
                imgsf[next2].style.left=w3+"px";
                animate(imgss[now2],{left:w3},function(){
                        dots7[now2].style.backgroundColor="";
                })
                animate(imgss[next2],{left:0},function(){
                        for(let j=0;j<dots7.length;j++){
                               dots7[j].style.backgroundColor=""; 
                        }
                        dots7[next2].style.backgroundColor="#FF6700";
                })
                now2=next2;
			}
		}
		//滚动条
       let rotate1=document.querySelector(".roll");
       console.log(rotate1);
       //移动时上边搜索框
       let searchfix=document.querySelector(".search-fix");
       console.log(searchfix);
       let bodytop;
       console.log(bodytop);
       window.onscroll=function(){
        bodytop=document.body.scrollTop||document.documentElement.scrollTop;
            if(bodytop>100){
              rotate1.style.display="block";

            }
            if(bodytop>300){
              searchfix.style.height="50px";
              searchfix.style.borderColor="#f10214";
              searchfix.style.boxShadow="2px 2px 2px rgba(0,0,0,.2)";
            }else{
              searchfix.style.height="0";
              searchfix.style.borderColor="rgba(0,0,0,0)";
              searchfix.style.boxShadow="0 0 0 rgba(0,0,0,0)";
              
            }
           
       }
       let up=document.querySelector(".top");
       up.onclick=function () {
      // let res=document.body.scrollTop||document.documentElement.scrollTop;
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});

    }	
}