m = {
	p1: {},
	p2: {},
	p3: {},
	p4: {},
	p5: {},
}

const navtopClick = a => {
	if (!a.target.classList.contains('active')) {
		a.target.parentElement.querySelector('div.active').classList.remove('active')
		a.target.classList.add('active')
		consle.log([...a.target.parentElement.children].indexOf(a.target))
	}
}

const navtop = a => {
	a = el({a:'div', b:a, d:{id:'navtop'} });
	
	(a => {
		el({a:'div', b:a, c:'QOSMO'})
		el({a:'div', b:a, c:'Home', d:{class:'active'}, e:{click:navtopClick} })
		el({a:'div', b:a, c:'Core Performance', e:{click:navtopClick} })
		el({a:'div', b:a, c:'Access Performance', e:{click:navtopClick} })
		el({a:'div', b:a, c:'Ticket Quality', e:{click:navtopClick} })
		el({a:'div', b:a, c:'SLA', e:{click:navtopClick} })
		el({a:'div', b:a, c:'CDN Performance', e:{click:navtopClick} })
		el({a:'div', b:a, c:'Order', e:{click:navtopClick} })
	})(el({a:'div', b:a}));
	
	(a => {
		el({a:'div', b:a, c:'j'});
		
		(a => {
			a = el({a:'div', b:a})
			el({a:'div', b:a, c:'Account'})
			el({a:'div', b:a, c:'Sign Out'})
		})(el({a:'div', b:a}))
		
	})(el({a:'div', b:a}))
	
}

addEventListener('load', () => {
	
	map1(document.body)
	page1card1(document.body)
	page1card2(document.body)
	page1card3(document.body)
	page1card4(document.body)
	page1card5(document.body)
	
	navtop(document.body)
	
})