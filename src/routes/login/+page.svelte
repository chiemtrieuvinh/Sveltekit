<script lang="ts">
  import { applyAction, enhance } from "$app/forms";
  import type { ActionData, SubmitFunction } from "./$types";
  export let form: ActionData;

  const login: SubmitFunction = () => {
    return async ({ result }) => {
      console.log(result, "check result");
      if (result.type === "success") {
        await applyAction(result);
      }
    };
  };
</script>

<pre>
  {JSON.stringify(form, null, 2)}
</pre>
<h1>Forms</h1>
<form method="POST" action="/login" use:enhance={login}>
  <input type="text" name="user" value={form?.data?.user ?? ""} />
  {#if form?.errors?.user}
    <p class="error">Name is required !</p>
  {/if}
  <input type="password" name="password" value={form?.data?.password ?? ""} />
  {#if form?.errors?.password}
    <p class="error">Password is required !</p>
  {/if}
  <button type="submit">Login</button>
</form>

<style>
  .error {
    color: red;
  }
</style>
