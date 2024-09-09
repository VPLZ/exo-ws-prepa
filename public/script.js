const ctx = document.getElementById('chart');
const myChart = new Chart(ctx, {
  type: "radar",
  data: {
    labels: ["zeon","zeon","zeon","zeon"],
    datasets:[{
      label: "Forma 1",
      data: ["40","65","35","96"],
      fill: true,
      backgroundColor: "blue"
    }]
  },
  options:{
    elements:{
      line:{
        borderWidth: 5
      }
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          display : true
        }
      }
    }
  }
});