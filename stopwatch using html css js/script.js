// global variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;

// Event listeners

// update the timer
function timer(){
    seconds++;

    // Format out timer
    let secs = seconds % 60;
    
}

