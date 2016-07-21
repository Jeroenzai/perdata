	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var lineChartData = {
			labels : ["Januari","Februari","Maart","April","Mei","Juni","Juli"],
			datasets : [
				{
					label: "Directe bezoekers",
					fillColor : "rgba(17, 180, 105, 0.2)",
					strokeColor : "rgba(17, 180, 105,1)",
					pointColor : "rgba(17, 180, 105,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(17, 180, 105,1)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				},
				{
					label: "Via zoekmachines",
					fillColor : "rgba(151,187,205,0.2)",
					strokeColor : "rgba(151,187,205,1)",
					pointColor : "rgba(151,187,205,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgb(65, 148, 190)",
					data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]

		}

	window.onload = function(){
		var ctx = document.getElementById("line-chart-web").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData);
		};
	