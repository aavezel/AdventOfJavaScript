<script lang="ts">
    import { form, field } from "svelte-forms";
    import { email, required, matchField } from "svelte-forms/validators";
    import Input from "./Input.svelte";
    import Password from "./Password.svelte";

    const name = field("name", "", [required()]);
    const emailField = field("email", "", [required(), email()], { stopAtFirstError: true });
    const password = field("password", "", [required()]);
    const confirmPassword = field("confirmPassword", "", [required(), matchField(password)]);

    const myForm = form(name, emailField, password, confirmPassword);
    myForm.validate();

    $: disabled = !$myForm.valid;
</script>

<div class="form" role="form">
    <h1>Signup</h1>
    <Input form={myForm} name="name" title="Name" />
    <Input form={myForm} name="email" title="Email" />
    <Password form={myForm} name="password" title="Password" />
    <Password form={myForm} name="confirmPassword" title="Confirm Password" />
    <div class="field">
        <input type="submit" name="submit" value="Submit" {disabled} />
    </div>

</div>
