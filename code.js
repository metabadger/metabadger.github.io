var figure = $(".anim").hover( play, pause );

function play() {  
    $('anim', this).get(0).play(); 
}
function pause() {
    $('anim', this).get(0).pause(); 
}
function toggleText() {
    var text = document.getElementById("description");
    if (text.style.display === "none") {
      text.style.display = "grid";
    } else {
      text.style.display = "none";
    }
  }

  function toggleImage() {
    var img = document.getElementById("bubble");
    if (img.style.display === "none") {
      img.style.display = "flex";
    
    } else {
      img.style.display = "none";
    }
  }