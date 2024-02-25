const page2 = a => {
	a.innerHTML = ''
	
	a = el({a:'div', b:a, d:{id:'page2'}})
	page2Card1(a)
	page2Card2(a)
	page2Card3(a)
	page2Card4(a)
	page2Card5(a)
	page2Card6(a)
	page2Card7(a)
	
	return a
}