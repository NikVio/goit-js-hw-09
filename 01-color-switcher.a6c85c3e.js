const t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};console.log(t);let e=null;INTERVAL_DELAY=1e3,t.startBtn.addEventListener("click",(()=>{e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.startBtn.disabled=e})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),t.startBtn.disabled=!e}));
//# sourceMappingURL=01-color-switcher.a6c85c3e.js.map
