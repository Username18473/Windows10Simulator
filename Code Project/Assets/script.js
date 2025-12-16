const Htmlcode = document.getElementById('htmlCode');
const CSScode = document.getElementById('CSSCode');
const JScode = document.getElementById('JSCode');
const output = document.getElementById('output');
console.log(Htmlcode, CSScode, JScode, output);
Htmlcode.onkeyup=()=>run();
CSScode.onkeyup=()=>run();
JScode.onkeyup=()=>run();

function run() {
    localStorage.setItem('htmlCode', Htmlcode.value);
    localStorage.setItem('CSSCode', CSScode.value);
    localStorage.setItem('JSCode', JScode.value);
    output.contentDocument.body.innerHTML=Htmlcode.value + "<style>" + CSScode.value + "</style>" + "<script>" + JScode.value + "<\/script>";
}
Htmlcode.value = localStorage.getItem('htmlCode') || '';
CSScode.value = localStorage.getItem('CSSCode') || '';
JScode.value = localStorage.getItem('JSCode') || '';
run();