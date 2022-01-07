let h1 = document.querySelector(".hl");
let inputs = document.querySelectorAll('.controls input');
let r = document.querySelector(':root');

inputs.forEach(function (input) {
    input.addEventListener('change', handleUpdate);
    input.addEventListener('mousemove', handleUpdate);
}); 



function handleUpdate(){
    let suffix = this.dataset.sizing || '';
    r.style.setProperty(`--${this.name}`, this.value + suffix);
}