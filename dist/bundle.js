!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);var o=()=>{mapboxgl.accessToken="pk.eyJ1IjoibWF4ZGFuaWxvdiIsImEiOiJjazNkYTY2ZnEwdDZxM2NwOGJwN3hiMWZ6In0.EfNj3CDIoHMbo-pt3C_4oA";var e=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",zoom:12,center:[27.5557,53.9083]});e.on("load",(function(){e.loadImage("https://i.imgur.com/MK4NUzI.png",(function(t,r){if(t)throw t;e.addImage("custom-marker",r),e.addLayer({id:"markers",type:"symbol",source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Point",coordinates:[27.5561,53.9081]}}]}},layout:{"icon-image":"custom-marker"}})}))}))};var n=e=>{const t=document.querySelector(".pop-up");t.style.display="flex";const r=document.createElement("IMG");r.setAttribute("src",e),t.appendChild(r),document.querySelector(".pop-up__close-btn").addEventListener("click",()=>{t.style.display="none",r.remove()})};r(0);o();const a=document.querySelectorAll(".works__grid_image-wrapper"),c=document.querySelectorAll(".team__grid_image-wrapper");a.forEach(e=>{const t=e.lastElementChild.src;e.addEventListener("click",()=>{n(t)})}),c.forEach(e=>{e.addEventListener("mouseenter",()=>{console.log("enter")})}),console.log("there will be script for pop-up")}]);