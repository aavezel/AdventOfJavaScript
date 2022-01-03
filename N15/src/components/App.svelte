<script lang="ts">
    import Aside from './Aside.svelte';
    import Header from './Header.svelte';
    import Feature from './Feature.svelte';
</script>

<div class="wrapper">
    <Header />
    <Feature />
    <Aside />
</div>

<style global lang="postcss">
    @tailwind components;
    @tailwind utilities;

    .wrapper {
        display: grid;
        margin: 0 200px;
        grid-template-areas: "header header"
            "feature aside";
        grid-template-columns: 3fr 1fr;
        grid-column-gap: 50px;
        grid-template-rows: 120px 1fr;
        max-height: 100vh;
    }

</style>
