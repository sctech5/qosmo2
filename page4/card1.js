const page4Card1 = a => {
	a = el({a:'div', b:a, d:{class:'page1card'}});
	
	(a => {
		el({a:'div', b:a, c:'Record Performance Before After Gangguan'});
		
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
			el({a:'th', b:a, c:'Ticket'})
			el({a:'th', b:a, c:'Start Date'})
			el({a:'th', b:a, c:'End Date'})
			el({a:'th', b:a, c:'TReg'})
			el({a:'th', b:a, c:'TSel'})
			el({a:'th', b:a, c:'Gangguan'})
			el({a:'th', b:a, c:'Solusi'})
			el({a:'th', b:a, c:'Quality Before'})
			el({a:'th', b:a, c:'Quality After'})
		})(el({a:'tr', b:el({a:'thead', b:a})}))
		
		const b = new Date()
		b.setDate(b.getDate()-22)
		const c = new Date()
		c.setDate(c.getDate()-7)
		a = el({a:'tbody', b:a})
		for (var i=1; i<8; i++) {
			(a => {
				el({a:'td', b:a, c:`Ticket-${i}` })
				el({a:'td', b:a, c:`${b.getFullYear()}/${b.getMonth()<9?'0':''}${b.getMonth()+1}/${b.getDate()<10?'0':''}${b.getDate()}` })
				el({a:'td', b:a, c:`${c.getFullYear()}/${c.getMonth()<9?'0':''}${c.getMonth()+1}/${c.getDate()<10?'0':''}${c.getDate()}` })
				el({a:'td', b:a, c:`Treg-${i}` })
				el({a:'td', b:a, c:`${i}` })
				el({a:'td', b:a, c:'Lorem Ipsum Dolor Sit Amet' })
				el({a:'td', b:a, c:'Lorem Ipsum Dolor Sit Amet' })
				el({a:'td', b:a, c:'Lorem Ipsum Dolor Sit Amet' })
				el({a:'td', b:a, c:'Lorem Ipsum Dolor Sit Amet' })
			})(el({a:'tr', b:a }))
			b.setDate(b.getDate()-1)
			c.setDate(c.getDate()-1)
		}
		
	})(el({a:'div', b:el({a:'div', b:a}), d:{style:'overflow: auto; height: 37vh; width:71vw;'} }))
	
}