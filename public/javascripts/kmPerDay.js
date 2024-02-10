km_per_day = [
    [
        { "1": 250 },
        { "2": 360 },
        { "3": 290 },
        { "4": 510 },
        { "5": 400 },
        { "6": 0 },
        { "7": 480 },
        { "8": 330 },
        { "9": 0 },
        { "10": 410 },
        { "11": 0 },
        { "12": 520 },
        { "13": 380 },
        { "14": 0 },
        { "15": 450 },
        { "16": 200 },
        { "17": 590 },
        { "18": 340 },
        { "19": 0 },
        { "20": 480 },
        { "21": 0 },
        { "22": 510 },
        { "23": 270 },
        { "24": 600 },
        { "25": 400 },
        { "26": 0 },
        { "27": 520 },
        { "28": 290 },
        { "29": 0 },
        { "30": 560 }
    ],
    [
      {"1": 350},
      {"2": 600},
      {"3": 400},
      {"4": 0},
      {"5": 500},
      {"6": 0},
      {"7": 480},
      {"8": 330},
      {"9": 0},
      {"10": 410},
      {"11": 0},
      {"12": 520},
      {"13": 380},
      {"14": 0},
      {"15": 450},
      {"16": 200},
      {"17": 590},
      {"18": 340},
      {"19": 0},
      {"20": 480},
      {"21": 0},
      {"22": 510},
      {"23": 370},
      {"24": 600},
      {"25": 400},
      {"26": 0},
      {"27": 520},
      {"28": 390},
      {"29": 0},
      {"30": 560}
    ],
    [
      {"1": 350},
      {"2": 620},
      {"3": 470},
      {"4": 0},
      {"5": 520},
      {"6": 0},
      {"7": 0},
      {"8": 380},
      {"9": 0},
      {"10": 0},
      {"11": 480},
      {"12": 600},
      {"13": 0},
      {"14": 510},
      {"15": 0},
      {"16": 350},
      {"17": 0},
      {"18": 0},
      {"19": 0},
      {"20": 460},
      {"21": 330},
      {"22": 0},
      {"23": 630},
      {"24": 470},
      {"25": 0},
      {"26": 590},
      {"27": 400},
      {"28": 0},
      {"29": 650},
      {"30": 0}
    ]
  ,
  [
    {"1": 480},
    {"2": 600},
    {"3": 320},
    {"4": 0},
    {"5": 640},
    {"6": 0},
    {"7": 0},
    {"8": 0},
    {"9": 350},
    {"10": 590},
    {"11": 0},
    {"12": 0},
    {"13": 0},
    {"14": 440},
    {"15": 530},
    {"16": 490},
    {"17": 0},
    {"18": 670},
    {"19": 0},
    {"20": 0},
    {"21": 0},
    {"22": 530},
    {"23": 650},
    {"24": 410},
    {"25": 0},
    {"26": 320},
    {"27": 0},
    {"28": 0},
    {"29": 620},
    {"30": 0}
  ],
  [
    {"1": 330},
    {"2": 360},
    {"3": 420},
    {"4": 0},
    {"5": 400},
    {"6": 0},
    {"7": 480},
    {"8": 330},
    {"9": 0},
    {"10": 410},
    {"11": 0},
    {"12": 520},
    {"13": 380},
    {"14": 0},
    {"15": 450},
    {"16": 480},
    {"17": 590},
    {"18": 340},
    {"19": 0},
    {"20": 0},
    {"21": 0},
    {"22": 510},
    {"23": 370},
    {"24": 600},
    {"25": 400},
    {"26": 0},
    {"27": 520},
    {"28": 290},
    {"29": 0},
    {"30": 560}
  ]
]


function updateChart2() {
    // Get the current date
    const now = new Date();
    const currentDate = now.getDate();
  
    // Get past 10 days' values
    const past10DaysValues = {};
    console.log(past10DaysValues);
    for (let i = currentDate - 10; i < currentDate; i++) {
      const dayData = km_per_day[truck][i];
      if (dayData) {
        const key = `${i + 1}`;
        const value = Object.values(dayData)[0];
        past10DaysValues[key] = value;
      }
    }
  
    // Update the chart data
    const chart = Chart.getChart("myChart2");
    chart.data.labels = Object.keys(past10DaysValues);
    chart.data.datasets[0].data = Object.values(past10DaysValues);
    chart.update();
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart2');
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          label: 'KM',
          data: [],
          borderWidth: 1,
        backgroundColor:'rgba(38, 255, 0,0.9)',
        borderRadius: {
            topLeft: 5,
            topRight: 5
          }
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value, index, values) {
                return `${value}KM`;
              }
            }
          }
        }
      }
    });
  
    // Initially update the chart
    updateChart2();
  });
  