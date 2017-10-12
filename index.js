$(document).ready(function(){
	$("#newQuote").on("click", function(){
		$.getJSON("https://raw.githubusercontent.com/4skinSkywalker/Database-Quotes-JSON/master/quotes.json", function(json){
			console.log("getting json...");
			var index = parseInt(Math.random()*json.length)
			console.log(index)
			var data = json[index]
			// keys[0] === quote keys[1] === author
			var keys = Object.keys(data);
			
			if(data[keys[1]] == "") {
				data[keys[1]] = "Unknown"
			}

			console.log(keys[0])
			console.log(data[keys[0]]);
			console.log(keys[1])
			console.log(data[keys[1]]);
			$("#quoteText").html(data[keys[0]])
			$("#quoteAuthor").html(data[keys[1]])
		})
	})
	
})