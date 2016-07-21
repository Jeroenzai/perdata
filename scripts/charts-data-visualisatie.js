var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

    var pieData = [{
        value: 70,
        color: "#21719d",
        highlight: "#135980",
        label: "Type A - Zeer winstgevend"
    }, {
        value: 325,
        color: "#374e79",
        highlight: "#263b62",
        label: "Type B - Winstgevend"
    }, {
        value: 180,
        color: "#364053",
        highlight: "#232934",
        label: "Type C - Quite spelend "
    }, {
        value: 140,
        color: "#929eb1",
        highlight: "#A8B3C5",
        label: "Type D - Verliesgevend"
    }];

	var barChartData = {
		labels : ["Scholieren","Studenten","Starters","Gezinnen","65-plussers"],
		datasets : [
			{
                label: "Man",
				fillColor : "rgba(161, 203, 161, 0.5)",
				strokeColor : "rgba(161, 203, 161,0.8)",
				highlightFill: "rgba(161, 203, 161,0.75)",
				highlightStroke: "rgba(161, 203, 161,1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			},
			{
                label: "Vrouw",
				fillColor : "rgba(151,187,205,0.5)",
				strokeColor : "rgba(151,187,205,0.8)",
				highlightFill : "rgba(151,187,205,0.75)",
				highlightStroke : "rgba(220,220,220,1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			}
		]
	}
    
    window.onload = function(){
        var ctx1 = document.getElementById("pie-chart").getContext("2d");
        window.myPie = new Chart(ctx1).Pie(pieData);
		var ctx2 = document.getElementById("bar-chart").getContext("2d");
		window.myBar = new Chart(ctx2).Bar(barChartData,  {
          	scaleShowGridLines : false,
		});
    }

	