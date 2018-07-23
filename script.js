window.onload = init;

/**********************************************
Definition of init function : Initializes page
**********************************************/
function init()
{
  //storing an array of images into variable sliderImage
  var sliderImages = document.getElementsByClassName('slider-image');

  //updating how it's displayed: as a chunk on the webpage
  sliderImages[0].style.display = 'block';


  //looping through the array of sliderImages
  for(var i = 1; i<sliderImages.length; i++)
  {
    //this is how to make the other pictures disappear
    sliderImages[i].style.display = 'none';

  }

  //now I'm setting up the buttons!
  var sliderBtns = document.getElementsByClassName('slider-btns');

  for(var i = 0; i<sliderBtns.length; i++)
  {
    sliderBtns[i].onclick = function() {showNextImage(this.id, sliderImages); } ;
  }

/**********************************************
function to show next image when button clicked
***********************************************/
function showNextImage(objectId, sliderImages)
{
  var currentImageIndex  = findCurrentImage(sliderImages);
  //console.log("Current image index: " + currentImageIndex);

  var nextImageIndex;

  if(objectId == 'next-button')
  {
      //wraps around (so you never go out of bounds)
      nextImageIndex = (currentImageIndex+1) % sliderImages.length;
      sliderImages[currentImageIndex].style.display = 'none';
      sliderImages[nextImageIndex].style.display = 'block';

  }

  else
  {
    nextImageIndex = ((currentImageIndex - 1) + sliderImages.length) % sliderImages.length;
    sliderImages[currentImageIndex].style.display = 'none';
    sliderImages[nextImageIndex].style.display = 'block';
  }


}

/**********************************************
function to find where user is in the slideshow
***********************************************/
function findCurrentImage(sliderImages)
{
  for(var i = 0; i<sliderImages.length; i++)
  {
    if (sliderImages[i].style.display == 'block')
      return i; //returns index of array
  }
}




} //end bracket fo init()
