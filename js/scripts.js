var deathAges;
var residenceCities;
var deathRaces;
var deathDrugs;
var injuryPlaces;




$( document ).ready(function() {
  console.log( "ready!" );
  loadData("age.json");
  loadData3("data/drugs.json");
  // loadData4("ResidenceCity.json");
  loadData2("race.json");
  // loadData5("InjuryPlace.json");
  $('#example').DataTable( {
       "ajax": 'data/datatable.json'
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



  })
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
        pattern: ['#e0b8ba']
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
    // console.log(date);
    // console.log(race.deathRaces[0].Race);

    date1 = ["Race"];
    date2 = ["raceFreq"]


    $.each(race.deathRaces, function(i, item){
      // console.log(i);
      // console.log(item);
      date1.push(parseFloat(item.Race));
      date2.push(parseFloat(item.raceFreq));
      // data2.push(parseFloat(item.injuries));



    })
    // console.log(deathDates);

    buildChart2();

  }





  function buildChart2(){
    // console.log("buildChart2()");
    var chart = c3.generate({
        bindto: '#chartPie1',
        data: {
        // iris data from R
        columns: [date1, date2],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
    });
    };

    //pie chart for drugs starts here

    function loadData3(drugsURL){

      $.ajax({
        method: "GET",
        url: drugsURL,
        dataType: "JSON",
        success: parsePie
      });
    }

    function parsePie(date){
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

      date1 = ["Date"];


      $.each(date.deathDates, function(i, item){
        // console.log(i);
        // console.log(item);
        date1.push(parseFloat(item.Date));
        // data2.push(parseFloat(item.injuries));



      })
      // console.log(deathDates);

      buildChart3();

    }

    function buildChart3(){
      // console.log("buildChart2()");
      var chart = c3.generate({
          bindto: '#chartPie',
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
