import{_ as H}from"../chunks/preload-helper-Dp1pzeXC.js";/*!
  * PhotoSwipe Lightbox 5.4.4 - https://photoswipe.com
  * (c) 2024 Dmytro Semenov
  */function c(s,t,i){const e=document.createElement(t);return s&&(e.className=s),i&&i.appendChild(e),e}function V(s,t,i){let e=`translate3d(${s}px,0px,0)`;return i!==void 0&&(e+=` scale3d(${i},${i},1)`),e}function w(s,t,i){s.style.width=typeof t=="number"?`${t}px`:t,s.style.height=typeof i=="number"?`${i}px`:i}const d={IDLE:"idle",LOADING:"loading",LOADED:"loaded",ERROR:"error"};function G(s){return"button"in s&&s.button===1||s.ctrlKey||s.metaKey||s.altKey||s.shiftKey}function u(s,t,i=document){let e=[];if(s instanceof Element)e=[s];else if(s instanceof NodeList||Array.isArray(s))e=Array.from(s);else{const n=typeof s=="string"?s:t;n&&(e=Array.from(i.querySelectorAll(n)))}return e}function U(s){return typeof s=="function"&&s.prototype&&s.prototype.goTo}function z(){return!!(navigator.vendor&&navigator.vendor.match(/apple/i))}class W{constructor(t,i){this.type=t,this.defaultPrevented=!1,i&&Object.assign(this,i)}preventDefault(){this.defaultPrevented=!0}}class Z{constructor(){this._listeners={},this._filters={},this.pswp=void 0,this.options=void 0}addFilter(t,i,e=100){var n,r,o;this._filters[t]||(this._filters[t]=[]),(n=this._filters[t])===null||n===void 0||n.push({fn:i,priority:e}),(r=this._filters[t])===null||r===void 0||r.sort((a,l)=>a.priority-l.priority),(o=this.pswp)===null||o===void 0||o.addFilter(t,i,e)}removeFilter(t,i){this._filters[t]&&(this._filters[t]=this._filters[t].filter(e=>e.fn!==i)),this.pswp&&this.pswp.removeFilter(t,i)}applyFilters(t,...i){var e;return(e=this._filters[t])===null||e===void 0||e.forEach(n=>{i[0]=n.fn.apply(this,i)}),i[0]}on(t,i){var e,n;this._listeners[t]||(this._listeners[t]=[]),(e=this._listeners[t])===null||e===void 0||e.push(i),(n=this.pswp)===null||n===void 0||n.on(t,i)}off(t,i){var e;this._listeners[t]&&(this._listeners[t]=this._listeners[t].filter(n=>i!==n)),(e=this.pswp)===null||e===void 0||e.off(t,i)}dispatch(t,i){var e;if(this.pswp)return this.pswp.dispatch(t,i);const n=new W(t,i);return(e=this._listeners[t])===null||e===void 0||e.forEach(r=>{r.call(this,n)}),n}}class q{constructor(t,i){if(this.element=c("pswp__img pswp__img--placeholder",t?"img":"div",i),t){const e=this.element;e.decoding="async",e.alt="",e.src=t,e.setAttribute("role","presentation")}this.element.setAttribute("aria-hidden","true")}setDisplayedSize(t,i){this.element&&(this.element.tagName==="IMG"?(w(this.element,250,"auto"),this.element.style.transformOrigin="0 0",this.element.style.transform=V(0,0,t/250)):w(this.element,t,i))}destroy(){var t;(t=this.element)!==null&&t!==void 0&&t.parentNode&&this.element.remove(),this.element=null}}class B{constructor(t,i,e){this.instance=i,this.data=t,this.index=e,this.element=void 0,this.placeholder=void 0,this.slide=void 0,this.displayedImageWidth=0,this.displayedImageHeight=0,this.width=Number(this.data.w)||Number(this.data.width)||0,this.height=Number(this.data.h)||Number(this.data.height)||0,this.isAttached=!1,this.hasSlide=!1,this.isDecoding=!1,this.state=d.IDLE,this.data.type?this.type=this.data.type:this.data.src?this.type="image":this.type="html",this.instance.dispatch("contentInit",{content:this})}removePlaceholder(){this.placeholder&&!this.keepPlaceholder()&&setTimeout(()=>{this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0)},1e3)}load(t,i){if(this.slide&&this.usePlaceholder())if(this.placeholder){const e=this.placeholder.element;e&&!e.parentElement&&this.slide.container.prepend(e)}else{const e=this.instance.applyFilters("placeholderSrc",this.data.msrc&&this.slide.isFirstSlide?this.data.msrc:!1,this);this.placeholder=new q(e,this.slide.container)}this.element&&!i||this.instance.dispatch("contentLoad",{content:this,isLazy:t}).defaultPrevented||(this.isImageContent()?(this.element=c("pswp__img","img"),this.displayedImageWidth&&this.loadImage(t)):(this.element=c("pswp__content","div"),this.element.innerHTML=this.data.html||""),i&&this.slide&&this.slide.updateContentSize(!0))}loadImage(t){var i,e;if(!this.isImageContent()||!this.element||this.instance.dispatch("contentLoadImage",{content:this,isLazy:t}).defaultPrevented)return;const n=this.element;this.updateSrcsetSizes(),this.data.srcset&&(n.srcset=this.data.srcset),n.src=(i=this.data.src)!==null&&i!==void 0?i:"",n.alt=(e=this.data.alt)!==null&&e!==void 0?e:"",this.state=d.LOADING,n.complete?this.onLoaded():(n.onload=()=>{this.onLoaded()},n.onerror=()=>{this.onError()})}setSlide(t){this.slide=t,this.hasSlide=!0,this.instance=t.pswp}onLoaded(){this.state=d.LOADED,this.slide&&this.element&&(this.instance.dispatch("loadComplete",{slide:this.slide,content:this}),this.slide.isActive&&this.slide.heavyAppended&&!this.element.parentNode&&(this.append(),this.slide.updateContentSize(!0)),(this.state===d.LOADED||this.state===d.ERROR)&&this.removePlaceholder())}onError(){this.state=d.ERROR,this.slide&&(this.displayError(),this.instance.dispatch("loadComplete",{slide:this.slide,isError:!0,content:this}),this.instance.dispatch("loadError",{slide:this.slide,content:this}))}isLoading(){return this.instance.applyFilters("isContentLoading",this.state===d.LOADING,this)}isError(){return this.state===d.ERROR}isImageContent(){return this.type==="image"}setDisplayedSize(t,i){if(this.element&&(this.placeholder&&this.placeholder.setDisplayedSize(t,i),!this.instance.dispatch("contentResize",{content:this,width:t,height:i}).defaultPrevented&&(w(this.element,t,i),this.isImageContent()&&!this.isError()))){const e=!this.displayedImageWidth&&t;this.displayedImageWidth=t,this.displayedImageHeight=i,e?this.loadImage(!1):this.updateSrcsetSizes(),this.slide&&this.instance.dispatch("imageSizeChange",{slide:this.slide,width:t,height:i,content:this})}}isZoomable(){return this.instance.applyFilters("isContentZoomable",this.isImageContent()&&this.state!==d.ERROR,this)}updateSrcsetSizes(){if(!this.isImageContent()||!this.element||!this.data.srcset)return;const t=this.element,i=this.instance.applyFilters("srcsetSizesWidth",this.displayedImageWidth,this);(!t.dataset.largestUsedSize||i>parseInt(t.dataset.largestUsedSize,10))&&(t.sizes=i+"px",t.dataset.largestUsedSize=String(i))}usePlaceholder(){return this.instance.applyFilters("useContentPlaceholder",this.isImageContent(),this)}lazyLoad(){this.instance.dispatch("contentLazyLoad",{content:this}).defaultPrevented||this.load(!0)}keepPlaceholder(){return this.instance.applyFilters("isKeepingPlaceholder",this.isLoading(),this)}destroy(){this.hasSlide=!1,this.slide=void 0,!this.instance.dispatch("contentDestroy",{content:this}).defaultPrevented&&(this.remove(),this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0),this.isImageContent()&&this.element&&(this.element.onload=null,this.element.onerror=null,this.element=void 0))}displayError(){if(this.slide){var t,i;let e=c("pswp__error-msg","div");e.innerText=(t=(i=this.instance.options)===null||i===void 0?void 0:i.errorMsg)!==null&&t!==void 0?t:"",e=this.instance.applyFilters("contentErrorElement",e,this),this.element=c("pswp__content pswp__error-msg-container","div"),this.element.appendChild(e),this.slide.container.innerText="",this.slide.container.appendChild(this.element),this.slide.updateContentSize(!0),this.removePlaceholder()}}append(){if(this.isAttached||!this.element)return;if(this.isAttached=!0,this.state===d.ERROR){this.displayError();return}if(this.instance.dispatch("contentAppend",{content:this}).defaultPrevented)return;const t="decode"in this.element;this.isImageContent()?t&&this.slide&&(!this.slide.isActive||z())?(this.isDecoding=!0,this.element.decode().catch(()=>{}).finally(()=>{this.isDecoding=!1,this.appendImage()})):this.appendImage():this.slide&&!this.element.parentNode&&this.slide.container.appendChild(this.element)}activate(){this.instance.dispatch("contentActivate",{content:this}).defaultPrevented||!this.slide||(this.isImageContent()&&this.isDecoding&&!z()?this.appendImage():this.isError()&&this.load(!1,!0),this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","false"))}deactivate(){this.instance.dispatch("contentDeactivate",{content:this}),this.slide&&this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","true")}remove(){this.isAttached=!1,!this.instance.dispatch("contentRemove",{content:this}).defaultPrevented&&(this.element&&this.element.parentNode&&this.element.remove(),this.placeholder&&this.placeholder.element&&this.placeholder.element.remove())}appendImage(){this.isAttached&&(this.instance.dispatch("contentAppendImage",{content:this}).defaultPrevented||(this.slide&&this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element),(this.state===d.LOADED||this.state===d.ERROR)&&this.removePlaceholder()))}}function K(s,t){if(s.getViewportSizeFn){const i=s.getViewportSizeFn(s,t);if(i)return i}return{x:document.documentElement.clientWidth,y:window.innerHeight}}function m(s,t,i,e,n){let r=0;if(t.paddingFn)r=t.paddingFn(i,e,n)[s];else if(t.padding)r=t.padding[s];else{const o="padding"+s[0].toUpperCase()+s.slice(1);t[o]&&(r=t[o])}return Number(r)||0}function j(s,t,i,e){return{x:t.x-m("left",s,t,i,e)-m("right",s,t,i,e),y:t.y-m("top",s,t,i,e)-m("bottom",s,t,i,e)}}const D=4e3;class X{constructor(t,i,e,n){this.pswp=n,this.options=t,this.itemData=i,this.index=e,this.panAreaSize=null,this.elementSize=null,this.fit=1,this.fill=1,this.vFill=1,this.initial=1,this.secondary=1,this.max=1,this.min=1}update(t,i,e){const n={x:t,y:i};this.elementSize=n,this.panAreaSize=e;const r=e.x/n.x,o=e.y/n.y;this.fit=Math.min(1,r<o?r:o),this.fill=Math.min(1,r>o?r:o),this.vFill=Math.min(1,o),this.initial=this._getInitial(),this.secondary=this._getSecondary(),this.max=Math.max(this.initial,this.secondary,this._getMax()),this.min=Math.min(this.fit,this.initial,this.secondary),this.pswp&&this.pswp.dispatch("zoomLevelsUpdate",{zoomLevels:this,slideData:this.itemData})}_parseZoomLevelOption(t){const i=t+"ZoomLevel",e=this.options[i];if(e)return typeof e=="function"?e(this):e==="fill"?this.fill:e==="fit"?this.fit:Number(e)}_getSecondary(){let t=this._parseZoomLevelOption("secondary");return t||(t=Math.min(1,this.fit*3),this.elementSize&&t*this.elementSize.x>D&&(t=D/this.elementSize.x),t)}_getInitial(){return this._parseZoomLevelOption("initial")||this.fit}_getMax(){return this._parseZoomLevelOption("max")||Math.max(1,this.fit*4)}}function N(s,t,i){const e=t.createContentFromData(s,i);let n;const{options:r}=t;if(r){n=new X(r,s,-1);let o;t.pswp?o=t.pswp.viewportSize:o=K(r,t);const a=j(r,o,s,i);n.update(e.width,e.height,a)}return e.lazyLoad(),n&&e.setDisplayedSize(Math.ceil(e.width*n.initial),Math.ceil(e.height*n.initial)),e}function Y(s,t){const i=t.getItemData(s);if(!t.dispatch("lazyLoadSlide",{index:s,itemData:i}).defaultPrevented)return N(i,t,s)}class J extends Z{getNumItems(){var t;let i=0;const e=(t=this.options)===null||t===void 0?void 0:t.dataSource;e&&"length"in e?i=e.length:e&&"gallery"in e&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),e.items&&(i=e.items.length));const n=this.dispatch("numItems",{dataSource:e,numItems:i});return this.applyFilters("numItems",n.numItems,e)}createContentFromData(t,i){return new B(t,this,i)}getItemData(t){var i;const e=(i=this.options)===null||i===void 0?void 0:i.dataSource;let n={};Array.isArray(e)?n=e[t]:e&&"gallery"in e&&(e.items||(e.items=this._getGalleryDOMElements(e.gallery)),n=e.items[t]);let r=n;r instanceof Element&&(r=this._domElementToItemData(r));const o=this.dispatch("itemData",{itemData:r||{},index:t});return this.applyFilters("itemData",o.itemData,t)}_getGalleryDOMElements(t){var i,e;return(i=this.options)!==null&&i!==void 0&&i.children||(e=this.options)!==null&&e!==void 0&&e.childSelector?u(this.options.children,this.options.childSelector,t)||[]:[t]}_domElementToItemData(t){const i={element:t},e=t.tagName==="A"?t:t.querySelector("a");if(e){i.src=e.dataset.pswpSrc||e.href,e.dataset.pswpSrcset&&(i.srcset=e.dataset.pswpSrcset),i.width=e.dataset.pswpWidth?parseInt(e.dataset.pswpWidth,10):0,i.height=e.dataset.pswpHeight?parseInt(e.dataset.pswpHeight,10):0,i.w=i.width,i.h=i.height,e.dataset.pswpType&&(i.type=e.dataset.pswpType);const r=t.querySelector("img");if(r){var n;i.msrc=r.currentSrc||r.src,i.alt=(n=r.getAttribute("alt"))!==null&&n!==void 0?n:""}(e.dataset.pswpCropped||e.dataset.cropped)&&(i.thumbCropped=!0)}return this.applyFilters("domItemData",i,t,e)}lazyLoadData(t,i){return N(t,this,i)}}class Q extends J{constructor(t){super(),this.options=t||{},this._uid=0,this.shouldOpen=!1,this._preloadedContent=void 0,this.onThumbnailsClick=this.onThumbnailsClick.bind(this)}init(){u(this.options.gallery,this.options.gallerySelector).forEach(t=>{t.addEventListener("click",this.onThumbnailsClick,!1)})}onThumbnailsClick(t){if(G(t)||window.pswp)return;let i={x:t.clientX,y:t.clientY};!i.x&&!i.y&&(i=null);let e=this.getClickedIndex(t);e=this.applyFilters("clickedIndex",e,t,this);const n={gallery:t.currentTarget};e>=0&&(t.preventDefault(),this.loadAndOpen(e,n,i))}getClickedIndex(t){if(this.options.getClickedIndexFn)return this.options.getClickedIndexFn.call(this,t);const i=t.target,n=u(this.options.children,this.options.childSelector,t.currentTarget).findIndex(r=>r===i||r.contains(i));return n!==-1?n:this.options.children||this.options.childSelector?-1:0}loadAndOpen(t,i,e){if(window.pswp||!this.options)return!1;if(!i&&this.options.gallery&&this.options.children){const n=u(this.options.gallery);n[0]&&(i={gallery:n[0]})}return this.options.index=t,this.options.initialPointerPos=e,this.shouldOpen=!0,this.preload(t,i),!0}preload(t,i){const{options:e}=this;i&&(e.dataSource=i);const n=[],r=typeof e.pswpModule;if(U(e.pswpModule))n.push(Promise.resolve(e.pswpModule));else{if(r==="string")throw new Error("pswpModule as string is no longer supported");if(r==="function")n.push(e.pswpModule());else throw new Error("pswpModule is not valid")}typeof e.openPromise=="function"&&n.push(e.openPromise()),e.preloadFirstSlide!==!1&&t>=0&&(this._preloadedContent=Y(t,this));const o=++this._uid;Promise.all(n).then(a=>{if(this.shouldOpen){const l=a[0];this._openPhotoswipe(l,o)}})}_openPhotoswipe(t,i){if(i!==this._uid&&this.shouldOpen||(this.shouldOpen=!1,window.pswp))return;const e=typeof t=="object"?new t.default(this.options):new t(this.options);this.pswp=e,window.pswp=e,Object.keys(this._listeners).forEach(n=>{var r;(r=this._listeners[n])===null||r===void 0||r.forEach(o=>{e.on(n,o)})}),Object.keys(this._filters).forEach(n=>{var r;(r=this._filters[n])===null||r===void 0||r.forEach(o=>{e.addFilter(n,o.fn,o.priority)})}),this._preloadedContent&&(e.contentLoader.addToCache(this._preloadedContent),this._preloadedContent=void 0),e.on("destroy",()=>{this.pswp=void 0,delete window.pswp}),e.init()}destroy(){var t;(t=this.pswp)===null||t===void 0||t.destroy(),this.shouldOpen=!1,this._listeners={},u(this.options.gallery,this.options.gallerySelector).forEach(i=>{i.removeEventListener("click",this.onThumbnailsClick,!1)})}}const f="ome-lightbox__caption";function tt(s){var e;const t=(e=s.currSlide)==null?void 0:e.data,i=t==null?void 0:t.captionHTML;return typeof i=="string"?i.trim():""}function et(s){var e;const t=(e=s.currSlide)==null?void 0:e.data,i=t==null?void 0:t.captionClass;return typeof i=="string"?i.trim():""}function it(s){const t=s.split(/\s+/).filter(i=>i!==""&&f!==i);return[f,...t].join(" ")}function st(s,t){const i=tt(t),e=et(t);if(i===""){s.hidden=!0,s.className=f,s.innerHTML="";return}s.hidden=!1,s.className=it(e),s.innerHTML=i}function nt(s){s.on("uiRegister",()=>{const t=s.pswp;t===void 0||t.ui===void 0||t.ui.registerElement({name:"ome-caption",className:f,order:9,isButton:!1,appendTo:"root",html:"",onInit:(i,e)=>{const n=()=>{st(i,e)};e.on("change",n),n()}})})}const C="ome-lightbox-runtime-style",rt=`
.pswp {
	--pswp-bg: #000;
	--pswp-placeholder-bg: #222;
	--pswp-root-z-index: 2147483647;
	--pswp-preloader-color: rgba(79, 79, 79, 0.4);
	--pswp-preloader-color-secondary: rgba(255, 255, 255, 0.9);
	--pswp-icon-color: #fff;
	--pswp-icon-color-secondary: #4f4f4f;
	--pswp-icon-stroke-color: #4f4f4f;
	--pswp-icon-stroke-width: 2px;
	--pswp-error-text-color: var(--pswp-icon-color);
	position: fixed;
	inset: 0;
	width: 100%;
	height: 100%;
	z-index: var(--pswp-root-z-index);
	display: none;
	touch-action: none;
	outline: 0;
	opacity: 0.003;
	contain: layout style size;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.pswp:focus {
	outline: 0;
}

.pswp * {
	box-sizing: border-box;
}

.pswp img {
	max-width: none;
}

.pswp--open {
	display: block;
}

.pswp,
.pswp__bg {
	transform: translateZ(0);
	will-change: opacity;
}

.pswp__bg {
	position: absolute;
	inset: 0;
	opacity: 0.005;
	background: var(--pswp-bg);
}

.pswp,
.pswp__scroll-wrap {
	overflow: hidden;
}

.pswp__scroll-wrap,
.pswp__container,
.pswp__item,
.pswp__content,
.pswp__img,
.pswp__zoom-wrap {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
}

.pswp__img,
.pswp__zoom-wrap {
	width: auto;
	height: auto;
}

.pswp__container,
.pswp__img,
.pswp__button,
.pswp__counter {
	user-select: none;
	-webkit-user-select: none;
}

.pswp__item {
	z-index: 1;
	overflow: hidden;
}

.pswp__hidden {
	display: none !important;
}

.pswp__content {
	pointer-events: none;
}

.pswp__content > * {
	pointer-events: auto;
}

.pswp__error-msg-container {
	display: grid;
}

.pswp__error-msg {
	margin: auto;
	font-size: 1em;
	line-height: 1;
	color: var(--pswp-error-text-color);
}

.pswp .pswp__hide-on-close {
	opacity: 0.005;
	will-change: opacity;
	transition: opacity var(--pswp-transition-duration) cubic-bezier(0.4, 0, 0.22, 1);
	z-index: 10;
	pointer-events: none;
}

.pswp--ui-visible .pswp__hide-on-close {
	opacity: 1;
	pointer-events: auto;
}

.pswp__button {
	position: relative;
	display: block;
	width: 50px;
	height: 60px;
	padding: 0;
	margin: 0;
	overflow: hidden;
	cursor: pointer;
	background: none;
	border: 0;
	box-shadow: none;
	opacity: 0.85;
	-webkit-appearance: none;
}

.pswp__button:hover,
.pswp__button:active,
.pswp__button:focus {
	opacity: 1;
}

.pswp__button:disabled {
	opacity: 0.3;
	cursor: auto;
}

.pswp__icn {
	position: absolute;
	top: 14px;
	left: 9px;
	width: 32px;
	height: 32px;
	overflow: hidden;
	fill: var(--pswp-icon-color);
	color: var(--pswp-icon-color-secondary);
	pointer-events: none;
}

.pswp__icn-shadow {
	stroke: var(--pswp-icon-stroke-color);
	stroke-width: var(--pswp-icon-stroke-width);
	fill: none;
}

.pswp__top-bar {
	position: absolute;
	inset: 0 0 auto 0;
	height: 60px;
	display: flex;
	justify-content: flex-end;
	z-index: 10;
}

.pswp__counter {
	height: 30px;
	margin: 15px 0 0 20px;
	font-size: 14px;
	line-height: 30px;
	color: var(--pswp-icon-color);
	opacity: 0.75;
}

.pswp__button--arrow {
	position: absolute;
	top: 0;
	width: 75px;
	height: 100px;
	top: 50%;
	margin-top: -50px;
}

.pswp__button--arrow--prev {
	left: 0;
}

.pswp__button--arrow--next {
	right: 0;
}

.pswp__button--arrow .pswp__icn {
	top: 50%;
	margin-top: -30px;
	width: 60px;
	height: 60px;
}

.pswp__button--arrow--next .pswp__icn {
	left: auto;
	right: 14px;
	transform: scale(-1, 1);
}

.pswp--one-slide .pswp__button--arrow {
	display: none;
}

.pswp__preloader {
	position: relative;
	width: 50px;
	height: 60px;
	overflow: hidden;
}

.pswp__preloader .pswp__icn {
	opacity: 0;
	transition: opacity 0.2s linear;
	animation: pswp-clockwise 600ms linear infinite;
}

.pswp__preloader--active .pswp__icn {
	opacity: 0.85;
}

.ome-lightbox__html-slide {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding: var(--ome-lightbox-html-padding, 24px);
}

.ome-lightbox__html-slide-inner {
	max-width: calc(100vw - (var(--ome-lightbox-html-padding, 24px) * 2));
	max-height: calc(100vh - (var(--ome-lightbox-html-padding, 24px) * 2));
	overflow: auto;
}

.ome-lightbox__caption {
	position: absolute;
	left: 50%;
	bottom: 16px;
	z-index: 10;
	width: calc(100% - 32px);
	max-width: 640px;
	padding: 8px 12px;
	transform: translateX(-50%);
	color: var(--pswp-icon-color);
	font-size: 14px;
	line-height: 1.45;
	text-align: center;
	background: rgba(0, 0, 0, 0.62);
	border-radius: 4px;
	pointer-events: auto;
}

.ome-lightbox__caption[hidden] {
	display: none;
}

.ome-lightbox__caption a {
	color: inherit;
	text-decoration: underline;
	text-underline-offset: 0.18em;
}

@keyframes pswp-clockwise {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
`;function ot(){if(document.getElementById(C)!==null)return;const s=document.createElement("style");s.id=C,s.textContent=rt,document.head.appendChild(s)}const at=.8,lt=.12,dt=250,ht=24,pt="Open lightbox item",_="[OhMyEtch][Lightbox]";function g(s,t){return s==="true"?!0:s==="false"?!1:t}function F(s,t){if(s===void 0)return t;const i=Number.parseFloat(s);return Number.isNaN(i)?t:i}function O(s,t){const i=F(s,t);return Math.max(0,i)}function y(s){if(s===void 0)return null;const t=Number.parseInt(s,10);return Number.isNaN(t)||t<=0?null:t}function ct(s){return s==="fade"||s==="zoom"||s==="none"?s:"none"}function R(s){const t=(s==null?void 0:s.trim())??"";return t===""?null:t}function ut(s){const t=s.dataset,i=F(t.omeBgOpacity,at),e=O(t.omeSpacing,lt),n=O(t.omeHtmlViewportPadding,ht),r=y(t.omeAnimationDuration);return{groupId:R(t.omeLightboxGroup),loop:g(t.omeLoop,!0),bgOpacity:Math.max(0,Math.min(1,i)),spacing:e,htmlViewportPadding:n,closeOnVerticalDrag:g(t.omeCloseOnVerticalDrag,!0),wheelToZoom:g(t.omeWheelToZoom,!1),showHideAnimationType:ct(t.omeShowHideAnimationType),animationDuration:r??dt}}function T(s){s.dataset.omeInvalid="true";const t=s.querySelector("[data-ome-lightbox-item-trigger]");t!==null&&(t.disabled=!0,t.setAttribute("aria-disabled","true"))}function mt(s,t){delete s.dataset.omeInvalid,t.disabled=!1,t.removeAttribute("aria-disabled")}function P(s){const t=Array.from(s.querySelectorAll("img"));return t.length!==1?null:t[0]??null}function k(s){var n,r,o;const t=((n=s.getAttribute("data-src"))==null?void 0:n.trim())??"";if(t!=="")return t;const i=((r=s.getAttribute("data-lazy-src"))==null?void 0:r.trim())??"";if(i!=="")return i;const e=s.currentSrc.trim();return e!==""?e:((o=s.getAttribute("src"))==null?void 0:o.trim())??""}function ft(s){const t=y(s.getAttribute("width")??void 0),i=y(s.getAttribute("height")??void 0);return{width:t,height:i}}function _t(s){var n,r,o;const t=((n=s.getAttribute("aria-label"))==null?void 0:n.trim())??"";if(t!=="")return t;const i=((r=s.textContent)==null?void 0:r.trim())??"";if(i!=="")return i;const e=Array.from(s.querySelectorAll("img"));for(const a of e){const l=((o=a.getAttribute("alt"))==null?void 0:o.trim())??"";if(l!=="")return l}return""}function gt(s){var e;(((e=s.getAttribute("aria-label"))==null?void 0:e.trim())??"")===""&&s.removeAttribute("aria-label"),_t(s)===""&&s.setAttribute("aria-label",pt)}function wt(s,t,i){var A,S,E,I,L;const e=P(t),n=P(i);if(e===null||n===null)return null;const r=k(n),o=ft(n);if(r==="")return null;if(o.width===null||o.height===null)return console.warn(`${_} Missing deterministic image dimensions; falling back to HTML mode.`,s),null;const a={type:"image",src:r,width:o.width,height:o.height},l=k(e);l!==""&&l!==r&&(a.msrc=l);const v=((A=n.getAttribute("srcset"))==null?void 0:A.trim())??"";if(v!=="")a.srcset=v;else{const h=((S=n.getAttribute("data-srcset"))==null?void 0:S.trim())??"";if(h!=="")a.srcset=h;else{const p=((E=n.getAttribute("data-lazy-srcset"))==null?void 0:E.trim())??"";p!==""&&(a.srcset=p)}}if(a.srcset===void 0){const h=n.closest("picture");if(h!==null){const p=yt(h);p!==null&&(a.srcset=p)}}const b=((I=n.getAttribute("alt"))==null?void 0:I.trim())??"",$=((L=e.getAttribute("alt"))==null?void 0:L.trim())??"",x=b!==""?b:$;return x!==""&&(a.alt=x),a.element=s,a}function yt(s){var i,e,n;const t=Array.from(s.querySelectorAll("source"));for(const r of t){const o=((i=r.getAttribute("srcset"))==null?void 0:i.trim())??"";if(o!=="")return o;const a=((e=r.getAttribute("data-srcset"))==null?void 0:e.trim())??"";if(a!=="")return a;const l=((n=r.getAttribute("data-lazy-srcset"))==null?void 0:n.trim())??"";if(l!=="")return l}return null}function vt(s,t,i){const e=t.innerHTML.trim();return e===""?(console.warn(`${_} Skipping lightbox item with empty full-content slot.`,s),null):{type:"html",html:`<div class="ome-lightbox__html-slide" style="--ome-lightbox-html-padding:${i}px;"><div class="ome-lightbox__html-slide-inner">${e}</div></div>`}}function bt(s){const t=s.querySelector("[data-ome-lightbox-item-caption]");if(t===null)return null;const i=t.innerHTML.trim();return i===""?null:{html:i,className:t.className.trim()}}function xt(s,t){const i=bt(s);if(i===null)return t;const e={...t,captionHTML:i.html};return i.className!==""&&(e.captionClass=i.className),e}function At(s,t){const i=s.querySelector("[data-ome-lightbox-item-trigger]"),e=s.querySelector("[data-ome-lightbox-item-full]");if(i===null||e===null)return console.warn(`${_} Skipping lightbox item with missing trigger/full containers.`,s),T(s),null;gt(i);const n=wt(s,i,e)??vt(s,e,t.htmlViewportPadding);return n===null?(T(s),null):(mt(s,i),{item:s,trigger:i,data_source_item:xt(s,n)})}function St(s,t){const i=Array.from(s.querySelectorAll("[data-ome-lightbox-item]")),e=[];return i.forEach(n=>{const r=At(n,t);r!==null&&e.push(r)}),e}function Et(s,t){return t===null?[s]:Array.from(document.querySelectorAll("[data-ome-lightbox-root]")).filter(e=>t===R(e.dataset.omeLightboxGroup))}function It(s,t){const i=[],e=[];return Et(s,t.groupId).forEach(n=>{St(n,t).forEach(r=>{const o=i.length;i.push(r.data_source_item),n===s&&e.push({trigger:r.trigger,index:o})})}),{data_source:i,trigger_bindings:e}}function Lt(s,t){t.on("afterInit",()=>{var e;s.dataset.omeState="open";const i=(e=t.pswp)==null?void 0:e.currIndex;i!==void 0&&(s.dataset.omeCurrentIndex=String(i))}),t.on("change",()=>{var e;const i=(e=t.pswp)==null?void 0:e.currIndex;i!==void 0&&(s.dataset.omeCurrentIndex=String(i))}),t.on("close",()=>{s.dataset.omeState="closed",delete s.dataset.omeCurrentIndex})}function zt(s,t,i){const e=[];return t.forEach(n=>{const r=o=>{o.preventDefault(),o.stopPropagation(),s.loadAndOpen(n.index,i)};n.trigger.addEventListener("click",r),e.push(()=>{n.trigger.removeEventListener("click",r)})}),()=>{e.forEach(n=>{n()})}}function Dt(s,t){const i=It(s,t),e=i.data_source;if(e.length===0||i.trigger_bindings.length===0)return s.dataset.omeState="closed",console.warn(`${_} No valid slides found for root; initialization skipped.`,s),null;const n=new Q({dataSource:e,pswpModule:()=>H(()=>import("../chunks/photoswipe.esm-D2Nf-uDI.js"),[],import.meta.url),loop:t.loop,bgOpacity:t.bgOpacity,spacing:t.spacing,closeOnVerticalDrag:t.closeOnVerticalDrag,wheelToZoom:t.wheelToZoom,showHideAnimationType:t.showHideAnimationType,showAnimationDuration:t.animationDuration,hideAnimationDuration:t.animationDuration,paddingFn:()=>({top:t.htmlViewportPadding,right:t.htmlViewportPadding,bottom:t.htmlViewportPadding,left:t.htmlViewportPadding}),escKey:!0,arrowKeys:!0,trapFocus:!0,returnFocus:!0});Lt(s,n),nt(n);const r=zt(n,i.trigger_bindings,e);return n.init(),{lightbox:n,remove_item_click_handlers:r}}function M(){ot(),Array.from(document.querySelectorAll("[data-ome-lightbox-root]")).forEach(t=>{if(t._omeLightbox!==void 0)return;const i=ut(t),e=Dt(t,i);e!==null&&(t._omeLightbox=e)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",M):M();
