//https://slideswithsuperpowers.netlify.app/56
const template = document.createElement("template");
template.innerHTML = `
<slot></slot>
<p>Some Shadow DOM text</p>
<button>Shadow DOM Button</button>
`;

class ButtonDuplicator extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("button-duplicator", ButtonDuplicator);