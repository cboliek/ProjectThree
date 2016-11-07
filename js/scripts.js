var deathAges;
var residenceCities;
var deathRaces;
var deathDrugs;
var injuryPlaces;




$( document ).ready(function() {
  console.log( "ready!" );
  loadData();
  loadData2();
  loadData3();
  // loadData5("InjuryPlace.json");
  $('#example').DataTable( {
       "ajax": 'data/datatable.json',
       responsive: true
   } );
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
        pattern: ['#c9797d', '#e0b8ba']
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
  };

//pie chart starts here for races

  function loadData2(){

    $.ajax({
      method: "GET",
      url: "data/race.json",
      dataType: "JSON",
      success: parsePie
    });
  }

  function parsePie(race){
    console.log("In First Pie Chart");
    // console.log(race);
    // console.log(race.deathRaces[0].Race);

    date1 = ["Race"];
    date2 = ["raceFreq"];


    $.each(race.deathRaces, function(i, item){
      // console.log(i);
      // console.log(item);
      date1.push(parseFloat(item.Race));
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
        columns: [date2],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
    });
    }

    //pie chart for drugs starts here

    function loadData3(){
      $.ajax({
        method: "GET",
        url: "data/ResidenceCity.json",
        dataType: "JSON",
        success: parseResidence
      });
      // console.log("loadData3");
    }

    function parseResidence(residence){
      console.log("In Pie Chart Two");
      // console.log(date);
      // console.log(date.deathDates[0].Heroin);
      // console.log(date.deathDates[0].Cocaine);
      // console.log(date.deathDates[0].Fentanyl);
      // console.log(date.deathDates[0].Oxycodone);
      // console.log(date.deathDates[0].Oxymorphone);
      // console.log(date.deathDates[0].Other);
      // console.log(date.deathDates[0].Heroin);
      // console.log(date.deathDates[0].Heroin);
      // console.log(date.deathDates[0].Heroin);

      datas1 = ["Residence"];


      $.each(datas1.residenceCities, function(i, item){
        // console.log(i);
        // console.log(item);
        datas1.push(parseFloat(item.ResidenceCity));
        // data2.push(parseFloat(item.injuries));



      })
      // console.log(deathDates);

      buildChart3();

    }

    function buildChart3(){
      // console.log("buildChart2()");
      var chart = c3.generate({
          bindto: '#chartCake',
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

  //donut chart for injury place starts here
  function loadData4(){

    $.ajax({
      method: "GET",
      url: "data/ResidenceCity.json",
      dataType: "JSON",
      success: parseDonut
    });
  }

  function parseDonut(injuryPlace){
    // console.log(date);
    // console.log(date.deathDates[0].Heroin);
    // console.log(date.deathDates[0].Cocaine);
    // console.log(date.deathDates[0].Fentanyl);
    // console.log(date.deathDates[0].Oxycodone);
    // console.log(date.deathDates[0].Oxymorphone);
    // console.log(date.deathDates[0].Other);
    // console.log(date.deathDates[0].Heroin);
    // console.log(date.deathDates[0].Heroin);
    // console.log(date.deathDates[0].Heroin);

    datas1 = ["InjuryPlace"];
    datas2 = ["placeFreq"];


    $.each(datas1.injuryPlaces, function(i, item){
      // console.log(i);
      // console.log(item);
      datas1.push(parseFloat(item.InjuryPlace));
      datas1.push(parseFloat(item.placeFreq));
      // data2.push(parseFloat(item.injuries));



    })
    // console.log(deathDates);

    buildChart3();

  }

  function buildChart3(){
    // console.log("buildChart2()");
    var chart = c3.generate({
        bindto: '#chartDonut',
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
          pattern: ['#a1b5ad']
        },
        axis: {
          y: {
            label: {
              text: 'Y Label',
              position: 'outer-middle'
            },
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
    };
      var chart = c3.generate({
          data: {
              columns: [
                  ['datas1', 30],
                  ['datas2', 120],
              ],
              type : 'donut',
              onclick: function (d, i) { console.log("onclick", d, i); },
              onmouseover: function (d, i) { console.log("onmouseover", d, i); },
              onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
              title: "Iris Petal Width"
          }
      });

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
