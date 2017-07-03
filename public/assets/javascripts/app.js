var app = function() {
  var module = {};

  module.init = function(){
    $.ajax({
      TYPE: 'GET',
      URL: 'http://api.songkick.com/api/3.0/artists/7021494/calendar.json'
    }).done(function(data){
      console.log(data);
    }).fail(function(){
      console.log('errror retrieving dates');
    });
  };

  $(document).on('ready', function(){
    app.init();
  });

  return module;
}();
