!function(){document.querySelector('input[name="delay"]');var e=document.querySelector('input[name="step"]'),t=document.querySelector('input[name="amount"]');document.querySelector("button");function n(e,t){return new Promise((function(n,o){setTimeout((function(){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(o){o.preventDefault();var u=t.value;e.value,setInterval((function(){for(var e=1;e>=u;e++)n(e)}))}))}();
//# sourceMappingURL=03-promises.531fb827.js.map