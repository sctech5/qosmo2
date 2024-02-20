const qualityView = (a => {
	a = el({a:'div'});
	
	//navbar
	(a => {
		el({a:'div', b:a, c:'Qosmo Dashboard'})
		el({a:'img', b:a, d:{src:'img/Logout2.svg'}})
	})(el({a:'div', b:a, d:{id:'navbar'}}));
	
	(a => {
		a = el({a:'select', b:a, e:{change:a => { location = location.origin + location.pathname + `?page=${a.target.value}` }} })
		el({a:'option', b:a, c:'SLA Performance', d:{value:'sla_performance'} })
		el({a:'option', b:a, c:'Quality Performance', d:{value:'quality_performance', selected:true} })
		el({a:'option', b:a, c:'CDN Performance', d:{value:'cdn_performance'} })
	})(el({a:'div', b:a, d:{class:'title1'}}));
	
	return a
})()

const quality = a => {
	
	document.body.innerHTML = ''
	document.body.appendChild(qualityView)
	
	a = el({a:'div', b:document.body, d:{class:'ct2'}});
	
	(a => {
		el({a:'div', b:a, c:'SLA Per Week'});
		
		(a => {
			el({a:'div', b:a, c:'SLA Per Week', d:{style:'grid-column:1/10;'} })
			el({a:'div', b:a, c:'Regional', d:{style:'grid-row:2/4; height:calc(7.5vh - 1px); line-height:calc(7.5vh - 1px);'} })
			el({a:'div', b:a, c:'PL BBC', d:{style:'grid-column:2/4;'} })
			el({a:'div', b:a, c:'PL No BBC', d:{style:'grid-column:4/6;'} })
			el({a:'div', b:a, c:'Latency', d:{style:'grid-column:6/8;'} })
			el({a:'div', b:a, c:'Jitter', d:{style:'grid-column:8/10;'} })
			
			for (var i=0; i<4; i++) {
				el({a:'div', b:a, c:'This Week' })
				el({a:'div', b:a, c:'AVG This Month' })
			}
			
			for (var i=1; i<8; i++) {
				el({a:'div', b:a, c:`TREG${i}` })
				for (var j=0; j<8; j++) el({a:'div', b:a, c:'100' })
			}
			
		})(el({a:'div', b:a}))
		
	})(el({a:'div', b:a, d:{class:'sla-card1'} }));
	
	(a => {
		el({a:'div', b:a, c:'SLA Performance'});
		
		(a => {
			el({a:'div', b:a})
			el({a:'div', b:a, c:'Packet Loss'})
			el({a:'div', b:a, c:'Latency'})
			el({a:'div', b:a, c:'Jitter'})
			
			el({a:'div', b:a, c:'4G'})
			el({a:'div', b:a, c:'T:99.5% R:99.5%'})
			el({a:'div', b:a, c:'T:99.5% R:99.5%'})
			el({a:'div', b:a, c:'T:99.5% R:99.5%', d:{style:'background:#F2E0E0;'} })
			
			el({a:'div', b:a, c:'CTI'})
			el({a:'div', b:a, c:'T:99.5% R:99.5%'})
			el({a:'div', b:a, c:'T:99.5% R:99.5%'})
			el({a:'div', b:a, c:'T:99.5% R:99.5%' })
			
		})(el({a:'div', b:a}));
		
		//el({a:'div', b:a})
		
		(a => {
			
			const b = el({a:'canvas', b:a})
			
			b.width = parseInt(b.parentElement.getBoundingClientRect().width)
			b.height = parseInt(b.parentElement.getBoundingClientRect().height)
			
			chart.chart1 = new Chart(b, {
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

		})(el({a:'div', b:a }));

		
	})(el({a:'div', b:a, d:{class:'sla-card2'} }));
	
	// update data
	chart.chart1.data.labels = ['Jul', 'Jun', 'Mei', 'Apr', 'Mar', 'Feb', 'Jan']
	chart.chart1.data.datasets.forEach((_, a) => {
		chart.chart1.data.labels.forEach(_ => { chart.chart1.data.datasets[a].data.push(Math.round(Math.random() * 100)) })
	})
	chart.chart1.update()
	
}