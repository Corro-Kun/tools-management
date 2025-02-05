<script>
  import Card from "./Card.svelte";
  import Left from "@/shared/icons/Left.svelte";
  import Right from "@/shared/icons/Right.svelte";
</script>

<div class="main">
  <div class="cards">
    <button><Left width={30} height={30} /></button>
    <Card />
    <button><Right width={30} height={30} /></button>
  </div>
  <div class="users">
    <p>12/32</p>
  </div>
</div>

<style>
  .cards {
    display: flex;
    gap: 10rem;
    justify-content: center;
    align-items: center;
  }
  .users {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--text-color);
    transition: 0.2s;
  }
  button:hover {
    transform: scale(1.1);
  }
</style>
