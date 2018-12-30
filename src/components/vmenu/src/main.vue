<template>
	<div id='v-menu-wrap-div' class='v-menu-wrap' :style='{left:rect.left +"px",top:rect.top + rect.height + "px"}' >
		<ul ref='v-menu-ul' class='vmenu-operate-ul' :class='ulClass'>
			<li v-for='liItem in list' @click='clickLiBtn(liItem)' :class='[liItem.disabled ===true ? "disabled":"",liItem.class]'>
				<span v-if='liItem.icon' class='v-menu-span-icon operate-icon' :class='liItem.icon'></span>
				<span>{{liItem.text}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'vMenu',
		methods:{
			clickLiBtn(li){
				if(li.disabled){
					return;
				}else if(li.clickFun){
					li.clickFun(li);
				}
			}
		},
		data: function(){
			return {
			}
		},

	}
</script>
<style lang='scss'>
$hoverColor:#39ace5;

	div.v-menu-wrap{
		position:absolute;
		z-index:9999;
		> ul.vmenu-operate-ul{
			list-style: none;
			color:black;
			float: left;
	    	min-width: 160px;
	   	 	padding: 5px 0;
	   	 	margin: 2px 0 0;
	    	font-size: 14px;
	    	text-align: left;
	    	background-color: #fff;
			box-shadow: 0 6px 12px rgba(0,0,0,.175);
			border: 1px solid rgba(0,0,0,.15);
			>li{
				line-height:20px;
				display: list-item;
				padding:3px 20px;
				cursor:pointer;
				&:hover{
					color: #fff;
    				background-color: $hoverColor;
    				span.v-menu-span-icon{
    					//background-image:url(~@/images/icons_hover.png);
    				}
				};
				&.disabled,&.disabled:hover{
					background-color:white;
					cursor:default;
					span.v-menu-span-icon{
						//background-image:url(~@/images/icons_disabled.png);
					}
					span{
						color: rgb(167, 167, 167);
					}
				};
			}
			
			
		};
		> ul.vmenu-operate-ul.change-color{
			padding:0px;
			margin-top:15px;
			>li{
				line-height:27px;
				font-family: "微软雅黑";
				font-size: 12px;
				&:nth-child(odd){
					background-color: #f0f0f0;
					color:black;
				}
				&:hover{
					background-color: #fafafa;
					color:black;
				}
			}
			
		};
	}
	
</style>