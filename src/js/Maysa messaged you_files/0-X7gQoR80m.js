if (self.CavalryLogger) { CavalryLogger.start_js(["KYnu5"]); }

__d("legacy:PageFanning",["PageFanning"],(function(a,b,c,d,e,f){a.PageFanning=b("PageFanning")}),3);
__d("PagesHovercardHeaderPinButton",["AsyncRequest","DOM"],(function(a,b,c,d,e,f){"use strict";e.exports={init:function(a,c,d,e){a.subscribe("change",function(f,g){f=g.selected?"/ajax/bookmark/add/":"/ajax/bookmark/delete/";var h=a.getRoot().firstChild;g.selected?b("DOM").replace(h,e):b("DOM").replace(h,d);new(b("AsyncRequest"))().setMethod("POST").setURI(f).setData({id:c,reload_pagelet_navigation:!0,ref:"admin_hovercard"}).send()})}}}),null);