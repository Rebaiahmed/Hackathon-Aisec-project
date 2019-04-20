if (self.CavalryLogger) { CavalryLogger.start_js(["JqMCU"]); }

__d("MqttSkywalkerManager",["regeneratorRuntime","CurrentUser","FBMqttChannel","RTIFriendFanoutConfig","SkywalkerLogger","SkywalkerUtils","StreamStateMachine","gkx","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g="/pubsub",h={t:"pong"},i=function(){"use strict";__p&&__p();function a(a,b,c,d){this.$1=a,this.$2=b,this.$3=c,this.$4=d,this.$5=Date.now(),this.$8()}var c=a.prototype;c.unsubscribe=function(){return o.unsubscribe(this)};c.getViewId=function(){return this.$1};c.getTopic=function(){return this.$2};c.getMessageListener=function(){return this.$3};c.getSubscribeOptions=function(){return this.$4};c.getCreationTime=function(){return this.$5};c.getStreamStateMachine=function(){return this.$6};c.getFriendFanoutSubscription=function(){return this.$7};c.getContext=function(){return this.$4.context};c.setFriendFanoutSubscription=function(a){this.$7=a};c.$8=function(){if(!j())return;this.$6=new(b("StreamStateMachine"))(n(this.$4.context));this.$4.gqlsLifecycleHandler&&this.$6.setLifecycleHandler(this.$4.gqlsLifecycleHandler);this.$6.start()};return a}();a=function(){"use strict";__p&&__p();function a(){__p&&__p();var a=this;this.$1=new Map();this.$2=0;this.$3=new(b("SkywalkerLogger"))({gateway:"mqtt"});this.$4=b("FBMqttChannel");this.$5=this.$4.getConnectionState()==="Connected";this.$4.subscribeChannelEvents({onMQTTStateChanged:function(b,c){return a.$7(b)},onJSError:function(b){return a.$8(b)}});this.$4.subscribe(g,function(b){return a.$9(b)})}var c=a.prototype;c.subscribe=function(a,c,d){__p&&__p();d===void 0&&(d={});d.context=b("SkywalkerUtils").patchContext(d.context);var e=this.$10(a,c,d),f=a.substr(0,a.lastIndexOf("/"));if(b("RTIFriendFanoutConfig").passFriendFanoutSubscribeGK&&b("RTIFriendFanoutConfig").topicPrefixes.indexOf(f)>=0){f=l(a);a={context:d.context};d=this.$10(f,c,a);e.setFriendFanoutSubscription(d)}return e};c.unsubscribe=function(a){__p&&__p();var c,d;return b("regeneratorRuntime").async(function(e){__p&&__p();while(1)switch(e.prev=e.next){case 0:c=this.$11(a);d=a.getFriendFanoutSubscription();if(!(d!=null)){e.next=5;break}e.next=5;return b("regeneratorRuntime").awrap(this.$11(d));case 5:e.next=7;return b("regeneratorRuntime").awrap(c);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},null,this)};c.isSubscribed=function(a){return this.$1.has(a.getViewId())};c.getSubscriptions=function(){return Array.from(this.$1.values())};c.setOnMqttError=function(a){this.$6=a};c.$9=function(a){__p&&__p();a=this.$12(a);if(a==null)return;var b=a.topic,c=a.view_id,d=this.$1.get(c);if(d==null){var e="No subscription exists for this topic, view ID "+c;for(var f=this.$1.values(),g=Array.isArray(f),h=0,f=g?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(g){if(h>=f.length)break;i=f[h++]}else{h=f.next();if(h.done)break;i=h.value}i=i;if(b===i.getTopic()){i=i.getViewId();e="Found subscription with view ID "+i+", payload has "+c;break}}this.$3.warn({event_name:"missing_subscription",topic:b,message:e});return}if(!k(b,d.getTopic())){i="View ID matches subscription of topic "+d.getTopic();this.$3.error({event_name:"topic_view_id_mismatch",topic:b,message:i});return}this.$3.log({event_name:"payload_received",topic:b});if(j()&&m(a)){this.$3.log({event_name:"heartbeat_received",topic:b});h=d.getStreamStateMachine();h&&h.ping();return}d.getMessageListener()(a)};c.$10=function(a,c,d){var e=++this.$2;a=new i(e,a,c,d);this.$1.set(e,a);this.$4.getConnectionState()==="Connected"&&b("promiseDone")(this.$13(a));return a};c.$11=function(a){__p&&__p();var c=this,d,e,f,g,i;return b("regeneratorRuntime").async(function(k){__p&&__p();while(1)switch(k.prev=k.next){case 0:e=a.getTopic();f=a.getViewId();this.$3.log({event_name:"unsubscribe_attempt",topic:e});this.$1["delete"](f);g=a.getSubscribeOptions();g.onUnsubscribeEager&&g.onUnsubscribeEager();i={unsub:[e],viewId:(d={},d[e]=f,d)};k.next=9;return b("regeneratorRuntime").awrap(this.$14(i).then(function(){c.$3.log({event_name:"unsubscribe_success",topic:e});return{data:h,error:null}},function(a){var b="unsubscribe_failure";a=a.toString();c.$3.log({event_name:b,topic:e,message:a});return{data:null,error:a}}).then(function(b){g.onUnsubscribe&&g.onUnsubscribe(b);if(j()){b=a.getStreamStateMachine();b&&b.kill()}}));case 9:return k.abrupt("return",k.sent);case 10:case"end":return k.stop()}},null,this)};c.$13=function(a){__p&&__p();var c=this,d,e,f,g,i,j;return b("regeneratorRuntime").async(function(k){__p&&__p();while(1)switch(k.prev=k.next){case 0:e=a.getTopic();f=a.getViewId();g=a.getSubscribeOptions();i={sub:[e],viewId:(d={},d[e]=f,d)};g.context!=null&&(i.context=(j={},j[e]=g.context,j));this.$3.log({event_name:"subscribe_attempt",topic:e});k.next=8;return b("regeneratorRuntime").awrap(this.$14(i).then(function(){c.$3.log({event_name:"subscribe_success",topic:e});return{data:h,error:null}},function(a){var b="subscribe_failure";a=a.toString();c.$3.log({event_name:b,topic:e,message:a});return{data:null,error:a}}).then(function(a){return g.onSubscribe&&g.onSubscribe(a)}));case 8:return k.abrupt("return",k.sent);case 9:case"end":return k.stop()}},null,this)};c.$14=function(a){return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:c.next=2;return b("regeneratorRuntime").awrap(this.$4.publish(g,JSON.stringify(a)));case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},null,this)};c.$12=function(a){__p&&__p();try{a=JSON.parse(a);if(a.raw==null){this.$3.error({event_name:"payload_parse_error",message:"Missing Skywalker payload object"});return null}a=JSON.parse(a.raw);var b=["topic","payload","view_id"];for(var c=0;c<b.length;c++){var d=b[c];if(!Object.prototype.hasOwnProperty.call(a,d)){this.$3.error({event_name:"payload_parse_error",message:"Missing Skywalker "+d+" field in payload"});return null}}if(typeof a.topic!=="string"){this.$3.error({event_name:"payload_parse_error",message:"Topic has type "+typeof a.topic});return null}if(typeof a.view_id!=="number"){this.$3.error({event_name:"payload_parse_error",message:"Topic has type "+typeof a.view_id});return null}return a}catch(a){this.$3.error({event_name:"payload_parse_error",message:a.toString()});return null}};c.$7=function(a){__p&&__p();if(a!=="Connected")return;this.$5=!0;for(var a=this.$1,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;e[0];e=e[1];b("promiseDone")(this.$13(e))}};c.$8=function(a){var b=a!=null?JSON.stringify(a):null,c=a!=null&&typeof a.isRecoverable==="boolean"?a.isRecoverable:!1;c?this.$3.log({event_name:"transport_recoverable_error",message:b}):this.$3.log({event_name:"transport_error",message:b});this.$5||(this.$3.log({event_name:"fallback_error",message:b}),this.$6&&this.$6(a))};return a}();function j(){return b("gkx")("676931")}function k(a,b){return a===b||b===l(a)}function l(a){return a+"_user_id_"+b("CurrentUser").getID()}function m(a){try{a=JSON.parse(a.payload);return a!=null&&a.heartbeat!=null}catch(a){return!1}}function n(a){if(a==null||a.transformContext==null)return!1;try{a=JSON.parse(a.transformContext);if(a.serializedQueryParameters==null)return!1;a=JSON.parse(a.serializedQueryParameters);return a!=null&&a["%options"]!=null&&a["%options"].heartbeat!=null}catch(a){return!1}}var o=new a();e.exports=o}),null);
__d("XVideoInCommentUploadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/in_comment_upload/",{})}),null);