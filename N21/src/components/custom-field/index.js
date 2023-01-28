import html from './template.html';
import styles from './styles.css';

const template = document.createElement('template');
template.innerHTML = `
	<style>${styles}</style>
	${html}
`;

class CustomField extends HTMLElement {
	labelElement = null;
	inputElement = null;

	static get observedAttributes() { return ['label', 'name', 'value']; }

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	get name() { return this.getAttribute('name'); }

	get label() { return this.getAttribute('label'); }

	get value() { return this.getAttribute('value'); }

	updateName() {
		if (this.inputElement) {
			this.inputElement.setAttribute('name', this.name);
		}
		if (this.labelElement) {
			this.labelElement.setAttribute('for', this.name);
		}
	}

	updateLabel() {
		if (this.labelElement) {
			this.labelElement.innerText = this.label;
		}
	}

	updateValue() {
		if (this.inputElement) {
			this.inputElement.setAttribute('value', this.value);
		}
	}

	handleChange = (e) => {
		this.dispatchEvent(new CustomEvent("change", {
			detail: this.inputElement.value
		}))
	}

	connectedCallback() {
		this.shadowRoot.appendChild(template.content.cloneNode(true));

		this.labelElement = this.shadowRoot.querySelector('label');
		this.inputElement = this.shadowRoot.querySelector('input');

		this.updateLabel();
		this.updateName();
		this.updateValue();

		this.inputElement.addEventListener('change', this.handleChange);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'label') this.updateLabel();
		if (name === 'name') this.updateName();
		if (name === 'value') this.updateValue();
	}

	disconnectedCallback() {
		this.inputElement.removeEventListener('change', this.handleChange);

	}
}

export default CustomField;