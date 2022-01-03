<script lang="ts">
    import {WEATHER} from './store';
    import Day from './Day.svelte';
    import WeatherSVG from './symbols/weather.svg.svelte';
    import IconSVG from './symbols/icon.svg.svelte';
</script>

<div class="wrapper">
    {#each WEATHER as day (`${day.dayOfWeek} ${day.date}`)}
        <Day {...day} />
    {/each}
</div>

<IconSVG />
<WeatherSVG />
