!function(o){"function"==typeof define&&define.amd?define(["jquery"],o):o("object"==typeof exports?require("jquery"):jQuery)}(function(o){function e(o){return i.raw?o:encodeURIComponent(o)}function t(o){return i.raw?o:decodeURIComponent(o)}function n(o){return e(i.json?JSON.stringify(o):String(o))}function r(o){0===o.indexOf('"')&&(o=o.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return o=decodeURIComponent(o.replace(c," ")),i.json?JSON.parse(o):o}catch(o){}}function a(e,t){var n=i.raw?e:r(e);return o.isFunction(t)?t(n):n}var c=/\+/g,i=o.cookie=function(r,c,s){if(void 0!==c&&!o.isFunction(c)){if(s=o.extend({},i.defaults,s),"number"==typeof s.expires){var u=s.expires,d=s.expires=new Date;d.setTime(+d+864e5*u)}return document.cookie=[e(r),"=",n(c),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var p=r?void 0:{},f=document.cookie?document.cookie.split("; "):[],g=0,m=f.length;g<m;g++){var l=f[g].split("="),x=t(l.shift()),w=l.join("=");if(r&&r===x){p=a(w,c);break}r||void 0===(w=a(w))||(p[x]=w)}return p};i.defaults={},o.removeCookie=function(e,t){return void 0!==o.cookie(e)&&(o.cookie(e,"",o.extend({},t,{expires:-1})),!o.cookie(e))}}),function(o){function e(){function o(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return o()+o()+"-"+o()+"-"+o()+"-"+o()+"-"+o()+o()+o()}o.octo={},o.octo.apikey="OVERRIDE THIS WITH YOUR API KEY",o.octo.defaults={base_url:"https://api.octo.ai",cookie_name:"_oid"},o.octo.pageView=function(e){void 0==e&&(e={});var t=o.octo.unique(o.merge(o.octo.pageTags(),e.tags||[])),n=o.octo.unique(o.merge(o.octo.pageCategories(),e.categories||[])),r={userId:e.userId||-1,browserDetails:o.octo.browserDetails(e.cookie_name),routeUrl:window.location.pathname,tags:t,categories:n},a=o.octo.defaults.base_url.concat("/events/page.view/");o.octo.ajax(a,r)},o.octo.getCookieId=function(t){var n=t||o.octo.defaults.cookie_name;if(o.cookie(n))return o.cookie(n);var r=e();return o.cookie(n,r),r},o.octo.OGTags=function(){var e=[];return o.each(o("meta[property='article:tag']"),function(o,t){e.push(t.content)}),e},o.octo.OGSection=function(){return o("meta[property='article:section']").attr("content")},o.octo.metaKeywords=function(){var e=o("meta[name=keywords]").attr("content");return void 0==e?[]:e.split(",")},o.octo.pageTags=function(){return o.merge(o.octo.OGTags(),o.octo.metaKeywords())},o.octo.pageCategories=function(){var e=[];return o.octo.OGSection()&&e.push(o.octo.OGSection()),e},o.octo.unique=function(e){var t=[];return o.each(e,function(e,n){o.inArray(n,t)==-1&&t.push(n)}),t},o.octo.ajax=function(e,t,n){o.octo.ajax.settings=o.extend({},o.octo.ajax.defaults,n);var r={error:o.octo.ajax.settings.onError,success:o.octo.ajax.settings.onSuccess,data:JSON.stringify(t),contentType:o.octo.ajax.settings.contentType,accepts:o.octo.ajax.settings.accepts,dataType:o.octo.ajax.settings.dataType,method:o.octo.ajax.settings.method,headers:{apikey:o.octo.apikey}};o.ajax(e,r)},o.octo.ajax.defaults={contentType:"application/json",accepts:"text/html",dataType:"json",method:"POST",onError:o.octo.onAjaxError,onSuccess:o.octo.onAjaxSuccess},o.octo.onAjaxSuccess=function(o){},o.octo.onAjaxError=function(o){},o.octo.browser_name=function(){var o=!!window.opr&&!!opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,e="undefined"!=typeof InstallTrigger,t=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0,n=!!document.documentMode,r=!n&&!!window.StyleMedia,a=!!window.chrome&&!!window.chrome.webstore;return o?"Opera":e?"Firefox":t?"Safari":n?"Internet Explorer":r?"Edge":a?"Chrome":"unknown"},o.octo.browserDetails=function(e){return{name:o.octo.browser_name(),platform:navigator.platform,manufacturer:navigator.vendor,cookieid:o.octo.getCookieId(e)}},o.octo.init=function(e){o(document).ready(function(){o.octo.pageView(e)})}}(jQuery);