<script lang="ts">
    import ErrorBlock from "./ErrorBlock.svelte";

    export let form = null;
    export let name = null;
    export let title = null;

    let field = form.getField(name);
    let showError = false;

    function handleChangeStart(e) {
        showError = true;
        $field.value = e.target.value;
    }
</script>

<div class="field">
    <input type="text" {name} id={name} placeholder={title} value={$field.value} on:change={handleChangeStart} />
    <label for={name}>{title}</label>
    {#if showError}
        <ErrorBlock {form} {name} />
    {/if}
</div>
