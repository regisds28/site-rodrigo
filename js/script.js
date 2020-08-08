let principal = document.querySelector('.principal');

let window1 = document.querySelector('.bg1');
let window2 = document.querySelector('.bg2');
let window3 = document.querySelector('.bg3');

let shape1 = document.querySelector('.shape1');
let shape2 = document.querySelector('.shape2');
let shape3 = document.querySelector('.shape3');

let titlePhoto = document.querySelector('.title-photo');
let titleVideo = document.querySelector('.title-video');
let titleDesign = document.querySelector('.title-design');

let btnTopPresentation = document.querySelector('.btnTopPresentation');
let btnBottomPresentation = document.querySelector('.btnBottomPresentation');
let logo = document.querySelector('.logo-center');

const start = () => {
  btnTopPresentation.classList.add('btnHidePresentation');

  btnBottomPresentation.addEventListener('click', () => {
    clickShowPresentation();
    btnBottomPresentationHide();
    btnTopPresentationShow();
    blackLogo();
  });

  btnTopPresentation.addEventListener('click', () => {
    clickHidePresentation();
    btnBottomPresentationShow();
    btnTopPresentationHide();
    whiteLogo();
  });

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

const clickShowPresentation = () => principal.classList.add('principal-hide');
const btnBottomPresentationHide = () =>
  btnBottomPresentation.classList.add('btnHidePresentation');
const btnBottomPresentationShow = () =>
  btnBottomPresentation.classList.remove('btnHidePresentation');
const blackLogo = () => logo.classList.add('logo-invert');

const clickHidePresentation = () =>
  principal.classList.remove('principal-hide');
const btnTopPresentationShow = () => {
  btnTopPresentation.classList.add('btnShowPresentation');
};
const btnTopPresentationHide = () => {
  btnTopPresentation.classList.remove('btnShowPresentation');
};
const whiteLogo = () => logo.classList.remove('logo-invert');

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

start();
