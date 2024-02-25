const page1Card3 = a => {
	a = el({a:'div', b:a, d:{class:'page1card'}});
	
	(a => {
		el({a:'div', b:a, c:'SLA Per Week'});
		
		(a => {
			el({a:'option', b:a, c:'All'})
			el({a:'option', b:a, c:'Packet Loss'})
			el({a:'option', b:a, c:'Latency'})
			el({a:'option', b:a, c:'Jitter'})
		})(el({a:'select', b:a}))
		
	})(el({a:'div', b:a}));
	
	(a => {
		a = el({a:'table', b:a, d:{class:'tabel1 page1card3'}});
		
		(a => {
			el({a:'th', b:a, c:'Regional'})
			el({a:'th', b:a, c:'Pencapaian'})
			el({a:'th', b:a, c:'Total Site'})
			el({a:'th', b:a, c:'Site Not Clear'})
			el({a:'th', b:a, c:'Not Clear <3 Days'})
			el({a:'th', b:a, c:'Not Clear 2-4 Weeks'})
			el({a:'th', b:a, c:'Not Clear >4 Weeks'})
		})(el({a:'tr', b:el({a:'thead', b:a})}))
		
		const click1 = a => {
			a.stopPropagation()
			a = a.target.parentElement
			const b = (a => {
				const b = a.length > 0 ? a[0].previousElementSibling : null
				a.forEach(a => { a.parentElement.removeChild(a) })
				return b
			})(a.parentElement.querySelectorAll('.subrow'))
			
			if (a != b) {
				const c = parseInt(a.getAttribute('data-a'))
				const d = a.nextElementSibling
				console.log(d)
				a = a.parentElement
				for (var i=c+1; i<c+8; i++) {
					(a => {
						el({a:'div', b:el({a:'td', b:a}), c:`Witel-${i}`})
						for (var j=1; j<6; j++) el({a:'td', b:a, c:'100'})
						el({a:'div', b:el({a:'td', b:a}), c:'100'})
					})(a.insertBefore(el({a:'tr', d:{class:'subrow'}}), d))
				}
			}
		}
		
		a = el({a:'tbody', b:a})
		for (var i=1; i<8; i++) {
			(a => {
				el({a:'td', b:a, c:`Treg-${i}`, e:{click:click1} })
				for (var j=1; j<7; j++) el({a:'td', b:a, c:'100', e:{click:click1}})
			})(el({a:'tr', b:a, d:{'data-a':`${(i-1)*7}`}}))
		}
		
	})(el({a:'div', b:el({a:'div', b:a}), d:{style:'overflow: auto; height: 37vh; width:47vw;'} }))
	
}