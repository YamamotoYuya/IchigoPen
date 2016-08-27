/*$.getJSON("http://sabae.club/siot/",function(json){
  alert(json);
});*/

var roop;

$("#start").click(function(e){
  roop = setInterval(load, 1000);
});

$("#end").click(function(e){
  clearInterval(roop);
})

function load(){
  $("#sleep").text("");
  $.ajax({
    url: "http://sabae.club/siot/",
    type : 'GET',
    dataType :"jsonp",
    success: function(jsonp){
      //toSource()
      var str = "";
      for(var i=0;i<jsonp.length;i++){
        if(jsonp[i].channel == 3){
          str = jsonp[i].value + "<br>"
          $("#sleep").append(str);
        }
      }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert("XMLHttpRequest : " + XMLHttpRequest.status);
      alert("textStatus : " + textStatus);
      alert("errorThrown : " + errorThrown.message);
    }
  });
}
