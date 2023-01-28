import html from './template.html';
import styles from './styles.css';

const template = document.createElement('template');
template.innerHTML = `
	<style>${styles}</style>
	${html}
`;

class ExpensesPanelComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	#table = null;

	handleExpensesChanged = (e) => {
		const {detail: expenses} = e;
		this.#table.innerHTML = expenses.map(item =>
			`<expenses-item label="${item.expense}" price="${item.amount}" id="${item.id}"></expenses-item>`
		).join('');
	};

	connectedCallback() {
		this.shadowRoot.appendChild(template.content.cloneNode(true));

		this.#table = this.shadowRoot.querySelector('[data-role="table"]');

		document.body.addEventListener('expenses.changed', this.handleExpensesChanged)
	}

	attributeChangedCallback(name, oldValue, newValue) {}

	disconnectedCallback() {
		document.body.removeEventListener('expenses.changed', this.handleExpensesChanged)
	}
}

export default ExpensesPanelComponent;