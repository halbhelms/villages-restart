<script>
  import { enhance } from '$app/forms';
  let { data } = $props()
</script>

<main>
  
  <form use:enhance method="post">
  
  <div class="px-4">
    <label for="name" class="text-xs">Event name</label>
    <input type="text" id="name" name="name" />
  </div>
  
  <div class="px-4">
    <label for="start_date" class="text-xs">Start date</label>
    <input type="date" id="start_date" name="start_date" />
  </div>
  
  <div class="px-4">
    <label for="start_time" class="text-xs">Start time</label>
    <input type="time" id="start_time" name="start_time" />
  </div>
  
  <div class="px-4">
    <label for="end_date" class="text-xs">End date</label>
    <input type="date" id="end_date" name="end_date" />
  </div>
  
  <div class="px-4">
    <label for="end_time" class="text-xs">End time</label>
    <input type="time" id="end_time" name="end_time" />
  </div>
  
  <div class="px-4">
    <label for="cutoff_date" class="text-xs">Cutoff date</label>
    <input type="date" id="cutoff_date" name="cutoff_date" />
  </div>

  <div class="px-4">
    <label for="event_details" class="text-xs">Event details</label>
    <textarea id="event_details" name="event_details"></textarea>
  </div>

  <div class="px-4">
    <label for="location" class="text-xs">Event location</label>
    <textarea id="location" name="location"></textarea>
  </div>
 
  <div class="px-4">
    <label for="categories" class="text-xs">Categories</label>
  </div>

  <div class="px-4">
    <input type="checkbox" id="dining" name="categories" />
    <label for="dining">Dining</label>
  </div>

  <div class="px-4">
    <input type="checkbox" id="excursion" name="categories" />
    <label for="excursion">Excursion</label>
  </div>

  <div class="px-4">
    <input type="checkbox" id="party" name="categories" />
    <label for="party">Party</label>
  </div>

  <div class="px-4">
    <input type="checkbox" id="get-together" name="categories" />
    <label for="get-together">Get-together</label>
  </div>
    
  <div class="px-4">
    <label for="price" class="">Price</label>
    <input type="number" id="price" name="price" />
  </div>
    
  <div class="px-4">
    <label for="max_attendees" class="">Max attendees</label>
    <input type="number" id="max_attendees" name="max_attendees" />
  </div>
    
  <div class="px-4">
    <label for="access" class="">Access</label>
  </div>

  <div class="px-4">
    <input type="radio" id="public" name="access" />
    <label for="public">Party</label>
  </div>

  <div class="px-4">
    <input type="radio" id="private" name="access" />
    <label for="private">Private</label>
  </div>

  <div class="px-4">
    <input type="radio" id="vip" name="access" />
    <label for="vip">VIP members only</label>
  </div>



  <div class="flex justify-center mt-3">
  <button>Create Event!</button>
  </div>

</form>

</main>

<style lang="postcss">
  input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="time"], textarea {
    @apply border-b-2 border-gray-300 focus:outline-none w-full;
  }

  button {
    @apply bg-blue-500 text-white font-bold py-2 px-4 text-center rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50;
  }
</style>