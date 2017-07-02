var app = function() {
  var module = {};

  module.init = function(){
    console.log('hello world');
  };

  $(document).on('ready', function(){
    app.init();
  });

  return module;
}();
