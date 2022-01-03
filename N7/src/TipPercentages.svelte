<script lang="ts">
    export let percent: number;

    const percentages = [
        { value: 0.05, text: "5%", id: "five-percent" },
        { value: 0.1, text: "10%", id: "ten-percent" },
        { value: 0.15, text: "15%", id: "fifteen-percent" },
        { value: 0.2, text: "20%", id: "twenty-percent" },
    ];
</script>

<div class="tip-percentages">
    {#each percentages as item (item.id)}
        <div>
            <input bind:group={percent} type="radio" name="tip" value={item.value} id={item.id} />
            <label for={item.id}> {item.text} </label>
        </div>
    {/each}
</div>
