const page2Card2 = a => {
	a = el({a:'div', b:a, d:{class:'page1card'}});
	
	(a => {
		el({a:'div', b:a, c:'ISR, Power & Suhu Issue'});
	})(el({a:'div', b:a}));
	
	(a => {
		a = el({a:'canvas', b:el({a:'div', b:a, d:{style:'position:relative; padding:1vh 1vw; width:25vw; height:17vh;'}})})
		
		//a.width = parseInt(b.parentElement.getBoundingClientRect().width)
		//a.height = parseInt(b.parentElement.getBoundingClientRect().height)
		
		const c = new Chart(a, {
			type: 'bar',
			data: {
				labels: ['On Order', 'No Order'],
				datasets: [{
					label: 'On Order',
					data: [50, null],
					backgroundColor: '#477F9F',
				},
				{
					label: 'No Order',
					data: [null, 41],
					backgroundColor: '#B28E65',
				},
				]
			},
			options: {
				//categoryPercentage: 0.7,
				responsive: true,
				//elements: { bar: { borderRadius: Number.MAX_VALUE, } },
				plugins: {
					datalabels: {
						color: '#000',
						//formatter: function (value) { return Math.round(value) + '%' },
						//font: {
						//	weight: 'bold',
						//	size: 16,
						//}
					},
					legend: { display: false, },
				},
				indexAxis: 'y',
				scales: {
					y: {
						stacked: true,
						ticks: {
							color: "#000",
							font: { size: 9, },
						}
					},
					x: {
						//stacked: true,
						max: 60,
						ticks: {
							color: "#000",
							font: { size: 9, },
							beginAtZero: true,
							stepSize: 20
						}
					}
				},
			}
		})
		
	})(a)
	
}