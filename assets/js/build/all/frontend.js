!function(){"use strict";function u(e,n){for(var t=0;t<e.length;t++)n(e[t])}function t(e){var n=e.split("#");return 1<n.length?n[0]:e}function r(e,n,t){for(var o=e instanceof NodeList?e:[e],r=0;r<o.length;r++)o[r]&&o[r].addEventListener(n,t)}function o(e,n){l(e,n,"toggle")}function e(){var e;i=window.location.href,m(),function(){var e=document.querySelectorAll(".nv-nav-wrap a");if(0===e.length)return;u(e,function(e){e.addEventListener("click",function(e){var n=e.target.getAttribute("href");if(null===n)return!1;t(n)===t(i)&&window.HFG.toggleMenuSidebar(!1)})})}(),y(),g(),w(),!0===/(Trident|MSIE|Edge)/.test(window.navigator.userAgent)&&(e=document.querySelectorAll('.header--row[data-show-on="desktop"] .sub-menu'),u(e,function(e){var n=e.parentNode;n.addEventListener("mouseenter",function(){c(e,"dropdown-open")}),n.addEventListener("mouseleave",function(){a(e,"dropdown-open")})})),window.HFG.initSearch=function(){g(),y()}}var i,c=function(e,n){l(e,n,"add")},a=function(e,n){l(e,n,"remove")},l=function(e,n,t){for(var o=n.split(" "),r=e instanceof NodeList?e:[e],i=0;i<r.length;i++)r[i]&&r[i].classList[t].apply(r[i].classList,o)},d=null,s=2,n=function(){var e=NeveProperties,n=e.masonry,t=e.masonryColumns,o=e.blogLayout;return!("enabled"!==n||t<2)&&(null!==(d=document.querySelector(".nv-index-posts .posts-wrapper"))&&void imagesLoaded(d,function(){window.nvMasonry=new Masonry(d,{itemSelector:"article.layout-".concat(o),columnWidth:"article.layout-".concat(o),percentPosition:!0})}))},v=function(){return"enabled"===NeveProperties.infiniteScroll&&(null!==document.querySelector(".nv-index-posts .posts-wrapper")&&void function(e,n,t){var o=2<arguments.length&&void 0!==t?t:.5;new IntersectionObserver(function(e){e[0].intersectionRatio<=o||n()}).observe(e)}(document.querySelector(".infinite-scroll-trigger"),function(){if(parent.wp.customize)return parent.wp.customize.requestChangesetUpdate().then(function(){f()}),!1;f()}))},f=function(){var e=document.querySelector(".infinite-scroll-trigger");if(null===e)return!1;if(document.querySelector(".nv-loader").style.display="block",s>NeveProperties.infiniteScrollMaxPages)return e.parentNode.removeChild(e),!(document.querySelector(".nv-loader").style.display="none");var n,t,o,r,i=document.querySelector(".nv-index-posts .posts-wrapper"),c=p(NeveProperties.infiniteScrollEndpoint+s);s++,n=c,t=function(e){if("enabled"!==NeveProperties.masonry)i.innerHTML+=JSON.parse(e);else{var n=document.createElement("div");n.innerHTML=JSON.parse(e),u(n.children,function(e){d.append(e),window.nvMasonry.appended(e)})}},o=NeveProperties.infiniteScrollQuery,(r=new XMLHttpRequest).onload=function(){4===r.readyState&&200===r.status&&t(r.response)},r.onerror=function(e){console.error(e)},r.open("POST",n,!0),r.setRequestHeader("Content-Type","application/json; charset=UTF-8"),r.send(o)},p=function(e){return void 0===wp.customize?e:(e+="?customize_changeset_uuid="+wp.customize.settings.changeset.uuid+"&customize_autosaved=on","undefined"==typeof _wpCustomizeSettings?e:e+="&customize_preview_nonce="+_wpCustomizeSettings.nonce.preview)},m=function(){var o,r,i=NeveProperties.isRTL,e=document.querySelectorAll(".sub-menu");if(0===e.length)return!1;var c=window.innerWidth;u(e,function(e){var n=e.getBoundingClientRect(),t=n.left;t<0&&(o=i?"auto":0,r=i?"-100%":"auto",e.style.right=r,e.style.left=o),t+n.width>=c&&(r=i?0:"100%",o="auto",e.style.right=r,e.style.left=o)})};function y(){var e=document.querySelectorAll(".caret-wrap");u(e,function(t){t.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();var n=t.parentNode.parentNode.querySelector(".sub-menu");o(t,"dropdown-open"),o(n,"dropdown-open"),h(document.querySelectorAll(".dropdown-open"),"dropdown-open")})})}function g(){var e=document.querySelectorAll(".nv-nav-search"),t=document.querySelectorAll(".menu-item-nav-search"),n=document.querySelectorAll(".close-responsive-search");u(t,function(n){n.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),o(n,"active"),n.querySelector(".search-field").focus(),window.innerWidth<=960||h(n,"active")})}),u(e,function(e){e.addEventListener("click",function(e){e.stopPropagation()})}),u(n,function(e){e.addEventListener("click",function(e){e.preventDefault(),u(t,function(e){a(e,"active")});var n=document.querySelector(".nav-clickaway-overlay");null!==n&&n.parentNode.removeChild(n)})})}function w(){var e=document.querySelectorAll(".header--row .nv-nav-cart");0!==e.length&&u(e,function(e){e.getBoundingClientRect().left<0&&(e.style.left=0)})}function h(e,n){var t=document.querySelector(".nav-clickaway-overlay");null!==t&&t.parentNode.removeChild(t),t=document.createElement("div"),c(t,"nav-clickaway-overlay");var o=document.querySelector("header.header");o.parentNode.insertBefore(t,o),t.addEventListener("click",function(){a(e,n),t.parentNode.removeChild(t)})}window.addEventListener("resize",w);function S(){this.options={menuToggleDuration:300},this.init()}var b;function q(){window.HFG=new S,function(){if(null===document.querySelector(".blog.nv-index-posts"))return;n(),v()}(),e()}function L(){m()}S.prototype.init=function(){var e=this;if(!1===(0<arguments.length&&void 0!==arguments[0]&&arguments[0])){var n=document.querySelectorAll(".close-sidebar-panel .navbar-toggle");r(n,"click",function(){e.toggleMenuSidebar(!1)})}var t=document.querySelectorAll(".menu-mobile-toggle");r(t,"click",function(){e.toggleMenuSidebar(!0)});var o=document.querySelector(".header-menu-sidebar-overlay");r(o,"click",function(){this.toggleMenuSidebar(!1)}.bind(this))},S.prototype.toggleMenuSidebar=function(e){var n=document.querySelectorAll(".menu-mobile-toggle");if(a(document.body,"hiding-header-menu-sidebar"),!NeveProperties.isCustomize&&document.body.classList.contains("is-menu-sidebar")||!1===e){var t=document.querySelector(".nav-clickaway-overlay");null!==t&&t.parentNode.removeChild(t),c(document.body,"hiding-header-menu-sidebar"),a(document.body,"is-menu-sidebar"),a(n,"is-active"),setTimeout(function(){a(document.body,"hiding-header-menu-sidebar")}.bind(this),1e3)}else c(document.body,"is-menu-sidebar"),c(n,"is-active")},window.addEventListener("load",function(){q()}),window.addEventListener("resize",function(){clearTimeout(b),b=setTimeout(L,500)})}();
