import { LitElement, html, css } from 'lit';
import { sharedStyles } from './shared-styles.js';


class ExpandingInput extends LitElement {
    static properties = {
        name: { type: String },
        placeholder: { type: String },
        defaultWidth: { type: String },
    };

    static styles = [
        sharedStyles,
    ]

    render() {
        const expand = (evt) => evt.target.style.width = evt.target.value ? (evt.target.value.length + 1) + 'ch' : this.defaultWidth;
        return html`<input type="text" @input=${expand} placeholder=${this.placeholder} class="borderless" style="width: ${this.defaultWidth}">`
    }
}

customElements.define('expanding-input', ExpandingInput);

export { ExpandingInput }