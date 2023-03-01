const ctx = document.getElementById("myChart")
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            borderColor: "#0f0",

        }],
    },
    options: {
        animation: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },

});
