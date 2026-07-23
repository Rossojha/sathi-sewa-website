$(document).ready(function () {
  $.getJSON("json/menu.json", function (data) {
    data.menus.map(function (item, index) {
      $("#mainmenu").append(
        `<li><a href=${item.menuLink}>${item.menuTitle}</a></li>`
      );
    });
  });
});
