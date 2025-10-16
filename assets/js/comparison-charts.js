// Charts for Comparison Page

document.addEventListener('DOMContentLoaded', () => {
    // Market Size Chart
    const marketSizeCtx = document.getElementById('marketSizeChart');
    if (marketSizeCtx) {
        new Chart(marketSizeCtx, {
            type: 'bar',
            data: {
                labels: [
                    'Planning\nAssistant',
                    'Eduba\nPlatform',
                    'Compliance\nPlatform',
                    'Gen UI\nBrowser',
                    'Supervisor\nAssistant',
                    'ChatGPT\nApps',
                    'Ethics\nEngine'
                ],
                datasets: [{
                    label: '2025 Market',
                    data: [98, 43, 36, 20, 11, null, 0.34],
                    backgroundColor: '#4A5D4F',
                    borderRadius: 6
                }, {
                    label: '2030+ Projection',
                    data: [183, 87, 66, 50, 17, null, 1.2],
                    backgroundColor: '#D4A574',
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            boxWidth: 12,
                            padding: 15,
                            font: {
                                family: "'Inter', sans-serif",
                                size: 14
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#2C2C2C',
                        titleColor: '#F7F5F2',
                        bodyColor: '#F7F5F2',
                        padding: 12,
                        callbacks: {
                            label: function(context) {
                                if (context.parsed.y === null) return 'New Market';
                                return context.dataset.label + ': $' + context.parsed.y + 'B';
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
                                size: 11,
                                family: "'Inter', sans-serif"
                            }
                        }
                    }
                }
            }
        });
    }

    // Bubble Chart - Market Size vs CAGR
    const bubbleCtx = document.getElementById('bubbleChart');
    if (bubbleCtx) {
        new Chart(bubbleCtx, {
            type: 'bubble',
            data: {
                datasets: [
                    {
                        label: 'Ethics Engine',
                        data: [{
                            x: 0.34,
                            y: 28.8,
                            r: 10  // 2-3 months = small bubble
                        }],
                        backgroundColor: 'rgba(107, 142, 111, 0.7)',
                        borderColor: '#6B8E6F',
                        borderWidth: 2
                    },
                    {
                        label: 'Gen UI Browser',
                        data: [{
                            x: 20,
                            y: 17.5,
                            r: 20  // 4-5 months = larger bubble
                        }],
                        backgroundColor: 'rgba(184, 92, 56, 0.7)',
                        borderColor: '#B85C38',
                        borderWidth: 2
                    },
                    {
                        label: 'Eduba Platform',
                        data: [{
                            x: 43,
                            y: 14.2,
                            r: 15  // 3-4 months = medium bubble
                        }],
                        backgroundColor: 'rgba(212, 165, 116, 0.7)',
                        borderColor: '#D4A574',
                        borderWidth: 2
                    },
                    {
                        label: 'Planning Assistant',
                        data: [{
                            x: 98,
                            y: 13.2,
                            r: 15  // 3-4 months = medium bubble
                        }],
                        backgroundColor: 'rgba(74, 93, 79, 0.7)',
                        borderColor: '#4A5D4F',
                        borderWidth: 2
                    },
                    {
                        label: 'Compliance Platform',
                        data: [{
                            x: 36,
                            y: 12.7,
                            r: 10  // 2-3 months = small bubble
                        }],
                        backgroundColor: 'rgba(107, 142, 111, 0.7)',
                        borderColor: '#6B8E6F',
                        borderWidth: 2
                    },
                    {
                        label: 'Supervisor Assistant',
                        data: [{
                            x: 11,
                            y: 9.4,
                            r: 8  // 2 months = smallest bubble
                        }],
                        backgroundColor: 'rgba(74, 93, 79, 0.7)',
                        borderColor: '#4A5D4F',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'right',
                        labels: {
                            boxWidth: 12,
                            padding: 10,
                            font: {
                                family: "'Inter', sans-serif",
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#2C2C2C',
                        titleColor: '#F7F5F2',
                        bodyColor: '#F7F5F2',
                        padding: 12,
                        callbacks: {
                            label: function(context) {
                                const label = context.dataset.label;
                                const market = context.parsed.x;
                                const cagr = context.parsed.y;
                                return [
                                    label,
                                    'Market: $' + market + 'B',
                                    'CAGR: ' + cagr + '%'
                                ];
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'CAGR (%)',
                            font: {
                                family: "'Inter', sans-serif",
                                size: 14,
                                weight: 600
                            }
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
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
                        title: {
                            display: true,
                            text: 'Market Size 2025 (Billions USD)',
                            font: {
                                family: "'Inter', sans-serif",
                                size: 14,
                                weight: 600
                            }
                        },
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
                    }
                }
            }
        });
    }
});
