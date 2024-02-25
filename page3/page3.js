const page3 = a => {
	a.innerHTML = ''
	
	a = el({a:'div', b:a, d:{id:'page3'}})
	page3Card1(a)
	page3Card2(a)
	page3Card3(a)
	page3Card4(a)
	page3Card5(a)
	page3Card6(a)
	page3Card7(a)
	
	return a
}