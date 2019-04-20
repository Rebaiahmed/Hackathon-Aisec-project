if (self.CavalryLogger) { CavalryLogger.start_js(["n+i0i"]); }

__d("ViewportTrackingHelper",["DOMDimensions","ge","getElementPosition","getElementRect","getViewportDimensions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={isDescendantOf:function(a,b){if(a===b)return!0;while(a&&a.parentElement){if(a.parentElement===b)return!0;a=a.parentElement}return!1},isVisible:function(a,c){return g.isVisibleInDimension(b("getViewportDimensions")(),a,c)},isVisibleUnderBluebar:function(a,c){var d=b("ge")("pagelet_bluebar");return d==null?g.isVisible(a,c):g.isVisibleInDimension(b("getViewportDimensions")(),a,c,d.clientHeight)},isFullyVisibleInContainer:function(a,c){a=b("getElementRect")(a);c=b("getElementRect")(c);return c.top>=a.top&&c.bottom<=a.bottom&&c.left>=a.left&&c.right<=a.right},isVisibleInDimension:function(a,c,d,e){e===void 0&&(e=0);var f=b("getElementPosition")(c);c=b("DOMDimensions").getElementDimensions(c);if(!f.x&&!f.y&&!c.height&&!c.width)return!1;e=Math.max(f.y,e);f=Math.min(f.y+c.height,a.height);a=Math.min(c.height,d);return f-e>=a},getHeightIfVisible:function(a,c){var d=this.getHeightInViewport(a);a=b("DOMDimensions").getElementDimensions(a);a=Math.min(a.height,c);return d>=a?d:0},getHeightInViewport:function(a){var c=b("getElementPosition")(a);a=b("DOMDimensions").getElementDimensions(a);if(!c.x&&!c.y&&!a.x&&!a.y)return 0;var d=b("getViewportDimensions")().height,e=Math.max(c.y,0);c=Math.min(c.y+a.height,d);return c-e},getElementsInViewIgnoreHeight:function(a){var b=!1,c=[];for(var d=0;d<a.length;d++){var e=a[d];if(this.isVisible(e,0,null))c.push(e),b=!0;else if(b)break}return c}};e.exports=g}),null);
__d("VideoPlayerStates",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({READY:"ready",PLAYING:"playing",PAUSED:"paused",LOADING:"loading",FALLBACK:"fallback",FINISHED:"finished",DESTROYED:"destroyed",REPLAYED:"replayed",UNKNOWN:"unknown"})}),null);
__d("VideoPauseWhenBackgrounded",["invariant","Event","SubscriptionsHandler","VideoPlayerExperiments","VideoPlayerReason","VideoPlayerStates","Visibility"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1=new(b("SubscriptionsHandler"))(),this.$3=!1}var c=a.prototype;c.enable=function(a){this.$2&&g(0,2800),this.$1.engage(),this.$2=a,this.$1.addSubscriptions(b("Event").listen(window,"blur",this.$4.bind(this)),b("Event").listen(window,"focus",this.$5.bind(this)),b("Visibility").addListener(b("Visibility").HIDDEN,this.$4.bind(this)),b("Visibility").addListener(b("Visibility").VISIBLE,this.$5.bind(this)))};c.disable=function(){this.$1.release(),this.$2=null};c.$4=function(){this.pauseVideo(b("VideoPlayerReason").PAGE_VISIBILITY)};c.$5=function(){this.playVideo(b("VideoPlayerReason").PAGE_VISIBILITY)};c.playVideo=function(a){var c=this.$2;c||g(0,2801);c.isState(b("VideoPlayerStates").PAUSED)&&this.$3&&c.play(a);this.$3=!1};c.pauseVideo=function(a){var c=this.$2;c||g(0,2801);if(b("VideoPlayerExperiments").fullScreenVideoIsNotHidden&&c.isFullscreen())return;c.isState(b("VideoPlayerStates").PLAYING)&&(c.pause(a),this.$3=!0)};return a}();e.exports=a}),null);
__d("VideoConfig",[],(function(a,b,c,d,e,f){function a(a){Object.assign(this,a)}e.exports=a}),null);
__d("HTMLMediaElementReadyStates",[],(function(a,b,c,d,e,f){a={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4};e.exports=a}),null);
__d("VideoFrameBuffer",["HTMLMediaElementReadyStates"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,b,c,d,e,f,g){d===void 0&&(d=null),e===void 0&&(e=null),f===void 0&&(f=null),g===void 0&&(g=null),this.$2=b,this.$1=a,this.$3=c||"contain",this.$6=d,this.$7=e,this.$8=f,this.$9=g}var c=a.prototype;c.updateFrameBuffer=function(){__p&&__p();this.$4&&(this.$1.width=this.$4,this.$4=null);this.$5&&(this.$1.height=this.$5,this.$5=null);if(this.$2.readyState<b("HTMLMediaElementReadyStates").HAVE_CURRENT_DATA)return;var a=this.$1.clientWidth||this.$1.width,c=this.$1.clientHeight||this.$1.height,d=a,e=c,f=this.$2.videoWidth/this.$2.videoHeight,g=d/e;this.$3==="cover"&&(g*=-1,f*=-1);g>f?d=e*f:g<f&&(e=d/f);g=this.$1.getContext("2d");if(!(g instanceof window.CanvasRenderingContext2D))return;try{if(this.$6||this.$7){g.drawImage(this.$2,(f=this.$8)!=null?f:0,(f=this.$9)!=null?f:0,(f=this.$6)!=null?f:a,(f=this.$7)!=null?f:c,0,0,a,c)}else g.drawImage(this.$2,(a-d)/2,(c-e)/2,d,e)}catch(a){if(a.name!=="NS_ERROR_NOT_AVAILABLE")throw a}};c.getDOMNode=function(){return this.$1};c.updateDimensions=function(a,b){this.$4=a,this.$5=b};return a}();e.exports=a}),null);
__d("filterObject",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=Object.prototype.hasOwnProperty;function a(a,b,c){if(!a)return null;var d={};for(var e in a)g.call(a,e)&&b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}e.exports=a}),null);