$(function() {
  function changeTheme(first, secondary) {
    localStorage.setItem("first-color", first);
    localStorage.setItem("secondary-color", secondary);
    let firstColor = localStorage.getItem("first-color"),
      secondaryColor = localStorage.getItem("secondary-color");

    $("body").css({
      "--main-color": firstColor,
      "--second-color": secondaryColor
    });
  }
  // changeTheme("#0ff", "#ffeb3b")
  $(".click1").on("click", function() {
    changeTheme("#0ff", "#ffeb3b");
  });
  $(".click2").on("click", function() {
    changeTheme("#f068f9", "#e2ffc7");
  });
  $(".click3").on("click", function() {
    changeTheme("#ff9df3", "#f97b54");
  });
  function loadTheme() {
    let firstColor = localStorage.getItem("first-color"),
      secondaryColor = localStorage.getItem("secondary-color");
    if (firstColor && secondaryColor) {
      changeTheme(firstColor, secondaryColor);
    }
  }
  loadTheme();

  $("#first-input-color").on("change", function() {
    customTheme();
  });
  $("#second-input-color").on("change", function() {
    customTheme();
  });
  function customTheme() {
    let firstColor = $("#first-input-color").val(),
      secondaryColor = $("#second-input-color").val();
    changeTheme(firstColor, secondaryColor);
  }
});
