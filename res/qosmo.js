m = {}

addEventListener('load', () => {
	
	m.ct = el({a:'div', b:document.body})
	m.page2 = page2(m.ct);
	m.page1 = page1(m.ct);
	
	//navbar
	(a => {
		
		(a => {
			for (var i=1; i<6; i++) el({a:'option', b:a, c:`Page${i}`, d:{value:`page${i}`} })
		})(el({a:'select', b:a, e:{change:a => { m.ct.innerHTML = ''; m.ct.appendChild(m[a.target.value]) }} }))
		
		el({a:'div', b:a, c:'Qosmo Dashboard'})
		el({a:'img', b:a, d:{src:'img/Logout2.svg'}})
	})(el({a:'div', b:document.body, d:{id:'navtop'}}))
	
})