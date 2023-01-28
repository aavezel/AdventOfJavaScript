import AddPanelComponent from './components/add-panel';
import CustomField from './components/custom-field';
import ExpensesPanelComponent from  './components/expenses-panel';
import ExpensesItemComponent from  './components/expenses-item';
import SummaryPanelComponent from './components/summary-panel';
import initStore from './store';

window.customElements.define('add-panel', AddPanelComponent);
window.customElements.define('custom-field', CustomField);
window.customElements.define('expenses-panel', ExpensesPanelComponent);
window.customElements.define('expenses-item', ExpensesItemComponent);
window.customElements.define('summary-panel', SummaryPanelComponent);

document.addEventListener('DOMContentLoaded', () => {
    initStore();
});