const page4 = a => {
	a.innerHTML = ''
	
	a = el({a:'div', b:a, d:{id:'page4'}})
	page4Card1(a)
	page4Card2(a)
	page4Card3(a)
	
	return a
}