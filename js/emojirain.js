var container = document.getElementById('animate');
var emoji = ['🐢','🫦','👅','💃','🐒','🐣','🦁','✂️','🥞','🚗','🩲','🛋️', '🪱','👄','🦇'];
var circles = [];

// Function to create a circle and add it to the circles array after a delay
function addCircleWithDelay(delay, xRange, yRange) {
  setTimeout(function() {
    var color = 'hsl(' + (Math.random() * 360 | 0) + ',80%,50%)'; // Generate random color
    var emojiIndex = Math.floor(Math.random() * emoji.length);
    var circle = new Circle(
      xRange[0] + Math.random() * xRange[1], // Random x position within xRange
      yRange[0] + Math.random() * yRange[1], // Random y position within yRange
      emoji[emojiIndex], // Random emoji
      { x: -0.15 + Math.random() * 0.3, y: 1 + Math.random() }, // Random velocity
      xRange // Range for x position
    );
    circles.push(circle); // Add the circle to the array
  }, delay);
}

// Function to create a circle
function Circle(x, y, emoji, velocity, xRange) {
  this.x = x;
  this.y = y;
  this.emoji = emoji;
  this.velocity = velocity;
  this.xRange = xRange;
  this.element = document.createElement('span');
  this.element.style.position = 'absolute';
  this.element.style.fontSize = '40px';    
  this.element.innerHTML = emoji;    
  container.appendChild(this.element);
}

// Method to update circle's position and opacity
Circle.prototype.update = function() {
  if (this.y > 800) {
    this.y = 80 + Math.random() * 4;
    this.x = this.xRange[0] + Math.random() * this.xRange[1];
  }
  this.y += this.velocity.y;
  this.x += this.velocity.x;
  this.element.style.opacity = 0.2;
  this.element.style.transform = 'translate3d(' + this.x + 'px, ' + this.y + 'px, 0px)';
};

// Add circles with varying delays and positions
for (var i = 0; i < 15; i++) {
  addCircleWithDelay(i * 150, [-600 + i * 200, 200], [-300, 600]);
}

// Animation loop
function animate() {
  for (var i = 0; i < circles.length; i++) {
    circles[i].update();
  }
  requestAnimationFrame(animate);
}

animate();
