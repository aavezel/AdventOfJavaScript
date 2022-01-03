<script lang="ts">
 export let dayOfWeek = '';
 export let date = '';
 export let weather = '';
 export let temperature = '';
 export let precipitation = '';
 export let low = '';

 $: barClass = `bar ${weather}`;
</script>

<div class="day">
    <div class="day-of-week">{dayOfWeek}</div>
    <div class="date">{date}</div>

    <div class={barClass}>
      <div class="weather">
        <svg role="img" width="230" height="209" viewBox="0 0 230 209">
          <use xlink:href={'#' + weather}></use>
        </svg>
      </div>
      <div class="temperature">
        {temperature}<span class="degrees">&deg;</span>
      </div>
      <div class="content">
        <div class="precipitation">
          <svg role="img" class="icon">
            <use xlink:href="#precipitation"></use>
          </svg>
          {precipitation}%
        </div>
        <div class="low">
          <svg role="img" class="icon">
            <use xlink:href="#low"></use>
          </svg>
          {low}&deg;
        </div>
      </div>
    </div>
  </div>