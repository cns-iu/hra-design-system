
const CDN_URL='https://cdn.humanatlas.io/hra-design-system/';

class SharedImage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  get backgroundColor() {
    return this.getAttribute('background-color') || 'white';
  }

  get src() {
    return this.getAttribute('src');
  }

  get cdnUrl() {
    const baseUrl = this.getAttribute('base-url') || CDN_URL;
    return new URL(this.src, baseUrl).toString();
  }

  get template() {
    return `
      <a href="${this.cdnUrl}" target="_blank" style="text-decoration: none">
        <img src="${this.src}" style="padding: 2rem; background-color: ${this.backgroundColor};">
      </a>
    `
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = this.template;
  }
}

window.customElements.define('shared-image', SharedImage);
