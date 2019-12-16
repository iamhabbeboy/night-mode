window.onload = function() {
    const currentTime = new Date();
    let status = false;
    let hr = parseInt(currentTime.getHours());
    if(hr < 19) {
        document.querySelector('*').style.backgroundColor = 'orange';
    }
}