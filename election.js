$(document).ready(function() {

$.ajax({
  url: 'https://bb-election-api.herokuapp.com/',
  method: 'GET',
  dataType: 'json'
}).done(function(data) {
  data["candidates"].forEach(function(candidate) {
    var listEl = $('<li>').append(candidate.name + ", " + candidate.votes);
    $('#sb').append(listEl);
    });
  });

})
