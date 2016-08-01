

	var app = angular.module('myApp', []);
        app.controller('customersCtrl', function($scope, $http) {
       $http.get("json/sock.json")
   		 .success(function(data) {
   		 	/*$scope.names = response.result
   		 	angular.forEach($scope.names,function(value,index){
   		 		console.log(value)
   		 	})*/
   		 console.log(data.result[0].sock);
   		 var data=data.result[1].sock;
   		 var str="";
   		 data.forEach(function(value,index){
   		 	console.log(value);
   		 	str+='<li>'+value+'</li>'
   		 })
   		 $("#ul").html(str)

   	});
});
;

	var app = angular.module('myApp', []);
        app.controller('customersCtrl', function($scope, $http) {
       $http.get("json/sock.json")
   		 .success(function(data) {
        
   		 	/*$scope.names = response.result
   		 	angular.forEach($scope.names,function(value,index){
   		 		console.log(value)
   		 	})*/
   		 console.log(data.result[0].sock);
   		 var data=data.result[2].sock;
   		 var str="";
   		 data.forEach(function(value,index){
   		 	console.log(value);
   		 	str+='<li>'+value+'</li>'
   		 })
   		 $("#ul1").html(str)

   	});
});
;$(function(){
	$("#ul1").on("click","li",function(){alert(1)
		$(this).css("background","red");
		$(this).siblings().css("background","#fff");
	})
});
	var Dialog=function(opt){
		/*var defaults={
			title:"标题",
			msg:"",
			btn:["确定","取消"],
			callback1:null
		},*/

		//扩展默认参数
		settings=$.extend({},defaults,opt);
		//创建HTML结构
		/*var html=$("<div class='mask'></div>"+
						"<div class='dia_box'>"+
							"<p class='dia_msg'>"+settings.msg+"</p>"+
							"<p class='dia_btn'></p>"+
						"</div>");*/
var html=$('<section class="cao-tan">'+
		'<div class="x"></div>'+
		'<p>亲。我们为您准备60道体能测试题，请您耐心如实答题，获取真实体质结果!!!</p>'+
		'<div class="an"><a href="#/page6">开始测试</a></div>'+
	'<section>');
		$('body').prepend(html);
		//动态添加按钮
		/*if(settings.btn.length==0) return;
		for(var i=0,len=settings.btn.length;i<len;i++){
			var Btn=$("<span id='btn"+i+"'>"+settings.btn[i]+"</span>");
			$(".dia_btn").append(Btn);
		}*/

		//给按钮添加单击事件
		$("#btn0").on("click",function(){
			close();
			settings.callback1 && settings.callback1();
		})

		//第二个按钮
		$("#btn1").on("click",function(){
			close();
		})

		//关闭弹出框
		function close(){
			$(".mask").remove();
			$(".dia_box").remove();
		}
	}

	$.dialog=function(opt){
		return new Dialog(opt);
	}
;

	var app = angular.module('myApp', []);
        app.controller('customersCtrl', function($scope, $http) {
       $http.get("json/sock.json")
   		 .success(function(data) {
   		 	/*$scope.names = response.result
   		 	angular.forEach($scope.names,function(value,index){
   		 		console.log(value)
   		 	})*/
   		 console.log(data.result[0].sock);
   		 var data=data.result[0].sock;
   		 var str="";
   		 data.forEach(function(value,index){
   		 	console.log(value);
   		 	str+='<li><input type="checkbox" id="li"><label for="li">'+value+'</label></li>'
   		 })
   		 $(".ul").html(str)

   	});
});
;

	var myScroll;
	function init(){
		getData();
	}
	function getData(){
		$.ajax({
			url:"json/consitition.json",
			type:"post",
			dataType:"json",
			success:function(data){
				bindEvent(data);
			},
			error:function(){
				alert("请求数据失败，请重试。")
			}
		})
	}

	function bindEvent(data){
		$(".habitus").one("tap",function(){
			$(".habitus_type").html("您的体质为:")
			$(".habitus").css({
				"height":"50px",
				"padding":"0 0 0 22px"
			});
			$(".habitus_type").css({
				"margin-top":"0",
				"line-height":"50px"
			});
			$(".p").hide();
			$(".habitus_trait").hide();
			var types_html="",i=data.result.consititution_types[0];
			console.log(i)
			types_html+='<section>'+
				'<p>总体特征:</p><p>'+i.overallcharacteristic+'</p>'+
				'</section>'+
				'<section>'+
					'<p>形体特征:</p><p>'+i.bodycharacteristic+'</p>'+
				'</section>'+
				'<section>'+
					'<p>常见表现:</p><p>'+i.mainfestation+'</p>'+
				'</section>'+
				'<section>'+
					'<p>心理特征:</p><p>'+i.mentalprofile+'</p>'+
				'</section>'+
				'<section>'+
					'<p>发病倾向:</p><p>'+i.omcome+'</p>'+
				'</section>'+
				'<section>'+
					'<p>对外界环境适应能力:</p><p>'+i.adaptive_capacity+'</p>'+
				'</section>';
			$(".habitus_details").html(types_html);
			$(".unfold").show();
		})

		$(".unfold").one("tap",function(){
			$(".unfold").hide();
			var details_html="",_data=data.result.consititution_details[0];
			console.log(_data)
			console.log(_data[0].title)
			_data.forEach(function(i){
				console.log(i.list)
				details_html+='<div class="details_item">'+
					'<h6>'+i.title+'</h6>'+'<ul>';
				for(var j=0;j<=i.list.length-1;j++){
					details_html+='<li>'+i.list[j]+'</li>';
				}
				details_html+='</ul>'+'</div>';
			})
			$(".surplus_content").html(details_html);
			myScroll=new IScroll('.container',{mouseWheel:true});
		})

		$(".suit_food").on("tap",function(){
			if($(".suit_food_details").hasClass("hide")){
				$(".suit_food_details").removeClass("hide");
				$(".suit_food").css({
					"background":"url(img/arrow_up.png) no-repeat 95% center",
					"background-size":"16px 9px"
				})
				myScroll=new IScroll('.container',{mouseWheel:true});
			}else{
				$(".suit_food_details").addClass("hide");
				$(".suit_food").css({
					"background":"url(img/arrow_down.png) no-repeat 95% center",
					"background-size":"16px 9px"
				})
			}
		})
		$(".unsuited_food").on("tap",function(){
			if($(".unsuited_food_details").hasClass("hide")){
				$(".unsuited_food_details").removeClass("hide");
				myScroll=new IScroll('.container',{mouseWheel:true});
				$(".unsuited_food").css({
					"background":"url(img/arrow_up.png) no-repeat 95% center",
					"background-size":"16px 9px"
				})
			}else{
				$(".unsuited_food_details").addClass("hide");
				myScroll=new IScroll('.container',{mouseWheel:true});
				$(".unsuited_food").css({
					"background":"url(img/arrow_down.png) no-repeat 95% center",
					"background-size":"16px 9px"
				})
			}
		})
	}
