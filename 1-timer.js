import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as p,i as S}from"./assets/vendor-A92OCY9B.js";const e={startButton:document.querySelector("button[data-start]"),days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]"),datetimePicker:document.querySelector("#datetime-picker")};let r=null,u=null;const n=1e3,s=n*60,d=s*60,c=d*24,f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const a=t[0];b(a)}};p("#datetime-picker",f);const i=()=>e.startButton.setAttribute("disabled",!0),h=()=>e.startButton.removeAttribute("disabled"),b=t=>{t<=Date.now()?(S.error({message:"Please choose a date in the future",position:"topRight"}),i()):(h(),r=t)},y=t=>({days:Math.floor(t/c),hours:Math.floor(t%c/d),minutes:Math.floor(t%d/s),seconds:Math.floor(t%s/n)}),o=t=>t.toString().padStart(2,"0"),D=({days:t,hours:a,minutes:l,seconds:m})=>{e.days.textContent=o(t),e.hours.textContent=o(a),e.minutes.textContent=o(l),e.seconds.textContent=o(m)},I=t=>{u=setInterval(()=>{if(t-=n,t<=0){clearInterval(u),e.datetimePicker.removeAttribute("disabled");return}D(y(t))},n)};e.startButton.addEventListener("click",()=>{r&&(i(),e.datetimePicker.setAttribute("disabled",!0),I(r-Date.now()))});
//# sourceMappingURL=1-timer.js.map