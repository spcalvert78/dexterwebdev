var artistName = [];
var collectionName =[];
var price = [];

function showMusic() {
  $.ajax({
    url: 'https://itunes.apple.com/search?term=Twentysomething',
    type: "GET",
    dataType: 'json',
    success: function(response){
      music = response;
      console.log(music.results[0])
      console.log(JSON.stringify(music.results[0]['collectionPrice']))
      // console.log(music.results[0]['artworkUrl100']);
      /*$(this).attr("src", music.results[0]['artworkUrl100']);*/
      /*document.getElementById("albumPic").attr("src", music.results[0]['artworkUrl100']);*/
      document.getElementById("myImg").src = music.results[0]['artworkUrl100'];
      document.getElementById("artistName").innerHTML = music.results[0]['artistName'];
      document.getElementById("myCollectionName").innerHTML = music.results[0]['collectionName'];
      document.getElementById("costsSomething").innerHTML = music.results[0]['collectionPrice'];
      // var x = JSON.stringify(music.results[0]['collectionPrice']);
      // document.getElementById("price").innerHTML = x;
      // console.log(x)
      }
    })
};
