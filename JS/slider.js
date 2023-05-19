// storing the images in an array
var images = ['./IMAGES/SLIDER-IMAGES/image2.jpg','./IMAGES/SLIDER-IMAGES/image3.jpg','./IMAGES/SLIDER-IMAGES/image4.jpg','./IMAGES/SLIDER-IMAGES/image5.jpg','./IMAGES/SLIDER-IMAGES/image6.jpg'];

// setting x to 0
var x = 0;
// selecting the 'slider-images' from html and storing it in the imgs variable
var imgs = document.getElementById('slider-images');

// using a function to change the image every 3 seconds
setInterval(slider,3000);

// creating a function slider()
function slider(){
    // if value of x is less than the length of array images, which is 5 then the statements executes
    if(x < images.length){
        x = x + 1;
    }
    else{
        x = 1;
    }
    // changing the image every time by passing x-1 as parameters to images
    imgs.innerHTML = "<img src=" + images[x-1] + ">";
}

// storing the plantImages in an array
var plantImages = ['../IMAGES/FORM-IMAGES/image2.jpg','../IMAGES/FORM-IMAGES/image3.jpg','../IMAGES/FORM-IMAGES/image4.jpg','../IMAGES/FORM-IMAGES/image1.jpg'];

// selecting the 'slider-plant-images' from html and storing it in the imgs variable
var plantImgs = document.getElementById('slider-plant-images');

// setting y to 0
var y = 0;

// using a function to change the image every 3 seconds
setInterval(plantSlider,3000);

// creating a function plantSlider()
function plantSlider(){
    // if value of y is less than the length of array images, which is 4 then the statements executes
    if(y < plantImages.length){
        y = y + 1;
    }
    else{
        y = 1
    }
    // changing the image every time by passing y-1 as parameters to images
    plantImgs.innerHTML = "<img src=" + plantImages[y-1] + ">";
}