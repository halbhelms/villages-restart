<main>
  
  <form use:enhance method="post">
  
  <div class="px-4">
    <label for="first_name" class="text-xs">Your first name</label>
    <input type="text" id="first_name" name="first_name" />
  </div>
  
  <div class="px-4">
    <label for="last_name" class="text-xs">Your last name</label>
    <input type="text" id="last_name" name="last_name" />
  </div>
  
  <div class="px-4">
    <label for="email" class="text-xs">Your email</label>
    <input type="email" id="email" name="email" />
  </div>

  <div class="px-4">
    <label for="phone" class="text-xs">Your phone</label>
    <input type="tel" id="phone" name="phone" />
  </div>

  <div class="px-4">
    <label for="village" class="text-xs">Your village</label>
    <input type="text" id="village" name="village" />
  </div>
 
  <div class="px-4">
    <label for="password" class="text-xs">Type a password</label>
    <input type="text" id="password" name="password" />
  </div>

  <div class="flex justify-center mt-3">
  <button>Register Me!</button>
  </div>

</form>

</main>




<script>
  import { enhance } from '$app/forms';
  let { data } = $props()
</script>




<style lang="postcss">
  input[type="text"], input[type="email"], input[type="tel"] {
    @apply border-b-2 border-gray-300 focus:outline-none w-full;
  }

  button {
    @apply bg-blue-500 text-white font-bold py-2 px-4 text-center rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50;
  }
</style>
