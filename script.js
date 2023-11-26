document.getElementById('playButton').addEventListener('click', function () {
    this.style.display = 'none';  // Hide the button
    var video = document.getElementById('myVideo');
    video.style.display = 'block';  // Show the video
    video.play();  // Play the video
});
