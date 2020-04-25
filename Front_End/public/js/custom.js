/*custom input file */
$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });

  $(document).ready(function () {
    $(click1).click(function (e) { 
      $('.nav-custom').hide();
      
    });
});