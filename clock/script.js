let h = document.getElementById('h')
let min = document.getElementById('m')
let sec = document.getElementById('s')

function displaytime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getHours();

    let hrotate = 30*hh + mm/2;
    let mrotate = 6*mm;
    let srotate = 6*ss;

    h.style.transform=`rotate(${hrotate}deg)`;
    h.style.transform=`rotate(${mrotate}deg)`;
    h.style.transform=`rotate(${srotate}deg)`;

}
setInterval(displaytime,1000)
