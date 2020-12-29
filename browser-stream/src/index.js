const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const screenshotBtn = document.getElementById('screenshot');

let streamStarted = false;

async function playStream() {
  document.querySelector('img')?.remove();
  canvas.style.display = 'none';
  video.style.display = 'flex';
  video.width = window.innerWidth;
  video.height = window.innerHeight - 200;

  if (streamStarted) return;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'environment',
      },
      audio: false,
    });
    video.srcObject = stream;

    stream;
    streamStarted = true;
  } catch (error) {
    console.error('Error accessing media devices.', error);
  }
}

function pauseStream() {
  video.pause();
  streamStarted = false;
}

function doScreenshot() {
  pauseStream();

  canvas.style.display = 'block';

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  canvas
    .getContext('2d')
    .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

  const screenshotImg = document.createElement('img');
  video.style.display = 'none';

  screenshotImg.src = canvas.toDataURL('image/png');
  screenshotImg.width = video.scrollWidth;
  screenshotImg.height = video.scrollHeight;
  document.body.appendChild(screenshotImg);
}

playBtn.addEventListener('click', playStream);
pauseBtn.addEventListener('click', pauseStream);
screenshotBtn.addEventListener('click', doScreenshot);
