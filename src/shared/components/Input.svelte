<script lang="ts">
  let { type = "text", required = false, placeholder = "" } = $$props;
</script>

<div class="input">
  <input id={placeholder} {type} {required} />
  <label for={placeholder}>{placeholder}</label>
</div>

<style>
  .input {
    position: relative;
    width: 100%;
    height: 50px;
    border: 2px solid var(--border-color);
    border-radius: var(--radius);
    margin-top: 20px;
    margin-bottom: 5px;
  }
  .input label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    color: var(--text-color-secondary);
    font-weight: 500;
    pointer-events: none;
    transition: 0.5s;
  }
  .input input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    color: var(--text-color);
    font-weight: 600;
    padding: 0 30px 0 5px;
    transition: 0.3s;
  }
  .input input:focus ~ label,
  .input input:valid ~ label {
    top: -14px;
    font-size: 0.9em;
    color: var(--text-color);
  }
</style>
