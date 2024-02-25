const page4Card2 = a => {
	a = el({a:'div', b:a, d:{class:'page1card'}});
	
	(a => {
		el({a:'div', b:a, c:'Service Credit SLA'});
	})(el({a:'div', b:a}));
	
	
	const b = el({a:'canvas', b:el({a:'div', b:a, d:{style:'position:relative; width:75vw; height:37vh; padding:1vh 1.5vw;'}})})
	
	b.width = parseInt(b.parentElement.getBoundingClientRect().width)
	b.height = parseInt(b.parentElement.getBoundingClientRect().height)
		
	new Chart(b, {
		type: 'bar',
		data: {
			labels: ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'],
			datasets: [{
				label: 'Availability',
				data: [],
				fill: false,
				backgroundColor: '#477F9F',
				borderColor: '#477F9F',
				borderWidth: 1,
				radius: 1.5,
				tension: 0.3,
			},
			{
				label: 'Fulfillment',
				data: [],
				fill: false,
				backgroundColor: '#B28E65',
				borderColor: '#B28E65',
				borderWidth: 1,
				radius: 1.5,
				tension: 0.3,
			},
			{
				label: 'Capacity',
				data: [],
				fill: false,
				backgroundColor: '#D3AF3D',
				borderColor: '#D3AF3D',
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
	
}