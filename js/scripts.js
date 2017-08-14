$(document).ready(function() {
  $("#blanks form").submit(function(event){
    var product = $("#product1").val();
    var nameInput = $("input#name1").val();
    var addressInput = $("input#address1").val();
    var cityInput = $("input#city1").val();
    var state = $("input:radio[name=state]:checked").val();

    $('.name').text(nameInput);
    $(".product").text(product);
    $('.address').text(addressInput);
    $('.city').text(cityInput);
    $(".state").text(state);

    $('#receipt').show();

    event.preventDefault();
  });
});
