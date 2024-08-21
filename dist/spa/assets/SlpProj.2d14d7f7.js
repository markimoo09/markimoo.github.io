import{S,a as I,Q as C,b as P,c as _,d as V,e as Q,f as j,C as k}from"./scrollbar.7f1232bf.js";import{Q as F}from"./QBtn.78811e33.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";import{r as u,E as d,Q as w,J as t,H as s,G as a,R as p,S as x,X as D,I as m,T as v,w as E,U as R,V as U}from"./index.fc258cf1.js";import"./vm.cb5e1fd2.js";import"./scroll.540ba8c8.js";const n=i=>(R("data-v-3945c601"),i=i(),U(),i),B={class:"tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-main-bg tw-px-6 sm:tw-px-10 lg:tw-px-16 tw-py-8 sm:tw-py-12"},T={class:"tw-max-w-screen-xl tw-flex tw-flex-col tw-space-y-4 sm:tw-space-y-6 lg:tw-space-y-8"},K=D('<div class="tw-flex tw-flex-col tw-items-start" data-v-3945c601><h1 class="tw-text-white fira-code tw-font-bold tw-text-3xl sm:tw-text-4xl" data-v-3945c601> Personal Information System </h1><div class="tw-flex tw-flex-col sm:tw-flex-row tw-py-4 tw-space-y-4 sm:tw-space-y-0 sm:tw-space-x-8 lg:tw-space-x-12" data-v-3945c601><p class="tw-text-gray-400 fira-code tw-text-lg sm:tw-text-xl" data-v-3945c601><span data-v-3945c601><i class="fa-solid fa-tag" data-v-3945c601></i></span> College Service Learning Program </p><p class="tw-text-gray-400 fira-code tw-text-lg sm:tw-text-xl" data-v-3945c601><span data-v-3945c601><i class="fa-solid fa-tag" data-v-3945c601></i></span> Web App </p></div></div>',1),$={class:"q-mt-md text-center"},J={class:"q-mt-md text-center"},L=["src","onClick"],N={class:"tw-flex tw-flex-col tw-items-start"},O=n(()=>t("p",{class:"tw-text-white fira-code tw-text-xl sm:tw-text-2xl tw-font-bold"}," What is this project? ",-1)),q=n(()=>t("p",{class:"tw-text-white fira-code tw-text-base sm:tw-text-lg lg:tw-text-xl"},[t("br"),m(" In response to the needs of Philippine Island Kids International Foundation Inc. (PIKIFI) in Canitoan, Cagayan de Oro City, our team from XU developed a Personal Information System as a technology solution for their problems. PIKIFI is a charity for children in street conditions, waste picker children, and those who have become victims of neglect and abuse in the Philippines. "),t("br"),t("br"),m(" This web-based system allows the administrators of PIKIFI to manage the information of the person under their care, where they can create, read, edit, update, and delete an individual's information. Report generation is also an important feature where it allows to export children consensus to a PDF or CSV file. "),t("br"),t("br"),m(" Additionally, It also implements Role-based access where different levels of users are restricted on what they can see and change, where the admin has full view and control, also allowing them to manage the accounts of other users. "),t("br"),t("br"),t("br")],-1)),G=n(()=>t("p",{class:"tw-text-white fira-code tw-text-xl sm:tw-text-2xl tw-font-bold"}," List of Features: ",-1)),W={class:"tw-pt-4 tw-flex tw-flex-col tw-space-y-2 sm:tw-space-y-1 tw-pl-4 sm:tw-pl-6"},X=n(()=>t("span",null,[t("i",{class:"fa-solid fa-check tw-text-android-green tw-mr-2 sm:tw-mr-3"})],-1)),z={class:"tw-flex tw-space-y-2 tw-flex-col tw-justify-center tw-mt-8 sm:tw-mt-4 lg:tw-mt-6"},H=n(()=>t("p",{class:"tw-text-white fira-code tw-text-xl sm:tw-text-2xl tw-font-bold tw-mt-8"}," Technologies Used: ",-1)),M={class:"tw-flex tw-flex-wrap tw-gap-2 tw-pt-2 tw-justify-start"},Y={class:"tw-text-android-green tw-font-medium"},Z=["src"],tt=Object.assign({name:"VmsProj",components:{Swiper:S,SwiperSlide:I}},{__name:"SlpProj",setup(i){const y=["Perform CRUD Operations","Generate a Report (CSV or PDF)","Account Management","Role-based Access","Accounting","AES-252-CBC Encryption","Enforces Authentication"],b=["Quasar JS","Tailwind CSS","Express JS","Firebase","Figma"],h=u("main"),r=u(""),c=u(!1),g=f=>{if(f==="main"){r.value="/src/assets/images/slp/main_pic.png",c.value=!0;return}r.value=`/src/assets/images/slp/page_${f}.png`,console.log(r.value),c.value=!0};return(f,o)=>(d(),w(p,null,[t("div",B,[t("div",T,[K,t("div",null,[s(C,{animated:"",modelValue:h.value,"onUpdate:modelValue":o[1]||(o[1]=e=>h.value=e),arrows:"","transition-prev":"scale","transition-next":"scale",navigation:"",infinite:"","control-color":"green-6",padding:"",class:"tw-bg-main-bg text-white tw-h-auto"},{default:a(()=>[s(_,{class:"column no-wrap flex-center",name:"main"},{default:a(()=>[t("div",$,[t("img",{class:"tw-rounded-lg tw-w-full tw-h-auto",src:"/src/assets/images/slp/main_pic.png",onClick:o[0]||(o[0]=e=>g("main"))})])]),_:1}),(d(),w(p,null,x(5,(e,l)=>s(_,{class:"column no-wrap flex-center",key:l,name:e},{default:a(()=>[t("div",J,[t("img",{class:"tw-rounded-lg tw-w-full tw-h-auto",src:`/src/assets/images/slp/page_${e}.png`,onClick:et=>g(e)},null,8,L)])]),_:2},1032,["name"])),64))]),_:1},8,["modelValue"])]),t("div",N,[O,q,G,t("div",W,[(d(),w(p,null,x(y,(e,l)=>t("p",{key:l,class:"tw-text-white fira-code tw-text-base sm:tw-text-lg lg:tw-text-xl tw-font-medium"},[X,m(" "+v(e),1)])),64))]),t("div",z,[H,t("div",M,[(d(),w(p,null,x(b,(e,l)=>t("div",{class:"tw-bg-android-green tw-bg-opacity-15 tw-px-4 sm:tw-px-6 tw-py-2 tw-rounded-full tw-text-center tw-flex tw-justify-center",key:l},[t("p",Y,v(e),1)])),64))])])])])]),s(P,{modelValue:c.value,"onUpdate:modelValue":o[2]||(o[2]=e=>c.value=e),persistent:"",maximized:"","transition-show":"scale","transition-hide":"scale"},{default:a(()=>[s(V,null,{default:a(()=>[s(Q,null,{default:a(()=>[t("img",{src:r.value,class:"tw-w-full tw-h-auto"},null,8,Z)]),_:1}),s(j,{align:"right"},{default:a(()=>[E(s(F,{flat:"",label:"Close",color:"primary"},null,512),[[k]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});var rt=A(tt,[["__scopeId","data-v-3945c601"]]);export{rt as default};
