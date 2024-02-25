const page4Card3 = a => {
	a = el({a:'div', b:a, d:{class:'page1card'}});
	
	(a => {
		el({a:'div', b:a, c:'History Service Credit'});
		
		//(a => {
		//	el({a:'option', b:a, c:'All'})
		//	el({a:'option', b:a, c:'Packet Loss'})
		//	el({a:'option', b:a, c:'Latency'})
		//	el({a:'option', b:a, c:'Jitter'})
		//})(el({a:'select', b:a}))
		
	})(el({a:'div', b:a}));
	
	(a => {
		a = el({a:'table', b:a, d:{class:'tabel1 page1card3'}});
		
		(a => {
			el({a:'th', b:a, c:'Bulan'})
			el({a:'th', b:a, c:'Availability'})
			el({a:'th', b:a, c:'Fulfillment'})
			el({a:'th', b:a, c:'Quality'})
		})(el({a:'tr', b:el({a:'thead', b:a})}))
		
		const b = new Date()
		b.setMonth(b.getMonth()-1)
		a = el({a:'tbody', b:a})
		for (var i=1; i<16; i++) {
			(a => {
				el({a:'td', b:a, c:`${b.getFullYear()}/${b.getMonth()<9?'0':''}${b.getMonth()+1}` })
				el({a:'td', b:a, c:'100.000' })
				el({a:'td', b:a, c:'100.000' })
				el({a:'td', b:a, c:'100.000' })
			})(el({a:'tr', b:a }))
			b.setMonth(b.getMonth()-1)
		}
		
	})(el({a:'div', b:el({a:'div', b:a}), d:{style:'overflow: auto; height: 83vh; width:23vw;'} }))
	
}