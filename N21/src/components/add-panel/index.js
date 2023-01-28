import html from './template.html';
import styles from './styles.css';

const template = document.createElement('template');
template.innerHTML = `
	<style>${styles}</style>
	${html}
`;

class AddPanelComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	#budgetElement = null;
	#expenseElement = null;
	#amountElement = null;
	#addExpenseButton = null;
	#expense = 0
	#amount = 0;

	handleIncomeChanged = e => {
		this.#budgetElement.setAttribute('value', e.detail);
	}

	handleChangeBudget = e => {
		e.stopPropagation();
		document.body.dispatchEvent(new CustomEvent("change.income", {detail: e.detail}));
	}

	handleChangeExpense = e => {
		e.stopPropagation();
		this.#expense = e.detail;
	}

	handleChangeAmount = e => {
		e.stopPropagation();
		this.#amount = e.detail;
	}

	handleClickAddExpense = (e) => {
		document.body.dispatchEvent(new CustomEvent("expenses.add", {detail: {
			expense: this.#expense,
			amount: Number.parseFloat(this.#amount)
		}}));
	}

	connectedCallback() {
		this.shadowRoot.appendChild(template.content.cloneNode(true));

		this.#budgetElement = this.shadowRoot.querySelector('[data-role="budget"]');
		this.#expenseElement = this.shadowRoot.querySelector('[data-role="expense"]');
		this.#amountElement = this.shadowRoot.querySelector('[data-role="amount"]');
		this.#addExpenseButton = this.shadowRoot.querySelector('#add-expense-button');

		this.#budgetElement.addEventListener('change', this.handleChangeBudget);
		this.#expenseElement.addEventListener('change', this.handleChangeExpense);
		this.#amountElement.addEventListener('change', this.handleChangeAmount);
		this.#addExpenseButton.addEventListener('click', this.handleClickAddExpense);

		document.body.addEventListener('income.changed', this.handleIncomeChanged);
	}

	attributeChangedCallback(name, oldValue, newValue) {}

	disconnectedCallback() {
		this.#budgetElement.removeEventListener('change', this.handleChangeBudget);
		this.#expenseElement.removeEventListener('change', this.handleChangeExpense);
		this.#amountElement.removeEventListener('change', this.handleChangeAmount);
		this.#addExpenseButton.removeEventListener('click', this.handleClickAddExpense);

		document.body.removeEventListener('income.changed', this.handleIncomeChanged)
	}
}

export default AddPanelComponent;