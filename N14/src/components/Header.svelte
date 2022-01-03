<script lang="ts">
    import {calendar, currentSelectedDate} from '../store'

    let monthStr = '';
    let yearStr = ''
    $: {
        ({monthStr, yearStr} = $calendar);
    }
</script>

<div class="previous" on:click={() => currentSelectedDate.prevMonth()}>
    <img src="images/previous.svg" alt="Previous" />
</div>

<div class="month">
    {monthStr} {yearStr}
</div>

<div class="next" on:click={() => currentSelectedDate.nextMonth()}>
    <img src="images/next.svg" alt="Next" />
</div>
