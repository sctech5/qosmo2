const page1Card1 = a => {
	a = el({a:'div', b:a, d:{class:'page1card'}});
	
	(a => {
		el({a:'div', b:a, c:'Total Site Not Clear'});
		
		(a => {
			el({a:'option', b:a, c:'Nationwide'})
			for (var i=1; i<8; i++) el({a:'option', b:a, c:`Treg${i}`})
		})(el({a:'select', b:a}))
		
	})(el({a:'div', b:a}))
	
	new Chart(el({a:'canvas',  b:el({a:'div', b:a, d:{style:'position:relative; width:25vw; height:37vh; padding:1vh 1vw;'}}) }),
		{
			type: 'pie',
			data: {
				labels: ['Not clear', 'clear'],
				datasets: [{
					data: [40,60],
					borderWidth: 0,
					backgroundColor: [
						'#B28E65',
						'#477F9F',
					],
					labels: ['Not clear', 'clear'],
				}]
			},
			options: {
				onClick: (a,b) => {
					//page1Popup1.show(b[0].index)
				},
				plugins: {
					datalabels: {
						color: '#000',
						formatter: (a, b) => `${b.dataset.labels[b.dataIndex]}\n${parseInt(a).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`,
						//formatter: function (value) { return Math.round(value) + '%' },
						//font: {
						//	weight: 'bold',
						//	size: 16,
						//}
					},
					legend: { display: false, },
				},
			}
	})
	
}