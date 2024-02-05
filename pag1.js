m = {}

addEventListener('load', () => {
	
	const a = el({a:'div', b:document.body});
	
	//navbar
	(a => {
		a = el({a:'div', b:a, d:{id:'navbar'}})
		el({a:'div', b:a, c:'Qosmo Dashboard'})
		el({a:'img', b:a, d:{src:'img/Logout2.svg'}})
	})(a)
	
	el({a:'div', b:a, c:'Network Performance', d:{class:'title1'}});
	
	//width 640 360 440 = 1440
	//      45  25  30
	
	//card1
	(a => {
		a = el({a:'div', b:a, d:{id:'card1'}})
		
		m.map = L.map(el({a:'div',b:a, d:{style:'background:rgba(0,0,0,0); width:100%; height:100%; '}}),
			{
				center: [120, -2],
				zoom: 6,
				zoomControl:false,
				zoomSnap: 0.001,
				boxZoom: false,
				doubleClickZoom: false,
				dragging: false,
				keyboard: false,
				scrollWheelZoom: false,
				tapHold: false,
				touchZoom: false
		})
		
		m.map.attributionControl.setPrefix('')
		fetch('map.json').then(a=>a.json()).then(a=>{
			
			m.layer = L.geoJSON(a, {
				style: a => ({color: '#313131', weight: 1, opacity: 0.5, fillColor: '#'+Math.floor(Math.random()*16777215).toString(16), fillOpacity: 0.5}),
				bubblingMouseEvents: false,
				onEachFeature: (feature, layer) => {
					layer.on('mouseover', function () { this.setStyle({ opacity: 1 }) })
					layer.on('mouseout', function () { this.setStyle({ opacity: 0.5 }) })
					layer.on('click', function () {
						//window.location = feature.properties.url
					})
				}
			}).addTo(m.map)
			m.map.fitBounds(m.layer.getBounds(), {padding:[0,0]})
			
		})
		
		const b = el({a:'select', b:el({a:'div', b:a, d:{style:'position:absolute; width:43vw; margin-top:-41vh; text-align:right;'}}) })
		el({a:'option', b:b, c:'TREG'})
		el({a:'option', b:b, c:'WITEL'})
	})(a);
	
	//card2
	(a => {
		a = el({a:'div', b:a, d:{id:'card2'}})
		
		el({a:'div', b:a, c:'CTI Vs CDN', d:{class:'title2'}})
		
		const b = el({a:'canvas', b:el({a:'div', b:a, d:{style:'position:relative; margin:0; padding:0 0.5vw; width:24vw; height:38.5vh; display:flex; align-items:center; justify-content:center;'}})})
		
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

		
	})(a);
	
	//card3
	(a => {
		a = el({a:'div', b:a, d:{id:'card3'}})
		
		el({a:'div', b:a, c:'SLA Performance', d:{class:'title2'}});
		
		(a => {
			a = el({a:'table', b:a, d:{class:'sla-tabel'}});
			
			(a => {
				el({a:'td', b:a, c:'4G'})
				
				const b = el({a:'div', b:el({a:'td', b:a}) })
				el({a:'div', b:b, c:'PacketLoss'})
				el({a:'div', b:b, c:'T : 99.5%'})
				el({a:'div', b:b, c:'R : 99.5%'})
				const c = el({a:'div', b:el({a:'td', b:a}) })
				el({a:'div', b:c, c:'Latency'})
				el({a:'div', b:c, c:'T : 99.5%'})
				el({a:'div', b:c, c:'R : 99.5%'})
				const d = el({a:'div', b:el({a:'td', b:a}) })
				el({a:'div', b:d, c:'Jitter'})
				el({a:'div', b:d, c:'T : 99.5%'})
				el({a:'div', b:d, c:'R : 99.5%'})
				
			})(el({a:'tr', b:a}));
			
			(a => {
				el({a:'td', b:a, c:'CTI'})
				
				const b = el({a:'div', b:el({a:'td', b:a}) })
				el({a:'div', b:b, c:'PacketLoss'})
				el({a:'div', b:b, c:'T : 99.5%'})
				el({a:'div', b:b, c:'R : 99.5%'})
				const c = el({a:'div', b:el({a:'td', b:a}) })
				el({a:'div', b:c, c:'Latency'})
				el({a:'div', b:c, c:'T : 99.5%'})
				el({a:'div', b:c, c:'R : 99.5%'})
				const d = el({a:'div', b:el({a:'td', b:a}) })
				el({a:'div', b:d, c:'Jitter'})
				el({a:'div', b:d, c:'T : 99.5%'})
				el({a:'div', b:d, c:'R : 99.5%'})
				
			})(el({a:'tr', b:a}))
			
		})(el({a:'div', b:a, d:{style:'height:11.5vh;'}}));
		
		(a => {
			
			const b = el({a:'canvas', b:a})
			
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

		})(el({a:'div', b:a, d:{style:'position:relative; margin:0; padding:0.5vh 1vw 0.5vh 2vw; width:29vw; height:27vh; display:flex; align-items:center; justify-content:center;'}}))
		//322
		//44
		//88
		
	})(a)
	
	el({a:'div', b:a, c:'CX & Experience', d:{class:'title1'}});
	
	//card4
	(a => {
		a = el({a:'div', b:el({a:'div', b:a, d:{id:'card4'}}) })
		
		const b = ['', 'Packetloss', 'Latency', 'Jitter', 'Game Score', 'Video Score', 'Signal Strength']
		
		b.forEach(b => { el({a:'div', b:a, c:b}) })
		b.shift();
		
		['Telkomsel', '3', 'XL', 'Indosat', 'Smartfren'].forEach(c => {
			el({a:'div', b:a, c:c, d:{style:'justify-content:flex-end;'} })
			b.forEach(b => { el({a:'div', b:a, d:{style:'background:rgba(0,0,0,0.1);'} }) })
		});
		
		el({a:'div', b:a.children[8], c:'Winner'})
		el({a:'div', b:a.children[11], c:'Winner'})
		el({a:'div', b:a.children[12], c:'Winner'})
		el({a:'div', b:a.children[23], c:'Winner'})
		el({a:'div', b:a.children[24], c:'Winner'})
		el({a:'div', b:a.children[34], c:'Winner'})
		
	})(a);
	
	//card5
	(a => {
		a = el({a:'div', b:a, d:{id:'card5'}})
		el({a:'div', b:a, c:'Global Vs CDN Experience', d:{class:'title2'}});
		
	})(a);
	
	//card6
	(a => {
		a = el({a:'div', b:a, d:{id:'card6'}})
		el({a:'div', b:a, c:'City Lose Performance', d:{class:'title2'}});
		
	})(a)
	
	
})