const page1card2 = a => {
	a = el({a:'div', b:a, d:{id:'page1card2'} })
	
	el({a:'div', b:a, c:'Overview SLA'});
	
	(a => {
		el({a:'div', b:a, d:{style:'width:calc(28.57% - 1px);'}})
		el({a:'div', b:a, d:{style:'width:calc(14.28% - 1px);'}})
		el({a:'div', b:a, d:{style:'width:calc(14.28% - 1px);'}})
		el({a:'div', b:a, d:{style:'width:calc(42.85% - 1px);'}})
	})(el({a:'div', b:a}));
	
	(a => {
		for (var i=1; i<8; i++) {
			el({a:'div', b:a, c:`TREG-${i}`, d:{class:'platinum'} })
			el({a:'div', b:a, c:'PL: 0.85' })
			el({a:'div', b:a, c:'LAT: 0.70' })
			el({a:'div', b:a, c:'JIT: 0.50' })
		}
		a.children[8].className = 'gold'
		a.children[12].className = 'bronze'
		a.children[16].className = 'bronze'
		a.children[20].className = 'silver'
		a.children[24].className = 'bronze'
		
			el({a:'div', b:a, c:`TREG-8`, d:{class:'platinum'} })
			el({a:'div', b:a, c:'PL: 0.85' })
			el({a:'div', b:a, c:'LAT: 0.70' })
			el({a:'div', b:a, c:'JIT: 0.50' })
	})(el({a:'div', b:a}));
	
	(a => {
		el({a:'div', b:a, c:'Bronze' })
		el({a:'div', b:a, c:'Silver' })
		el({a:'div', b:a, c:'Gold' })
		el({a:'div', b:a, c:'Platinum' })
	})(el({a:'div', b:a}));
	
}
