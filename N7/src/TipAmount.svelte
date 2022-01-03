<script lang="ts">
    export let tipAmount: string;
</script>

<div class="tip-amount">
    <div class="label">Tip Amount</div>
    <div class="dollars"><sup>$</sup><span id="tip-amount">{tipAmount}</span></div>
</div>
