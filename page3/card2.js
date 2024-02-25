const page3Card2 = a => {
	a = el({a:'div', b:a, d:{class:'page1card'}});
	
	(a => {
		el({a:'div', b:a, c:'Monitoring Metro Jakarta'});
		
		//(a => {
		//	el({a:'option', b:a, c:'Treg'})
		//	el({a:'option', b:a, c:'Nationwide'})
		//})(el({a:'select', b:a}))
		
	})(el({a:'div', b:a}))
	
	const b = el({a:'canvas', b:el({a:'div', b:a, d:{style:'position:relative; width:25vw; height:37vh; padding:1vh 1.5vw;'}})})
	
	b.width = parseInt(b.parentElement.getBoundingClientRect().width)
	b.height = parseInt(b.parentElement.getBoundingClientRect().height)
	
	new Chart(b, {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: 'Treg1',
				data: [],
				fill: false,
				backgroundColor: '#f00',
				borderColor: '#f00',
			},
			{
				label: 'Treg2',
				data: [],
				fill: false,
				backgroundColor: '#00f',
				borderColor: '#00f',
			},
			{
				label: 'Treg3',
				data: [],
				fill: false,
				backgroundColor: '#0f0',
				borderColor: '#0f0',
			},
			{
				label: 'Treg4',
				data: [],
				fill: false,
				backgroundColor: '#ff0',
				borderColor: '#ff0',
			},
			{
				label: 'Treg5',
				data: [],
				fill: false,
				backgroundColor: '#f0f',
				borderColor: '#f0f',
			},
			{
				label: 'Treg6',
				data: [],
				fill: false,
				backgroundColor: '#0ff',
				borderColor: '#0ff',
			},
			{
				label: 'Treg7',
				data: [],
				fill: false,
				backgroundColor: '#333',
				borderColor: '#333',
			},
			]
		},
		options: {
			//onClick: page2Popup1.popupTotalTicket.click,
			//onClick: (a, b) => { console.log(a); console.log(b) },
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
						font: { size: 10, }
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