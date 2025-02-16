<script>
    import Input from "@/shared/components/Input.svelte";
    import Button from "@/shared/components/Button.svelte";
</script>

<form>
    <Input required placeholder="ID del equipo" />
    <div>
        <Button type="submit" >Devolver</Button>
    </div>
</form>

<style>
    form{
        display: flex;
        width: 400px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }
    div{
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>