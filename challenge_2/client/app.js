
$('form').on('submit', function(e){
  e.preventDefault();
  var file = document.getElementById('textInput').files[0];

  if (file) {
    // create reader
    var reader = new FileReader();
    reader.readAsText(file);
    // after browser reads file:
    reader.onload = function(e) {
      // file content
      var text = reader.result;
      $.ajax({
        method: 'POST',
        url: '/form',
        data: {textInput: text},
        success: function(serverData) {
          console.log('POST SUCCESS');
          // adds converted data to the page
          document.getElementById('results').innerHTML = serverData;
          // creates the download link
          var data = new Blob([serverData]);
          var a = document.getElementById('a');
          a.innerHTML = 'Download CSV Results';
          a.href = URL.createObjectURL(data);
        }
      });
    };
  } else {
    alert('Choose a file');
  }
});



