let h = document.getElementById('h');
let m = document.getElementById('m');
let s = document.getElementById('s');

function displaytime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hrotate = 30 * hh + mm / 2;
    let mrotate = 6 * mm;          
    let srotate = 6 * ss;          

    h.style.transform = `rotate(${hrotate}deg)`;
    m.style.transform = `rotate(${mrotate}deg)`;
    s.style.transform = `rotate(${srotate}deg)`;
}

setInterval(displaytime, 1000); 
