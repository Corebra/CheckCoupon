
gocode.addEventListener("click", doError, false);


function doError(){

  window.error.classList.remove("bad");

  window.error.innerHTML="verification code...";

  setTimeout(function() { addBad(window.error,"bad"); }, 2000);

}

function addBad(elem, myclass){

  if(!elem.classList.contains(myclass)){
    elem.classList.add(myclass);
  }

  window.error.innerHTML="Your code is not correct";
  window.line.value="";
}

