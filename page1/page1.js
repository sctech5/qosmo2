const page1 = a => {
	a.innerHTML = ''
	
	a = el({a:'div', b:a, d:{id:'page1'}})
	page1Card1(a)
	page1Card2(a)
	page1Card3(a)
	page1Card4(a)
	page1Card5(a)
	page1Card6(a)
	page1Card7(a)
	
	return a
}