//Get the time and date
function setTime(ts) {
  var date = new Date(ts);
  $('.time').text(date.toLocaleString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit'
  })).attr('datetime', date.getHours() + ':' + date.getMinutes());
  $('.date').text(date.toLocaleString(navigator.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })).attr('datetime', date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
  setTimeout(function() {
    setTime(Date.now());
  }, 1000);
}
setTime(Date.now());

//Set the date and time on Screensaver
$('.btn-primary').on('click', function(e) {
  e.preventDefault();
  if (($('#user').val() == 'islamike') && ($('#pass').val() == 'islamike')) {
    $('.screensaver').fadeOut(500);
  } else {
    $('#hint').show();
    $('#close').show();
  }
  $('#close').on('click', function() {
    $('#hint').hide();
    $('#close').hide();
  });
});

$(".logoff").on('click', function(e) {
  e.preventDefault();
  $('#user').val('');
  $('#pass').val('');
  $('.screensaver').fadeIn(500);
});
//Make the Window inside the app moveable
$('.window').draggable({
  handle: '.header'
});

//When user clicks on the Red Cross, close the Window and reset it
$('.close').on('click', function() {
  $(this).parent().parent().hide();
  $(this).parent().parent().removeClass('big');
});

//When on Window clicked, bring it to the Front
$('.window').mousedown(function() {
  $(".window").css("z-index", "200");
  $(this).css("z-index", "300");
});

//When the green plus button clicked, make the window fullscreen
$('.maximise').click(function() {
  $(this).parent().parent().toggleClass('big');
});

//When the orange minus button click, minimise the window
$('.minimise').click(function() {
  $(this).parent().parent().css("visibility", "hidden");
});

//When the home icon is clicked, show dropdown menu
$('#apple').click(function() {
  $('.apple').toggleClass('project-pilow');
});
//From the dropdown menu if Project Pillow is click, show it.
$('.pro-pillow').click(function() {
  $('.apple').toggleClass('project-pilow');
  $('.pillow').show();
  $('.pillow').css('visibility', 'visible');
  $(".window").css("z-index", "200");
  $(this).css("z-index", "300");
});
$('#finderr').on('click', function() {
  $('.pillow').show();
  $('.pillow').css('visibility', 'visible');
  $(".window").css("z-index", "200");
  $(this).css("z-index", "300");
});

if ($('.window').css('visibility') == 'hidden') {
  $('.file-manager').removeClass('fa-folder').addClass('fa-folder-open');
} else {
  $('.file-manager').click(function() {
    if ($('.window').css('visibility') == 'hidden') {
      $('.window').css('visibility', 'visible');
      $(this).removeClass('fa-folder-open').addClass('fa-folder');
    } else {
      $('.window').css('visibility', 'hidden');
      $(this).removeClass('fa-folder').addClass('fa-folder-open');
    }
  });
}


$('.dock ul li').on('mouseover',function(){
  $(this).prev().prev().css('transform: scale(1.3)');
  $(this).prev('li').css('transform','scale(1.5)');
  
  $(this).css('transform','scale(2)');
  
  $(this).next('li').css('transform', 'scale(1.5)');
  $(this).next('li').next('li').css('transform', 'scale(1.3)');
});
$('dock ul li').mouseout(function(){
  $(this).css('transform', 'scale(1.0)');
  $(this).prev('li').css('transform', 'scale(1.0)');
  $(this).prev('li').prev('li').css('transform', 'scale(1.0)');
  
  $(this).css('transform', 'scale(1.0)');
  
  $(this).next('li').next('li').css('transform', 'scale(1.0)');
  $(this).next('li').css('transform', 'scale(1.0)');
});