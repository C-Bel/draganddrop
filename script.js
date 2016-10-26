$(document).ready(function(){
  $(".bouger").draggable({
    helper: "clone"
  })
  $(".bouger").draggable();
  $(".deposer").droppable({
    drop: function(){
        alert("OK, image déposée");
    }
  });

















});
