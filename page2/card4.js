const page2Card4 = a => {
	a = el({a:'div', b:a, d:{class:'page1card'}});
	
	(a => {
		el({a:'div', b:a, c:'CDN Experience'});
	})(el({a:'div', b:a}));
	
	(a => {
		
		const b = el({a:'canvas', b:a})
		
		b.width = parseInt(b.parentElement.getBoundingClientRect().width)
		b.height = parseInt(b.parentElement.getBoundingClientRect().height)
		
		m.chart2 = new Chart(b, {
			type: 'line',
			data: {
				labels: [],
				datasets: [{
					label: 'Packetloss',
					data: [],
					fill: false,
					backgroundColor: '#999A9E',
					borderColor: '#999A9E',
					borderWidth: 1,
					radius: 1.5,
					tension: 0.3,
				},
				{
					label: 'Latency',
					data: [],
					fill: false,
					backgroundColor: '#D3AF3D',
					borderColor: '#D3AF3D',
					borderWidth: 1,
					radius: 1.5,
					tension: 0.3,
				},
				{
					label: 'Jitter',
					data: [],
					fill: false,
					backgroundColor: '#D9D9D9',
					borderColor: '#D9D9D9',
					borderWidth: 1,
					radius: 1.5,
					tension: 0.3,
				},
				]
			},
			options: {
				plugins: {
					datalabels: {
						color: 'rgba(0,0,0,0)',
						//formatter: function (value) { return Math.round(value) + '%' },
						//font: {
						//	weight: 'bold',
						//	size: 16,
						//}
					},
					legend: {
						position: 'bottom',
						labels: {
							usePointStyle: true,
							color: '#000',
							font: { size: 9, }
						}
					}
				},
				scales: {
					y: {
						ticks: {
							color: "#000",
							font: { size: 9, },
							//stepSize: 1,
							beginAtZero: true
						}
					},
					x: {
						ticks: {
							color: "#000",
							font: { size: 9, },
							//stepSize: 1,
							//beginAtZero: true
						}
					}
				},
			}
		})

	})(el({a:'div', b:a, d:{style:'position:relative; padding:1vh 1vw; width:75vw; height:21vh;'}}));
	
}