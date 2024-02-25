const page1Card6 = a => {
	a = el({a:'div', b:a, d:{class:'page1card'}});
	
	(a => {
		el({a:'div', b:a, c:'Summary Order'});
		
	})(el({a:'div', b:a}));
	
	(a => {
		a = el({a:'canvas', b:el({a:'div', b:a, d:{style:'position:relative; padding:1vh 1vw; width:25vw; height:17vh;'}})})
		
		const c = new Chart(a, {
			type: 'bar',
			data: {
				labels: ['Done Order', 'Still Issue', 'Total Warranty'],
				datasets: [{
					label: 'Total Site Impact',
					data: [50, null, null],
					backgroundColor: '#477F9F',
				},
				{
					label: 'Total Site Issue Capacity',
					data: [null, 41, null],
					backgroundColor: '#B28E65',
				},
				{
					label: 'On Order',
					data: [null, null, 33],
					backgroundColor: '#D3AF3D',
				},]
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