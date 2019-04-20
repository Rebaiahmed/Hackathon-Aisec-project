if (self.CavalryLogger) { CavalryLogger.start_js(["eGknR"]); }

__d("SignalsAppEventSlideInPanelSelectDetailsTabActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"UPDATE_APP_EVENT_SELECTED_DETAILS_TAB"}}),null);
__d("SignalsHomeInitializeActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"INITIALIZE"}}),null);
__d("SignalsHomeInspectAppActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"INSPECT_APP"}}),null);
__d("SignalsHomeInspectCustomConversionActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"INSPECT_CUSTOM_CONVERSION"}}),null);
__d("SignalsHomeInspectDataSetActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"INSPECT_DATA_SET"}}),null);
__d("SignalsHomeInspectPixelActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"INSPECT_PIXEL"}}),null);
__d("SignalsHomeStateClearPixelDialogActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"SIGNALS_STATE_HOME_PIXEL_DIALOG.CLEAR"}}),null);
__d("SignalsHomeDataSourceUserPermissions",["immutable"],(function(a,b,c,d,e,f){"use strict";a=b("immutable").Record;c={canAcceptTOS:null,canAssignToAddAccounts:null,canCreate:null,canDelete:null,canEdit:null,canIngest:null};d=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(a(c));e.exports=d}),null);
__d("SignalsHomeSelectedSectionEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DATA_SOURCES:"DATA_SOURCES",CUSTOM_CONVERSIONS:"CUSTOM_CONVERSIONS",PARTNER_INTEGRATIONS:"PARTNER_INTEGRATIONS"})}),null);
__d("SignalsHomeState",["ImmutableRecordWithV4Types","SignalsDataSourcesEnum","SignalsHomeDataSourceUserPermissions","SignalsHomeSelectedSectionEnum","immutable"],(function(a,b,c,d,e,f){"use strict";a=b("ImmutableRecordWithV4Types").Record;c=b("immutable").Map;d=b("immutable").OrderedMap;f=b("SignalsDataSourcesEnum").DATA_SET;f={accountID:null,appID:null,businessID:null,businessUnitID:null,customConversionID:null,dataSetID:null,dataSourcesUserPermissions:c((c={},c[f]=new(b("SignalsHomeDataSourceUserPermissions"))(),c)),eventName:null,isBusinessAdmin:!1,notices:d(),pixelDialog:null,pixelID:null,selectedScreenSection:b("SignalsHomeSelectedSectionEnum").DATA_SOURCES,selectedTab:null,userID:0};c=a(f);e.exports=c}),null);
__d("SignalsAppPlatformEnum",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({ANDROID:null,IOS:null});e.exports=a}),null);
__d("SignalsAppSDKSetupUIState",["fbt","SignalsAppPlatformEnum","immutable"],(function(a,b,c,d,e,f,g){"use strict";b("immutable").List;a=b("immutable").Map;c=b("immutable").Set;d={appCategory:null,currentStep:0,preSelectedAppID:null,skipAppSelection:!1,selectedPlatforms:c([b("SignalsAppPlatformEnum").ANDROID,b("SignalsAppPlatformEnum").IOS]),selectedEventNames:c(),selectedParamsMap:a(),shouldShowPartnerIntegrationAppEventsDialog:!1,showAppEventsSetupTypeSelectorDialog:!1,showDialog:!1,showNux:!1,userFlowID:-1,setupMethod:null,showPreviewDialog:!1,selectedAdAccounts:null,extraInfo:g._("I'd like to start tracking app events in our app. Please use the step-by-step instructions below to add the code. Feel free to contact me with questions."),onlyShowCodeless:!1};e.exports={InitState:d}}),null);
__d("SignalsAppSDKSetupUIStateStore",["SignalsAppSDKSetupUIState","SignalsUIStateStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("SignalsAppSDKSetupUIState").InitState;a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getInitialState=function(){return g};c.__getName=function(){return e.id};return b}(b("SignalsUIStateStore"));e.exports=new a()}),null);
__d("SignalsSDKSetupEvent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CLICK:"click",ENTER_SURFACE:"enter_surface"})}),null);
__d("SignalsSDKSetupTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:SignalsSDKSetupLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:SignalsSDKSetupLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:SignalsSDKSetupLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAdAccountID=function(a){this.$1.ad_account_id=a;return this};c.setAppCategory=function(a){this.$1.app_category=a;return this};c.setAppID=function(a){this.$1.app_id=a;return this};c.setBizAccountID=function(a){this.$1.biz_account_id=a;return this};c.setComponent=function(a){this.$1.component=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setInstallMethod=function(a){this.$1.install_method=a;return this};c.setIsDefaultSelectionChanged=function(a){this.$1.is_default_selection_changed=a;return this};c.setSelectedAdAccountIds=function(a){this.$1.selected_ad_account_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setSelectedEventNames=function(a){this.$1.selected_event_names=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setSelectedPlatforms=function(a){this.$1.selected_platforms=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setTime=function(a){this.$1.time=a;return this};c.setUserFlowID=function(a){this.$1.user_flow_id=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={ad_account_id:!0,app_category:!0,app_id:!0,biz_account_id:!0,component:!0,event:!0,install_method:!0,is_default_selection_changed:!0,selected_ad_account_ids:!0,selected_event_names:!0,selected_platforms:!0,time:!0,user_flow_id:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("SignalsSDKSetupLogger",["SignalsAppSDKSetupUIStateStore","SignalsSDKSetupEvent","SignalsSDKSetupTypedLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a,b){this.businessID=a,this.adAccountID=b}var c=a.prototype;c.logEnterSurface=function(a){var c=b("SignalsAppSDKSetupUIStateStore").getState(),d=c.preSelectedAppID;c=c.userFlowID;new(b("SignalsSDKSetupTypedLogger"))().setAppID(d).setBizAccountID(this.businessID).setAdAccountID(this.adAccountID).setEvent(b("SignalsSDKSetupEvent").ENTER_SURFACE).setComponent(a).setUserFlowID(c).log()};c.logClick=function(a,c){var d=b("SignalsAppSDKSetupUIStateStore").getState(),e=d.preSelectedAppID;d=d.userFlowID;e=new(b("SignalsSDKSetupTypedLogger"))().setAppID(e).setBizAccountID(this.businessID).setAdAccountID(this.adAccountID).setEvent(b("SignalsSDKSetupEvent").CLICK).setUserFlowID(d).setComponent(a);c&&e.updateData(c);e.log()};return a}();e.exports=a}),null);
__d("SignalsAppSDKSetupUIStateStoreUtil",["SignalsAppSDKSetupUIStateStore","SignalsSDKSetupLogger","SimpleNUXMessage"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){}var c=a.prototype;c.showSDKSetupDialog=function(a,c,d,e,f,g,h){var i=Math.floor(Math.random()*1e3+1);new(b("SignalsSDKSetupLogger"))(d,c).logClick(g,{user_flow_id:i});d=e;b("SimpleNUXMessage").hasUserSeenMessage("1704132219649488")&&(d=!1);b("SimpleNUXMessage").markMessageSeenByUser("2052213545041577");b("SignalsAppSDKSetupUIStateStore").updateStateLater({onlyShowCodeless:h||!1,preSelectedAppID:a,showAppEventsSetupTypeSelectorDialog:!d,showNux:d,skipAppSelection:f,userFlowID:i})};return a}();e.exports=new a()}),null);
__d("SignalsHomeGetUserPermissionsForDS",["SignalsHomeDataSourceUserPermissions"],(function(a,b,c,d,e,f){"use strict";a=function(a){return new(b("SignalsHomeDataSourceUserPermissions"))({canAcceptTOS:a,canAssignToAddAccounts:a,canCreate:a,canDelete:a,canEdit:a,canIngest:a})};e.exports=a}),null);
__d("SignalsHomeStateStore",["AdsDataAtom","AdsPixelDialogTypes","FluxReduceStore","SignalsAppEventSlideInPanelSelectDetailsTabActionFlux","SignalsDataSourcesEnum","SignalsHomeActionTypes","SignalsHomeGetUserPermissionsForDS","SignalsHomeInitializeActionFlux","SignalsHomeInspectAppActionFlux","SignalsHomeInspectCustomConversionActionFlux","SignalsHomeInspectDataSetActionFlux","SignalsHomeInspectPixelActionFlux","SignalsHomeSelectedSectionEnum","SignalsHomeState","SignalsHomeStateClearPixelDialogActionFlux","gkx","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("SignalsDataSourcesEnum").DATA_SET,h=b("immutable").Map,i=0;function j(a){return a.set("pixelID",null).set("dataSetID",null).set("appID",null).set("businessUnitID",null).set("customConversionID",null).set("eventName",null)}var k=b("SignalsHomeActionTypes").NOTICE,l=b("SignalsHomeActionTypes").SET_SELECTED_SECTION,m=b("gkx")("779516");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return b("SignalsHomeState")()};d.__getActionTypes=function(){return m?[k.ADD,k.REMOVE,k.REMOVE_ALL,l,b("SignalsAppEventSlideInPanelSelectDetailsTabActionFlux").actionType,b("SignalsHomeInitializeActionFlux").actionType,b("SignalsHomeInspectAppActionFlux").actionType,b("SignalsHomeInspectCustomConversionActionFlux").actionType,b("SignalsHomeInspectDataSetActionFlux").actionType,b("SignalsHomeInspectPixelActionFlux").actionType,b("SignalsHomeStateClearPixelDialogActionFlux").actionType,b("SignalsHomeActionTypes").BACK_TO_CUSTOM_CONVERSION_SCREEN,b("SignalsHomeActionTypes").BACK_TO_DATA_SOURCES,b("SignalsHomeActionTypes").INITIALIZE_PIXEL_TAB_SELECTION,b("SignalsHomeActionTypes").INSPECT_APP,b("SignalsHomeActionTypes").INSPECT_CUSTOM_CONVERSION,b("SignalsHomeActionTypes").INSPECT_DATA_SET,b("SignalsHomeActionTypes").INSPECT_DATA_SOURCE_EVENT,b("SignalsHomeActionTypes").INSPECT_PARTNER,b("SignalsHomeActionTypes").INSPECT_PIXEL,b("SignalsHomeActionTypes").NAVIGATE_TO_DATA_SET_UPLOADER,b("SignalsHomeActionTypes").REQUEST_TOS_SCREEN,b("SignalsHomeActionTypes").SELECT_PIXEL,b("SignalsHomeActionTypes").SET_SELECTED_TAB,b("SignalsHomeActionTypes").URL_CHANGE]:null};d.reduce=function(a,c){__p&&__p();c=c.action;var d=c.accountID,e=c.appID,f=c.businessID,m=c.businessUnitID,n=c.customConversionID,o=c.dataSetID,p=c.eventName,q=c.pixelID,r=c.pixelDialog,s=c.type,t=c.selectedScreenSection,u=c.selectedTab,v=c.userID,w=c.isBusinessAdmin===!0,x=a;switch(s){case b("SignalsHomeInitializeActionFlux").actionType:x=b("SignalsHomeState")({accountID:d,appID:e,businessID:f,businessUnitID:m,customConversionID:n,dataSetID:o,dataSourcesUserPermissions:h((s={},s[g]=new(b("SignalsHomeGetUserPermissionsForDS"))(w),s)),eventName:p,isBusinessAdmin:w,pixelDialog:r,pixelID:q,selectedScreenSection:t,selectedTab:u,userID:v});break;case b("SignalsHomeStateClearPixelDialogActionFlux").actionType:x=a.set("pixelDialog",null);break;case b("SignalsHomeActionTypes").BACK_TO_DATA_SOURCES:x=j(a).set("selectedTab",null);break;case b("SignalsHomeInspectDataSetActionFlux").actionType:x=j(a).set("dataSetID",o).set("selectedScreenSection",b("SignalsHomeSelectedSectionEnum").DATA_SOURCES);break;case b("SignalsHomeInspectAppActionFlux").actionType:x=j(a).set("appID",e).set("selectedScreenSection",b("SignalsHomeSelectedSectionEnum").DATA_SOURCES);break;case b("SignalsHomeActionTypes").NAVIGATE_TO_DATA_SET_UPLOADER:x=j(a).set("dataSetID",o);break;case b("SignalsHomeActionTypes").INSPECT_PARTNER:x=x.set("selectedScreenSection",b("SignalsHomeSelectedSectionEnum").PARTNER_INTEGRATIONS);break;case b("SignalsHomeActionTypes").SELECT_PIXEL:x=a.set("pixelID",q);break;case b("SignalsHomeInspectPixelActionFlux").actionType:x=j(a).set("pixelID",q).set("selectedTab",u).set("selectedScreenSection",b("SignalsHomeSelectedSectionEnum").DATA_SOURCES);break;case b("SignalsHomeActionTypes").INITIALIZE_PIXEL_TAB_SELECTION:x=a.set("selectedTab",u);break;case b("SignalsHomeActionTypes").SET_SELECTED_TAB:d=c.screen;u!=null&&d!=null&&(x=a.set("selectedTab",u));break;case l:t!=null&&(x=j(a).set("selectedScreenSection",t));break;case k.ADD:if(c.notice!=null){f=String(i++);x=a.set("notices",a.notices.set(f,babelHelpers["extends"]({},c.notice,{id:f})))}break;case k.REMOVE:c.noticeID!=null&&(x=a.set("notices",a.notices["delete"](c.noticeID)));break;case k.REMOVE_ALL:x=a.set("notices",a.notices.clear());break;case b("SignalsHomeActionTypes").REQUEST_TOS_SCREEN:x=j(a).set("dataSetID",o);break;case b("SignalsAppEventSlideInPanelSelectDetailsTabActionFlux").actionType:c.data!=null&&c.data.dialogType===b("AdsPixelDialogTypes").NO_DIALOG&&(x=a.set("pixelDialog",null));break;case b("SignalsHomeActionTypes").URL_CHANGE:x=j(a);q!=null&&(x=x.set("pixelID",q));o!=null&&(x=x.set("dataSetID",o));n!=null&&(x=x.set("customConversionID",n));e!=null&&(x=x.set("appID",e));t!=null&&(x=x.set("selectedScreenSection",t));break;case b("SignalsHomeActionTypes").BACK_TO_CUSTOM_CONVERSION_SCREEN:x=j(a);break;case b("SignalsHomeInspectCustomConversionActionFlux").actionType:x=j(a).set("customConversionID",n);break;case b("SignalsHomeActionTypes").INSPECT_DATA_SOURCE_EVENT:x=a.set("eventName",p);break}return x};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("AdsDataAtom"))}),null);
__d("SignalsHomeTabsEnum",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({EVENTS:"EVENTS",SETTINGS:"SETTINGS",DIAGNOSTICS:"DIAGNOSTICS",HISTORY:"HISTORY",REAL_TIME_FIRES:"REAL_TIME_FIRES",VERIFY:"VERIFY"});e.exports=a}),null);
__d("SignalsErrorBoundary.react",["cx","fbt","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={hasError:!1},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidCatch=function(a){this.props.logger.logError(a,"SIGNALS_ERROR_BOUNDRY"),this.setState({hasError:!0})};d.render=function(){return this.state.hasError?this.props.errorContent!=null&&this.props.errorContent!==""?this.props.errorContent:b("React").createElement("div",{className:"_327x"},h._("Ouch! Something went wrong...")):this.props.children};return c}(b("React").Component);e.exports=a}),null);
__d("SignalsEventsManagerLogger",["SignalsDataSourcesEnum","SignalsHomeStateStore","SignalsLogging","SignalsLoggingNamespaceEnum","SignalsLoggingScopesEnum","signalsLoggingEventsManagerContextListener"],(function(a,b,c,d,e,f){"use strict";function a(){var a=null,c=null,d=b("SignalsHomeStateStore").getState(),e=d.appID,f=d.dataSetID,g=d.pixelID,h=d.accountID;d=d.businessID;f!==null&&f!==""?(a=b("SignalsDataSourcesEnum").DATA_SET,c=f):g!==null&&g!==""?(a=b("SignalsDataSourcesEnum").PIXEL,c=g):e!==null&&e!==""&&(a=b("SignalsDataSourcesEnum").APP_EVENT,c=e);return{dataSourceType:a,dataSourceID:c,adAccountID:h,businessID:d}}c=b("SignalsLogging").namespace(b("SignalsLoggingNamespaceEnum").ADS_SIGNALS).scope(b("SignalsLoggingScopesEnum").EVENTS_MANAGER).secondary(b("signalsLoggingEventsManagerContextListener"),a);e.exports=c}),null);
__d("SignalsAppCodelessEventSetupLogger",["SignalsEventsManagerLogger","SignalsLoggingScopesEnum"],(function(a,b,c,d,e,f){"use strict";a=b("SignalsEventsManagerLogger").scope(b("SignalsLoggingScopesEnum").APP_CODELESS_EVENT_SETUP);e.exports=a}),null);
__d("InsightsSelectableLegend.react",["cx","CandelaLegend.react","InsightsBaseLegend.react","InsightsItems","PopoverMenu.react","React","ReactXUIMenu","emptyFunction","immutable","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("CandelaLegend.react").CandelaLegendItem,i=b("InsightsItems").isLegacyItem;a=b("immutable").Map;c=b("React").PropTypes;var j=b("ReactXUIMenu").SelectableItem,k=b("ReactXUIMenu").SelectableMenu;d=b("InsightsBaseLegend.react").propTypes;d.auxiliaryItemRenderer;d.itemRenderer;f=babelHelpers.objectWithoutPropertiesLoose(d,["auxiliaryItemRenderer","itemRenderer"]);g=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$2=function(a,c){__p&&__p();var e=d.props,f=e.autoColors,g=e.data,h=e.onSelect,l=e.selectableItemsByKey,m=e.target;e=l.get(c.key);if(!e)return d.$1(a,c);e=b("React").createElement(k,null,e.map(function(a){var d=a.key===c.key,e=a.disabled||!d&&l.has(a.key),k;if(i(a))k=a.richLabel||a.label;else{var n=a.getItemDescriptor(g,f,m);k=n.labelElement||n.labelText}return b("React").createElement(j,{disabled:e,key:a.key,onclick:function(){return h(a,c)},selected:d},k)}));var n=b("joinClasses")(a.className,"selectable");return b("React").createElement(b("PopoverMenu.react"),{key:c.key,menu:e},d.$1(babelHelpers["extends"]({},a,{className:n}),c))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$1=function(a,c){return b("React").createElement(h,babelHelpers["extends"]({},a,{className:b("joinClasses")(a.className,"_5ueq")}))};d.render=function(){return b("React").createElement(b("InsightsBaseLegend.react"),babelHelpers["extends"]({},this.props,{auxiliaryItemRenderer:this.$1,className:b("joinClasses")("_5uf2",this.props.className),itemRenderer:this.$2,items:this.props.items}))};return c}(b("React").PureComponent);g.propTypes=babelHelpers["extends"]({},f,{onSelect:c.func.isRequired,selectableItemsByKey:c.instanceOf(a).isRequired});g.defaultProps={autoColors:a(),data:{},onSelect:b("emptyFunction"),selectableItemsByKey:a()};e.exports=g}),null);
__d("InsightsToggleableLegend.react",["cx","CandelaLegend.react","InsightsBaseLegend.react","InsightsItems","React","emptyFunction","immutable","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("CandelaLegend.react").CandelaLegendItem,i=b("InsightsItems").isLegacyItem;a=b("React").PropTypes;c=b("immutable").Set;d=b("InsightsBaseLegend.react").propTypes;d.auxiliaryItemRenderer;d.itemRenderer;f=babelHelpers.objectWithoutPropertiesLoose(d,["auxiliaryItemRenderer","itemRenderer"]);g=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={clickedKey:null},d.$1=function(a){d.setState({clickedKey:a.key}),d.props.onToggle(a)},d.$2=function(a){var b=d.props.onMouseLeave;d.setState({clickedKey:null});b&&b(a)},d.$4=function(a,c){__p&&__p();var e=d.props,f=e.canDisableAllItems,g=e.disabledKeys;e=e.items;var j=function(a){return a.toggleable||i(a)};if(!j(c))return d.$3(a,c);var k=function(a){return a.disabled||g&&g.has(a.key)},l=k(c),m=!l&&!f&&e.every(function(a){return a.key===c.key||!j(a)||k(a)});f=b("joinClasses")(a.className,(d.state.clickedKey===c.key?"clicked":"")+(l?" disabled":"")+" _1fbf"+(m?" static":"")+" toggleable");return b("React").createElement(h,babelHelpers["extends"]({},a,{className:b("joinClasses")(a.className,f),onClick:function(){return m?null:d.$1(c)},onMouseLeave:function(){return d.$2(c)}}))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$3=function(a,c){return b("React").createElement(h,babelHelpers["extends"]({},a,{className:b("joinClasses")(a.className,"_1fbf")}))};d.render=function(){return b("React").createElement(b("InsightsBaseLegend.react"),babelHelpers["extends"]({},this.props,{auxiliaryItemRenderer:this.$3,className:b("joinClasses")("_1fbh",this.props.className),itemRenderer:this.$4}))};return c}(b("React").PureComponent);g.propTypes=babelHelpers["extends"]({},f,{disabledKeys:a.instanceOf(c),onToggle:a.func.isRequired,canDisableAllItems:a.bool});g.defaultProps={canDisableAllItems:!1,disabledKeys:c(),onToggle:b("emptyFunction")};e.exports=g}),null);
__d("BUIInsightsSelectableLegend.react",["cx","BUIInsightsBaseLegend.react","InsightsSelectableLegend.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("BUIInsightsBaseLegend.react").propTypes;a.children;c=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.size,d=a.title,e=a.titleSize;a=babelHelpers.objectWithoutPropertiesLoose(a,["size","title","titleSize"]);var f=b("joinClasses")("_3xby",this.props.className);return b("React").createElement(b("BUIInsightsBaseLegend.react"),{className:f,size:c,title:d,titleSize:e},b("React").createElement(b("InsightsSelectableLegend.react"),a))};return c}(b("React").Component);d.propTypes=babelHelpers["extends"]({},c,b("InsightsSelectableLegend.react").propTypes);e.exports=d}),null);
__d("BUIInsightsToggleableLegend.react",["cx","BUIInsightsBaseLegend.react","InsightsItems","InsightsToggleableLegend.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("InsightsItems").isLegacyItem;a=b("BUIInsightsBaseLegend.react").propTypes;a.children;c=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.items,d=a.size,e=a.title,f=a.titleSize;a=babelHelpers.objectWithoutPropertiesLoose(a,["items","size","title","titleSize"]);var g=b("joinClasses")("_3p6a",this.props.className);c=c.map(function(a){if(a.richLabel||a.defaultDescriptor&&a.defaultDescriptor.labelElement||!h(a)&&!a.toggleable)return a;var c=h(a)?a.label:a.defaultDescriptor.labelText;c=b("React").createElement("span",{className:"_zco"},c,k,i,j);return h(a)?babelHelpers["extends"]({},a,{richLabel:c}):a.set("defaultDescriptor",a.defaultDescriptor.set("labelElement",c))});return b("React").createElement(b("BUIInsightsBaseLegend.react"),{className:g,size:d,title:e,titleSize:f},b("React").createElement(b("InsightsToggleableLegend.react"),babelHelpers["extends"]({},a,{items:c})))};return c}(b("React").Component);d.propTypes=babelHelpers["extends"]({},c,b("InsightsToggleableLegend.react").propTypes);var i=b("React").createElement("svg",{className:"_3p65 _3p68",height:"12px",version:"1.1",viewBox:"0 0 12 12",width:"12px",xmlns:"http://www.w3.org/2000/svg"},b("React").createElement("path",{d:"M5.68434189e-14 6 C5.68434189e-14 5.5 0.5 5 1 5 L11 5 C11.55 5 12 5.5 12 6 C12 6.5 11.6 7 11 7 L1 7 C0.45 7 0 6.5 0 6 L5.68434189e-14 6 Z"})),j=b("React").createElement("svg",{className:"_3p65 _3p69",height:"12px",version:"1.1",viewBox:"0 0 12 12",width:"12px",xmlns:"http://www.w3.org/2000/svg"},b("React").createElement("path",{d:"M5 5 L1 5 C0.45 5 0 5.5 0 6 C0 6.5 0.5 7 1 7 L5 7 L5 11 C5 11.6 5.5 12 6 12 C6.55 12 7 11.6 7 11 L7 7 L11 7 C11.55 7 12 6.5 12 6 C12 5.5 11.6 5 11 5 L7 5 L7 1 C7 0.5 6.5 0 6 0 C5.45 0 5 0.5 5 1 L5 5 Z"})),k=b("React").createElement("svg",{className:"_3p66 _3p65",height:"12px",version:"1.1",viewBox:"0 0 12 12",width:"12px",xmlns:"http://www.w3.org/2000/svg"},b("React").createElement("path",{d:"M11.7626079 3.5 L11.7626079 3.5 C11.716344 3.6 11.7 3.6 11.8 3.5 L4.82301623 10.7 C4.82301623 10.7 4.8 10.7 4.8 10.7 C4.40664073 11.1 3.9 11.1 3.5 10.7 L3.48136183 10.7 L3.48136183 10.7 L0.242885709 7.4 C-0.0809619031 7 -0.1 6.4 0.2 6.1 C0.612997266 5.7 1.2 5.7 1.5 6.1 L1.53827616 6.1 L1.53827616 6.1 L4.12905706 8.7 L10.4209535 2.2 L10.4209535 2.2 L10.4209535 2.2 C10.7910651 1.9 11.3 1.9 11.7 2.2 C12.0864555 2.6 12.1 3.2 11.8 3.5 L11.7626079 3.5 L11.7626079 3.5 Z"}));e.exports=d}),null);
__d("BUIInsightsSelectableLegendChart.react",["BUIInsightsChartWithLegend.react","BUIInsightsSelectableLegend.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=b("BUIInsightsChartWithLegend.react").propTypes;c.chart;c.children;d=babelHelpers.objectWithoutPropertiesLoose(c,["chart","children"]);f=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={items:c.props.items,selectableItemsByKey:c.props.selectableItemsByKey},c.$1=function(a,b){var d=c.props.onSelect,e=c.state.items.map(function(c){return c.key===b.key?a:c}),f=c.state.selectableItemsByKey.mapKeys(function(c){return c===b.key?a.key:c});c.setState({items:e,selectableItemsByKey:f});d&&d(a,b)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.UNSAFE_componentWillReceiveProps=function(a){var b=a.items;a=a.selectableItemsByKey;(b!==this.props.items||a!==this.props.selectableItemsByKey)&&this.setState({items:b,selectableItemsByKey:a})};d.render=function(){var a=this.props,c=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);return b("React").createElement(b("BUIInsightsChartWithLegend.react"),babelHelpers["extends"]({},a,{chart:c,items:this.state.items}),b("React").createElement(b("BUIInsightsSelectableLegend.react"),babelHelpers["extends"]({},a,{onSelect:this.$1,selectableItemsByKey:this.state.selectableItemsByKey})))};return c}(b("React").PureComponent);f.propTypes=babelHelpers["extends"]({},d,{children:a.element,auxiliaryItems:b("BUIInsightsSelectableLegend.react").propTypes.auxiliaryItems,auxiliaryItemsPosition:b("BUIInsightsSelectableLegend.react").propTypes.auxiliaryItemsPosition,className:b("BUIInsightsSelectableLegend.react").propTypes.className,disableHorizontalLayout:b("BUIInsightsSelectableLegend.react").propTypes.disableHorizontalLayout,display:b("BUIInsightsSelectableLegend.react").propTypes.display,layoutInterval:b("BUIInsightsSelectableLegend.react").propTypes.layoutInterval,minItemWidthPercentage:b("BUIInsightsSelectableLegend.react").propTypes.minItemWidthPercentage,onSelect:b("BUIInsightsSelectableLegend.react").propTypes.onSelect,selectableItemsByKey:b("BUIInsightsSelectableLegend.react").propTypes.selectableItemsByKey,size:b("BUIInsightsSelectableLegend.react").propTypes.size,titleSize:b("BUIInsightsSelectableLegend.react").propTypes.titleSize,width:b("BUIInsightsSelectableLegend.react").propTypes.width});e.exports=f}),null);
__d("BUIInsightsToggleableLegendChart.react",["BUIInsightsChartWithLegend.react","BUIInsightsToggleableLegend.react","React","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;var g=b("immutable").Set;c=b("BUIInsightsChartWithLegend.react").propTypes;c.chart;c.children;d=babelHelpers.objectWithoutPropertiesLoose(c,["chart","children"]);f=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={disabledKeys:g()},c.$1=function(a){c.setState(function(b){b=b.disabledKeys;a.disabledKeys&&!a.disabledKeys.equals(b)&&(b=a.disabledKeys);return{disabledKeys:b}})},c.$2=function(a){var b=c.props.onToggle;c.setState(function(b){b=b.disabledKeys;b.has(a.key)?b=b["delete"](a.key):b=b.add(a.key);return{disabledKeys:b}});b&&b(a)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.UNSAFE_componentWillMount=function(){this.$1(this.props)};d.UNSAFE_componentWillReceiveProps=function(a){this.$1(a)};d.render=function(){var a=this.props,c=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);return b("React").createElement(b("BUIInsightsChartWithLegend.react"),babelHelpers["extends"]({},a,{chart:c}),b("React").createElement(b("BUIInsightsToggleableLegend.react"),babelHelpers["extends"]({},a,{disabledKeys:this.state.disabledKeys,onToggle:this.$2})))};return c}(b("React").PureComponent);f.propTypes=babelHelpers["extends"]({},d,{children:a.element,auxiliaryItems:b("BUIInsightsToggleableLegend.react").propTypes.auxiliaryItems,auxiliaryItemsPosition:b("BUIInsightsToggleableLegend.react").propTypes.auxiliaryItemsPosition,className:b("BUIInsightsToggleableLegend.react").propTypes.className,disabledKeys:b("BUIInsightsToggleableLegend.react").propTypes.disabledKeys,disableHorizontalLayout:b("BUIInsightsToggleableLegend.react").propTypes.disableHorizontalLayout,display:b("BUIInsightsToggleableLegend.react").propTypes.display,layoutInterval:b("BUIInsightsToggleableLegend.react").propTypes.layoutInterval,minItemWidthPercentage:b("BUIInsightsToggleableLegend.react").propTypes.minItemWidthPercentage,onToggle:b("BUIInsightsToggleableLegend.react").propTypes.onToggle,size:b("BUIInsightsToggleableLegend.react").propTypes.size,titleSize:b("BUIInsightsToggleableLegend.react").propTypes.titleSize,width:b("BUIInsightsToggleableLegend.react").propTypes.width});e.exports=f}),null);
__d("SignalsSDKSetupComponent",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADD_DATA_SOURCE_SELECTOR:"add_data_source_selector",NO_APP_NUX:"no_app_nux",NO_EVENT_NUX:"no_event_nux",MANUAL_SDK_SETUP_OPTION:"manual_sdk_setup_option",MANUAL_SDK_SETUP_FLOW:"manual_sdk_setup_flow",PARTNER_APP_SDK_SETUP_OPTION:"partner_app_sdk_setup_option",APP_SELECTION_PANEL:"app_selection_panel",PLATFORM_SELECTION_PANEL:"platform_selection_panel",ACCOUNT_SELECTION_PANEL:"account_selection_panel",ACCOUNT_NEXT_STEP_BUTTON:"account_next_step_button",APP_CATEGORY_SELECTOR:"app_category_selector",EVENT_SELECTION_PANEL:"event_selection_panel",EVENT_NEXT_STEP_BUTTON:"event_next_step_button",SET_UP_METHOD_SELECTOR:"set_up_method_selector",PREVIEW_EMAIL_PANEL:"preview_email_panel",SEND_EMAIL_BUTTON:"send_email_button",NOTIF_JEWEL:"notif_jewel",CF_EVENT_NOT_READY_NOTICE:"cf_event_not_ready_notice",CF_EVENT_CONVERSION_TRACKING_NOTICE:"cf_event_conversion_tracking_notice",CF_EVENT_CONVERSION_NOTICE:"cf_event_conversion_notice",CF_EVENT_APP_SELECTOR_NO_EVENT_NOTICE:"cf_event_app_selector_no_event_notice",ADS_MANAGER_BANNER_UPSELL:"ads_manager_banner_upsell",SETUP_DECISION_MODAL:"setup_decision_modal",UNKNOWN:"unknown",FBA_SIDE_UNIT:"fba_side_unit",FBA_EVENTS_TAB:"fba_events_tab",SDK_UPSELL_MEGAPHONE_NUX:"sdk_upsell_megaphone_nux",APP_EM_UPSELL_NUX:"app_em_upsell_nux",CODELESS_APP_EM_UPSELL_NUX:"codeless_app_em_upsell_nux",CF_APP_INSTALLS_NUX:"cf_app_installs_nux",QP_SETUP:"qp_setup",AYMT_NOTIF_SETUP:"aymt_notif_setup",EMAIL_NOTIF_SETUP:"email_notif_setup",DEV_SITE_TOP_TIP:"dev_site_top_tip",SDK_READY_RETARGET:"sdk_ready_retarget",CODELESS_ONLY_EMAIL_NOTIF_SETUP:"codeless_only_email_notif_setup",CODELESS_ONLY_ADVERTISER_NOTIF_SETUP:"codeless_only_advertiser_notif_setup",CODELESS_ONLY_ADMIN_NOTIF_SETUP:"codeless_only_admin_notif_setup",BUTTON_INDEXING_NOTIF_SETUP:"button_indexing_notif_setup",BUTTON_INDEXING_APP_NUX:"button_indexing_app_nux",BUTTON_INDEXING_QP:"button_indexing_qp",ADVANCED_MATCHING_NOTIF_SETUP:"advanced_matching_notif_setup"})}),null);