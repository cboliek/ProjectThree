var deathAges;
var deathCities;
var deathDates;
var deathDrugs;



$( document ).ready(function() {
  console.log( "ready!" );
  loadData("age.json");
  loadData3("drugs.json");
  loadData("deathcity.json");
  loadData2("race.json");
  $('#example').DataTable( {
       "ajax": 'data/datatable.json'
   } );
});

function loadData(){

  $.ajax({
    method: "GET",
    url: "data/age.json",
    dataType: "JSON",
    success: parseData
  });
}

function parseData(data){
  // console.log(data);
  // console.log(parseFloat(data.deathAges[0].Age));

  data1 = ["Age"];


  $.each(data.deathAges, function(i, item){
    // console.log(i);
    // console.log(item);
    data1.push(parseFloat(item.Age));
    // data2.push(parseFloat(item.injuries));



  })
  // console.log(deathAges);

  buildChart();

}





function buildChart(){
  // console.log("buildChart()");
  var chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [data1],
        axes: {
          Age: 'y2'
        },
        types: {
          Age: 'bar'
        }
      },
      color: {
        pattern: ['#c5aeb5']
      },
      axis: {
        y: {
          label: {
            text: 'Y Label',
            position: 'outer-middle'
          },
          tick: {
            format: d3.format("$,") // ADD
          }
        },
        y2: {
          show: true,
          label: {
            text: 'Y2 Label',
            position: 'outer-middle'
          }
        }
      }
  });
  };

//pie chart starts here

  function loadData2(){

    $.ajax({
      method: "GET",
      url: "data/race.json",
      dataType: "JSON",
      success: parseLine
    });
  }

  function parseLine(race){
    // console.log(date);
    console.log(date.deathRaces[0].Date);

    date1 = ["Date"];


    $.each(date.deathDates, function(i, item){
      // console.log(i);
      console.log(item);
      date1.push(parseFloat(item.Date));
      // data2.push(parseFloat(item.injuries));



    })
    // console.log(deathDates);

    buildChart2();

  }





  function buildChart2(){
    // console.log("buildChart2()");
    var chart = c3.generate({
        bindto: '#chartLine',
        data: {
          columns: [date1],
          axes: {
            Date: 'y2'
          },
          types: {
            Date: 'line'
          }
        },
        color: {
          pattern: ['#a1b5ad']
        },
        axis: {
          y: {
            label: {
              text: 'Y Label',
              position: 'outer-middle'
            },
            tick: {
              format: d3.format("$,") // ADD
            }
          },
          y2: {
            show: true,
            label: {
              text: 'Y2 Label',
              position: 'outer-middle'
            }
          }
        }
    });
    };

    //pie chart for drugs starts here

    // function loadData3(){
    //
    //   $.ajax({
    //     method: "GET",
    //     url: "data/drugs.json",
    //     dataType: "JSON",
    //     success: parsePie
    //   });
    // }
    //
    // function parsePie(date){
    //   // console.log(date);
    //   console.log(date.deathDates[0].Heroin);
    //   console.log(date.deathDates[0].Cocaine);
    //   console.log(date.deathDates[0].Fentanyl);
    //   console.log(date.deathDates[0].Oxycodone);
    //   console.log(date.deathDates[0].Oxymorphone);
    //   console.log(date.deathDates[0].Other);
    //   console.log(date.deathDates[0].Heroin);
    //   console.log(date.deathDates[0].Heroin);
    //   console.log(date.deathDates[0].Heroin);
    //
    //   date1 = ["Date"];
    //
    //
    //   $.each(date.deathDates, function(i, item){
    //     // console.log(i);
    //     console.log(item);
    //     date1.push(parseFloat(item.Date));
    //     // data2.push(parseFloat(item.injuries));
    //
    //
    //
    //   })
    //   // console.log(deathDates);
    //
    //   buildChart3();
    //
    // }
    //
    //
    //
    //
    //
    // function buildChart3(){
    //   // console.log("buildChart2()");
    //   var chart = c3.generate({
    //       bindto: '#chartPie',
    //       data: {
    //         columns: [date1],
    //         axes: {
    //           Date: 'y2'
    //         },
    //         types: {
    //           Date: 'line'
    //         }
    //       },
    //       color: {
    //         pattern: ['#a1b5ad']
    //       },
    //       axis: {
    //         y: {
    //           label: {
    //             text: 'Y Label',
    //             position: 'outer-middle'
    //           },
    //           tick: {
    //             format: d3.format("$,") // ADD
    //           }
    //         },
    //         y2: {
    //           show: true,
    //           label: {
    //             text: 'Y2 Label',
    //             position: 'outer-middle'
    //           }
    //         }
    //       }
    //   });
    //   };
