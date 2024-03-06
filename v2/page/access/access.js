const access1 = a => {
	a.innerHTML = ''
	
	map1(a)
	document.querySelector('#map1').children[0].classList.add('access1')
	console.log(document.querySelector('#map1').children[0])
	access1card1(a)
	//core1card2(a)
	//core1card3(a)
	//core1card4(a)
	//core1card5(a)
	//core1card6(a)
}