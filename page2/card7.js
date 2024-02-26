const page2Card7 = a => {
	a = el({a:'div', b:a, d:{class:'page1card'}});
	
	(a => {
		el({a:'div', b:a, c:'Monitoring CTI'});
		
		(a => {
			el({a:'option', b:a, c:'Hourly'})
			el({a:'option', b:a, c:'Daily'})
			el({a:'option', b:a, c:'Monthly'})
		})(el({a:'select', b:a}))
		
	})(el({a:'div', b:a}));
	
	(a => {
		
		(a => {
			a = el({a:'table', b:a, d:{class:'sla-tabel'}});
			
			(a => {
				el({a:'td', b:a, c:'4G'})
				
				const b = el({a:'div', b:el({a:'td', b:a}) })
				b.style.background = 'green'
				el({a:'div', b:b, c:'PacketLoss'})
				el({a:'div', b:b, c:'T : 99.5%'})
				el({a:'div', b:b, c:'R : 99.5%'})
				const c = el({a:'div', b:el({a:'td', b:a}) })
				c.style.background = 'green'
				el({a:'div', b:c, c:'Latency'})
				el({a:'div', b:c, c:'T : 99.5%'})
				el({a:'div', b:c, c:'R : 99.5%'})
				const d = el({a:'div', b:el({a:'td', b:a}) })
				d.style.background = 'red'
				el({a:'div', b:d, c:'Jitter'})
				el({a:'div', b:d, c:'T : 99.5%'})
				el({a:'div', b:d, c:'R : 99.5%'})
				
			})(el({a:'tr', b:a}));
			
			(a => {
				el({a:'td', b:a, c:'CTI'})
				
				const b = el({a:'div', b:el({a:'td', b:a}) })
				b.style.background = 'green'
				el({a:'div', b:b, c:'PacketLoss'})
				el({a:'div', b:b, c:'T : 99.5%'})
				el({a:'div', b:b, c:'R : 99.5%'})
				const c = el({a:'div', b:el({a:'td', b:a}) })
				c.style.background = 'green'
				el({a:'div', b:c, c:'Latency'})
				el({a:'div', b:c, c:'T : 99.5%'})
				el({a:'div', b:c, c:'R : 99.5%'})
				const d = el({a:'div', b:el({a:'td', b:a}) })
				d.style.background = 'green'
				el({a:'div', b:d, c:'Jitter'})
				el({a:'div', b:d, c:'T : 99.5%'})
				el({a:'div', b:d, c:'R : 99.5%'})
				
			})(el({a:'tr', b:a}))
			
		})(el({a:'div', b:a, d:{style:'height:11.5vh;'}}));
		
		(a => {
			
			const b = el({a:'canvas', b:a})
			
			b.width = parseInt(b.parentElement.getBoundingClientRect().width)
			b.height = parseInt(b.parentElement.getBoundingClientRect().height)
			
			m.p2.c7 = new Chart(b, {
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

		})(el({a:'div', b:a, d:{style:'position:relative; margin:0; padding:0.5vh 1vw 0 2vw; width:29vw; height:27vh; display:flex; align-items:center; justify-content:center;'}}));
		
	})(el({a:'div', b:a}))
	
	
	// isi data ====================================================================================
	
	m.p2.c7.data.labels = ['Jul', 'Jun', 'Mei', 'Apr', 'Mar', 'Feb', 'Jan']
	m.p2.c7.data.datasets.forEach((_, a) => {
		m.p2.c7.data.labels.forEach(_ => { m.p2.c7.data.datasets[a].data.push(Math.round(Math.random() * 100)) })
	})
	m.p2.c7.update()
	
}
