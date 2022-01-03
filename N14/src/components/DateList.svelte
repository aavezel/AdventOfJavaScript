<script lang="ts">
    import { blur } from 'svelte/transition';
    import {calendar} from '../store'
    let dates = []
    $: dates = $calendar.dates
</script>

{#each dates as { text, isToday, id } (id)}
    <div class:today="{isToday}">
        {text}
    </div>
{/each}
