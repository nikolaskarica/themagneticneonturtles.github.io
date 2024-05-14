// Create attached element by adding event listener
if (window.innerWidth > 1000){

document.addEventListener("DOMContentLoaded", function() {
    // Rotating text params
    var rotatingTextStr = "SHAKE ME OFF!";
    let rotatingText = document.getElementById("rotating-text-desktop");

    // Create rotating text
    function rotateText(){        
        for (let i = 0; i < rotatingTextStr.length; i++) {
            let span = document.createElement('span');
            span.innerHTML = rotatingTextStr[i] 
            rotatingText.appendChild(span);
            span.style.transform = `rotate(${12*i}deg)`;
        }
    }

    // Attached video params config
    let attachedElement = document.getElementById("attached-element");
    let thumbnailVideo = document.getElementById("thumbnail-video");
    let iframeVideo = document.getElementById("iframe-video");

    // Shaking params config
    let lastMouseX = 0;
    let lastMouseY = 0;
    let lastMoveTime = Date.now();
    let timer;
    let clickCount = 0; 

    // Measuring of shaking velocity and deataching attached element
    function followMouseMovement(event) {
        let now = Date.now();
        let deltaTime = now - lastMoveTime + 7; 
        let deltaX = event.pageX - lastMouseX;
        let deltaY = event.pageY - lastMouseY;
        let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY) 
        let speed = distance / deltaTime  // Velocity

        // console.log("Time elapsed since last movement (deltaTime):", deltaTime, "milliseconds");
        // console.log("Horizontal distance moved by the mouse (deltaX):", deltaX, "pixels");
        // console.log("Vertical distance moved by the mouse (deltaY):", deltaY, "pixels");
        // console.log("Distance moved by the mouse (distance):", distance, "pixels");
        // console.log("Velocity of the mouse movement (speed):", speed, "pixels/millisecond");
        // console.log("----")
        // console.log("----")

        // Update element position to follow mouse cursor
        attachedElement.style.left = (event.pageX) + "px"; // Adding 10px offset for better visibility
        attachedElement.style.top = (event.pageY - 160) + "px";

        // If the speed is too fast (adjust as needed), detach the element
        if (speed > 7.5) { // Adjust the threshold as needed
            // clearTimeout(timer);
            timer = setTimeout(detachElement(), 500); // Detach element after 1 second of fast movement
        }

        lastMoveTime = now;
        lastMouseX = event.pageX;
        lastMouseY = event.pageY;
    }

    // Deataching element config
    function detachElement() {
        // Remove listener from iframe video
        document.removeEventListener("mousemove", followMouseMovement);
        
        // Hide thumbnail video and show actual iframe
        thumbnailVideo.style.display = "none";
        iframeVideo.style.display = "block";
        
        // Update rotating text from "Shake me" to "Play me"
        var rotatingText = document.querySelector('#rotating-text-desktop');
        var attachedElement = document.querySelector('#attached-element');
        var rotatingTextChars = rotatingText.querySelectorAll('span');          

        rotatingText.innerHTML = 'You rock my dude! Enjoy some epic tunes!'

        rotatingText.classList.add("remove-all-rotating-styles")
        attachedElement.style.top = "110px"
        attachedElement.style.zIndex = "10"

        if (/[\?&]autoplay=1\b/.test(iframeVideo.src) === false) {
            iframeVideo.src += '&autoplay=1';
        }
    }

    function handleClick() {
        clickCount++;
        console.log(clickCount)
        if (clickCount === 2) {
            clickCount = 0; // Reset click count
            
            detachElement()
        } else {
            clearTimeout(timer);
            timer = setTimeout(function() {
                clickCount = 0;
            }, 200); // Reset click count after 20ms
        }
    }        

    window.addEventListener("load", rotateText)
            
    document.addEventListener("mousemove", followMouseMovement);

    document.addEventListener("click", handleClick)

});
}