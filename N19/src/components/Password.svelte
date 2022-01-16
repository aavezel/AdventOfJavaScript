<script lang="ts">
    import ErrorBlock from "./ErrorBlock.svelte";

    export let form = null;
    export let name = null;
    export let title = null;

    let field = form.getField(name);
    let showPassword = false;
    let showError = false;

    function handleChange(e) {
        showError = true;
        $field.value = e.target.value;
        form.validate();
    }

    function toggleShowPassword() {
        showPassword = !showPassword;
    }

    $: passwordType = showPassword ? "text" : "password";
</script>

<div class="field" class:show={showPassword}>
    {#if passwordType === "password"}
        <input type="password" {name} id={name} placeholder={title} value={$field.value} on:change={handleChange} />
    {:else if passwordType === "text"}
        <input type="text" {name} id={name} placeholder={title} value={$field.value} on:change={handleChange} />
    {/if}
    <label for={name}>{title}</label>
    <button class="show-hide" on:click={toggleShowPassword} />
    {#if showError}
        <ErrorBlock {form} {name} />
    {/if}
</div>
