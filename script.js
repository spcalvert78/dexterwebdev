function showviz() {
 document.getElementById("demo").style.display='block';
}

function scrollToMyViz() {
  var elmnt = document.getElementById("demo");
  elmnt.scrollIntoView();
}

function showviz2() {
 document.getElementById("threeCircles").style.display='block';
}

function scrollWin() {
  window.scrollTo(0, 5000);
}

function scrollToMyGraph() {
  var elmnt = document.getElementById("threeCircles");
  elmnt.scrollIntoView();
}

function hideviz() {
 document.getElementById("demo").style.display='none';
}

var chosenColor;
var chosenPct;
function makegraph(myColor, myPct) {
 chosenColor = myColor;
 chosenPct = myPct;
 var trace = {
    x: ['Blue', 'Green', 'Purple', 'Red', 'Black', 'Pink', 'Yellow', 'Orange', 'White', 'Brown','Other'],
    y: [31, 15, 14, 12, 9, 5, 4, 3, 2, 2, 3],
    marker:{
    color: ['blue', 'green', 'purple', 'red', 'black', 'pink', 'Yellow', 'Orange', 'White', 'Brown','Grey']
  },
    type: 'bar'
  };
 var data = [ trace ];
 var layout = {
   autosize: true,
   title: 'Which one of the colors do you like the most?',
   annotations: [
    {
      x: chosenColor,
      y: chosenPct,
      xref: 'x',
      yref: 'y',
      text: 'you are here',
      showarrow: true,
      arrowhead: 70,
      ax: 0,
      ay: -40
    }
  ],
   xaxis: {
    title: {
      text: 'Most Liked Color',
      font: {
        family: 'verdana',
        size: 12,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Percent of Total Respondents',
      font: {
        family: 'verdana',
        size: 12,
        color: '#7f7f7f'
      }
    }
  }
 }
 Plotly.newPlot('myGraph', data, layout);
}

function makeHeatmap () {

var xValues = ['1', '2', '3', '4', '5','6','7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
'17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29','30', '31'];

var yValues = ['December', 'November', 'October', 'September', 'August', 'July', 'June',
'May', 'April', 'March', 'February', 'January'];

var zValues = [
  [0.274, 0.271, 0.275, 0.273, 0.279, 0.273, 0.265, 0.264, 0.263, 0.271, 0.271, 0.289, 0.271, 0.270, 0.271, 0.274, 0.283, 0.291, 0.300, 0.300, 0.289, 0.277, 0.250, 0.194, 0.155, 0.238, 0.294, 0.294, 0.291, 0.287, 0.254],
  [0.283, 0.274, 0.271, 0.270, 0.276, 0.276, 0.282, 0.278, 0.269, 0.269, 0.271, 0.274, 0.268, 0.282, 0.281, 0.273, 0.271, 0.272, 0.279, 0.286, 0.290, 0.258, 0.238, 0.242, 0.241, 0.251, 0.242, 0.253, 0.269, 0.268, 0.000],
  [0.288, 0.287, 0.292, 0.285, 0.277, 0.274, 0.273, 0.278, 0.276, 0.290, 0.280, 0.272, 0.261, 0.269, 0.277, 0.276, 0.283, 0.278, 0.268, 0.269, 0.268, 0.275, 0.275, 0.283, 0.279, 0.269, 0.269, 0.270, 0.271, 0.268, 0.248],
  [0.264, 0.267, 0.269, 0.277, 0.288, 0.283, 0.284, 0.292, 0.297, 0.300, 0.282, 0.307, 0.294, 0.294, 0.294, 0.292, 0.299, 0.300, 0.306, 0.303, 0.291, 0.289, 0.290, 0.294, 0.294, 0.300, 0.294, 0.282, 0.280, 0.277, 0.000],
  [0.295, 0.288, 0.279, 0.280, 0.281, 0.285, 0.288, 0.300, 0.292, 0.282, 0.282, 0.283, 0.282, 0.290, 0.298, 0.293, 0.284, 0.283, 0.281, 0.290, 0.289, 0.296, 0.290, 0.281, 0.281, 0.281, 0.289, 0.295, 0.298, 0.293, 0.285],
  [0.286, 0.291, 0.282, 0.213, 0.259, 0.283, 0.295, 0.289, 0.290, 0.291, 0.295, 0.287, 0.273, 0.282, 0.283, 0.289, 0.290, 0.294, 0.286, 0.280, 0.283, 0.281, 0.287, 0.287, 0.293, 0.287, 0.280, 0.280, 0.279, 0.285, 0.285],
  [0.276, 0.276, 0.271, 0.276, 0.276, 0.279, 0.277, 0.272, 0.269, 0.271, 0.274, 0.278, 0.275, 0.280, 0.272, 0.273, 0.272, 0.280, 0.276, 0.286, 0.280, 0.273, 0.272, 0.272, 0.281, 0.282, 0.289, 0.287, 0.279, 0.280, 0.000],
  [0.272, 0.276, 0.270, 0.261, 0.267, 0.263, 0.268, 0.271, 0.274, 0.275, 0.264, 0.266, 0.257, 0.272, 0.276, 0.281, 0.275, 0.267, 0.266, 0.270, 0.277, 0.279, 0.288, 0.281, 0.268, 0.249, 0.257, 0.260, 0.265, 0.273, 0.266],
  [0.249, 0.271, 0.271, 0.280, 0.271, 0.261, 0.262, 0.262, 0.266, 0.268, 0.276, 0.272, 0.253, 0.262, 0.262, 0.268, 0.269, 0.274, 0.270, 0.263, 0.261, 0.261, 0.266, 0.268, 0.274, 0.270, 0.261, 0.261, 0.259, 0.264, 0.000],
  [0.276, 0.265, 0.268, 0.265, 0.269, 0.270, 0.276, 0.272, 0.265, 0.265, 0.263, 0.270, 0.263, 0.277, 0.272, 0.264, 0.270, 0.264, 0.268, 0.273, 0.278, 0.272, 0.264, 0.264, 0.265, 0.267, 0.269, 0.276, 0.268, 0.263, 0.260],
  [0.272, 0.267, 0.263, 0.268, 0.263, 0.267, 0.279, 0.275, 0.264, 0.266, 0.271, 0.268, 0.262, 0.289, 0.278, 0.266, 0.262, 0.269, 0.262, 0.269, 0.274, 0.276, 0.265, 0.263, 0.269, 0.263, 0.268, 0.275, 0.067, 0.000, 0.000],
  [0.187, 0.232, 0.274, 0.276, 0.268, 0.264, 0.270, 0.262, 0.263, 0.276, 0.274, 0.267, 0.256, 0.271, 0.259, 0.262, 0.272, 0.271, 0.260, 0.261, 0.265, 0.262, 0.269, 0.276, 0.272, 0.264, 0.261, 0.266, 0.259, 0.266, 0.272],
];

var colorscaleValue = [
  [0, 'white'],
  [.1, 'lightyellow'],
  [.31, 'darkorange']
];

var data = [{
  x: xValues,
  y: yValues,
  z: zValues,
  type: 'heatmap',
  colorscale: colorscaleValue,
  showscale: false
}];

var layout = {
  annotations: [],
  xaxis: {
    ticks: '',
    side: 'top'
  },
  yaxis: {
    ticks: '',
    ticksuffix: ' ',
    width: 600,
    height: 600,
    autosize: true
  }
};

for ( var i = 0; i < yValues.length; i++ ) {
  for ( var j = 0; j < xValues.length; j++ ) {
    var currentValue = zValues[i][j];
    if (currentValue != 0.0) {
      var textColor = 'none';
    }else{
      var textColor = 'none';
    }
    /* annotations removed
    var result = {
      xref: 'x1',
      yref: 'y1',
      x: xValues[j],
      y: yValues[i],
      text: zValues[i][j],
      font: {
        family: 'Arial',
        size: .04,
        color: 'rgb(50, 171, 96)'
      },
      showarrow: false,
      font: {
        color: textColor
      }
    };
    layout.annotations.push(result); */
  }
}

Plotly.newPlot('myHeatmap', data, layout);

}

var xTimes = [];
var yTemps =[];
var weather = [];

function getWeather() {
  $.ajax({
    url: 'https://api.openweathermap.org/data/2.5/forecast?q=Wichita+Falls&id=524901&APPID=1e6b93b450b7a0a8169b59124b34994a&units=imperial',
    type: "GET",
    success: function(response){
      weather = response;
      console.log(weather);
      for (let i = 0; i<weather.list.length; i++) {
        yTemps.push(weather.list[i]['main']['temp_max']); // add values to the end of the array;
        var utcSeconds = weather.list[i]['dt'];
        var d = new Date(0);
        d.setUTCSeconds(utcSeconds);
        xTimes.push(d);
      }
    }
  })
};

getWeather();

function showWeather() {
 var trace = {
    x: xTimes,
    y: yTemps,
    //marker:{
    //color: ['blue', 'green', 'purple', 'red', 'black', 'pink', 'Yellow', 'Orange', 'White', 'Brown','Grey']
  //};
    type: 'scatter'
  };
 var data = [ trace ];
 var layout = {
   autosize: true,
   title: 'Forecasted Temperature',
  xaxis: {
    title: {
      text: 'Time',
      font: {
        family: 'verdana',
        size: 12,
        color: '#7f7f7f'
        }
    },
    tickformat: '%a %I%p',
  },
  yaxis: {
    title: {
      text: 'Temperature',
      font: {
        family: 'verdana',
        size: 12,
        color: '#7f7f7f'
      }
    }
  }
 }
 Plotly.newPlot('myWeatherGraph', data, layout);
}

function scrollToMyWeather() {
  var elmnt = document.getElementById("myWeatherGraph");
  elmnt.scrollIntoView();
}
