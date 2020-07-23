/* 1. Grab the input value */


document.querySelector(".js-go").addEventListener('click',function(){

  var input = document.querySelector("input").value;
  pushToApi(input);

});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

  var input = document.querySelector("input").value;

  // if the key ENTER is pressed...
  if(e.which === 13) {
    pushToApi(input);
  }

});

/* 2. do the data stuff with the API */
function pushToApi(input){
  var url = "http://api.giphy.com/v1/gifs/search?q="+ input +"&api_key=dc6zaTOxFJmzC";

  // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open( 'GET', url );
  GiphyAJAXCall.send();

  GiphyAJAXCall.addEventListener('load',function(e){

    var data = e.target.response;
    pushToDOM(data);

  });
}




/* 3. Show me the GIFs */


function pushToDOM(input) {

  var container = document.querySelector(".js-container");
  
  var response = JSON.parse(input);

  var imageURL = response.data;

  imageURL.forEach(function(image){

    var src= image.images.fixed_height.url;

    container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
  });

}