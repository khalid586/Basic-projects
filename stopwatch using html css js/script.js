// global variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;

// Event listeners
start_btn.addEventListener('click',start);

// update the timer
function timer(){
    seconds++;

    // Format out timer
     hrs = Math.floor(seconds / 3600);
     mins = Math.floor((seconds - (hrs * 3600))/60);
     secs = seconds % 60;
    
    if(secs < 10) secs = '0' + secs;
    if(mins < 10) mins = '0' + mins;
    if(hrs  < 10) hrs = '0' + hrs;
    time_el.innerText = `${hrs}:${mins}:${secs}`;

}
timer();

function start(){
    if(interval){
        return
    }
    interval = setInterval(timer,1000);
}   


