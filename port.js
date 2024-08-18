$("#cont").hide();
function qqq() {
  // var w= $("body").innerWidth();
  $("#www").addClass("wcc");
  $("#rre").addClass("wee");
  $(".logon").addClass("lof");
  $(".list-logo").addClass("listi");
  $("#he").addClass("ha");
  $("#job").show();
  $("#sidc").addClass("btnpo");
  $("#sidc").removeClass("btnpo1");
  $(".imgii").addClass("imgi");
  $("#sidc").attr("onclick", "ppp()");
}
function ppp() {
  // var w= $("body").innerWidth();
  $("#www").removeClass("wcc");
  $("#rre").removeClass("wee");
  $(".logon").removeClass("lof");
  $(".list-logo").removeClass("listi");
  $("#he").removeClass("ha");
  $("#job").hide();
  $("#sidc").removeClass("btnpo");
  $("#sidc").addClass("btnpo1");
  $(".imgii").removeClass("imgi");
  $("#sidc").attr("onclick", "qqq()");
}
function myf(y) {
  if (y.matches) {
    $(".sa").width(50 + "%");
    $(".sb").width(50 + "%");
    $(".sc").width(100 + "%");
  } else {
    $(".sc").width(33 + "%");
    $(".sb").width(33 + "%");
    $(".sa").width(33 + "%");
  }
}
function myfun(x) {
  if (x.matches) {
    ppp();
    $(".sc").width(100 + "%");
    $(".sb").width(100 + "%");
    $(".sa").width(100 + "%");
  } else {
    qqq();
    $(".sc").width(100 + "%");
    $(".sb").width(50 + "%");
    $(".sa").width(50 + "%");
  }
}
var x = window.matchMedia("(max-width:820px)");
var y = window.matchMedia("(max-width:1150px)");
myfun(x);
myf(y);
setTimeout(myf,2000);
x.addEventListener("change", function () {
  myfun(x);
});
y.addEventListener("change", function () {
  myf(y);
});

// for more projects
$("#mow").hide();
$("#mow1").hide();
function more() {
  $("#mow1").toggle();
  $("#mow").toggle();
}
