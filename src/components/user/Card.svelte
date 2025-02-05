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

<div class="card">
  <audio controls>
    <source src="/01.m4a" type="audio/mp4" />
  </audio>
  <picture>
    <img
      src="https://i.pinimg.com/originals/b8/b5/90/b8b590cf5d40052bd1d938a5e48666a0.gif"
      alt=""
    />
  </picture>
  <button class="audio" onclick={togglePlay}>
    {#if isPlaying}
      <PlayerStop height={25} width={25} />
    {:else}
      <PlayerPlay height={25} width={25} />
    {/if}
  </button>
  <h2>Corro-Kun</h2>
</div>

<style>
  audio {
    display: none;
  }
  .card {
    position: relative;
    display: flex;
    height: 280px;
    width: 400px;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 2px solid var(--border-color);
    border-radius: var(--radius);
    box-shadow: inset 0 0 20px var(--glow-color);
    overflow: hidden;
  }
  picture {
    display: block;
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: var(--shadow-border);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .audio {
    display: flex;
    position: absolute;
    top: 57%;
    left: 57%;
    padding: 5px 5px;
    cursor: pointer;
    color: var(--text-color);
    background-color: var(--glow-color);
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    border: none;
    z-index: 1;
  }
  h2 {
    font-size: 1.5rem;
    color: var(--text-color);
    text-align: center;
  }
</style>
