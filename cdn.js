const cdnView = (a => {
	a = el({a:'div'});
	
	//navbar
	(a => {
		el({a:'div', b:a, c:'Qosmo Dashboard'})
		el({a:'img', b:a, d:{src:'img/Logout2.svg'}})
	})(el({a:'div', b:a, d:{id:'navbar'}}));
	
	(a => {
		a = el({a:'select', b:a, e:{change:a => { location = location.origin + location.pathname + `?page=${a.target.value}` }} })
		el({a:'option', b:a, c:'SLA Performance', d:{value:'sla_performance'} })
		el({a:'option', b:a, c:'Quality Performance', d:{value:'quality_performance'} })
		el({a:'option', b:a, c:'CDN Performance', d:{value:'cdn_performance', selected:true} })
	})(el({a:'div', b:a, d:{class:'title1'}}));
	
	return a
})()

const cdn = a => {
	
	document.body.innerHTML = ''
	document.body.appendChild(cdnView)
	
	a = el({a:'div', b:document.body, d:{class:'ct2'}});
	
	(a => {
		el({a:'div', b:a, c:'Topologi CDN'})
		
		el({a:'img', b:el({a:'div', b:a}), d:{src:'img/a1.png'} })
		
	})(el({a:'div', b:a, d:{class:'cdn-card1'} }));
	
	
	(a => {
		el({a:'div', b:a, c:'Global Vs CDN Experience'});
		
		a = el({a:'div', b:a})
		a = el({a:'canvas', b:a})
		
		a.width = parseInt(a.parentElement.getBoundingClientRect().width)
		a.height = parseInt(a.parentElement.getBoundingClientRect().height)
		const ilogo = ['img/yt.svg', 'img/fb.svg', 'img/ml.svg', 'img/tt.svg'].map(a => {
			const image = new Image()
			image.src = a
			return image
		})
		
		m.cdn.chart1 = new Chart(a, {
			type: 'bar',
			plugins: [{
				afterDraw: a => {
					const ctx = a.ctx
					const xAxis = a.scales.x
					const yAxis = a.scales.y
					yAxis.ticks.forEach((value, index) => {
						ctx.drawImage(ilogo[index], xAxis.left - (ilogo[index].width + 5), yAxis.getPixelForTick(index) - 9)
					})
				}
			}],
			data: {
				labels: ['Youtube', 'facebook', 'Mobile Legends', 'Titok'],
				datasets: [{
					label: 'Global',
					data: [-100, -90, -80, -70, -60],
					fill: false,
					backgroundColor: '#477F9F',
					borderColor: '#477F9F',
				},{
					data: [-0, -10, -20, -30, -40],
					fill: false,
					backgroundColor: '#D9D9D9',
					borderColor: '#D9D9D9',
				},
				{
					label: 'CDN',
					data: [100, 90, 80, 70, 60],
					fill: false,
					backgroundColor: '#B28E65',
					borderColor: '#B28E65',
				},{
					data: [0, 10, 20, 30, 40],
					fill: false,
					backgroundColor: '#D9D9D9',
					borderColor: '#D9D9D9',
				},
				]
			},
			options: {
				indexAxis: 'y',
				responsive: true,
				plugins: {
					datalabels: {
						color: 'rgba(0,0,0,0)',
					},
					legend: { display: false, },
				},
				scales: {
					y: {
						stacked: true,
						grid: {
							color: 'rgba(0,0,0,0)',
						},
						ticks: {
							color: 'rgba(0,0,0,0)',
						},
					},
					x: {
						stacked: true,
						ticks: { callback: value => Math.abs(value) }
					}
				},
			}
		})
		
	})(el({a:'div', b:a, d:{class:'cdn-card2'} }));
	
}