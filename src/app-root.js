import { LitElement, html, css } from 'lit';
import { sharedStyles } from './shared-styles.js';

import { AbilitiesElement } from "./ability.js";
import { ExpandingInput } from './expanding-input.js';
import { MarkdownExample } from './markdown-example.js';

class AppRoot extends LitElement {
    static properties = {
        abilityName: { type: String },
    };

    constructor() {
        super();
    }

    static styles = [
        sharedStyles,
        css`
            .ability-container {
                padding: 10px; 
                border: 1px solid #ccc; 
            }
            .skills {
                list-style-type: none;
                padding-left: 0;
                margin: auto;
                border-top: 1px solid gainsboro;
            }
        `
    ];

    render() {
        return html`
            <article id="header" class="centered-children">
                <input type="text" name="name" class="borderless big-text" placeholder="Name">
            </div>
            <div>
                <expanding-input name="background" placeholder="Background" defaultWidth="6em"></expanding-input>
                <expanding-input name="species" placeholder="Species" defaultWidth="4em"></expanding-input>
                <expanding-input name="class" placeholder="Class" defaultWidth="4em"></expanding-input></div>
            <div>
                <label for="level">Level</label>
                <input type="number" name="level" class="borderless two-digit" value="1">
                <label for="xp">XP</label>
                <input type="text" name="xp" id="xp">
                <output name="xp" class="denominator"></output>
            </div>
            </article>
            <article>
                <label for="proficiency-bonus">Proficiency Bonus</label>
                <output type="number" name="proficiency-bonus" id="proficiency-bonus" class="borderless big-text two-digit"></output>
            </article>
            
            <abilities-element></abilities-element>
            <markdown-example></markdown-example>
        `
    }
}

customElements.define('app-root', AppRoot);