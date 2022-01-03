<script lang="ts">
    import Form from "./Form.svelte";
    import TipAmount from "./TipAmount.svelte";
    import TotalPerPerson from "./TotalPerPerson.svelte";
    import TipPercentages from "./TipPercentages.svelte";

    let percent = 0.15;
    let peopleNumber: string = "3";
    let billAmount: string = "102.02";
    let tipAmount = "15.31";
    let totalPerPerson = "39.11";

    function calculate() {
        const calcBillAmount = parseFloat(billAmount) * 100;
        const tipAmountCalc = Math.ceil(calcBillAmount * percent);
        const totalPerPersonCalc = Math.ceil((calcBillAmount + tipAmountCalc) / parseInt(peopleNumber));
        tipAmount = (tipAmountCalc / 100).toFixed(2);
        totalPerPerson = (totalPerPersonCalc / 100).toFixed(2);
    }
</script>

<div class="wrapper">
    <TipAmount bind:tipAmount />
    <TotalPerPerson bind:totalPerPerson />
    <Form bind:billAmount bind:peopleNumber />
    <TipPercentages bind:percent />
    <div class="button-wrapper">
        <button id="calculate" on:click={calculate}>Calculate</button>
    </div>
</div>
