//https://slideswithsuperpowers.netlify.app/60?clicks=1
import { LitElement, html, css } from "https://cdn.skypack.dev/lit";

import sheet from "https://codepen.io/davatron5000/pen/MWrXBjr.css" assert { type: "css" };

document.adoptedStyleSheets = [sheet];

/**
 * An example custom alert component.
 *
 * @slot - This element has a slot, expecting a paragraph
 * @csspart button - The button
 */
export class CustomAlertv2 extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      /**
       * The icon to put next to the slot text
       */
      icon: { type: String },
      /**
       * The theme to apply to the alert
       */
      theme: { type: String }
    };
  }

  constructor() {
    super();
    this.setAttribute("role", "alert");
    this.setAttribute("aria-live", "polite");
  }

  _close() {
    this.hidden = true;
  }

  render() {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="note" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </symbol>
        <symbol id="warn" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </symbol>
      </svg>

      <svg part="icon" height="24" width="24">
        <use href="#${this.icon}"></use>
      </svg>
      <slot></slot>
      <button part="button" @click="${this._close}"><span>Close</span></button>
    `;
  }
}

window.customElements.define("custom-alert-v2", CustomAlertv2);