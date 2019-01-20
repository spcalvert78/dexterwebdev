function getData() {
var myTable = Papa.parse('US_births_2000-2014_SSA.csv',);
console.log(myTable);
}

/*
function getData() {

var result = $.csv.toArray("US_births_2000-2014_SSA.csv");
{
  console.result[0];
});
*/

/*

function getData() {
}

Plotly.d3.csv('US_births_2000-2014_SSA.csv') , (err, rows) => {
  var data =  */

/*
var years = ['2014', '2015', '2016']

Plotly.d3.csv('https://raw.githubusercontent.com/apodagrosi/datasets/master/PlotlyTest_Summary_SalesByDealerByYear.csv', (err, rows) => {
  var data = years.map(y => {
    var d = rows.filter(r => r.year === y)

    return {
      type: 'bar',
      name: y,
      x: d.map(r => r.dealer),
      y: d.map(r => r.sales)
    }
  })

  Plotly.newPlot('graph', data)
}) */
