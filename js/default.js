$(document).ready(function(){
  var grid = 16;

  for(i=0; i<(grid*grid); i++) {
    $('#container').append('<div></div>');
  };

  $('div').hover(function(){
    $(this).addClass('ink');
  });
});
