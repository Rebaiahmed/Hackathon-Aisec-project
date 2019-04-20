if (self.CavalryLogger) { CavalryLogger.start_js(["7rk+D"]); }

__d("AnimatedLoadingIndicator.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){var c=babelHelpers["extends"]({background:"light",size:"large"},a);return b("React").createElement("div",{className:b("joinClasses")("_2y0s"+(c.type==="scale"?" _2y0t":"")+(c.type==="wave"?" _2y0u":""),a.className)},b("React").createElement("span",{className:(c.size==="small"?"_2y0w":"")+(c.size==="large"?" _2y0x":"")+(c.background==="light"?" _2y0y":"")+(c.background==="dark"?" _2y0z":"")},b("React").createElement("div",{className:"_2y0- _2y0_"}),b("React").createElement("div",{className:"_2y0- _2y10"}),b("React").createElement("div",{className:"_2y0- _2y11"})))};e.exports=a}),null);
__d("AbstractRangeInput.react",["cx","Event","Keys","React","ReactDOM","UserAgent","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;var h={BLOCK:"block",PUSH:"push",FREE:"free"};c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$7=function(a,c){switch(b("Event").getKeyCode(c)){case b("Keys").DOWN:case b("Keys").LEFT:d.$8(a);d.$9(-1);break;case b("Keys").RIGHT:case b("Keys").UP:d.$8(a);d.$9(1);break}};d.$10=function(a,c){b("Event").prevent(c),d.$8(a),d.$2.dragStartX=c.nativeEvent.clientX};d.$3=function(a){d.$2&&d.$9(a.clientX-d.$2.dragStartX)};d.$8=function(a){d.$2={draggingIdx:a,dragStartValue:d.state.values[a],scale:b("ReactDOM").findDOMNode(babelHelpers.assertThisInitialized(d)).clientWidth}};d.$9=function(a){__p&&__p();var b=(d.props.max-d.props.min)/d.$2.scale;a=d.$2.dragStartValue+a*b;b=d.state.values;var c=b.length,e=d.$2.draggingIdx;if(d.props.step){var f=1/d.props.step;a=Math.round(a*f)/f}f=d.props.min;var g=d.props.max;d.props.behavior===h.BLOCK&&(f=e>0?b[e-1]:f,g=e<c-1?b[e+1]:g);a=a<f?f:a;a=a>g?g:a;b[e]=a;if(d.props.behavior===h.PUSH){for(var c=e+1,f=b.length;c<f;c++){if(b[c]>=a)break;b[c]=a}for(c=e-1;c>=0;c--){if(b[c]<=a)break;b[c]=a}}d.setState({values:b});d.props.onChange&&d.props.onChange(b)};d.$4=function(a){d.$2&&(d.$2=null)};d.$6=function(a){d.$2&&(d.$2=null)};d.$5=function(a){d.$2&&a.touches&&d.$9(a.touches[0].clientX-d.$2.dragStartX)};var e=c.values;c.behavior!==h.FREE&&e.sort();d.state={values:e};return d}var d=c.prototype;d.UNSAFE_componentWillReceiveProps=function(a){this.setState({values:a.values})};d.componentDidMount=function(){var a=this,c=b("UserAgent").isBrowser("IE < 9")?document.documentElement:window;this.$1=b("Event").listen(c,{selectstart:function(c){a.$2&&b("Event").prevent(c)},mousemove:this.$3,mouseup:this.$4,touchmove:this.$5,touchend:this.$6})};d.componentWillUnmount=function(){for(var a in this.$1)this.$1[a]&&this.$1[a].remove(),this.$1[a]=null};d.$11=function(a,c){b("Event").prevent(c),this.$8(a),this.$2.dragStartX=c.nativeEvent.touches[0].clientX};d.render=function(){__p&&__p();var a=this,c=this.state.values,d=this.props.disabled,e=c.length>1,f=this.props.max-this.props.min;c=c.map(function(c,g){var h=(c-a.props.min)/f,i=a.props.name+(e?"["+g+"]":"");return b("React").createElement("div",{className:"_4qwr"+(d?" _4qws":""),key:"thumb-"+g,onDragStart:b("Event").prevent,onKeyDown:d?null:function(b){return a.$7(g,b)},onMouseDown:d?null:function(b){return a.$10(g,b)},onTouchEnd:d?null:function(b){return a.$6(g,b)},onTouchMove:d?null:function(b){return a.$5(g,b)},onTouchStart:d?null:function(b){return a.$11(g,b)},style:{left:h*100+"%"},tabIndex:0},b("React").createElement("input",{onChange:a.props.onChange,name:i,value:c,type:"hidden"}))});return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_4qwt")}),b("React").createElement("div",{className:"_4qwu"}),c)};return c}(b("React").Component);c.propTypes={name:a.string,min:a.number,max:a.number,step:a.number,disabled:a.bool,values:a.array,behavior:a.oneOf([h.BLOCK,h.PUSH,h.FREE]),onChange:a.func};c.defaultProps={name:"",min:0,max:1,step:.01,disabled:!1,values:[.5],behavior:h.FREE};e.exports=c}),null);
__d("RangeInput.react",["cx","AbstractRangeInput.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("AbstractRangeInput.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_5rvw")}))};return c}(b("React").Component);e.exports=a}),null);
__d("AbstractSidebarBadgeFeatureContext",["createFeatureContext"],(function(a,b,c,d,e,f){"use strict";a=b("createFeatureContext")();e.exports=a}),null);
__d("XUIBubble.react",["cx","React","formatNumber","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.count;this.props.max!=null?a=b("formatNumber").withMaxLimit(a,this.props.max):a=b("formatNumber").withThousandDelimiters(a);var c="_5hl1"+(this.props.color==="gray"?" _5hl2":""),d=this.props.label!=null&&this.props.label!==""?b("React").createElement("span",{className:"accessible_elem"},"\xa0",this.props.label):null;d!==null&&(a=b("React").createElement("span",{"aria-hidden":"true"},a));return b("React").createElement("span",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,c)}),a,d)};return c}(b("React").PureComponent);e.exports=a}),null);
__d("promiseTimeout",["Promise","setTimeout"],(function(a,b,c,d,e,f){"use strict";function a(a){return new(b("Promise"))(function(c){return void b("setTimeout")(c,a)})}e.exports=a}),null);
__d("CodeMirror4AddonLint",["CodeMirror4"],(function(a,b,c,d,e,f){__p&&__p();var g=b("CodeMirror4"),h="CodeMirror-lint-markers";function i(a,b){__p&&__p();var c=document.createElement("div");c.className="CodeMirror-lint-tooltip";c.appendChild(b.cloneNode(!0));document.body.appendChild(c);function d(a){if(!c.parentNode)return g.off(document,"mousemove",d);c.style.top=Math.max(0,a.clientY-c.offsetHeight-5)+"px";c.style.left=a.clientX+5+"px"}g.on(document,"mousemove",d);d(a);c.style.opacity!=null&&(c.style.opacity=1);return c}function j(a){a.parentNode&&a.parentNode.removeChild(a)}function k(a){if(!a.parentNode)return;a.style.opacity==null&&j(a);a.style.opacity=0;setTimeout(function(){j(a)},600)}function l(a,b,c){__p&&__p();var d=i(a,b);function e(){g.off(c,"mouseout",e),d&&(k(d),d=null)}var f=setInterval(function(){__p&&__p();if(d)for(var a=c;;a=a.parentNode){if(a==document.body)return;if(!a){e();break}}if(!d)return clearInterval(f)},400);g.on(c,"mouseout",e)}function m(a,b,c){this.marked=[],this.options=b,this.timeout=null,this.hasGutter=c,this.onMouseOver=function(b){y(a,b)}}function n(a,b){if(b instanceof Function)return{getAnnotations:b};(!b||b===!0)&&(b={});b.getAnnotations||(b.getAnnotations=a.getHelper(g.Pos(0,0),"lint"));if(!b.getAnnotations)throw new Error("Required option 'getAnnotations' missing (lint addon)");return b}function o(a){var b=a.state.lint;b.hasGutter&&a.clearGutter(h);for(var a=0;a<b.marked.length;++a)b.marked[a].clear();b.marked.length=0}function p(a,b,c,d){var e=document.createElement("div"),f=e;e.className="CodeMirror-lint-marker-"+b;c&&(f=e.appendChild(document.createElement("div")),f.className="CodeMirror-lint-marker-multiple");d!=!1&&g.on(f,"mouseover",function(b){l(b,a,f)});return e}function q(a,b){if(a=="error")return a;else return b}function r(a){var b=[];for(var c=0;c<a.length;++c){var d=a[c],e=d.from.line;(b[e]||(b[e]=[])).push(d)}return b}function s(a){var b=a.severity;b||(b="error");var c=document.createElement("div");c.className="CodeMirror-lint-message-"+b;c.appendChild(document.createTextNode(a.message));return c}function t(a){var b=a.state.lint;b=b.options;b.async?b.getAnnotations(a,u,b):u(a,b.getAnnotations(a.getValue(),b.options))}function u(a,b){__p&&__p();o(a);var c=a.state.lint,d=c.options,e=r(b);for(var f=0;f<e.length;++f){var g=e[f];if(!g)continue;var i=null,j=c.hasGutter&&document.createDocumentFragment();for(var k=0;k<g.length;++k){var l=g[k],m=l.severity;m||(m="error");i=q(i,m);d.formatAnnotation&&(l=d.formatAnnotation(l));c.hasGutter&&j.appendChild(s(l));l.to&&c.marked.push(a.markText(l.from,l.to,{className:"CodeMirror-lint-mark-"+m,__annotation:l}))}c.hasGutter&&a.setGutterMarker(f,h,p(j,i,g.length>1,c.options.tooltips))}d.onUpdateLinting&&d.onUpdateLinting(b,e,a)}function v(a){var b=a.state.lint;clearTimeout(b.timeout);b.timeout=setTimeout(function(){t(a)},b.options.delay||500)}function w(a,b){var c=b.target||b.srcElement;l(b,s(a),c)}var x=[0,0,0,5,0,-5,5,0,-5,0];function y(a,b){__p&&__p();if(!/\bCodeMirror-lint-mark-/.test((b.target||b.srcElement).className))return;for(var c=0;c<x.length;c+=2){var d=a.findMarksAt(a.coordsChar({left:b.clientX+x[c],top:b.clientY+x[c+1]},"client"));for(var e=0;e<d.length;++e){var f=d[e];f=f.__annotation;if(f)return w(f,b)}}}g.defineOption("lint",!1,function(a,b,c){__p&&__p();c&&c!=g.Init&&(o(a),a.off("change",v),g.off(a.getWrapperElement(),"mouseover",a.state.lint.onMouseOver),delete a.state.lint);if(b){c=a.getOption("gutters");var d=!1;for(var e=0;e<c.length;++e)c[e]==h&&(d=!0);c=a.state.lint=new m(a,n(a,b),d);a.on("change",v);c.options.tooltips!=!1&&g.on(a.getWrapperElement(),"mouseover",c.onMouseOver);t(a)}});g.defineExtension("performLint",function(){this.state.lint&&t(this)})}),null);
__d("escapeHTML",[],(function(a,b,c,d,e,f){var g=/[&<>\"\'\/]/g,h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","/":"&#x2F;"};function a(a){return a.replace(g,function(a){return h[a]})}e.exports=a}),null);
__d("one_detection_MetricRelationType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADDITIVE:1,QUOTIENT:2,AVERAGE:3})}),null);