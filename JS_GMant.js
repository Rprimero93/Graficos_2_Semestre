document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        plugins: [ChartDataLabels],
        data: {
            labels: ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',],
            datasets: [{
                data: [212, 150, 0, 0, 0, 0, 0],
                backgroundColor: '#47D45A',
                borderColor: '#0E4D4C',
                borderWidth: 1,
                borderRadius: 8,
                barThickness: 30
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    color: '#FFFFFF',
                    font: { weight: 'bold' }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#FFFFFF', font: { weight: 'bold' } } },
                y: { grid: { color: 'rgba(255,255,255,0.1)' }, ticks: { color: '#FFFFFF', beginAtZero: true } }
            }
        }
    });
});
