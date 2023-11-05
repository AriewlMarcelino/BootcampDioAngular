class Menu extends HTMLElement {
    constructor(){
        super();
            const shadow = this.attachShadow({mode:'open'});

            shadow.appendChild(this.build());
            shadow.appendChild(this.styles());
        }

    build(){

        // Begin HTML here !
        const menu_main = document.createElement('nav');
        menu_main.setAttribute('class','menu_main');
        menu_main.textContent = (this.getAttribute('describe') || `Adding your text here right !`);

        const logoDefault = `https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg`

        const box_logo = document.createElement('img');
        box_logo.setAttribute('class','box_logo');
        box_logo.src = this.getAttribute('logo') || logoDefault;

        const box_nav_links = document.createElement('li');
        box_nav_links.setAttribute('class','box_nav_links');
        box_nav_links.textContent = this.getAttribute('li_login');
        

        menu_main.appendChild(box_logo);
        menu_main.appendChild(box_nav_links);


        return menu_main;
    }

    styles(){
        const style = document.createElement('style');
        // Style here !
        style.textContent = `
        
            .menu_main{
                background-color:black;
                color:white;
                padding:2rem;
                display: grid;
                justify-items: center;
            }

            .box_logo{
                height: 80px;
                width: 80px;
                border-radius: 100%;
            }
            .box_nav_links{
                list-style:none;
            }


        `;
        return style;
    }
}

customElements.define('menu-main',Menu);