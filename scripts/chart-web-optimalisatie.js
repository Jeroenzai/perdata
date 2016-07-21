	var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var lineChartData = {
			labels : ["Coderen"," ","Optimaliseren","","Testen & meten","","Resultaat"],
			datasets : [
				{
					label: "Directe bezoekers",
					fillColor : "rgba(17, 180, 105, 0.2)",
					strokeColor : "rgba(17, 180, 105,1)",
					pointColor : "rgba(17, 180, 105,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(17, 180, 105,1)",
					data : [ 0.0 , 0.05 , 0.2, 0.5, 0.8, 0.95, 1]
				}
			]

		}

	window.onload = function(){
		var ctx = document.getElementById("line-chart-web-opt").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			showScale: true,
            showTooltips: false,
          	scaleShowGridLines : false,
            scaleShowHorizontalLines: false,
            scaleShowVerticalLines: false,
            pointDot : false,
            responsive: true,
            sdatasetFill : false,
            datasetStrokeWidth : 4,
		    datasetFill : false
		});
		};
	