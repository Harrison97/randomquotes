$(document).ready(function(){
	var json, index, keys
	$.getJSON("https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json", function(source){
		console.log("getting json...");
		json = source;
		index = parseInt(Math.random()*json.length)
		console.log(index)
		data = json[index]
		keys = Object.keys(data);
		
		if(data[keys[1]] == "") {
			data[keys[1]] = "Unknown"
		}
			console.log(keys[0])
		console.log(data[keys[0]]);
		console.log(keys[1])
		console.log(data[keys[1]]);
		$("#quoteText").html("\""+data[keys[0]]+"\"")
		$("#quoteAuthor").html("-"+data[keys[1]])
	})
	$("#newQuote").on("click", function(){
		index = parseInt(Math.random()*json.length)
		console.log(index)
		data = json[index]
		if(data[keys[1]] == "") {
			data[keys[1]] = "Unknown"
		}
		console.log(keys[0])
		console.log(data[keys[0]]);
		console.log(keys[1])
		console.log(data[keys[1]]);
		$("#quoteText").html("\""+data[keys[0]]+"\"")
		$("#quoteAuthor").html("-"+data[keys[1]])
	})
	var bgnum=1
	window.setInterval(function(){
		$(".bg-img").css({"background": "url(\"images/bg"+bgnum%3+".gif\") no-repeat center center fixed",
						"-webkit-background-size": "cover",
						"-moz-background-size": "cover",
						"-o-background-size": "cover",
						"background-size": "cover", 
						"position": "fixed",
						"z-index": "-1",
						"height": "100vh",
						"width": "100%",
						"-webkit-filter": "blur(5px)",
						"-moz-filter": "blur(5px)",
						"-o-filter": "blur(5px)",
						"-ms-filter": "blur(5px)",
						"filter": "blur(5px)"});
		console.log("changing background...")
		bgnum++
	}, 10 * 1000)
	
	
})

