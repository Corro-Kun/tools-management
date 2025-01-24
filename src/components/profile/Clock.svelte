<script>
  let hour = $state("00");
  let minute = $state("00");
  let ampm = $state("AM");

  function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampms = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hour = hours;
    minute = minutes;
    ampm = ampms;
  }

  setInterval(updateClock, 1000);
</script>

<h2>{hour}<span>:</span>{minute} {ampm}</h2>

<style>
  h2 {
    font-size: 2rem;
    text-align: center;
    color: var(--text-color-secondary);
  }

  span {
    animation: blink 2s infinite;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
