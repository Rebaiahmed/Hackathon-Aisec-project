if (self.CavalryLogger) { CavalryLogger.start_js(["yhwp6"]); }

__d("AdsLWIObjectiveLandingPaneStrings",["fbt","BoostedAutomatedAdsConstants","FDSLink.react","React","SUIText.react","qex"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a={ACCOUNT_SELECTOR_HEADLINE:g._("Account"),ACCOUNT_SELECTOR_PLACEHOLDER:g._("Select an ad account"),ACCOUNT_PIXEL_LABEL:g._("Account and Pixel"),ACCOUNT_PIXEL_PLACEHOLDER:g._("Select an ad account and pixel"),ACTIVE_PIXEL_STATUS:g._("Connected. You're ready to create your ads."),CHECK_PIXEL_INSTALLED_MESSAGE:g._("The pixel is {=properly installed} on your website",[g._param("=properly installed",b("React").createElement(b("FDSLink.react"),{href:"https://www.facebook.com/business/help/198406697184603",target:"_blank"},g._("properly installed")))]),HOVER_TEXT_FOR_PIXEL_EXISTED:g._("It looks like your pixel for this ad account was created, but it wasn't connected to your website. Take a few more steps to finish the setup."),PIXEL_BENEFIT:g._("To create ads that drive purchases on your website, we'll guide you through a one-time setup of the Facebook pixel on your website. This will help you track sales from your ads."),PIXEL_CORRECT_MESSAGE:g._("The correct pixel is selected"),PIXEL_CREATION_TOOLTIP:g._("The Facebook pixel is a piece of code for your website that allows you to understand the effectiveness of your advertising by measuring the actions people take after viewing your ad."),PIXEL_EXIST_HOVER_TOOLTIP:g._("It looks like your pixel for this ad account was created, but it wasn't connected to your website. Take a few more steps to finish the setup and start seeing how your ads drive traffic to your website."),PIXEL_SETUP_BUTTON_TEXT:g._("Get Started"),PIXEL_TERMS_AND_CONDITIONS:g._("By clicking {=Get Started}, I agree to {=the Facebook Business Tools Terms.}",[g._param("=Get Started",b("React").createElement(b("SUIText.react"),{weight:"bold"},g._("Get Started"))),g._param("=the Facebook Business Tools Terms.",b("React").createElement(b("FDSLink.react"),{href:"https://www.facebook.com/legal/technology_terms",target:"_blank"},g._("the Facebook Business Tools Terms.")))]),PIXEL_UNMATCH_NOTICE:g._("Note: If you've set up your URL to redirect, no action is required. If not, verify the following:"),SI_GALLERY_MODAL_HEADLINE:g._("Choose Platform"),SI_GALLERY_HEADLINE:g._("Choose Your Platform"),SI_GALLERY_SEC_HEADLINE:g._("Get guided instructions to connect your website."),SI_GALLERY_LEARN_MORE:g._("If you don't use one of these platforms, there are other ways to get set up. {=Learn more.}",[g._param("=Learn more.",b("React").createElement(b("FDSLink.react"),{href:b("BoostedAutomatedAdsConstants").PIXEL_IMPLEMENTATION_GUIDE_URI,target:"_blank"},g._("Learn more.")))]),SI_GALLERY_PRIMARY_BUTTON:g._("Finish"),TEST_PIXEL:g._("Send Test Traffic"),URL_CORRECT_MESSAGE:g._("The URL is spelled correctly"),WEBSITE_URL_LABEL:g._("Website"),WEBSITE_URL_LABEL_LEAD_GEN:g._("Website Form URL"),WEBSITE_URL_PLACEHOLDER:g._("Input your website URL"),WEBSITE_URL_PLACEHOLDER_LEAD_GEN:g._("e.g. www.mywebsite.com\/lead-form"),getDefaultPixelName:function(a){return g._("{page_name} Pixel",[g._param("page_name",a)])},getInactiveStatus:function(a){return g._("Pixel isn't connected. {=Refresh} to check the connection, or try setting it up again.",[g._param("=Refresh",b("React").createElement(b("FDSLink.react"),{"data-testid":"click-to-refresh",onClick:a},g._("Refresh")))])},getNewPartners:function(a){return g._("{=Request a new partner}",[g._param("=Request a new partner",b("React").createElement(b("FDSLink.react"),{"data-testid":"click-to-request-a-new-partner",onClick:a},g._("Request a new partner")))])},getPixelCreatorLabel:function(){var a=b("qex")._("707536");return a?g._("Facebook Pixel Setup"):g._("Connect Your Website")},getSecondaryAccountInfo:function(a,b){return g._("Account: {account_id}, {account_currency}",[g._param("account_id",a),g._param("account_currency",b)])},getSecondaryAccountPixelInfo:function(a,b,c){return g._("Account: {account_id}, {account_currency}; Pixel: {pixel_id}",[g._param("account_id",a),g._param("account_currency",b),g._param("pixel_id",c)])}};e.exports=a}),null);
__d("AdsPixelLoggingConstant",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({ADS_PIXEL_PIXEL_CREATION_DIALOG_OPEN:null,ADS_PIXEL_PIXEL_CREATION_LEARN_MORE:null,ADS_PIXEL_ACTIVE_PIXEL_NUDGE_CONVERSION_INFOBOX:null,ADS_PIXEL_ACTIVE_PIXEL_NUDGE_CONVERSION_CLICK:null})}),null);
__d("AdsLWIRegisterGetterUtils",["AdsSelectedAccountIDGetter","adsLWISelectedAccountIDSelector","memoize"],(function(a,b,c,d,e,f){"use strict";a=b("memoize")(function(){new(b("AdsSelectedAccountIDGetter"))({stores:[].concat(b("adsLWISelectedAccountIDSelector").getStores()),get:function(){return b("adsLWISelectedAccountIDSelector")()}}).register()});e.exports={registerAdsSelectedAdAccountGetter:a}}),null);
__d("SignalsTrackingCard.react",["cx","fbt","FDSStatusIndicator.react","React","SignalsStatusEnum","SUILink.react","SUIText.react","SUITooltip.react","URI"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PureComponent;var i=h._("AUTO"),j=h._("OPTIMIZED"),k=h._("ID:");c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(){var a=this.props.status;switch(a){case b("SignalsStatusEnum").ACTIVE:return"active";case b("SignalsStatusEnum").INACTIVE:return"inactive";case b("SignalsStatusEnum").NEVER_ACTIVE:return"error";case b("SignalsStatusEnum").ALMOST_ACTIVE:return"warning";default:return null}};d.render=function(){var a=this.props,c=a.autoTracked,d=a.autoTrackingHelpLink,e=a.idLabel,f=a.name,g=a.nameWeight,l=a.optimized,m=a.sourceFbt,n=a.value,o=a.withBorder;a=a.width;var p=this.$1();return b("React").createElement("div",{className:"_1ku_"+(o?" _25dw":"")},b("React").createElement("div",{className:"_5zgj"},p!=null?b("React").createElement("div",{className:"_5zgk"},b("React").createElement(b("FDSStatusIndicator.react"),{status:p})):null,b("React").createElement("div",{className:"_3ftv"},b("React").createElement(b("SUIText.react"),{display:"truncate",shade:"medium",size:"meta1",weight:g||"bold",width:a},f),b("React").createElement("div",{className:"_3ftw"},b("React").createElement(b("SUIText.react"),{display:"block",shade:"light",size:"xsmall_DEPRECATED",width:a},e===void 0?k:e,n),c===!0?b("React").createElement(b("SUITooltip.react"),{position:"below",tooltip:h._("Auto-tracking by this {event source name, such as offline event set} is enabled for all ads created by this ad account. {optional learn-more link}",[h._param("event source name, such as offline event set",m),h._param("optional learn-more link",d?b("React").createElement(b("SUILink.react"),{href:d.toString(),target:"_blank"},h._("Learn more about auto-tracking.")):null)])},b("React").createElement("div",{className:"_3ftx _3fty"},i)):null,l!=="none"?b("React").createElement(b("SUITooltip.react"),{position:"below",tooltip:l==="all"?h._("Ad delivery will be optimized for conversions tracked by this {event source name, such as pixel}.",[h._param("event source name, such as pixel",m)]):h._("Ad delivery for some of your ad sets will be optimized for conversions tracked by this {event source name, such as pixel}.",[h._param("event source name, such as pixel",m)])},b("React").createElement("div",{className:"_3ftx"+(l==="all"?" _3ftz":"")+(l==="some"?" _f0i":"")},j)):null))))};return c}(a);c.defaultProps={optimized:"none"};c.SOURCES={APP:h._("app"),OFFLINE_CATALOG_SALES:h._("collaborative ads"),OFFLINE_EVENT_SET:h._("offline event set"),PIXEL:h._("pixel")};c.AUTO_TRACKING_HELP_LINKS={OFFLINE_EVENT_SET:new(b("URI"))("https://www.facebook.com/business/help/1480558938621580")};e.exports=c}),null);
__d("PartnerIntegrationDialogExit",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BACK:"back",CLOSE:"close"})}),null);
__d("PartnerIntegrationLoggingScopes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({DETAILS:null,DIALOG:null,LIST:null,MANAGEMENT:null,RECOMMENDATION:null,SEARCH:null,SETUP:null})}),null);
__d("PartnerIntegrationSetupActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({PARTNER_INTEGRATION_CREATE_OFFLINE_EVENT_SET_COMPLETE:"",PARTNER_INTEGRATION_CREATE_OFFLINE_EVENT_SET_FAIL:"",PARTNER_INTEGRATION_CREATE_OFFLINE_EVENT_SET_START:"",PARTNER_INTEGRATION_CREATE_PARTNER_INTEGRATION_COMPLETE:"",PARTNER_INTEGRATION_CREATE_PARTNER_INTEGRATION_FAIL:"",PARTNER_INTEGRATION_CREATE_PARTNER_INTEGRATION_START:"",PARTNER_INTEGRATION_CREATE_PIXEL_COMPLETE:"",PARTNER_INTEGRATION_CREATE_PIXEL_FAIL:"",PARTNER_INTEGRATION_CREATE_PIXEL_START:"",PARTNER_INTEGRATION_SETUP_APP_LINK_AD_ACCOUNT_COMPLETE:"",PARTNER_INTEGRATION_SETUP_APP_LINK_AD_ACCOUNT_START:"",PARTNER_INTEGRATION_SETUP_APP_MAP_EVENTS_COMPLETE:"",PARTNER_INTEGRATION_SETUP_APP_MAP_EVENTS_START:"",PARTNER_INTEGRATION_SETUP_APP_SELECT_APP_COMPLETE:"",PARTNER_INTEGRATION_SETUP_APP_SELECT_APP_START:"",PARTNER_INTEGRATION_SETUP_APPLICATION_EVENTS_FAIL:"",PARTNER_INTEGRATION_SETUP_ASSIGN_AD_ACCOUNTS_TO_APP_FAIL:"",PARTNER_INTEGRATION_SETUP_AUTOMATIC_ADVANCED_MATCHING_COMPLETE:"",PARTNER_INTEGRATION_SETUP_AUTOMATIC_ADVANCED_MATCHING_START:"",PARTNER_INTEGRATION_SETUP_CLOSE:"",PARTNER_INTEGRATION_SETUP_CMS_INSTRUCTION_COMPLETE:"",PARTNER_INTEGRATION_SETUP_CMS_INSTRUCTION_START:"",PARTNER_INTEGRATION_SETUP_ERROR_MESSAGE_RESET:"",PARTNER_INTEGRATION_SETUP_GTM_FAIL:"",PARTNER_INTEGRATION_SETUP_GTM_HOW_IT_WORKS_COMPLETE:"",PARTNER_INTEGRATION_SETUP_GTM_HOW_IT_WORKS_START:"",PARTNER_INTEGRATION_SETUP_GTM_LOGIN_COMPLETE:"",PARTNER_INTEGRATION_SETUP_GTM_LOGIN_FAIL:"",PARTNER_INTEGRATION_SETUP_GTM_LOGIN_START:"",PARTNER_INTEGRATION_SETUP_GTM_SELECT_PIXEL_COMPLETE:"",PARTNER_INTEGRATION_SETUP_GTM_SELECT_PIXEL_START:"",PARTNER_INTEGRATION_SETUP_GTM_VERIFY_ACCOUNT_COMPLETE:"",PARTNER_INTEGRATION_SETUP_GTM_VERIFY_ACCOUNT_START:"",PARTNER_INTEGRATION_SETUP_LINK_APPLICATION_COMPLETE:"",PARTNER_INTEGRATION_SETUP_LINK_APPLICATION_FAIL:"",PARTNER_INTEGRATION_SETUP_LINK_APPLICATION_START:"",PARTNER_INTEGRATION_SETUP_MARK_COMPLETE_COMPLETE:"",PARTNER_INTEGRATION_SETUP_MARK_COMPLETE_FAIL:"",PARTNER_INTEGRATION_SETUP_MARK_COMPLETE_START:"",PARTNER_INTEGRATION_SETUP_MARK_RESTART_COMPLETE:"",PARTNER_INTEGRATION_SETUP_MARK_RESTART_FAIL:"",PARTNER_INTEGRATION_SETUP_MARK_RESTART_START:"",PARTNER_INTEGRATION_SETUP_OAUTH_STATE_COMPLETE:"",PARTNER_INTEGRATION_SETUP_OAUTH_STATE_CONFIGURED:"",PARTNER_INTEGRATION_SETUP_OAUTH_STATE_FAIL:"",PARTNER_INTEGRATION_SETUP_OAUTH_STATE_RESET:"",PARTNER_INTEGRATION_SETUP_OAUTH_STATE_START:"",PARTNER_INTEGRATION_SETUP_OAUTH_STATE_UPDATE:"",PARTNER_INTEGRATION_SETUP_OFFLINE_CONVERSION_COMPLETE:"",PARTNER_INTEGRATION_SETUP_OFFLINE_CONVERSION_FAIL:"",PARTNER_INTEGRATION_SETUP_OFFLINE_CONVERSION_START:"",PARTNER_INTEGRATION_SETUP_OFFLINE_CONVERSION_UPDATE:"",PARTNER_INTEGRATION_SETUP_OFFLINE_EVENT_SET_NAME_UPDATE:"",PARTNER_INTEGRATION_SETUP_PIXEL_FAIL:"",PARTNER_INTEGRATION_SETUP_PIXEL_MISSING_ADMIN_PERMISSION:"",PARTNER_INTEGRATION_SETUP_SEGMENT_SELECT_SOURCE_COMPLETE:"",PARTNER_INTEGRATION_SETUP_SEGMENT_SELECT_SOURCE_FAIL:"",PARTNER_INTEGRATION_SETUP_SEGMENT_SELECT_SOURCE_START:"",PARTNER_INTEGRATION_SETUP_SEGMENT_SET_DESTINATION_FAIL:"",PARTNER_INTEGRATION_SETUP_SELECT_PIXEL_COMPLETE:"",PARTNER_INTEGRATION_SETUP_SELECT_PIXEL_START:"",PARTNER_INTEGRATION_SETUP_SET_MANUAL_ADVANCED_MATCHING_COMPLETE:"",PARTNER_INTEGRATION_SETUP_SET_MANUAL_ADVANCED_MATCHING_START:"",PARTNER_INTEGRATION_SETUP_START:"",PARTNER_INTEGRATION_SETUP_SUMMARY_COMPLETE:"",PARTNER_INTEGRATION_SETUP_SUMMARY_START:"",PARTNER_INTEGRATION_SETUP_VERIFY_INTEGRATION_COMPLETE:"",PARTNER_INTEGRATION_SETUP_VERIFY_INTEGRATION_START:"",PARTNER_INTEGRATION_SETUP_ZAP_COMPLETE:"",PARTNER_INTEGRATION_SETUP_ZAP_START:"",PARTNER_INTEGRATION_UPSELL_CREATE_AD:"",PARTNER_INTEGRATION_UPSELL_CREATE_AUDIENCE:"",PARTNER_INTEGRATION_UPSELL_DOWNLOAD_PIXEL_HELPER:"",PARTNER_INTEGRATION_UPSELL_FACEBOOK_ANALYTICS:"",PARTNER_INTEGRATION_UPSELL_TEST_EVENTS_TOOL:"",PARTNER_INTEGRATION_UPSELL_VISIT_APP_ADS_HELPER:"",PARTNER_INTEGRATION_ZAPIER_INTRODUCTION_COMPLETE:"",PARTNER_INTEGRATION_ZAPIER_INTRODUCTION_START:""});e.exports=a}),null);
__d("SignalsTrackingUtil",["SignalsStatusEnum"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={getSourceByID:function(a,b){return b.find(function(b){return b.id===a})},getUnSelectedDataSource:function(a,b,c){return b.filterNot(function(b){return a.includes(b.id)||b.autoTracked===!0||c.getValues().indexOf(b.id)>=0})},sortSignalsList:function(a){var b=this;return a.sort(function(a,c){return a.status===c.status?a.name===c.name?0:a.name<c.name?-1:1:b._getStatusWeight(a.status)-b._getStatusWeight(c.status)})},_getStatusWeight:function(a){if(a===b("SignalsStatusEnum").ACTIVE)return 0;else if(a===b("SignalsStatusEnum").INACTIVE)return 1;else if(a===b("SignalsStatusEnum").NEVER_ACTIVE)return 2;else return 3}};e.exports=a}),null);
__d("SignalsTrackingSelector.react",["cx","React","SignalsTrackingCard.react","SignalsTrackingUtil","SUISelector.react","SUISelectorOption.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PureComponent;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.autoTrackingHelpLink,d=a.disabled,e=a.placeholder,f=a.selectedID,g=a.signalsObjects,h=a.sourceFbt,i=a.idLabel,j=a.inheritTheme,k=a.width;a=a.onSelectSource;var l=[];g=b("SignalsTrackingUtil").sortSignalsList(g);g.forEach(function(a){l.push(b("React").createElement(b("SUISelectorOption.react"),{key:a.id,value:a.id},b("React").createElement(b("SignalsTrackingCard.react"),{autoTrackingHelpLink:c,idLabel:i,name:a.name,sourceFbt:h,status:a.status,value:a.id})))});return b("React").createElement("div",null,b("React").createElement(b("SUISelector.react"),{className_DEPRECATED:"_63nz"+(j?"":" _hce"),disabled:d,placeholder:e,value:f,width:k==null||k===0?"100%":k,onChange:a},l))};return c}(a);e.exports=c}),null);
__d("SignalsTrackingRowItems.react",["cx","fbt","AdsEmptyValue","AdsMixedValue","React","SignalsTrackingCard.react","SignalsTrackingSelector.react","SignalsTrackingUtil","SUICloseButton.react","SUILink.react","immutable"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PureComponent;b("immutable").List;var i=h._("Add another source..."),j=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){__p&&__p();var a,b;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(a=b=c.call.apply(c,[this].concat(e))||this,b.$1=function(){var a=b.props,c=a.children;a=a.onRemove;if(c!=null&&a!=null){var d=null;c.props.value!=null?d=c.props.value:c.props.selectedID!=null&&(d=c.props.selectedID);typeof d==="string"&&a(d)}},a)||babelHelpers.assertThisInitialized(b)}var d=a.prototype;d.render=function(){var a=this.props,c=a.children;a=a.onRemove;return b("React").createElement("div",{className:"_y62"},b("React").createElement("div",{className:"_y64"},c),b("React").createElement("div",{className:"_ed0"},a!=null?b("React").createElement(b("SUICloseButton.react"),{shade:"dark",size:"small",onClick:this.$1}):null))};return a}(a);c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(){var a=d.props,c=a.onAddSource,e=a.promotedSourceIDs,f=a.selectedSources;a=a.sources;f=b("SignalsTrackingUtil").getUnSelectedDataSource(f,a,e);f.size>0?c&&c(f.first().id):null},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$2=function(a){return this.props.promotedSourceIDs.getValues().indexOf(a)>=0};d.$3=function(a){return this.$2(a)?this.props.promotedSourceIDs instanceof b("AdsMixedValue")?"some":"all":"none"};d.render=function(){__p&&__p();var a=this,c=this.props,d=c.addButtonLabel,e=c.autoTrackingHelpLink,f=c.isDisableEditing,g=c.isMixedValue,h=c.isSingleSourceTracking,k=c.promotedSourceIDs,l=c.readOnly,m=c.selectedSources,n=c.sourceFbt,o=c.sources,p=c.trackingSourceIDLabel,q=c.onRemoveSource,r=c.onSelectSource,s=!(k instanceof b("AdsEmptyValue"));c=o.filter(function(b){return b.autoTracked===!0||a.$2(b.id)}).sort(function(b,c){b=a.$2(b.id)?1:0;c=a.$2(c.id)?1:0;return b-c}).reverse();if(c.size===0&&o.size===0)return null;var t=c.map(function(c){return b("React").createElement(j,{key:c.id},b("React").createElement(b("SignalsTrackingCard.react"),{autoTracked:c.autoTracked,autoTrackingHelpLink:e,idLabel:p,name:c.name,optimized:a.$3(c.id),sourceFbt:n,status:c.status,value:c.id,withBorder:!0}))});c=null;var u=!1;if(!g){var v=b("SignalsTrackingUtil").getUnSelectedDataSource(m,o,k),w=[],x=m.map(function(a){return b("SignalsTrackingUtil").getSourceByID(a,o)}).filter(function(b){return b&&!b.autoTrack&&!a.$2(b.id)});x.forEach(function(c,d){if(c==null)return;d<x.size-1?w.push(b("React").createElement(j,{key:c.id,onRemove:l!==!0&&s?q:null},b("React").createElement(b("SignalsTrackingCard.react"),{autoTrackingHelpLink:e,idLabel:p,name:c.name,optimized:a.$3(c.id),sourceFbt:n,status:c.status,value:c.id,withBorder:!0}))):s||f===!0?w.push(b("React").createElement(j,{key:c.id,onRemove:null},b("React").createElement(b("SignalsTrackingCard.react"),{autoTracked:c.autoTracked,autoTrackingHelpLink:e,idLabel:p,name:c.name,optimized:a.$3(c.id),sourceFbt:n,status:c.status,value:c.id,withBorder:!0}))):v.size>0?w.push(b("React").createElement(j,{key:c.id,onRemove:l!==!0&&(t.size>0||m.size>1)?q:null},b("React").createElement(b("SignalsTrackingSelector.react"),{autoTrackingHelpLink:e,disabled:l,idLabel:p,selectedID:c.id,signalsObjects:v.push(c),sourceFbt:n,onSelectSource:r}))):w.push(b("React").createElement(j,{key:c.id,onRemove:l!==!0&&o.size>1?q:null},b("React").createElement(b("SignalsTrackingCard.react"),{autoTracked:c.autoTracked,autoTrackingHelpLink:e,idLabel:p,name:c.name,optimized:a.$3(c.id),sourceFbt:n,status:c.status,value:c.id,withBorder:!0})))});c=w;u=l!==!0&&!g&&v.size>0&&(m.size===0||!h)&&k instanceof b("AdsEmptyValue")}return b("React").createElement("div",null,t,c,u?b("React").createElement("div",{className:"_3-8x"},b("React").createElement(b("SUILink.react"),{onClick:this.$1},d!=null&&d!==""?d:i)):null)};return c}(a);e.exports=c}),null);
__d("AdsLWILegacyPixelSectionContainer.react",["AdsFluxContainer","AdsSelectorUtils","BoostedComponentClientAppStore","BoostedComponentPixelSectionV2Container.react","React","adsLWICurrentInstanceDataSelector","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(){return[].concat(b("AdsSelectorUtils").getStores([b("adsLWICurrentInstanceDataSelector")]),[b("BoostedComponentClientAppStore")])};c.calculateState=function(){var a=b("nullthrows")(b("adsLWICurrentInstanceDataSelector")()),c=a.appID,d=a.boostID;a=a.targetID;var e=!!b("BoostedComponentClientAppStore").getState().id;return{appID:c,boostID:d,offFBPromotion:e,targetID:a}};var d=c.prototype;d.render=function(){return b("React").createElement(b("BoostedComponentPixelSectionV2Container.react"),{appID:this.state.appID,boostID:this.state.boostID,enablePixelByDefault:this.state.offFBPromotion,offFacebookPromotion:this.state.offFBPromotion,targetID:this.state.targetID})};return c}(b("React").PureComponent);e.exports=b("AdsFluxContainer").create(a,{name:e.id})}),null);