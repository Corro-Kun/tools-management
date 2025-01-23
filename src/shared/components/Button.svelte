<script lang="ts">
  let { type = "button", onclick = () => {} } = $$props;
</script>

<button {type} {onclick}>
  <slot></slot>
</button>

<style>
  button {
    width: 100%;
    padding: 15px;
    background: none;
    color: var(--text-color);
    cursor: pointer;
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    box-shadow: inset 0 0 14px #2e3d52;
    transition: 0.2s;
    font-size: 1em;
    font-weight: 500;
    outline: none;
  }
  button:hover {
    box-shadow: inset 0 0 20px #314055;
  }
</style>
