const chart = document.getElementById('chart').getContext('2d');
const chart_data = {
  labels: [
    'Math',
    'Sciences',
    'Écologie'
  ],
  datasets: [{
    label: 'Michel',
    data: [10,15,3],
    fill:true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    borderWidth: 3,
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }]
};

const config = {
  type: 'radar',
  data: chart_data,
  options: {}
};
new Chart(chart,config);