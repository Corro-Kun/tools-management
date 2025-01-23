<script>
  import Input from "@/shared/components/Input.svelte";
  import Button from "@/shared/components/Button.svelte";
  import { paths } from "@/core/config/paths";

  function login() {
    paths.home.push();
  }
</script>

<div class="main">
  <h2>Inicio de Sección</h2>
  <div class="size-box" />
  <Input type="text" placeholder="Usuario" required />
  <div class="size-box" />
  <Input type="password" placeholder="Contraseña" required />
  <div class="size-box" />
  <div class="size-box" />
  <div class="size-box" />
  <Button onclick={login}>Entrar</Button>
</div>

<style>
  .main {
    display: flex;
    padding: 20px;
    width: 320px;
    height: 350px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: var(--radius);
    box-shadow: var(--shadow-border);
  }
  .main h2 {
    color: var(--text-color);
    font-weight: bold;
  }
  .size-box {
    height: 10px;
  }
</style>
