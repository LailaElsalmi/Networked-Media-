// Runs when window is fully loadedb 
window.onload = function() {
// canvas and its context
const sun = document.getElementById('sun');

// array of 24 gradients for each hour hour of the day 
const sunGradients = [
 {time:0, gradient: 'radial-gradient(circle, rgba(25,25,112,1) 0%, rgba(25,25,112,0) 100%)'}, //12 AM - DARK MIDNIGHT BLUE // 0% DEFINES FIRST COLOR OF THE GRADIENT // 100% DEFINES SECOND COLOR OF GRADIENT 
 {time:1, gradient: 'radial-gradient(circle, rgba(0,0,128,1) 0%, rgba(0,0,128,0) 100%) '},// 1 - DARK BLUE
 {time:2, gradient: 'radial-gradient(circle, rgba(0,0,139,1) 0%, rgba(0,0,139,0) 100%) '},//2 - DARKER BLUE
 {time:3, gradient: 'radial-gradient(circle, rgba(25,25,112,1) 0%, rgba(25,25,112,0) 100%) '},//3 - DARK MIDNIGHT BLUE
 {time:4, gradient: 'radial-gradient(circle, rgba(0,0,51,1) 0%, rgba(0,0,51,0) 100%)'},//4 - VERY DARK BLUE
 {time:5, gradient: 'radial-gradient(circle, rgba(14,47,68,1) 0%, rgba(14,47,68,0) 100%)'},//5 - DARK TEAL
 {time:6, gradient: 'radial-gradient(circle, rgba(135,206,235,1) 0%, rgba(135,206,235,0) 100%)'},//6 - LIGHT BLUE
 {time:7, gradient: 'radial-gradient(circle, rgba(255,215,0,1) 0%, rgba(255,215,0,0) 100%)'},//7 - BRIGHT YELLOW
 {time:8, gradient: 'radial-gradient(circle, rgba(255,248,220,1)0%, rgba(255,248,220,0) 100%)'},//8 - LIGHT CREAM
 {time:9, gradient: 'radial-gradient(circle, rgba(255,215,0,1)0%,rgba(255,215,0,0)100%)'},//9 - BRIGHT YELLOW
 {time:10, gradient: 'radial-gradient(circle, rgba(255,234,0,1)0%,rgba(255,234,0,0)100%)'},//10 - BRIGHT YELLOW
 {time:11, gradient: 'radial-gradient(circle, rgba(255,255,51,1)0%,rgba(255,255,51,1)100%)'},//11 - LOIGHT YELOW
 {time:12, gradient: 'radial-gradient(circle, rgba(255,255,102,1)0%,rgba(255,255,102,0)100%)'},//12 - VERY LIGHT YELLOW
 {time:13, gradient: 'radial-gradient(circle, rgba(255,255,153,1)0%,rgba(255,255,153,0)100%)'},//1 PM - LIGHT SUNNY YELLOW
 {time:14, gradient: 'radial-gradient(circle, rgba(255,250,205, 1) %,rgba(255,250,205,0)100%)'},//2 PM - PALE YELLPOW
 {time:15, gradient: 'radial-gradient(circle, rgba(255,239,213,1)0%,rgba(255,239,213,0)100%)'},//3 PM - PEACG
 {time:16, gradient: 'radial-gradient(circle, rgba(255,215,0,1)0%,rgba(255,215,0,0)100%)'},//4 PM - BRIGHT YELLOW
 {time:17, gradient: 'radial-gradient(circle, rgba(255,165,0,1)0%,rgba(255,165,0,0)100%)'},//5 PM - ORANGE
 {time:18, gradient: 'radial-gradient(circle, rgba(255,69,0,1)0%,rgba(255,69,0,0)100%)'},//6 PM - BRIGHT RED ORANGE
 {time:19, gradient: 'radial-gradient(circle, rgba(255,99,71,1)0%,rgba(255,99,71,0)100%)'},// 7PM - SALMON
 {time:20, gradient: 'radial-gradient(circle, rgba(138,43,226,1)0%,rgba(138,43,226,0)100%)'},// 8 PM - PURPLE
 {time:21, gradient: 'radial-gradient(circle, rgba(75,0,130,1)0%,rgba(75,0,130,0)100%)'},// 9 PM - INDIGIO
 {time:22, gradient: 'radial-gradient(circle, rgba(0,0,128,1)0%,rgba(0,0,128,0)100%)'},// 10 PM - DARK BLUE
 {time:23, gradient: 'radial-gradient(circle, rgba(25,25,112,1)0%,rgba(25,25,112,0)100%)'}// 11 PM - DARK MIDNIGHT BLUE 

];

// function to get gradient based on the current hour 
function getCurrentGradient() {
    // get curret date and time
    const now = new Date();
    // get current hour 
    const currentHour = now.getHours();


// loop through sungradienys array , excluding last item
    for(let i = 0; i < sunGradients.length - 1; i++) {
        // check if currenthour is within the range of the current gradient and the next gradient
        if (currentHour >= sunGradients[i].time && currentHour <sunGradients[i +1]. time){
            // if it is, return the current gradient 
            return sunGradients[i].gradient;
        }
    }

    return sunGradients[0].gradient;


}

function updateSunGradient() {
    const currentGradient = getCurrentGradient();
    //const sun = document.getElementById('sun');
    sun.style.background = currentGradient;

}

updateSunGradient();

setInterval(updateSunGradient, 60000);

};