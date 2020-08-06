let window1 = document.querySelector('.bg1');
let window2 = document.querySelector('.bg2');
let window3 = document.querySelector('.bg3');

let shape1 = document.querySelector('.shape1');
let shape2 = document.querySelector('.shape2');
let shape3 = document.querySelector('.shape3');

let titlePhoto = document.querySelector('.title-photo');
let titleVideo = document.querySelector('.title-video');
let titleDesign = document.querySelector('.title-design');

const start = () => {
  window1.addEventListener('mouseover', () => {
    handleMouseOverBg1();
    shapeOneOpacity0();
    titlePhotoOpacity1();
  });
  window1.addEventListener('mouseout', () => {
    handleMouseOutBg1();
    shapeOneOpacity1();
    titlePhotoOpacity0();
  });

  window2.addEventListener('mouseover', () => {
    handleMouseOverBg2();
    shapeTwoOpacity0();
    titleVideoOpacity1();
  });
  window2.addEventListener('mouseout', () => {
    handleMouseOutBg2();
    shapeTwoOpacity1();
    titleVideoOpacity0();
  });
  window3.addEventListener('mouseover', () => {
    handleMouseOverBg3();
    shapeThreeOpacity0();
    titleDesignOpacity1();
  });
  window3.addEventListener('mouseout', () => {
    handleMouseOutBg3();
    shapeThreeOpacity1();
    titleDesignOpacity0();
  });
};

const shapeOneOpacity0 = () => shape1.classList.add('shape-none');
const shapeOneOpacity1 = () => shape1.classList.remove('shape-none');
const shapeTwoOpacity0 = () => shape2.classList.add('shape-none');
const shapeTwoOpacity1 = () => shape2.classList.remove('shape-none');
const shapeThreeOpacity0 = () => shape3.classList.add('shape-none');
const shapeThreeOpacity1 = () => shape3.classList.remove('shape-none');

const titlePhotoOpacity1 = () => {
  titlePhoto.classList.add('title-opacity');
};
const titlePhotoOpacity0 = () => {
  titlePhoto.classList.remove('title-opacity');
};

const titleVideoOpacity1 = () => {
  titleVideo.classList.add('title-opacity');
};
const titleVideoOpacity0 = () => {
  titleVideo.classList.remove('title-opacity');
};
const titleDesignOpacity1 = () => {
  titleDesign.classList.add('title-opacity');
};
const titleDesignOpacity0 = () => {
  titleDesign.classList.remove('title-opacity');
};
const handleMouseOverBg1 = () => {
  window1.classList.add('mouse-over-bg');
};
const handleMouseOutBg1 = () => {
  window1.classList.remove('mouse-over-bg');
};
const handleMouseOverBg2 = () => {
  window2.classList.add('mouse-over-bg');
};
const handleMouseOutBg2 = () => {
  window2.classList.remove('mouse-over-bg');
};
const handleMouseOverBg3 = () => {
  window3.classList.add('mouse-over-bg');
};
const handleMouseOutBg3 = () => {
  window3.classList.remove('mouse-over-bg');
};

const drawRain = () => {
  let canvas = document.querySelector('#canvas'),
    ctx = canvas.getContext('2d');

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  let lines = [],
    maxSpeed = 0.003,
    spacing = 15,
    xSpacing = 0,
    n = innerWidth / spacing,
    colors = ['#FFF', '#CCC', '#EEE', '#666'],
    i;

  for (i = 0; i < n; i++) {
    xSpacing += spacing;
    lines.push({
      x: xSpacing,
      y: Math.round(Math.random() * canvas.height),
      width: 0.5,
      height: Math.round(Math.random() * (innerHeight / 30)),
      speed: Math.random() * maxSpeed + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }

  const draw = () => {
    let i;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i < n; i++) {
      ctx.fillStyle = lines[i].color;
      ctx.fillRect(lines[i].x, lines[i].y, lines[i].width, lines[i].height);
      lines[i].y += lines[i].speed;

      if (lines[i].y > canvas.height) lines[i].y = 0 - lines[i].height;
    }

    requestAnimationFrame(draw);
  };

  draw();
};

drawRain();
start();
