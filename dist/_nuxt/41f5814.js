(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{357:function(t,e,r){t.exports=r.p+"img/add18.cbb5dc4.jpg"},425:function(t,e,r){var map={"./celebration.svg":229,"./copy.svg":230,"./eye-close.svg":239,"./eye-open.svg":240,"./facebook.svg":231,"./files.svg":241,"./gmail.svg":232,"./instagram.svg":233,"./microsoft.svg":242,"./pdf.svg":243,"./photos.svg":244,"./png.svg":245,"./poll.svg":246,"./project.svg":247,"./projects.svg":248,"./recent.svg":249,"./recycle.svg":250,"./results.svg":251,"./shared.svg":252,"./shopping.svg":253,"./tiktok.svg":234,"./twitter.svg":235,"./website.svg":236,"./whatsapp.svg":237,"./xlsx.svg":254,"./youtube.svg":238};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=425},647:function(t,e,r){"use strict";r.r(e);r(51),r(41),r(12),r(92),r(50),r(28);var o={layout:"auth",data:function(){return{processing:!1,showPassword:!1,isTyping:!1,form:{firstname:"",lastname:"",matric:"",level:"",email:"",password:""}}},computed:{isFormEmpty:function(){return!!(this.form.firstname&&this.form.lastname&&this.form.matric&&this.form.level&&this.form.email&&this.form.password&&this.isMatricValid)},eye:function(){return this.showPassword?"eye-open.svg":"eye-close.svg"},isMatricValid:function(){return/^\d{9}$/.test(this.form.matric)}},methods:{validateMatricNumber:function(){this.isTyping=!0},handleSignup:function(){var t=this;this.processing=!0,this.$axios.post("https://nimelssa-elections-backend.onrender.com/api/auth/register",this.form).then((function(e){t.$toastr.s("Signup was successful"),t.$router.push("/auth/login")})).catch((function(e){t.$toastr.e(e.response.data.message)})).finally((function(){t.processing=!1}))}}},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"bg-white"},[e("div",{staticClass:"lg:grid lg:min-h-screen lg:grid-cols-12"},[e("section",{staticClass:"relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"},[e("img",{staticClass:"absolute inset-0 h-full w-full object-cover opacity-80",attrs:{alt:"Night",src:r(357)}}),t._v(" "),e("div",{staticClass:"hidden lg:relative lg:block lg:p-12"},[e("a",{staticClass:"block text-white",attrs:{href:"/"}},[e("span",{staticClass:"sr-only"},[t._v("Home")]),t._v(" "),e("svg",{staticClass:"h-8 sm:h-10",attrs:{viewBox:"0 0 28 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z",fill:"currentColor"}})])]),t._v(" "),e("h2",{staticClass:"mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl"},[t._v("\n          Welcome to The Nigerian Medical Laboratory Science Students\n          Association (NIMELSSA)\n        ")]),t._v(" "),e("p",{staticClass:"mt-4 leading-relaxed text-white/90"},[t._v("\n          The Nigerian Medical Laboratory Science Students Association\n          (NIMELSSA) is the student body Association of the department of\n          Medical Laboratory Science and is one of the departments of the\n          University of Lagos (UNILAG) under the College of Medicine.\n        ")])])]),t._v(" "),e("main",{staticClass:"flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 w-full"},[e("div",{staticClass:"max-w-xl lg:max-w-2xl w-full"},[e("div",{staticClass:"relative -mt-16 block lg:hidden"},[e("a",{staticClass:"inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20",attrs:{href:"/"}},[e("span",{staticClass:"sr-only"},[t._v("Home")]),t._v(" "),e("svg",{staticClass:"h-8 sm:h-10",attrs:{viewBox:"0 0 28 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z",fill:"currentColor"}})])])]),t._v(" "),e("form",{staticClass:"mt-8 w-full space-y-6",on:{submit:function(e){return e.preventDefault(),t.handleSignup.apply(null,arguments)}}},[t._m(0),t._v(" "),e("div",{staticClass:"col-span-6 w-full"},[e("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"firstname"}},[t._v("First Name\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.firstname,expression:"form.firstname"}],staticClass:"mt-1 w-full rounded-md focus-within:border-green-500 border-gray-200 py-3 border outline-none px-3 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"firstname",type:"text",disabled:t.processing,name:"firstname"},domProps:{value:t.form.firstname},on:{input:function(e){e.target.composing||t.$set(t.form,"firstname",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-span-6 w-full"},[e("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"lastname"}},[t._v("Last Name\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lastname,expression:"form.lastname"}],staticClass:"mt-1 w-full rounded-md border-gray-200 py-3 border outline-none px-3 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"lastname",type:"text",disabled:t.processing,name:"lastname"},domProps:{value:t.form.lastname},on:{input:function(e){e.target.composing||t.$set(t.form,"lastname",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-span-6 w-full"},[e("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"Matric"}},[t._v("\n              Matric\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.matric,expression:"form.matric"}],staticClass:"mt-1 w-full rounded-md border-gray-200 py-3 border outline-none px-3 bg-white text-sm text-gray-700 shadow-sm",class:{"border-red-500":!t.isMatricValid&&t.isTyping,"border-gray-300":t.isMatricValid||!t.isTyping},attrs:{id:"Matric",type:"number",disabled:t.processing,name:"Matric"},domProps:{value:t.form.matric},on:{input:[function(e){e.target.composing||t.$set(t.form,"matric",e.target.value)},t.validateMatricNumber]}}),t._v(" "),!t.isMatricValid&&t.isTyping?e("p",{staticClass:"mt-1 text-sm text-red-500"},[t._v("Invalid matric number")]):t._e()]),t._v(" "),e("div",{staticClass:"col-span-6 w-full"},[e("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"Email"}},[t._v("\n              Email\n            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"mt-1 w-full rounded-md border-gray-200 py-3 border outline-none px-3 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"Email",type:"email",disabled:t.processing,name:"Email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-span-6 w-full"},[e("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"level"}},[t._v("\n              Level\n            ")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.level,expression:"form.level"}],staticClass:"mt-1 w-full rounded-md border-gray-200 py-3 border outline-none px-3 bg-white text-sm text-gray-700 shadow-sm",attrs:{name:"level",disabled:t.processing,id:"level"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"level",e.target.multiple?r:r[0])}}},[e("option",{attrs:{value:"200"}},[t._v("200 Level")]),t._v(" "),e("option",{attrs:{value:"300"}},[t._v("300 Level")]),t._v(" "),e("option",{attrs:{value:"400"}},[t._v("400 Level")]),t._v(" "),e("option",{attrs:{value:"500"}},[t._v("500 Level")])])]),t._v(" "),e("div",{staticClass:"col-span-6 w-full relative"},[e("label",{staticClass:"block text-sm font-medium text-gray-700",attrs:{for:"Password"}},[t._v("\n              Password\n            ")]),t._v(" "),"checkbox"==(t.showPassword?"text":"password")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"mt-1 w-full rounded-md border-gray-200 py-3 border outline-none px-3 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"Password",name:"password",disabled:t.processing,type:"checkbox"},domProps:{checked:Array.isArray(t.form.password)?t._i(t.form.password,null)>-1:t.form.password},on:{change:function(e){var r=t.form.password,o=e.target,n=!!o.checked;if(Array.isArray(r)){var l=t._i(r,null);o.checked?l<0&&t.$set(t.form,"password",r.concat([null])):l>-1&&t.$set(t.form,"password",r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.form,"password",n)}}}):"radio"==(t.showPassword?"text":"password")?e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"mt-1 w-full rounded-md border-gray-200 py-3 border outline-none px-3 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"Password",name:"password",disabled:t.processing,type:"radio"},domProps:{checked:t._q(t.form.password,null)},on:{change:function(e){return t.$set(t.form,"password",null)}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"mt-1 w-full rounded-md border-gray-200 py-3 border outline-none px-3 bg-white text-sm text-gray-700 shadow-sm",attrs:{id:"Password",name:"password",disabled:t.processing,type:t.showPassword?"text":"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),e("img",{staticClass:"absolute cursor-pointer top-9 right-4 h-6 w-6",attrs:{src:r(425)("./".concat(t.eye)),alt:""},on:{click:function(e){t.showPassword=!t.showPassword}}})]),t._v(" "),e("div",{staticClass:"w-full"},[e("button",{staticClass:"w-full shrink-0 disabled:opacity-25 disabled:cursor-not-allowed rounded-md border bg-black px-12 py-3 text-sm font-medium text-white transition",attrs:{type:"submit",disabled:!t.isFormEmpty||t.processing}},[t._v("\n              "+t._s(t.processing?"processing...":"Sign up")+"\n            ")]),t._v(" "),e("p",{staticClass:"pt-4 text-sm text-gray-500 sm:mt-0 text-center font-semibold"},[t._v("\n              Already have an account?\n              "),e("nuxt-link",{staticClass:"text-gray-700 underline",attrs:{to:"/auth/login"}},[t._v("\n                Sign in ")]),t._v(".\n            ")],1)])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"font-semibold text-2xl"},[t._v("Create an account!")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-600"},[t._v("\n              Fill the form to create an account.\n            ")])])}],!1,null,null,null);e.default=component.exports}}]);