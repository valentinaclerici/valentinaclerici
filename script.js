/* LIGHT MODE*/
const body = document.querySelector("body");
const header = document.querySelector("header");
const aside = document.querySelector(".aside-container");
const navButtonIm = document.querySelector("#navButtonIm");
const navButtonTxt = document.querySelector("#navButtonTxt");
const input = document.querySelector("input");
const textAreaTop = document.querySelector("#textAreaTop");
const textAreaBottom = document.querySelector("#textAreaBottom");
const textFontInput = document.querySelector("select.text-font-input");
const textSizeInput = document.querySelector("input.text-size-input");
const textColorInput =document.querySelector("input.text-color-input");
const textBackgroundInput = document.querySelector("input.text-background-input");
const outlineNone = document.querySelector("#outlineNone");
const outlineLight = document.querySelector("#outlineLight");
const outlineDark = document.querySelector("#outlineDark");
const lineheightInput = document.querySelector("select.lineheight-input");
const paddingInput = document.querySelector("input.padding-input");
const asideInput = document.querySelector("input.aside-url-input");
const backgroundInput = document.querySelector("input.background-color")
const fxInput =  document.querySelector("select.background-fx");
const resetButton =  document.querySelector(".filters-reset-button");
const lightButton = document.querySelector("#lightButton");

lightButton.addEventListener("click", ()=> {
body.classList.toggle("light-mode");
header.classList.toggle("light-mode");
aside.classList.toggle("light-mode");
navButtonIm.classList.toggle("light-mode");
navButtonTxt.classList.toggle("light-mode");
input.classList.toggle("light-mode");
textAreaTop.classList.toggle("light-mode");
textAreaBottom.classList.toggle("light-mode");
textFontInput.classList.toggle("light-mode");
textFontInput.classList.toggle("light-mode");
textSizeInput.classList.toggle("light-mode");
textColorInput.classList.toggle("light-mode");
textBackgroundInput.classList.toggle("light-mode");
outlineNone.classList.toggle("light-mode");
outlineLight.classList.toggle("light-mode");
outlineDark.classList.toggle("light-mode");
lineheightInput.classList.toggle("light-mode");
paddingInput.classList.toggle("light-mode");
lightButton.classList.toggle("light-mode");
asideInput.classList.toggle("light-mode");
backgroundInput.classList.toggle("light-mode");
fxInput.classList.toggle("light-mode");
resetButton.classList.toggle("light-mode");
})

lightButton.addEventListener("click", ()=> {

} )

/*LIGHT MODE BUTTON */

const lightMode = document.querySelector("#lightButton");
const lightModeButton = document.querySelector("#lightModeButton");

const changeMode = () => {

lightModeButton.classList.toggle('light');
const mode = lightModeButton.getAttribute('class');
if (mode === "light-mode-button light") {
  lightModeButton.innerText = 'Claro';
} else {
  lightModeButton.innerText = 'Oscuro';
}
}
lightMode.addEventListener('click', changeMode)


/*HIDDEN ASIDE */

const textAside = document.querySelector("#asideText");
const imageAside = document.querySelector(".aside-image");
const textAsideButton = document.querySelector("#navButtonTxt");
const imageAsideButton = document.querySelector("#navButtonIm");

const showAside = () => {

  const showMode = textAside.getAttribute("class");
    if (showMode === "hidden-aside") {
      textAside.classList.remove('hidden-aside');
      imageAside.classList.remove('aside-image');
      imageAside.classList.add('hidden-aside');
    } else {
      textAside.classList.add('hidden-aside');
      imageAside.classList.add('aside-image');
      imageAside.classList.remove('hidden-aside');
    }
  }

textAsideButton.addEventListener("click", showAside);
imageAsideButton.addEventListener("click", showAside);



/*CLOSE ASIDE*/

const closeAsideButton = document.querySelector("#closeAsideButton");

const closeAside = () => {

  imageAside.classList.add('hidden-aside');
  imageAside.classList.remove('aside-image');
  textAside.classList.add('hidden-aside');
  textAside.classList.remove('aside-text');
  aside.classList.add('hidden-aside');
  aside.classList.remove('aside-container');
}

closeAsideButton.addEventListener('click', closeAside);


/*UPLOAD IMAGE*/

const url = document.querySelector(".aside-url-input");
const uploadImage = () => {
  const uploadImage = document.querySelector(".meme-image");
  uploadImage.style.backgroundImage = `url("${url.value}")`;
  uploadImage.style.backgroundSize = 'contain'
  uploadImage.style.backgroundRepeat = 'no-repeat'
  uploadImage.style.backgroundPosition = 'center'
}
url.addEventListener('change', uploadImage);



/*IMAGE FILTERS*/
/*Background Color*/
const backgroundColorMeme = document.querySelector(".background-color");
const changeColor = () => {
  const memeColor = document.querySelector(".meme-image");
  memeColor.style.backgroundColor = backgroundColorMeme.value;
}
backgroundColorMeme.addEventListener('input', changeColor);

/*Color Fx*/
const colorFx = document.querySelector(".background-fx");
const changeFx = () => {
  const memeColor = document.querySelector(".meme-image");
  memeColor.style.backgroundBlendMode = colorFx.value;
}
colorFx.addEventListener('input', changeFx);

/*Filters Sliders*/

// const filterBlend = document.querySelector(".input-filter");
const filterBlend = document.getElementsByClassName("input-filter");
const memeColor = document.querySelector(".meme-image");
const brightness = document.querySelector("#brightnessSlider");
const opacity = document.querySelector("#opacitySlider");
const contrast = document.querySelector("#contrastSlider");
const blurSlider = document.querySelector("#blurSlider");
const grayscale = document.querySelector("#grayScaleSlider");
const sepia = document.querySelector("#sepiaSlider");
const hueRotation = document.querySelector("#hueRotateSlider");
const saturation = document.querySelector("#saturateSlider");
const invert = document.querySelector("#invertSlider");

const changeFilter = () => {
      let brightnessValue = brightness.value;
      let opacityValue = opacity.value;
      let contrastValue = contrast.value;
      let blurValue = blurSlider.value;
      let grayscaleValue = grayscale.value;
      let sepiaValue = sepia.value;
      let hueRotationValue = hueRotation.value;
      let saturationValue = saturation.value;
      let invertValue = invert.value;
    memeColor.style.filter = `brightness(${brightnessValue}) opacity(${opacityValue}) blur(${blurValue}px) contrast(${contrastValue}%) grayscale(${grayscaleValue}%) hue-rotate(${hueRotationValue}deg) sepia(${sepiaValue}%) saturate(${saturationValue}%) invert(${invertValue})`;
  }

for (i = 0; i < filterBlend.length; i++) {
  filterBlend[i].addEventListener('input', changeFilter);
}

resetButton.addEventListener('click', () => resetFilter())

const resetFilter = () => {
  memeColor.style.filter = `brightness(${brightness.value=1}) opacity(${opacity.value=1}) blur(${blurSlider.value=0}px) contrast(${contrast.value=100}%) grayscale(${grayscale.value=0}%) hue-rotate(${hueRotation.value=0}deg) sepia(${sepia.value=0}%) saturate(${saturation.value=100}%) invert(${invert.value=0})`;
}



//TEXT FILTERS//

//Top Text
const textInputTop = document.querySelector("#textAreaTop");
const topText = document.querySelector(".top-text");
const changeText = () => {
  topText.innerText = textInputTop.value;
}
textInputTop.addEventListener('input', changeText);

//Bottom Text
const textInputBottom = document.querySelector("#textAreaBottom");
const bottomText = document.querySelector(".bottom-text");
const changeText2 = () => {
  bottomText.innerText = textInputBottom.value;
}
textInputBottom.addEventListener('input', changeText2);

// Text Font //
const txtFont = document.querySelector(".text-font-input");
const changeFont = () => {
  topText.style.fontFamily = txtFont.value
  bottomText.style.fontFamily = txtFont.value
}
txtFont.addEventListener('change', changeFont);

//Hide Text//
const hideTopText = document.querySelector(".top-text-checkbox");
const hideBottomText = document.querySelector(".bottom-text-checkbox");
const hideText = () => {
  const hide = topText.getAttribute('class');

  if (hide === "top-text") {
    topText.classList.remove("top-text");
    topText.classList.add("hidden-text");
  }else {
    topText.classList.add("top-text");
    topText.classList.remove("hidden-text");
  } 
}
hideTopText.addEventListener('click', hideText);

const hideText2 = () => {
  const hide2 = bottomText.getAttribute('class');

  if (hide2 === "bottom-text") {
    bottomText.classList.remove("bottom-text");
    bottomText.classList.add("hidden-text");
  }else {
    bottomText.classList.add("bottom-text");
    bottomText.classList.remove("hidden-text");
  } 
}
hideBottomText.addEventListener('click', hideText2);
 
//Font Size//
const selectFontSize = document.querySelector(".text-size-input");
const changeFontSize = () => {
  topText.style.fontSize = selectFontSize.value + "px";
  bottomText.style.fontSize = selectFontSize.value + "px";
}
selectFontSize.addEventListener('change', changeFontSize);

//Align

const alignLeftBtn = document.querySelector(".align-btn-left");
const alignLeft = () => {
  topText.style.justifyContent = 'flex-start';
  bottomText.style.justifyContent = 'flex-start';
}

alignLeftBtn.addEventListener('click', alignLeft);

const alignCenterBtn = document.querySelector(".align-btn-center");
const alignCenter = () => {
  topText.style.justifyContent = 'center';
  bottomText.style.justifyContent = 'center';
}

alignCenterBtn.addEventListener('click', alignCenter);

const alignRightBtn = document.querySelector(".align-btn-right");
const alignRight = () => {
  topText.style.justifyContent = 'flex-end';
  bottomText.style.justifyContent = 'flex-end';
}

alignRightBtn.addEventListener('click', alignRight);

//Color
const changeTextColor = () => {
  const topTextColor = document.querySelector(".top-text");
  topTextColor.style.color = textColorInput.value;

  const bottomTextColor = document.querySelector(".bottom-text");
  bottomTextColor.style.color = textColorInput.value;

}
textColorInput.addEventListener('input', changeTextColor);

//Background

const changeBackgroundColor = () => {
 topText.style.backgroundColor = textBackgroundInput.value;

 bottomText.style.backgroundColor = textBackgroundInput.value;
}

textBackgroundInput.addEventListener('input', changeBackgroundColor);

const transparentCheckbox = document.querySelector(".text-background-checkbox");

const transparentBackground = () => {
    const textBackground = topText.getAttribute('class');
  
    if (textBackground === "top-text") {
      topText.classList.toggle("transparent-text");
      topText.classList.remove("top-text");
    } else {
      topText.classList.add("bottom-text");
      topText.classList.remove("transparent-text");
    } 

}
transparentCheckbox.addEventListener('click', transparentBackground);

