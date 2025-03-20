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