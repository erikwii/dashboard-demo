$(function () {


  // =====================================
  // Profit
  // =====================================
  var chart = {
    series: [
      { name: "Iklan Baru", data: [280, 250, 325, 215, 250, 310, 100], type: "area"},
      { name: "Iklan Aktif", data: [355, 390, 300, 350, 390, 180, 140], type: "column"},
      { name: "Iklan Highlight", data: [200, 120, 89, 54, 182, 111, 50], type: "column"},
      { name: "Iklan Sundul", data: [100, 90, 67, 102, 65, 98, 45], type: "column"},
    ],

    chart: {
      // type: "area",
      height: 400,
      offsetX: -15,
      toolbar: { show: true },
      zoom: { enabled: false },
      foreColor: "#adb0bb",
      fontFamily: 'inherit',
      sparkline: { enabled: false },
    },

    fill: {
      opacity: [0.1, 1, 1, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        // stops: [0, 100, 100, 100]
      }
    },


    colors: ["#F05C2A", "#3A77FF", "#17376D"],


    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadius: [6],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },
    markers: { size: 0 },

    dataLabels: {
      enabled: false,
    },


    legend: {
      show: true,
    },


    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    xaxis: {
      type: "category",
      categories: ["12/23", "01/24", "02/24", "03/24", "04/24", "05/24", "06/24"],
      labels: {
        style: { cssClass: "grey--text lighten-2--text fill-color" },
      },
    },


    yaxis: {
      show: true,
      min: 0,
      max: 400,
      tickAmount: 4,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      width: [3,0,0,0],
      lineCap: "butt",
      colors: ["#F05C2A"],
    },

    markers: {
      size: 5,
      color: "#F05C2A",
    },


    tooltip: { theme: "light" },

    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
            }
          },
        }
      }
    ]


  };

  var chart = new ApexCharts(document.querySelector("#chart"), chart);
  chart.render();


  // =====================================
  // Breakup
  // =====================================
  var breakup = {
    color: "#adb5bd",
    series: [38, 40, 25],
    labels: ["Showroom 1", "Showroom 2", "Showroom 3"],
    chart: {
      width: 180,
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '50%',
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["#F05C2A", "#3A77FF", "#17376D"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 150,
          },
        },
      },
    ],
    tooltip: {
      theme: "light",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#breakup"), breakup);
  chart.render();



  // =====================================
  // Earning
  // =====================================
  var earning = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Jumlah Views",
        color: "#17376D",
        data: [250, 166, 120, 240, 212, 358, 320],
      },
    ],

    xaxis: {
      type: "category",
      categories: ["12/23", "01/24", "02/24", "03/24", "04/24", "05/24", "06/24"],
      labels: {
        style: { cssClass: "grey--text lighten-2--text fill-color" },
      },
    },
    
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "light",
      fixed: {
        enabled: false,
        position: "auto",
      },
      x: {
        show: true,
      },
    },
  };
  new ApexCharts(document.querySelector("#earning"), earning).render();
})




// =================
// PRICING DASHBOARD
// =================

var chartPricing = {
  series: [
    { name: "Harga Tertinggi", data: [452500000, 390000000, 280000000, 420000000], type: "area"},
    { name: "Harga Rata-Rata", data: [250000000, 270000000, 200000000, 265000000], type: "line"},
    { name: "Harga Terendah", data: [200000000, 120000000, 60000000, 120000000], type: "area"},
  ],

  chart: {
    // type: "area",
    height: 350,
    offsetX: 0,
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: "#adb0bb",
    fontFamily: 'inherit',
    sparkline: { enabled: false },
    opacity: [0.5, 0.5, 0.5],
  },

  fill: {
    opacity: [0.1, 0.5, 0.5],
    colors: ["#00FF19", "#00FF19", "#17376D"],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      // stops: [0, 100, 100, 100]
    }
  },


  colors: ["#EE2E31", "#27a300", "#17376D"],


  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
      borderRadius: [6],
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all'
    },
  },
  markers: { size: 0 },

  dataLabels: {
    enabled: false,
  },


  legend: {
    show: true,
  },


  grid: {
    borderColor: "rgba(0,0,0,0.1)",
    strokeDashArray: 3,
    xaxis: {
      lines: {
        show: false,
      },
    },
  },

  xaxis: {
    type: "category",
    categories: ["12/23", "01/24", "02/24", "03/24", "04/24", "05/24", "06/24"],
    labels: {
      style: { cssClass: "grey--text lighten-2--text fill-color" },
    },
  },


  yaxis: {
    show: true,
    min: 0,
    // max: 1000,
    tickAmount: 4,
    labels: {
      style: {
        cssClass: "grey--text lighten-2--text fill-color",
      },
      formatter: function (value) {
        var resultFormat = "";

        if (value >= 1000000000) {
          resultFormat = Math.round(((value/1000000000) + Number.EPSILON)*10) / 10 + " miliar";
        }
        if (value < 1000000000) {
          resultFormat = Math.round(((value/1000000) + Number.EPSILON)*10) / 10 + " juta";
        }
        if (value < 1000000) {
          resultFormat = Math.round(((value/1000) + Number.EPSILON)*10) / 10 + " ribu";
        } 
        if (value < 1000) {
          resultFormat = value;
        }

        return resultFormat;
      }
    },
  },
  stroke: {
    opacity: [1, 1, 1],
    show: true,
    curve: "smooth",
    width: [3,4,3],
    lineCap: "butt",
    colors: ["#EE2E31", "#27a300", "#17376D"],
  },

  markers: {
    size: 5,
    color: ["#EE2E31", "#27a300", "#17376D"],
  },


  tooltip: { theme: "light" },

  responsive: [
    {
      breakpoint: 600,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 3,
          }
        },
      }
    }
  ]


};

var chartPricing = new ApexCharts(document.querySelector("#chart-pricing"), chartPricing);
chartPricing.render();