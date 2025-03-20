function toggleMode(){
    
    const html = document.documentElement;
    html.classList.toggle('light');

    const avatar = document.querySelector('#profile img');
    
    if(html.classList.contains('light')){
        // opção 1 de alterar a imagem
        avatar.src = './assets/avatar-light.jpeg';
        avatar.alt = 'Foto da Camila sorrindo com óculos escuros';
    } else {
        // opção 2 de alterar a imagem
        avatar.setAttribute('src', './assets/avatar.jpeg');
        avatar.alt = 'Foto da Camila sorrindo com óculos a noite';
    }
}

function localeSwitcher(){
    const html = document.documentElement
    html.classList.toggle('translate');

    const buttonTranslate = document.querySelector('#localeSwitcher button');

    if(html.classList.contains('translate')){
        buttonTranslate.innerHTML = 'PT'

        document.querySelector('.introduction').innerHTML = 'Bem-vindo à minha página'
        document.querySelector('.list').innerHTML = `
            <li>
                <a href="./about/about-me.html" target="_blank">Sobre mim</a>
            </li>
            <li>
                <a href="./projects/myProjects.html" target="_blank">Meus projetos</a>
            </li>
            <li>
                <a href="./experiences/myExperiences.html" target="_blank">Minhas experiências</a>
            </li>
            <li>
                <a href="./contacts/myContacts.html" onclick="contacts()" target="_blank">Meus contatos</a>
            </li>`

        document.querySelector('footer p').innerHTML = 'Desenvolvido por Camila da Rosa'


    } else {
        buttonTranslate.innerHTML = 'EN'

        document.querySelector('.introduction').innerHTML = 'Welcome to my page'
        document.querySelector('.list').innerHTML = `
            <li>
                <a href="./about/about-me.html" target="_blank">About Me</a>
            </li>
            <li>
                <a href="./projects/myProjects.html" target="_blank">My Projects</a>
            </li>
            <li>
                <a href="./experiences/myExperiences.html" target="_blank">My Experiences</a>
            </li>
            <li>
                <a href="./contacts/myContacts.html" onclick="contacts()" target="_blank">My Contacts</a>
            </li>`

        document.querySelector('footer p').innerHTML = 'Developed by Camila da Rosa'
    }

}