!function(){var t,e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");e.addEventListener("click",(function(){e.disabled=!0,o.disabled=!1,t=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3)})),o.addEventListener("click",(function(){e.disabled=!1,clearInterval(t),document.body.style.backgroundColor="",o.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.b55272ca.js.map
