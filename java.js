$(function() {
  $("h2").hide();
  $("#timeup").hide();
  $("h3").hide();
  $("#start").click(function() {
    $("h2").hide();
    $("h3").fadeOut(1000);
    $(".demo").focus(function() {
      $("h3").fadeIn(1000);
    });
    $(".demo").blur(function() {
      $("h3").fadeOut(1000);
    });

    $("#timeup").hide();
    var is = setInterval(ss, 1000);
    var hh = $("#hh");
    var mm = $("#mm");
    var ss = $("#ss");
    mm.show();
    mm.text(00);
    ss.show();
    hh.show();
    $("#stop").click(function() {
      clearInterval(is);
    });
    var s;
    if ($("#s").val() == "") {
      s = 0;
    } else {
      if ($("#s").val() <= 60 && $("#s").val() >= 0) {
        s = $("#s").val();
      } else {
        alert("min value is 0 and max value is 60");
        s = 60;
      }
    }
    var m;
    if ($("#m").val() == "") {
      m = 0;
    } else {
      if ($("#m").val() <= 60 && $("#m").val() >= 0) {
        m = $("#m").val();
      } else {
        alert("min value is 0 and max value is 60");
        m = 60;
      }
    }
    var h;
    if ($("#h").val() == "") {
      h = 0;
    } else {
      if ($("#h").val() <= 60 && $("#h").val() >= 0) {
        h = $("#h").val();
      } else {
        alert("min value is 0 and max value is 99");
        h = 99;
      }
    }
    $("#s").val("");
    $("#m").val("");
    $("#h").val("");
    function ss() {
      console.log(`${h} ${m} ${s}`);
      if (s == 0 && m == 0 && h == 0) {
        //clearInterval(is);
        mm.text(0);
        hh.text(0);
      } else {
        if (m == 0 && s == 0 && h != 0) {
          h = h - 1;
          m = 59;
          s = 60;
        } else if (m == 0 && h != 0) {
          h = h - 1;
          m = 60;
        } else if (s == 1 && m == 0 && h == 0) {
          //end of timer
          mm.hide();
          ss.hide();
          hh.hide();
          $("h2").show();
          $("#timeup").show();
          clearInterval(is);
        }
        hh.text(h);
        //fist mode
        if (s == 0 && m != 0) {
          m = m - 1;
          s = 60;
        }
        //normal mode
        s = s - 1;
        ss.text(s);
        if (s == 0) {
          m = m - 1;
        }
        mm.text(m);
        if (s == 0) {
          if (m == 2 && h == -1) {
            clearInterval(is);
            hh.text(0);
            mm.text(0);
            ss.text(0);
          } else {
            if (h == -1) {
              ss.text(0);
              hh.text(0);
            } else {
              s = 60;
            }
          }
        }
      }
    }
  });
});

//backup
/*
$(function() {
  var is = setInterval(ss, 1000);
  var hh = $("#hh");
  var mm = $("#mm");
  var ss = $("#ss");
  var s;
  s = 3;
  var m;
  m = 0;
  var h;
  h = 2;
  $("h2").hide();
  function ss() {
    console.log(`${h} ${m} ${s}`);
    if (s == 0 && m == 0 && h == 0) {
      //clearInterval(is);
      mm.text(0);
      hh.text(0);
    } else {
      if (m == 0 && s == 0 && h != 0) {
        h = h - 1;
        m = 3;
        s = 3;
      } else if (m == 0 && h != 0) {
        h = h - 1;
        m = 3;
      } else if (s == 1 && m == 0 && h == 0) {
        mm.hide();
        ss.hide();
        hh.hide();
        $("h2").show();
        clearInterval(is);
      }
      hh.text(h);
      //fist mode
      if (s == 0 && m != 0) {
        m = m - 1;
        s = 3;
      }
      //normal mode
      s = s - 1;
      ss.text(s);
      if (s == 0) {
        m = m - 1;
      }
      mm.text(m);
      if (s == 0) {
        if (m == 2 && h == -1) {
          clearInterval(is);
          hh.text(0);
          mm.text(0);
          ss.text(0);
        } else {
          if (h == -1) {
            ss.text(0);
            hh.text(0);
          } else {
            s = 3;
          }
        }
      }
    }
  }
});

*/
