<script lang="ts">
    export let billAmount: string;
    export let peopleNumber: string;
</script>

<div class="input-fields">
    <div class="bill-amount">
        <div class="field">
            <input type="text" id="bill-amount" name="bill-amount" bind:value={billAmount} />
        </div>
        <div class="label">Bill Amount</div>
    </div>
    <div class="number-of-people">
        <div class="field">
            <input type="text" id="number-of-people" name="number-of-people" bind:value={peopleNumber} />
        </div>
        <div class="label">Number of People</div>
    </div>
</div>
