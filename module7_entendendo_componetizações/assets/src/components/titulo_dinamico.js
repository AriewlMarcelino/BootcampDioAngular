class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:'open'});

        //Base componente
        const rootElement = document.createElement('h1');
        rootElement.textContent = this.getAttribute('titulo');

        //Esteilizar componente
        const style = document.createElement('style');
        style.textContent = `
            h1{
                color: red;
            }
        
        `
        //Enviar para o shadow
        shadow.appendChild(rootElement);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico',TituloDinamico);