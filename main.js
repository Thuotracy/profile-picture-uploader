// declaring html elements

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');


// if user hover on profile div

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block"
});

// if we hover out from img div
imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none"

});

// lets work for the image showing functionality when we choose an image to upload

// when we choose a photo to upload

file.addEventListener('change', function(){
    const choosenFile = this.files[0];
})
