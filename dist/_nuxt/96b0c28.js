(window.webpackJsonp=window.webpackJsonp||[]).push([[5,9],{564:function(e,r,l){"use strict";l.r(r);l(72);var o={props:{images:{type:Array,required:!0},direction:{type:String,required:!0,validator:function(e){return["left","right"].includes(e)}}}},c=l(16),component=Object(c.a)(o,(function(){var e=this,r=e._self._c;return r("div",{staticClass:"carousel relative w-full h-20 md:h-64 overflow-hidden"},[r("div",{staticClass:"carousel-item absolute top-0 left-0 right-0 bottom-0 flex gap-x-3",class:{"move-right":"right"===e.direction,"move-left":"left"===e.direction}},e._l(e.images,(function(image,e){return r("img",{key:e,staticClass:"min-w-[100px] md:min-w-[400px] h-32 md:h-60 object-cover object-center block origin-center skew-x-12 rounded-md",attrs:{src:image,alt:""}})})),0)])}),[],!1,null,null,null);r.default=component.exports},652:function(e,r,l){"use strict";l.r(r);var o={components:{MultiCarousel:l(564).default},data:function(){return{images1:["/carousel/carousel1.jpg","/carousel/carousel2.jpg","/carousel/carousel3.jpg","/carousel/carousel4.jpg","/carousel/carousel5.jpg","/carousel/carousel6.png","/carousel/carousel7.png","/carousel/carousel8.png","/carousel/carousel9.png","/carousel/carousel10.png","/carousel/carousel11.png","/carousel/carousel12.png","/carousel/carousel13.png"],images2:["/carousel/carousel1.jpg","/carousel/carousel2.jpg","/carousel/carousel3.jpg","/carousel/carousel4.jpg","/carousel/carousel5.jpg","/carousel/carousel6.png","/carousel/carousel7.png","/carousel/carousel8.png","/carousel/carousel9.png","/carousel/carousel10.png","/carousel/carousel11.png","/carousel/carousel12.png","/carousel/carousel13.png"]}}},c=l(16),component=Object(c.a)(o,(function(){var e=this,r=e._self._c;return r("main",{staticClass:"my-10 md:my-32 space-y-10"},[r("div",{staticClass:"flex flex-col items-center justify-center space-y-8"},[r("MultiCarousel",{attrs:{images:e.images1,direction:"right"}}),e._v(" "),r("MultiCarousel",{attrs:{images:e.images2,direction:"left"}})],1)])}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{MultiCarousel:l(564).default})}}]);