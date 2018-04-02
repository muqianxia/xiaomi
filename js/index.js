// 顶部导航效果
{
	let box=document.querySelectorAll(".nav_item");
	let top=document.querySelectorAll(".nav_item_top");
	let bottom=document.querySelectorAll(".nav_item_bottom");
	top.forEach(function(ele,index){
		ele.onmouseenter=function(){
			bottom[index].style.height="240px";
			bottom[index].style.borderTop="1px solid #b0b0b0";
		}
		ele.onmouseleave=function(){
			bottom[index].style.height="0";
			bottom[index].style.borderTop="none";			
		}
	});
	//console.log(box,top,bottom);		
}
//侧导航效果
{
	let labels=document.querySelectorAll(".banner_nav .banner_nav_item");
	let menus=document.querySelectorAll(".banner_nav_list");
	// let banner=document.querySelector("#banner");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<labels.length;i++){
				labels[i].classList.remove("active");
			}
			labels[index].classList.add("active");
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];			
		}
		ele.onmouseleave=function(){
			for(let i=0;i<labels.length;i++){
				labels[i].classList.remove("active");
			}			
			menus[index].style.display="none";			
		}
	});
	console.log(labels,menus);
}
// banner效果
{
	//获取banner图片
	let imgs=document.querySelectorAll(".imgBox li");
	//获取轮播点
	let pagers=document.querySelectorAll(".pagerbox li");
	//获取banner
	let banner=document.querySelector("#banner");
	//获取左箭头
	let prev=document.querySelector(".prev");
	//获取右箭头
	let next=document.querySelector(".next");
	console.log(banner);
	//轮播点的遍历
	pagers.forEach(function(ele,index){
		//鼠标单击事件
		ele.onclick=function(){
			//图片的遍历
			for(let i=0;i<imgs.length;i++){
				//移除图片的active类名
				imgs[i].classList.remove("active");
				// 移除轮播点的active类名
				pagers[i].classList.remove("active");
			}
			//this  ele   pagers[index]
			//添加轮播点的active类名
			this.classList.add("active");
			// 添加图片的active类名
			imgs[index].classList.add("active");
			
			n=index;
		}
	})
	let n=0;
	let t=setInterval(move,3000);
		//move函数
		function move(){
			n++;
			if(n===imgs.length){
				n=0;
			}

			if(n<0){
				n=imgs.length-1;
			}
			for(let i=0;i<imgs.length;i++){
				//移除类名
				imgs[i].classList.remove("active");
				//移除类名
				pagers[i].classList.remove("active");
			}
			//添加类名
			imgs[n].classList.add("active");
			//添加类名
			pagers[n].classList.add("active");
	}	
	// banner的鼠标移入效果
	banner.onmouseenter=function(){
		//停止执行setInterval
		clearInterval(t);
	}
	// banner的鼠标移出效果
	banner.onmouseleave=function(){
		//
		t=setInterval(move,3000);
	}
	let flag=true;
	// 右箭头的单击事件
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}		
	}
	// 左箭头的单击事件
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		}		
	}
	//图片的遍历
	imgs.forEach(function(ele){
		//事件监听事件
		ele.addEventListener("transitionend",function(){
			flag=true;
		})
	})
}
//小米明星单品效果
{	
	//获取左箭头
	const prev=document.querySelector(".star_btn1");
	//获取右箭头
	const next=document.querySelector(".star_btn2");
	// 获取inner
	const inner=document.querySelector(".star_inner");
	let n=0;
	//next的单击事件
	next.onclick=function(){
		n++;
		//移除类名
		prev.classList.remove("disable");
		if(n===2){
			//添加类名
			this.classList.add("disable");
		}
		//如果n=3,让n=2
		if(n===3){
			n=2;
			return;//终止函数的执行
		}
		//inner向左移动的距离
		inner.style.marginLeft=-992*n+"px";
	}
	//prev的单击事件
	prev.onclick=function(){
		n--;
		//移除类名
		next.classList.remove("disable");
		//如果n=0,左箭头为禁用状态
		if(n===0){
			//添加类名
			prev.classList.add("disable");
		}
		//如果n=-1,让n=0
		if(n===-1){
			n=0;
			return;
		}
		//inner向左移动的距离
		inner.style.marginLeft=-992*n+"px";
	}
}
// 搭配、配件、周边选项卡效果
{
	function content(parent){
		const types=parent.querySelectorAll(".dapei_type");
		const goods=parent.querySelectorAll(".dapei_goodslist");
		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<types.length;i++){
					types[i].classList.remove("active");
					goods[i].classList.remove("active");
				}
				this.classList.add("active");
				goods[index].classList.add("active");
			}
		});
	}
	const contentlist=document.querySelectorAll(".dapei");
	contentlist.forEach(function(ele){
		content(ele);
	});
}
// 内容版块选项卡效果
{
	function wheel(parent){
		let prev=parent.querySelector(".neirong_lbtn");
		let next=parent.querySelector(".neirong_rbtn");
		let inner=parent.querySelector(".neirong_inner");
		let circles=parent.querySelectorAll(".neirong_circle");
		let content=parent.querySelectorAll(".neirong_list_item");
		let n=0;
		next.onclick=function(){
			n++;
			if(n===content.length){
				n=content.length-1;
			}
			inner.style.marginLeft=n*-296+"px";
			circles[n].classList.add("active");
			circles[n-1].classList.remove("active");
		};
		prev.onclick=function(){
			n--;
			if(n<0){
				n=0;
			}
			inner.style.marginLeft=n*-296+"px";
			circles[n].classList.add("active");
			circles[n+1].classList.remove("active");
			obj=circles[n];

		};
		let obj=circles[0];
		circles.forEach(function(ele,index){
			ele.onclick=function(){
				obj.classList.remove("active");
				ele.classList.add("active");
				obj=ele;
				inner.style.marginLeft=index*-296+"px";
				n=index;
			}
		})
	}
	const contentitems=document.querySelectorAll(".neirong_item,.neirong_item3,.neirong_item2,.neirong_item1");
	contentitems.forEach(function(ele){
		wheel(ele);
	})
}
//为你推荐效果
{
	const prev=document.querySelector(".tuijian_btn1");
	const next=document.querySelector(".tuijian_btn2");
	const inner=document.querySelector(".tuijian_inner");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===3){
			this.classList.add("disable");
		}
		if(n===4){
			n=3;
			return;//终止函数的执行
		}
		inner.style.marginLeft=-1226*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			prev.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}
}