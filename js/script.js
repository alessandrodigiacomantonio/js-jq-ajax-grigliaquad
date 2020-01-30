$(document).ready(function() {

  var row = document.getElementById("row").innerHTML;
  var  genRow = Handlebars.compile(row);
  var column = document.getElementById("column").innerHTML;
  var  genColumn = Handlebars.compile(column);

  for (var i = 1; i <= 6; i++) {
    var rowNumber = { row_number: i };
    var newRow = genRow(rowNumber);
    $('#main').append(newRow);

  }
  for (var i = 1; i <= 6; i++) {
    for (var j = 1; j <= 6; j++) {
      var columnNumber = { column_number: j };
      var newColumn = genColumn(columnNumber);
      $('.row').eq( i ).append(newColumn);
    }
  }

  $('.column').on('click',
  function() {
    var thisColumn = this;
    if ($(thisColumn).find('span').html() == 0) {
      $.ajax(
        {
          url: "https://flynn.boolean.careers/exercises/api/random/int",
          method: "GET",
          success: function (data) {
            $(thisColumn).html(data.response);
            if(data.response <= 5) {
              $(thisColumn).addClass('yellow');
            }
            else {
              $(thisColumn).addClass('green');
            }
          },
          error: function (){}
        },
      );
    }
  });

});
