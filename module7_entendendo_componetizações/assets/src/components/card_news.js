
// Criando uma classe extendida de um HTML;
// class CardNews extends HTMLElement {

//     // Caracteristicas da classe 
//     constructor(){
        
//      O super vai herdar as caracteristicas do construtor que vem do   HTMLELEMENT;
//         super();
        
//         // mode:OPEN(Podemos deixar aberto para que outra javascript influencie nas modificações);
//         // mode:OPEN(Podemos deixar close para que somente quem tem acesso ao arquivo consiga modificar este componente)
//         const shadow = this.attachShadow({mode:'open'});
//         shadow.innerHTML = "<H1>Hello World</h1>"
//     }
// }

// customElements.define('card-news',CardNews)



// Esqueleto de um componente;
class NewCard extends HTMLElement {
    constructor(){

        super();

        const shadow = this.attachShadow({mode:'open'});
        shadow.innerHTML = "<h1>Anakin was here !</h1>"
        // Adding the elements html:
        shadow.appendChild(this.build());
        // Adding the style the document;
        shadow.appendChild(this.styles());
    }

    //Local onde começamos a construir nossos elementos;
    build(){


        const photoDefault = `https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg`
        
        // create an element;
        const card_main = document.createElement("div");
        // create an class;
        card_main.setAttribute("class","main_card");

        // div > card_left
        const card_left = document.createElement('div');
        card_left.setAttribute('class','card_left');

        // div > img_author > img > p 
        const div_author = document.createElement('div');
        div_author.setAttribute('class','div_author');

        const img_author = document.createElement('img');
        img_author.src = (this.getAttribute("photo") || photoDefault);
        
        img_author.alt = 'imagem do author'
        img_author.width = 360
        img_author.height = 360
        

        const name_author = document.createElement('p');
        name_author.textContent = "By " + (this.getAttribute("author") || "By anonymous");

        const title_card_left = document.createElement('h1');
        title_card_left.textContent = this.getAttribute("title");

        const context_card_left = document.createElement('p');
        context_card_left.textContent = this.getAttribute('context');

        const ver_mais = document.createElement('a');
        ver_mais.textContent = this.getAttribute('link_ver_mais');
        ver_mais.href = this.getAttribute('Ver_mais');

        // div > card_right
        const card_right = document.createElement("div");
        card_right.setAttribute("class","card_right");


        // link do elemento main_card > card_left
        card_main.appendChild(card_left);
        card_left.appendChild(title_card_left);
        
        // link dp elemento card_left > div_author
        card_left.appendChild(div_author);

        // link do elemento div_author > elementos
        div_author.appendChild(img_author);
        div_author.appendChild(name_author);
        div_author.appendChild(title_card_left);
        div_author.appendChild(context_card_left);
        div_author.appendChild(ver_mais);

        // link do elemento main_card > card_right
        card_main.appendChild(card_right);
        card_right.appendChild(img_author);


        return card_main;
    }

    // Onde vamos adicionar os estilos dos elementos;
    styles(){

        const style = document.createElement("style");
        style.textContent = `
            .card_main{
                display: grid;
                grid-template-columns: 1fr 1fr;
                flex-wrap: wrap;
                justify-items: end;
                border: solid 1px gray;
                padding: 10px;
                align-items: center;
            }
            
            .context_img_author{
                display: flex;
                justify-content: start;
                gap: 9px;
                border: solid 1px gray;
                align-items: center;
            }
            
            .context_img_author img{
                border-radius: 50%;
                height:35px;
                width:35px;
            }
            
            .h1_main_vlog{
                border: solid 1px gray;
            }
            
            .p_main_vlog{
                border: solid 1px gray;
            }
            
            .block_img_user{
                max-width: 100%;
                width: 300px;
                height: 100%;
                border: solid 1px gray;
            }
            `;



        return style;

    }
}

customElements.define('new-card',NewCard);