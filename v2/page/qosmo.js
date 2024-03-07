m = {
	p1: {},
	p2: {},
	p3: {},
	p4: {},
	p5: {},
}

const navtopClick = a => {
	location = '?page=' + [,'home', 'core', 'access', 'ticket', 'sla', 'cdn', 'order'][[...a.target.parentElement.children].indexOf(a.target)]
	/*
	if (!a.target.classList.contains('active')) {
		a.target.parentElement.querySelector('div.active').classList.remove('active')
		a.target.classList.add('active')
		console.log([...a.target.parentElement.children].indexOf(a.target))
	}
	*/
}

const navtop = a => {
	a = el({a:'div', b:a, d:{id:'navtop'} })
	const b = window.location.search.substring(1).split('&').reduce((a,b) => (b ? {...a, ...JSON.parse(`{"${decodeURIComponent(b.split('=')[0])}" : "${decodeURIComponent(b.split('=')[1])}"}`) } :  a), {}).page || 'home';
	
	(a => {
		el({a:'div', b:a, c:'QOSMO'})
		el({a:'div', b:a, c:'Home', d: b=='home' ? {class:'active'} : {}, e:{click:navtopClick} })
		el({a:'div', b:a, c:'Core Performance', d: b=='core' ? {class:'active'} : {}, e:{click:navtopClick} })
		el({a:'div', b:a, c:'Access Performance', d: b=='access' ? {class:'active'} : {}, e:{click:navtopClick} })
		el({a:'div', b:a, c:'Ticket Quality', d: b=='ticket' ? {class:'active'} : {}, e:{click:navtopClick} })
		el({a:'div', b:a, c:'SLA', d: b=='sla' ? {class:'active'} : {}, e:{click:navtopClick} })
		el({a:'div', b:a, c:'CDN Performance', d: b=='cdn' ? {class:'active'} : {}, e:{click:navtopClick} })
		el({a:'div', b:a, c:'Order', d: b=='order' ? {class:'active'} : {}, e:{click:navtopClick} })
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
	
	const b = window.location.search.substring(1).split('&').reduce((a,b) => (b ? {...a, ...JSON.parse(`{"${decodeURIComponent(b.split('=')[0])}" : "${decodeURIComponent(b.split('=')[1])}"}`) } :  a), {})
	
	if (b.page) {
		
		if (b.page == 'core') core1(document.body);
		else if (b.page == 'access') access1(document.body);
		else if (b.page == 'ticket') ticket1(document.body);
		else page1(document.body)
		
	} else page1(document.body)
	
	
	navtop(document.body)
	
})