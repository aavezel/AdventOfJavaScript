<script lang="ts">
    export let form = null;
    export let name = null;

    let required = false;
    let email = false;
    let matchField = false;
    let success = false;

    $: {
        required = $form.hasError(name + '.required');
        email = $form.hasError(name + '.not_an_email');
        matchField = $form.hasError(name + '.match_field');
        success = !required && !email && !matchField
    }
</script>

{#if required}
    <div class="error">
        <img src="./images/error.svg" alt="Error" />
        A {name} is required
    </div>
{:else if email}
    <div class="error">
        <img src="./images/error.svg" alt="Error" />
        A {name} is email
    </div>
{:else if matchField}
    <div class="error">
        <img src="./images/error.svg" alt="Error" />
        Your password and confirmation password do not match
    </div>
{:else}
    <div class="success">
        <img src="./images/success.svg" alt="Success" />
    </div>
{/if}
