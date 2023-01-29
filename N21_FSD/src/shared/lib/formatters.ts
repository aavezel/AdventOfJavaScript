const defaultNumberFormatter = Intl.NumberFormat('en-US');
const defaultCurrencyFormatter = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export const formatNumber = (value: number): string => defaultNumberFormatter.format(value);

export const formatCurrency = (value: number): string => defaultCurrencyFormatter.format(value);
