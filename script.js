const card = document.getElementById('box-card')

chatsjson()
async function chatsjson() {
	const conexao = await fetch('https://raw.githubusercontent.com/OperacaoN1/Escala/main/chatbot.json')
	const conexaoConvertida = await conexao.json()
	conexaoConvertida.forEach((item) => {
		const servico = item.servico
		const link = item.link
		const novaDiv = document.createElement('div')
		novaDiv.classList.add('card')
		novaDiv.id= "clickDiv"

		novaDiv.innerHTML = `
			<img src="/img/robo.svg" alt="icone de um robô">
			<a href=${link}>${servico}</a>
		`

		card.appendChild(novaDiv)

		novaDiv.addEventListener("click", function() {
      		let linkA = this.querySelector("a");
      		if (linkA) {
        		window.location.href = linkA.href;
      		}
    	})
	})
}

