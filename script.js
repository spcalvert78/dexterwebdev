function showviz() {
 document.getElementById("demo").style.display='block';
}

function hideviz() {
 document.getElementById("demo").style.display='none';
}

function makegraph() {
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

/*

var layout = {
  autosize: false,
  width: 500,
  height: 500,
  margin: {
    l: 50,
    r: 50,
    b: 100,
    t: 100,
    pad: 4
  },
  paper_bgcolor: "#7f7f7f",
  plot_bgcolor: "#c7c7c7"
};
var graphOptions = {layout: layout, filename: "size-margins", fileopt: "overwrite"};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});

*/
