import { LitElement, html } from 'lit';

class MarkdownExample extends LitElement {
    render() { 
        return html`FROMMARKDOWN`
    }
}

customElements.define('markdown-example', MarkdownExample);

export { MarkdownExample }