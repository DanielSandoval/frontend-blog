// Javascript Code.
$(document).ready(function () {
  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });

  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);

    order_date(posts["posts"]); //This is a function to order the posts by date

    function order_date(myArray){
      //This function runs through
      var size = myArray.length;

      for(var pass = 1; pass < size; pass++){ // outer loop
        for( var up = 0; up < (size - pass); up++){ // inner loop
				  var down = up + 1;
				  if(myArray[up]['date'] < myArray[down]['date']){
            swap(myArray, down, up);
				  }
        }
      }
    }

	function swap(myArray, indexOne, indexTwo) {
    //This changes the order of the posts
		var tmpVal = myArray[indexOne];
		myArray[indexOne] = myArray[indexTwo];
		myArray[indexTwo] = tmpVal;
	}

    //Here we add the information to the posts in HTML
    $("#titulo_1").html(posts['posts'][0]['title']);
    $(".parrafo_1").html(posts['posts'][0]['content']);
    $(".fecha_1").html(posts['posts'][0]['date']);

    $("#titulo_2").html(posts['posts'][1]['title']);
    $(".parrafo_2").html(posts['posts'][1]['content']);
    $(".fecha_2").html(posts['posts'][1]['date']);

    $("#titulo_3").html(posts['posts'][2]['title']);
    $(".parrafo_3").html(posts['posts'][2]['content']);
    $(".fecha_3").html(posts['posts'][2]['date']);
  });

  //We hide some options
  $(".search_box").hide();
  $(".drop_down_1").hide();
  $(".drop_down_2").hide();
  $(".drop_down_3").hide();

  $(".search").click(function () {
  	$(".search_box").toggle();
  });

  //This search a word in the posts
  $('.search_box').keyup(function(){
  	buscar = $(this).val();
  	$('.content_for_search p').removeClass('highlight');
  	if(jQuery.trim(buscar) != ''){
  		$(".content_for_search p:icontains('" + buscar + "')").addClass('highlight');
  	}
  });

  $("#titulo_1").click(function() {
  	$(".drop_down_1").addClass("current");
  	$(".current").toggle();
  	$(".drop_down_1").removeClass("current");
  });

  $("#titulo_2").click(function() {
  	$(".drop_down_2").addClass("current");
  	$(".current").toggle();
  	$(".drop_down_2").removeClass("current");
  });

  $("#titulo_3").click(function() {
  	$(".drop_down_3").addClass("current");
  	$(".current").toggle();
  	$(".drop_down_3").removeClass("current");
  });

  //Adding comments

  $("#comment_button_1").click(function() {
  	var comment = $("input[name=my_comment_1]").val();
  	$("#comments_area_1").append("<p>" + comment + "</p>");
  	$("input[name=my_comment_1]").val("");
  });

  $("#comment_button_2").click(function() {
  	var comment = $("input[name=my_comment_2]").val();
  	$("#comments_area_2").append("<p>" + comment + "</p>");
  	$("input[name=my_comment_2]").val("");
  });

  $("#comment_button_3").click(function() {
  	var comment = $("input[name=my_comment_3]").val();
  	$("#comments_area_3").append("<p>" + comment + "</p>");
  	$("input[name=my_comment_3]").val("");
  });
});
