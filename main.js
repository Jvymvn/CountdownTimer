function startCountdown(){
    // Set the date we're counting down to
    const selectedDate = document.getElementById("countdownDate").value;

 
    const countdownDate = new Date(selectedDate).getTime();

    //Update the countdown every second
    const timer = setInterval(function(){

        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const remaining = countdownDate - now

        //Calculate days, hours, minutes, and seconds
        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        // Display countdown
        document.getElementById("countdown").innerHTML = days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds "

        if (remaining < 0){
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "COUNTDOWN EXPIRED"
        }

    }, 1000);
};