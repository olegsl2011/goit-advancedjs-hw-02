import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as s}from"./assets/vendor-A92OCY9B.js";const t={form:document.querySelector(".form")},m=(o,e)=>new Promise((r,i)=>{setTimeout(()=>{e==="rejected"?i():r()},o)});t.form.addEventListener("submit",o=>{o.preventDefault();const e=Number(t.form.delay.value),r=t.form.state.value;m(e,r).then(()=>{s.success({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(()=>{s.error({message:`❌ Rejected promise in ${e}ms`,position:"topRight"})}),t.form.reset()});
//# sourceMappingURL=2-snackbar.js.map