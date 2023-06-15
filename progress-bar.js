let progressBar=document.getElementById('progress-bar');
let progressLabel=document.getElementById('progress-label');

function handleProgressBar(curr_value){
    progressBar.value=+(progressBar.value)+curr_value;
    progressLabel.textContent=`${progressBar.value}%`;
    const progressWidth = (progressBar.value / progressBar.max) * 100;
    progressLabel.style.transform = `translateX(${progressWidth}%)`;
}
progressBar.addEventListener('click', handleProgressBarClick);

//progress bar click update
function handleProgressBarClick(event) {
const clickX = event.offsetX;
const barWidth = progressBar.clientWidth;
const clickPercentage = (clickX / barWidth) * 100;

//   const newValue = Math.round((clickPercentage / 100) * progressBar.max);
if(clickX){
if(+progressBar.value==0){
    handleProgressBar(20)
}
else if(+progressBar.value<clickPercentage){
    handleProgressBar(20)
}else if(+progressBar.value>clickPercentage){
    handleProgressBar(-20)
}
}
}