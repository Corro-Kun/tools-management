<script>
  import PlayerPlay from "@/shared/icons/PlayerPlay.svelte";
  import PlayerStop from "@/shared/icons/PlayerStop.svelte";

  let isPlaying = false;

  function togglePlay() {
    const audio = document.querySelector("audio");
    if (isPlaying) {
      audio.currentTime = 0;
      audio.pause();
    } else {
      audio.play();
      audio.addEventListener("ended", () => {
        isPlaying = false;
      });
    }
    isPlaying = !isPlaying;
  }
</script>

<audio controls>
  <source src="/01.m4a" type="audio/mp4" />
</audio>
<button onclick={togglePlay} class={isPlaying ? "active" : ""}>
  {#if isPlaying}
    <PlayerStop />
  {:else}
    <PlayerPlay />
  {/if}
</button>

<style>
  audio {
    display: none;
  }
  button {
    position: relative;
    display: inline-block;
    color: var(--text-color);
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  .active::before {
    position: absolute;
    left: -10px;
    top: -10px;
    content: "";
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: var(--glow-color);
    animation: pulse 1.5s infinite ease-in;
    z-index: -1;
  }

  @keyframes pulse {
    from {
      transform: scale(0.5);
      opacity: 1;
    }
    to {
      transform: scale(3);
      opacity: 0;
    }
  }
</style>
