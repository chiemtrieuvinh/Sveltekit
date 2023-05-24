<script lang="ts">
  import { enhance } from "$app/forms";
  //   import { addTodo } from "../../lib/server/database";

  //   import { invalidateAll } from "$app/navigation";
  import type { ActionData, PageData, SubmitFunction } from "./$types";
  //   type Data = {
  //     success: boolean;
  //     errors: Record<string, string>;
  //   };
  export let data: PageData;
  export let form: ActionData;
  //   let form: Data;
  //   async function addTodo(event: Event) {
  //     const formEl = event.target as HTMLFormElement;
  //     const data = new FormData(formEl);
  //     console.dir(data);
  //     const response = await fetch(formEl.action, {
  //       method: "POST",
  //       body: data,
  //     });
  //     const responseData = await response.json();
  //     form = responseData;
  //     formEl.reset();
  //     console.log(responseData);
  //     await invalidateAll();
  //   }
  //   async function removeTodo(event: Event) {
  //     const formEl = event.target as HTMLFormElement;
  //     const data = new FormData(formEl);
  //     const response = await fetch(formEl.action, {
  //       method: "DELETE",
  //       body: data,
  //     });
  //     await invalidateAll();
  let loading = false;
  const addTodo: SubmitFunction = (input) => {
    // do something before form submit
    loading = true;
    return async ({ update }) => {
      // do something after form submit
      loading = false;
      await update();
    };
  };

  //   }
</script>

<pre>
    {JSON.stringify(data, null, 2)}
   
</pre>
<!-- <ul class="wrapper">
  {#each data.todos as todo}
    <li>
      <span>{todo.text}</span>
      <form on:submit|preventDefault={removeTodo} method="POST">
        <input type="hidden" name="id" value={todo.id} />
        <button class="delete" type="submit">x</button>
      </form>
    </li>
  {/each}
</ul>

<form on:submit|preventDefault={addTodo} method="POST">
  <input type="text" name="todo" />
  {#if form?.errors.todo}
    <p class="error">This field is required</p>
  {/if}
  <button type="submit">+ Add Todo</button>
</form>
{#if form?.success}
  <p>Added todo!!!!</p>
{/if} -->
<ul class="wrapper">
  {#each data.todos as todo}
    <li>
      <span>{todo.text}</span>
      <form method="POST" action="?/removeTodo">
        <input type="hidden" name="id" value={todo.id} />
        <button class="delete" type="submit">x</button>
      </form>
    </li>
  {/each}
</ul>

<form method="POST" action="?/addTodo" use:enhance={addTodo}>
  <input type="text" name="todo" />
  {#if form?.missing}
    <p class="error">This field is required</p>
  {/if}
  <button aria-busy={loading} class:secondary={loading} type="submit">
    {#if !loading}
      + Add Todo
    {/if}
  </button>
  <button formaction="?/clearTodos" type="submit" class="secondary"
    >Clear</button
  >
</form>
{#if form?.success}
  <p>Added todo!!!!</p>
{/if}

<style>
  .wrapper form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    text-decoration: capitalize;
  }

  .delete {
    margin: 0;
    background: none;
    border: none;
    color: red;
    font-size: 25px;
  }
  .error {
    color: tomato;
  }
</style>
