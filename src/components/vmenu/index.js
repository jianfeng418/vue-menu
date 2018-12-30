/**
 * @file :vue的menu菜单实现，通过实例$menu(options)调用
 * @Author: panjianfeng
 * @e-mail: jianfeng418@sina.com
 * @createDate:2018-11-29
 */
import vMenu from './src/main';

const install = function(Vue){
	Vue.prototype.$menu = function(event,options){
		var rect = {};
		['top','left'].forEach(function(property){
			var scroll = property === 'top' ? 'scrollTop' :'scrollLeft' ;
			rect[property] = event.currentTarget.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll];
			

		});
		rect['left'] = rect['left'] + 160 > document.body.offsetWidth ? document.body.offsetWidth-160 : rect['left'];
		['height','width'].forEach(function(property){
			rect[property] = event.currentTarget.getBoundingClientRect()[property];
		});

		if(options){
			options.rect = rect;
			options.ulClass = options.ulClass ? options.ulClass :'';
		}else{
			let node = document.querySelector('#v-menu-wrap-div');
			if(node && node.parentNode){
				node.parentNode.removeChild(node);
			};
			return ;
		}
		var vmenu = Vue.extend(vMenu);
		var componentMenu = new vmenu({
			data:options
		}).$mount();
		let node = document.querySelector('#v-menu-wrap-div');
		if(node){
			document.querySelector('body').removeChild(node);
		}

		Vue.nextTick(function(){
			document.querySelector('body').appendChild(componentMenu.$el);
		});
		document.onclick = function(e){
			let node = document.querySelector('#v-menu-wrap-div');
			if(node){
				document.querySelector('body').removeChild(node);
				document.onclick = null;
			}
			
		};
		
	};
};

export default install;