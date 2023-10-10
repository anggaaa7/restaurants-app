class RestoItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set resto(resto) {
        this._resto = resto;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }

        .resto-thumbnail {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }

        .resto-info {
            padding: 24px;
        }

        .resto-info > h2 {
            font-weight: lighter;
            font-size: 32px;
        }

        .resto-info > p {
            font-size: 18px;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        }

        .resto-info > h4 {
            font-size: 18px;
            margin-top: 10px;
        }

        @media screen and (max-width: 550px){
            .resto-thumbnail {
                max-height: 200px;
            }
        }

        </style>
        <img class="resto-thumbnail" src="${this._resto.pictureId}" alt="resto-thumbnail">
        <div class="resto-info">
            <h2>${this._resto.name}</h2>
            <p>${this._resto.description}</p>
            <h4>Kota: ${this._resto.city}</h4>
        </div>`;
    }
}

customElements.define("resto-item", RestoItem);