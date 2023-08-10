const boxCard = document.getElementById('box-card')
const boxVersoes = document.getElementById('versoes')

chatsjson()
async function chatsjson() {
	const conexao = await fetch('https://raw.githubusercontent.com/OperacaoN1/Escala/main/chatbot.json')
	const conexaoConvertida = await conexao.json()
	conexaoConvertida.forEach((item) => {
		const card = document.createElement('div')
		const nomeServico = item.servico
		const texto = document.createElement('span')
		texto.textContent = nomeServico 
		card.classList.add('card')
		card.appendChild(texto)
		boxCard.appendChild(card)

		card.addEventListener("click", () => {
			boxVersoes.innerHTML = ''
			item.versao.forEach(version => {
				const cardVersao = document.createElement('div')
				const textoVersao = document.createElement('p')
				const nomeVersao = document.createElement('a')
				const classeVersao = version.estado
				textoVersao.textContent = `Versões disponiveis do BOT ${item.servico.toUpperCase()}`
				boxVersoes.appendChild(textoVersao)
				cardVersao.classList.add(classeVersao)
				nomeVersao.textContent = version.nome
				nomeVersao.setAttribute("href", version.link)
				cardVersao.appendChild(nomeVersao)
				boxVersoes.appendChild(cardVersao)
				
			})
		})
	})
}

