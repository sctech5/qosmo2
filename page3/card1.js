const page3Card1 = a => {
	a = el({a:'div', b:a, d:{class:'page1card'}});
	
	(a => {
		el({a:'div', b:a, c:'Monitoring Latency AWS'});
		
		//(a => {
		//	el({a:'option', b:a, c:'Treg'})
		//	el({a:'option', b:a, c:'Nationwide'})
		//})(el({a:'select', b:a}))
		
	})(el({a:'div', b:a}))
	
	const b = el({a:'canvas', b:el({a:'div', b:a, d:{style:'position:relative; width:25vw; height:37vh; padding:1vh 1.5vw;'}})})
	
	b.width = parseInt(b.parentElement.getBoundingClientRect().width)
	b.height = parseInt(b.parentElement.getBoundingClientRect().height)
	
	m.p3.c1 = new Chart(b, {
		type: 'line',
		data: {
			labels: [],
			datasets: [{
				label: 'Treg1',
				data: [],
				fill: false,
				backgroundColor: '#f00',
				borderColor: '#f00',
				borderWidth: 1,
				radius: 1.5,
				tension: 0.3,
			},
			{
				label: 'Treg2',
				data: [],
				fill: false,
				backgroundColor: '#00f',
				borderColor: '#00f',
				borderWidth: 1,
				radius: 1.5,
				tension: 0.3,
			},
			{
				label: 'Treg3',
				data: [],
				fill: false,
				backgroundColor: '#0f0',
				borderColor: '#0f0',
				borderWidth: 1,
				radius: 1.5,
				tension: 0.3,
			},
			{
				label: 'Treg4',
				data: [],
				fill: false,
				backgroundColor: '#ff0',
				borderColor: '#ff0',
				borderWidth: 1,
				radius: 1.5,
				tension: 0.3,
			},
			{
				label: 'Treg5',
				data: [],
				fill: false,
				backgroundColor: '#f0f',
				borderColor: '#f0f',
				borderWidth: 1,
				radius: 1.5,
				tension: 0.3,
			},
			{
				label: 'Treg6',
				data: [],
				fill: false,
				backgroundColor: '#0ff',
				borderColor: '#0ff',
				borderWidth: 1,
				radius: 1.5,
				tension: 0.3,
			},
			{
				label: 'Treg7',
				data: [],
				fill: false,
				backgroundColor: '#333',
				borderColor: '#333',
				borderWidth: 1,
				radius: 1.5,
				tension: 0.3,
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
	
	
	// isi data ====================================================================================
	
	m.p3.c1.data.labels = ['Jul', 'Jun', 'Mei', 'Apr', 'Mar', 'Feb', 'Jan']
	m.p3.c1.data.datasets.forEach((_, a) => {
		m.p3.c1.data.labels.forEach(_ => { m.p3.c1.data.datasets[a].data.push(Math.round(Math.random() * 100)) })
	})
	m.p3.c1.update()
	
}
