<script>
  import PlayerPlay from "../icons/PlayerPlay.svelte";
</script>

<div class="card">
  <div class="state">
    <p>Estado</p>
    <span></span>
  </div>
  <div class="logo">
    <PlayerPlay height={50} width={50} />
  </div>
  <div class="name">
    <p>hola</p>
  </div>
</div>

<style>
  .card {
    padding: 5px;
    width: 200px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
    box-shadow: inset 0 0 14px var(--glow-color);
    transition: 0.2s all;
    cursor: pointer;
  }
  .card:hover {
    box-shadow: inset 0 0 20px var(--glow-color-secondary);
    transform: scale(1.02);
  }
  .state {
    width: 100%;
    padding-inline: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .state p {
    color: var(--text-color-secondary);
    transition: 0.2s all;
  }
  .state span {
    position: relative;
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    transform: translateY(2px);
    background-color: rgb(0, 189, 0);
  }
  .state span::before {
    position: absolute;
    left: -5px;
    top: -5px;
    content: "";
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    animation: pulse 1.5s infinite ease-in;
    background-color: rgb(0, 189, 0);
  }
  @keyframes pulse {
    from {
      transform: scale(0.5);
      opacity: 1;
    }
    to {
      transform: scale(1.2);
      opacity: 0;
    }
  }
  .name {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color-secondary);
    transition: 0.2s all;
  }
  .logo {
    color: var(--text-color-secondary);
    transition: 0.2s all;
  }
  .card:hover .state p {
    color: var(--text-color);
  }
  .card:hover .name {
    color: var(--text-color);
  }
  .card:hover .logo {
    color: var(--text-color);
  }
</style>
