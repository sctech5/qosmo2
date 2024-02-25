const page1Card4 = a => {
	a = el({a:'div', b:a, d:{class:'page1card'}});
	
	(a => {
		el({a:'div', b:a, c:'Highest Site Impacted'});
		
		(a => {
			el({a:'option', b:a, c:'Nationwide'})
			for (var i=1; i<8; i++) el({a:'option', b:a, c:`Treg-${i}`})
		})(el({a:'select', b:a}))
		
	})(el({a:'div', b:a}));
	
	(a => {
		a = el({a:'table', b:a, d:{class:'tabel1 page1card3'}});
		
		(a => {
			el({a:'th', b:a, c:'No Order Site', d:{colspan:2} })
			el({a:'th', b:a, c:'No Order Site', d:{colspan:2} })
		})(el({a:'tr', b:el({a:'thead', b:a})}))
		
		a = el({a:'tbody', b:a})
		for (var i=1; i<6; i++) {
			(a => {
				el({a:'td', b:a, c:`ADL00${i}` })
				el({a:'td', b:a, c:`ENT00${i}` })
				el({a:'td', b:a, c:`ADL0${i}0` })
				el({a:'td', b:a, c:`ENT0${i}0` })
			})(el({a:'tr', b:a}))
		}
		
	})(el({a:'div', b:el({a:'div', b:a}), d:{style:'height: 35vh; width:21vw;'} }))
	
}