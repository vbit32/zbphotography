$(document).ready(function(){
  $(".photo").each(function(){
    var id = $(this).attr("data-id");
    var bg = "url(../images/photo" + id + ".jpg)";
    $(this).css("background-image", bg);
  });
});
