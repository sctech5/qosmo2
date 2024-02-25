const page2Card5 = a => {
	a = el({a:'div', b:a, d:{class:'page1card'}});
	
	(a => {
		el({a:'div', b:a, c:'Routing PE Transit'});
		
	})(el({a:'div', b:a}));
	
	(a => {
		a = el({a:'table', b:a, d:{class:'tabel1 page1card3'}});
		
		(a => {
			el({a:'th', b:a, c:'Tanggal' })
			el({a:'th', b:a, c:'PE Transit To JKT' })
			el({a:'th', b:a, c:'PE Transit To BTM' })
		})(el({a:'tr', b:el({a:'thead', b:a})}))
		
		a = el({a:'tbody', b:a})
		const b = new Date()
		for (var i=1; i<8; i++) {
			(a => {
				el({a:'td', b:a, c:`${b.getFullYear()}/${b.getMonth()<9?'0':''}${b.getMonth()+1}/${b.getDate()<10?'0':''}${b.getDate()}` })
				el({a:'td', b:a, c:`12.95` })
				el({a:'td', b:a, c:`33.50` })
				b.setDate(b.getDate()-1)
			})(el({a:'tr', b:a}))
		}
		
	})(el({a:'div', b:el({a:'div', b:a}), d:{style:'height: 39vh; width:21vw;'} }))
		
}