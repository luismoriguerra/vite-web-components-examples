const template = document.createElement("template");
template.innerHTML = `
<slot></slot>
<button class="pink">Shadow DOM Button</button>
`;

class ExampleElement extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("example-element-button", ExampleElement);