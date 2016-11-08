var deathAges;
var residenceCities;
var deathRaces;
var deathDrugs;
var injuryPlaces;



$( document ).ready(function() {
  console.log( "ready!" );
  $('#example').DataTable( {
       "ajax": 'data/datatable.json',
       responsive: true
   } );

   loadData();
   loadData2();
   loadData3();
  //  loadData4();
  //  loadData5();
});

function loadData(){

  $.ajax({
    method: "GET",
    url: "data/Ages.json",
    dataType: "JSON",
    success: parseData
  });
}

function parseData(data){
  // console.log(data);
  // console.log(parseFloat(data.deathAges[0].Age));

  data1 = ["Age"];
  data2 = ["ageFreq"];


  $.each(data.deathAges, function(i, item){
    // console.log(i);
    // console.log(item);
    data1.push(parseFloat(item.Age));
    data2.push(parseFloat(item.ageFreq));



  });
  // console.log(deathAges);

  buildChart();

}





function buildChart(){
  // console.log("buildChart()");
  var chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [data1, data2],
        axes: {
          ageFreq: 'y2'
        },
        types: {
          ageFreq: 'bar'
        }
      },
      color: {
        pattern: ['#4591B8', '#85A5CC']
      },
      axis: {
        y: {
          label: {
            text: 'Y Label',
            position: 'outer-middle'
          }
          // tick: {
          //   format: d3.format("$,") // ADD
          // }
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
  }


//pie chart for Residence

var chart = c3.generate({
    bindto:'#chartPie',
    data: {

        // iris data from R
        columns: [
            ['Heroin', 24],
            ['Cocaine', 10],
            ['Fentanyl', 4],
            ['Oxycodone', 10],
            ['EtOH', 5],
            // ['Hydrocodone', 4],
            ['Benzodiazepine', 16],
            ['Methadone', 9],
            ['Other', 12]


        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    color: {
      pattern: ['#1A1F2B', '#30395C', '#4A6491', '#85A5CC', '#D0E4F2']
    }

});


//pie chart starts here for races

  function loadData2(){

    $.ajax({
      method: "GET",
      url: "data/race.json",
      dataType: "JSON",
      success: parsePie
    });
    console.log("Loading Data for first Pie");
  }

  function parsePie(race){
    console.log(race);
    // console.log("here");
    // console.log(race.deathRaces[0].Race);

    date1 = ["Race"];
    date2 = ["raceFreq"];

    $.each(race.deathRaces, function(i, item){
      // console.log(i);
      // console.log(item);
      date1.push(item.Race);
      date2.push(parseFloat(item.raceFreq));
      // data2.push(parseFloat(item.injuries));

    });


    buildChart2();

  }





  function buildChart2(){
    // console.log("buildChart2()");
    var chart = c3.generate({
        bindto: '#chartPie1',
        data: {
         // iris data from R
         columns: [
             ['white', 41],
             ['black', 6],
             ['hispanic/white', 3],
             ['unknown', 1]
         ],
         type : 'pie',
         onclick: function (d, i) { console.log("onclick", d, i); },
         onmouseover: function (d, i) { console.log("onmouseover", d, i); },
         onmouseout: function (d, i) { console.log("onmouseout", d, i); }
     },
     color: {
       pattern: ['#567183', '#476279', '#2D4254', '#99B1BE']
     },
    });
  }

    //pie chart for drugs starts here

    function loadData3(){

      $.ajax({
        method: "GET",
        url: "data/ResidenceCity.json",
        dataType: "JSON",
        success: parseRes
      });

      console.log("Data for Pie 2");
    }

    // function parseRes(resData) {
    //   console.log("data in resData");
    //   console.log(resData);
    // }

//BAR CHART - INJURY
    var chart = c3.generate({
      bindto: '#chartPie2',
    data: {
        columns: [
            ['Residence', 41],
            ['Parking Lot', 2],
            ['Automobile', 1],
            ['Hotel or Motel', 1],
            ['Driveway', 1],
            ['Other', 5]
        ],
        type: 'bar'
    },
    color: {
      pattern: ['#6494BF', '#1B2833', '#3C5973', '#3C5973', '#2F4559', '#99B1BE']
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});

    // function parseRes(residence){
    //   console.log(residence);
    //
    //   datas1 = ["Residence"];
    //
    //
    //   $.each(datas1.residenceCities, function(i, item){
    //     console.log(i);
    //     console.log(item);
    //     datas1.push(parseFloat(item.ResidenceCity));
    //     data2.push(parseFloat(item.injuries));
    //
    //   });
    //   console.log(deathDates);
    //
    //   buildChart3();
    //
    // }

    function buildChart3(){
      // console.log("buildChart2()");
      var chart = c3.generate({
          bindto: '#chartPie',
          data: {
            columns: [datas1],
            axes: {
              Residence: 'y2'
            },
            types: {
              Residence: 'line'
            }
          },
          color: {
            pattern: ['#1A1F2B']
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

      // $(window).scroll(function(){
      //     if ($(this).scrollTop() > 100) {
      //         $('.scrollup').fadeIn();
      //     } else {
      //         $('.scrollup').fadeOut();
      //     }
      // });
      //
      // $('.scrollup').click(function(){
      //     $("html, body").animate({ scrollTop: 0 }, 600);
      //     return false;
      // });
