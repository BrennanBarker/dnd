import { LitElement, html, css } from 'lit';
import { sharedStyles } from './shared-styles';

const abilitySkills = {
    'Strength': ['Athletics'],
    'Dexterity': ['Acrobatics', 'Sleight of Hand', 'Stealth'],
    'Constitution': [],
    'Intelligence': ['Arcana', 'History', 'Investigation', 'Nature', 'Religion'],
    'Wisdom': ['Animal Handling', 'Insight', 'Medicine', 'Perception', 'Survival'],
    'Charisma': ['Deception', 'Intimidation', 'Performance', 'Persuasion']
}

class AbilityElement extends LitElement {
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
        console.log(this.abilityName)
        const skills = abilitySkills[this.abilityName]
        return html`
            <div class="ability-container">
                <div>
                    <label for="${this.abilityName.toLowerCase()}-ability-score">${this.abilityName}</label>
                    <input type="number" name="${this.abilityName.toLowerCase()}-ability-score" class="borderless">
                </div>
                <div>
                    <label>Modifier</label>
                    <output name="${this.abilityName.toLowerCase()}-modifier"></output>
                </div>
                <div>
                    <input type="checkbox" name="${this.abilityName.toLowerCase()}-saving-throw-proficiency">
                    <label>Saving Throw</label>
                    <output name="${this.abilityName.toLowerCase()}-saving-throw"></output>
                </div>
                <ul class="skills">
                    ${skills.map(skill => html`
                        <li>
                            <input type="checkbox" name="${skill.toLowerCase()}-proficiency">
                            <label for="${skill.toLowerCase()}">${skill}</label>
                            <output name="${skill.toLowerCase()}"></output>
                        </li>
                    `)}
                </ul>
            </div>
        `;
    }
}

class AbilitiesElement extends LitElement {
    render() {
        return html`${Object.keys(abilitySkills).map(ability => html`<ability-element abilityName=${ability}></ability-element>`)}`
    }
}

customElements.define('ability-element', AbilityElement);
customElements.define('abilities-element', AbilitiesElement);

export {AbilityElement, AbilitiesElement}