const ctx = document.getElementById('usageChart').getContext('2d');

myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Electricity Use in 2018',
      data: [100, 120, 115, 100, 90, 94, 88, 92, 90, 98, 102, 110],
      borderWidth: 5,
      borderColor: '#f3664a',
    }],
    xAxisID: 'Month'
  },
  options: {
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'kwh'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }]
    },
    tooltips: {
      axis: 'y'
    }
  }
});