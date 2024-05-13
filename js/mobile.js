if (window.innerWidth < 1000){
    // console.log("hello")
    // Constants for acceleration thresholds
    const SHAKE_THRESHOLD = 30; // You may need to adjust this threshold based on testing
    const TIMEOUT = 1000; // Timeout for shaking detection

    let lastUpdate = 0;
    let x, y, z, lastX = 0, lastY = 0, lastZ = 0;

   function requestMotionPermission(){
        DeviceMotionEvent.requestPermission()
        .then(response => {
            if (response == 'granted') {
                let requestButton = document.getElementById("request-button");
                requestButton.style.display = "none";

                // Listen for device motion events
                window.addEventListener('devicemotion', function(event) {
                    console.log("listerner attached")
                    let currentTime = new Date().getTime();
                    let timeDifference = currentTime - lastUpdate;

                    if (timeDifference > TIMEOUT) {
                        // Get acceleration values
                        let acceleration = event.accelerationIncludingGravity;
                        x = acceleration.x;
                        y = acceleration.y;
                        z = acceleration.z;

                        // Log calculations for debugging
                        console.log("X:", x, "Y:", y, "Z:", z);

                        // Calculate delta values
                        let deltaX = Math.abs(x - lastX);
                        let deltaY = Math.abs(y - lastY);
                        let deltaZ = Math.abs(z - lastZ);

                        // Check for shaking motion
                        if (deltaX > SHAKE_THRESHOLD || deltaY > SHAKE_THRESHOLD || deltaZ > SHAKE_THRESHOLD) {
                            console.log("threshold met!")
                            // Shake detected, play video
                            let thumbnailVideo = document.getElementById("thumbnail-video");
                            let iframeVideo = document.getElementById("iframe-video");
                            let rotatingTextMobile = document.getElementById("rotating-text-mobile");
                            

                            thumbnailVideo.style.display = "none";
                            rotatingTextMobile.style.display = "none";                            
                            iframeVideo.style.display = "block";                            
                            iframeVideo.src += '&autoplay=1';                
                        }

                        // Update last values
                        lastX = x;
                        lastY = y;
                        lastZ = z;
                        lastUpdate = currentTime;
                    }
                });
            }
        })
        .catch(console.error)
    }


}