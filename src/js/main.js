const nav = document.querySelector('.nav')
const allNavItems = document.querySelectorAll('.nav__item')
const button = document.querySelector('.button')
const acrossLeft = document.querySelector('.left')
const acrossRight = document.querySelector('.right')

const openNav = () => {
	nav.classList.toggle('active')
	button.classList.toggle('active')
	acrossLeft.classList.toggle('active')
	acrossRight.classList.toggle('active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('active')
      acrossLeft.classList.remove('active')
      acrossRight.classList.remove('active')
 
		})
	})
}

button.addEventListener('click', openNav)
