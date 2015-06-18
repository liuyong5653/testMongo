$(function () {

  var mdata = {};
  var url = '/javascripts/movie.json';

  var movie = $('#c_editor').attr('movie');

  if (movie) {
    url = '/movie/json/' + movie;
  }

  console.log("url:" + url);

  $.getJSON(url, function (data) {
    mdata = data;
    render_editor_form(mdata);
    render_event_form(mdata);
  });

  var render_editor_form = function (data) {
    $('#c_editor').val($.toJSON(data));
  };

  var render_event_form = function () {
    $('#c_save').on('click', function (event) {
      var data = {};
      data['content'] = mdata;
      console.log("data------:" + JSON.stringify(data));

      $.ajax({
        type: "POST",
        url: '/movie/add',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        success: function (data, textStatus) {
          if (data.success) {
            console.log("33");

            $('#msg').html('成功保存!');
            $('#msg').addClass('alert alert-success');
            $(location).attr('href', '/movie/' + mdata.name);
          } else {
            console.log("44");

            $('#msg').html(data.err);
            $('#msg').addClass('alert alert-error');
          }
        }
      });
    });
  };


});