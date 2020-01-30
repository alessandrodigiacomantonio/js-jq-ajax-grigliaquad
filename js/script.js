$(document).ready(function() {

  var row = document.getElementById("row").innerHTML;
  var  genRow = Handlebars.compile(row);
  var column = document.getElementById("column").innerHTML;
  var  genColumn = Handlebars.compile(column);

  for (var i = 0; i < 6; i++) {
    var rowNumber = { row_number: i+1,};
    var newRow = genRow(rowNumber);
    $('#main').append(newRow);
  }
  for (var j = 0; j < 6; j++) {
    var columnNumber = { column_number: (j+1),};
    var newColumn = genColumn(columnNumber);
    $('.row').attr('data-row', i+1 ).append(newColumn);
  }

  $('.column').on('click',
  function() {
    $.ajax(
      {
       url: "http://www.boolean.careers/api/random/boolean",
       method: "GET",
       success: function (data, stato) {

         $(this).html(data);
         if (data<=5) $(this).addClass('yellow');
         else $(this).addClass('green');
        },
       error: function (richiesta, stato, errore) {
         alert("E' avvenuto un errore. " + errore);
        }
      }
    );

  });

});
