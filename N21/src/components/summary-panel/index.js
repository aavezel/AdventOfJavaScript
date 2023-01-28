import html from './template.html';
import styles from './styles.css';

const template = document.createElement('template');
template.innerHTML = `
	<style>${styles}</style>
	${html}
`;

class SummaryPanelComponent extends HTMLElement {
	#formatter = Intl.NumberFormat('en-US', { style: "currency",  currency: 'USD' });
	#incomeElement = null;
	#amountElement = null;
	#balanceElement = null;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	handleIncomeChanged = ({detail: income}) => {
		this.#incomeElement.innerText = this.#formatter.format(income)
	}

	handleAmountChanged = ({detail: amount}) => {
		this.#amountElement.innerText = this.#formatter.format(amount)
	}

	handleBalanceChanged = ({detail: balance}) => {
		this.#balanceElement.innerText = this.#formatter.format(balance)
		if (balance > 0) {
			this.#balanceElement.classList.add('positive');
			this.#balanceElement.classList.remove('negative');
		} else {
			this.#balanceElement.classList.remove('positive');
			this.#balanceElement.classList.add('negative');
		}
	}

	connectedCallback() {
		this.shadowRoot.appendChild(template.content.cloneNode(true));

		this.#incomeElement = this.shadowRoot.querySelector('[data-role="income"]');
		this.#amountElement = this.shadowRoot.querySelector('[data-role="amount"]');
		this.#balanceElement = this.shadowRoot.querySelector('[data-role="balance"]');

		document.body.addEventListener('income.changed', this.handleIncomeChanged);
		document.body.addEventListener('amount.changed', this.handleAmountChanged);
		document.body.addEventListener('balance.changed', this.handleBalanceChanged);

	}

	disconnectedCallback() {
		document.body.removeEventListener('income.changed', this.handleIncomeChanged);
		document.body.removeEventListener('amount.changed', this.handleAmountChanged);
		document.body.removeEventListener('balance.changed', this.handleBalanceChanged);
	}
}

export default SummaryPanelComponent;