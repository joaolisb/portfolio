function toHome(){
    document.getElementById('home').scrollIntoView(true);
}

function toSobre(){
    document.getElementById('sobre').scrollIntoView(true);
}

function toProjetos(){
    document.getElementById('projetos').scrollIntoView(true);
}

let nightTime = false;
let langEng = false;

function nox(){
    var root = document.querySelector(':root');
	var btn = document.getElementById('darkmode-btn');
	var btn2 = document.getElementById('language-btn');
	
	if(nightTime == false){
		root.style.setProperty('--fundo', '#1D1D1D');
		root.style.setProperty('--fonte1', '#FEFEFE');
		root.style.setProperty('--fonte2', '#333333');

		btn.innerHTML = `<i class="bi bi-sun-fill" style="font-size: 1.5em;"></i>`
		btn.style.backgroundColor = '#f9f9f9';
		btn.style.background = 'linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%)';
		btn.style.color = "var(--escuro)";
		
		btn2.style.backgroundColor = '#f9f9f9';
		btn2.style.background = 'linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%)';
		if(!langEng) {
			btn2.style.color= "var(--escuro)";
		}
		
		nightTime = true;
	} else {
		root.style.setProperty('--fundo', '#FEFEFE');
		root.style.setProperty('--fonte1', '#333333');
		root.style.setProperty('--fonte2', '#FEFEFE');
		
		btn.innerHTML = `<i class="bi bi-moon-fill" style="font-size: 1.2em;"></i>`
		btn.style.backgroundColor = '#363636';
		btn.style.background = 'linear-gradient(to bottom, #363636 5%, #1f1f1f 100%)';
		btn.style.color = "var(--claro)";
		
		btn2.style.backgroundColor = '#363636';
		btn2.style.background = 'linear-gradient(to bottom, #363636 5%, #1f1f1f 100%)';
		if(!langEng) {
			btn2.style.color= "var(--claro)";
		}
		
		nightTime = false;
	}
}

function ptToEn(){
	var nav = document.getElementById('nav1-lang');
	var apres = document.getElementById('apresentacao');
	var sobreTit = document.getElementById('sobre-lang');
	var sobre = document.getElementById('about-lang');
	var projetos = document.getElementById('projetos');
	var footerLang = document.getElementById('footer-lang');
	var btn = document.getElementById('language-btn');
	
	if(langEng == false) {
		nav.innerHTML = `<li><a class="nav-link" onclick="toHome()">Home</a></li>
						<li><a class="nav-link" onclick="toSobre()">About me</a></li>
						<li><a class="nav-link" onclick="toProjetos()">My projects</a></li>`;
		apres.innerHTML = `<p class="ola">Hello! My name is</p>
						<h1 class="nome">JOÃO LISBOA</h1>
						<p class="ocupacao">DEVELOPER</p>
						<br />
						<a onclick="toSobre()"><button class="sobre-mim">About me</button></a>
						<a href="https://www.linkedin.com/in/joao-m-lisboa/" title="My Linkedin!" target="_blank"><button class="social social-1"><i class="bi bi-linkedin"></i></button></a>
						<a href="https://github.com/joaolisb" title="My Github repo!" target="_blank"><button class="social"><i class="bi bi-github"></i></button></a>`;
		sobreTit.innerHTML = `About me`;
		sobre.innerHTML = `My name is <b>João</b>, a Junior Dev based in Brazil. My focus is on creativity and learning, as well as perseverance (also called 'stubbornness') until I finish what I'm doing. I also have a bit of experience in design, which I believe complements the creative part of development.
                        <br /><br />
                        If we're going to be friends, you should know that everything here I learned on my own, besides these skills:`;
		footerLang.innerHTML = `Designed with much &nbsp;<i class="bi bi-cup-hot-fill" title="coffee"></i>&nbsp; by <a class="git-jl" href="https://github.com/joaolisb" target="_blank">João Lisboa</a>.`;
		projetos.innerHTML = `<h2 class="titulo-3">My projects</h2>
							<table>
								<tbody>
									<tr>
										<td>
											<a class="link-img" href="https://joaolisb.github.io/gerador-gradiente/" target="_blank"><h3>Gradient Generator</h3></a>
											<p>Create gradients between two random colors.</p>
										</td>
										<td><a class="link-img" href="https://joaolisb.github.io/gerador-gradiente/" target="_blank"><img class="img-projeto" src="assets/projeto-1.jpg" width="344" alt="Projeto" title="Gradient Generator" /></a></td>
									</tr>
									<tr>
										<td>
											<a class="link-img" href="https://joaolisb.github.io/drumkit/" target="_blank"><h3>Drum Kit</h3></a>
											<p>Press the keys and listen to the drums.</p>
										</td>
										<td><a class="link-img" href="https://joaolisb.github.io/drumkit/" target="_blank"><img class="img-projeto" src="assets/projeto-2.jpg" width="344" alt="Projeto" title="Drum Kit" /></a></td>
									</tr>
									<tr>
										<td>
											<h3 style="color:#fd2155">Work in progress</h3>
											<p>TBA</p>
										</td>
										<td><img class="img-projeto" src="assets/manutencao.jpg" width="344" alt="In progress" title="In progress" /></td>
									</tr>
								</tbody>
							</table>`
		
		btn.style.color = "var(--primaria)";
		
		langEng = true;
	} else {
		nav.innerHTML = `<li><a class="nav-link" onclick="toHome()">Home</a></li>
						<li><a class="nav-link" onclick="toSobre()">Sobre mim</a></li>
						<li><a class="nav-link" onclick="toProjetos()">Meus projetos</a></li>`;
		apres.innerHTML = `<p class="ola">Olá! Meu nome é</p>
						<h1 class="nome">JOÃO LISBOA</h1>
						<p class="ocupacao">DESENVOLVEDOR</p>
						<br />
						<a onclick="toSobre()"><button class="sobre-mim">Sobre mim</button></a>
						<a href="https://www.linkedin.com/in/joao-m-lisboa/" title="Meu Linkedin!" target="_blank"><button class="social social-1"><i class="bi bi-linkedin"></i></button></a>
						<a href="https://github.com/joaolisb" title="Meu Repositório no Github!" target="_blank"><button class="social"><i class="bi bi-github"></i></button></a>`;
		sobreTit.innerHTML = `Sobre mim`;
		sobre.innerHTML = `Meu nome é <b>João</b>, um Desenvolvedor Front-end Júnior de Belo Horizonte, MG. Meu foco é a criatividade e o aprendizado, além de perseverança (também chamada de 'teimosia') até eu terminar o que estiver sendo feito. Também possuo experiência com design e edição de imagens, que acredito que complementem a parte criativa do desenvolvimento.
                        <br /><br />
                        Se vamos ser amigos, você deve saber que tudo nessa página eu aprendi a fazer sozinho, além dessas habilidades:`;
		footerLang.innerHTML = `Desenvolvido com muito &nbsp;<i class="bi bi-cup-hot-fill" title="Café"></i>&nbsp; por <a class="git-jl" href="https://github.com/joaolisb" target="_blank">João Lisboa</a>.`;
		projetos.innerHTML = `<h2 class="titulo-3">Meus projetos:</h2>
							<table>
								<tbody>
									<tr>
										<td>
											<a class="link-img" href="https://joaolisb.github.io/gerador-gradiente/" target="_blank"><h3>Gerador de gradientes</h3></a>
											<p>Crie gradientes entre duas cores aleatórias no clique de um botão.</p>
										</td>
										<td><a class="link-img" href="https://joaolisb.github.io/gerador-gradiente/" target="_blank"><img class="img-projeto" src="assets/projeto-1.jpg" width="344" alt="Projeto" title="Gerador de Gradientes" /></a></td>
									</tr>
									<tr>
										<td>
											<a class="link-img" href="https://joaolisb.github.io/drumkit/" target="_blank"><h3>Drum Kit</h3></a>
											<p>Aperte as teclas e escute a bateria.</p>
										</td>
										<td><a class="link-img" href="https://joaolisb.github.io/drumkit/" target="_blank"><img class="img-projeto" src="assets/projeto-2.jpg" width="344" alt="Projeto" title="Drum Kit" /></a></td>
									</tr>
									<tr>
										<td>
											<h3 style="color:#fd2155">Projeto em andamento</h3>
											<p>Em breve.</p>
										</td>
										<td><img class="img-projeto" src="assets/manutencao.jpg" width="344" alt="Em construção" title="Em construção" /></td>
									</tr>
								</tbody>
							</table>`
		
		if(nightTime == true) {
			btn.style.color = "var(--escuro)";
		} else {
			btn.style.color = "var(--claro)";
		}
		
		langEng = false;
	}
}