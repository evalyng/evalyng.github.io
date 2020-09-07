document.querySelectorAll('button').forEach(button => {
	button.onclick = () => {
		document.body.style.cursor = 'wait'

		setTimeout(() => {
			new Audio('media/internyet.mp3').play().loop = true

			alert('Error id: ' + Math.random().toString().split('.')[1] + ' 您的連接被大中國防火牆中斷，原因：操您 pls try againe?')

			const _ = document.createElement('link')
			_.rel = 'stylesheet'
			_.href = 'css/360.css'

			document.head.append(_)
		}, 2000)
	}
})
