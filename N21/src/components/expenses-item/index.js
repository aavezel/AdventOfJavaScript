import html from './template.html';
import styles from './styles.css';

const template = document.createElement('template');
template.innerHTML = `
	<style>${styles}</style>
	${html}
`;

class ExpensesItemComponent extends HTMLElement {
	labelElement = null;
	priceElement = null;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	get id() { return this.getAttribute('id') ?? ''; }
	get label() { return this.getAttribute('label') ?? ''; }
	get price() { return this.getAttribute('price') ?? '0.00'; }

	update() {
		if (this.labelElement) {
			this.labelElement.innerText = this.label;
		}
		if (this.priceElement) {
			this.priceElement.innerText = `$${this.price}`;
		}
	}

	connectedCallback() {
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.labelElement = this.shadowRoot.querySelector('[data-role="label"]');
		this.priceElement = this.shadowRoot.querySelector('[data-role="price"]');

		this.shadowRoot.querySelector('[data-role="delete"]').addEventListener('click', () => {
			document.body.dispatchEvent(new CustomEvent('expenses.remove', {detail: this.id}));
		});

		this.update();
	}

	attributeChangedCallback() {
		this.update();
	}

	disconnectedCallback() {}
}

export default ExpensesItemComponent;