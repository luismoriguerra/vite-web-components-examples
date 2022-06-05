const template = document.createElement("template");
template.innerHTML = `
<style>
:host p {
  background: orange;
}
::slotted() {
  background: pink
}
</style>
<slot></slot>
<p>I'm Shadow DOM (orange)</p>
`;

class ExampleElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("example-element", ExampleElement);