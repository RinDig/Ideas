// Charts for Index Page

document.addEventListener('DOMContentLoaded', () => {
    // Market Growth Chart
    const marketGrowthCtx = document.getElementById('marketGrowthChart');
    if (marketGrowthCtx) {
        new Chart(marketGrowthCtx, {
            type: 'line',
            data: {
                labels: ['2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033'],
                datasets: [{
                    label: 'Combined Market Size',
                    data: [150, 200, 260, 330, 400, 465, 500, 525, 550],
                    borderColor: '#4A5D4F',
                    backgroundColor: 'rgba(74, 93, 79, 0.1)',
                    fill: true,
                    tension: 0.4,
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#2C2C2C',
                        titleColor: '#F7F5F2',
                        bodyColor: '#F7F5F2',
                        padding: 12,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return '$' + context.parsed.y + 'B Total Market';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value + 'B';
                            },
                            font: {
                                family: "'JetBrains Mono', monospace"
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                family: "'JetBrains Mono', monospace"
                            }
                        }
                    }
                }
            }
        });
    }

    // Market Comparison Chart
    const marketComparisonCtx = document.getElementById('marketComparisonChart');
    if (marketComparisonCtx) {
        new Chart(marketComparisonCtx, {
            type: 'bar',
            data: {
                labels: [
                    'Planning Assistant',
                    'Eduba Platform',
                    'Compliance',
                    'Gen UI Browser',
                    'Supervisor Assistant',
                    'Ethics Engine'
                ],
                datasets: [{
                    label: '2025 Market Size',
                    data: [98, 43, 36, 20, 11, 0.34],
                    backgroundColor: [
                        '#4A5D4F',
                        '#6B8E6F',
                        '#D4A574',
                        '#B85C38',
                        '#4A5D4F',
                        '#6B8E6F'
                    ],
                    borderRadius: 6
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#2C2C2C',
                        titleColor: '#F7F5F2',
                        bodyColor: '#F7F5F2',
                        padding: 12,
                        callbacks: {
                            label: function(context) {
                                return '$' + context.parsed.x + 'B Market';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '$' + value + 'B';
                            },
                            font: {
                                family: "'JetBrains Mono', monospace"
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 12,
                                family: "'Inter', sans-serif"
                            }
                        }
                    }
                }
            }
        });
    }
});
