$(document).ready(function(){
  var grid = 64;

  for(i=0; i<(grid*grid); i++) {
    $('#container').append('<div></div>');
  };

  $('div').hover(function(){
    $(this).addClass('ink');
  });

  $('button').click(function(){
    $('div').removeClass('ink');
  });
});
