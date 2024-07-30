<main>
   <form use:enhance method="post">
  
  <div class="px-4">
    <label for="phone" class="text-xs">Your phone number</label>
    <input type="tel" id="phone" name="phone" />
  </div>
  
  <div class="px-4">
    <label for="password" class="text-xs">Your password</label>
    <input type="text" id="password" name="password" />
  </div>

  <div class="flex justify-center mt-3">
    <button>Login</button>
  </div>

  </form>
</main>


<script>
  import { enhance } from '$app/forms';
  let { data } = $props()
</script>




<style lang="postcss">
  input[type="tel"], input[type="text"] {
    @apply border-b-2 border-gray-300 focus:outline-none w-full;
  }

  button {
    @apply bg-blue-500 text-white font-bold py-2 px-4 text-center rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50;
  }
</style>