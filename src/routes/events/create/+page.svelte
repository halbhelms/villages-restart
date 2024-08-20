<script>
  import { enhance } from '$app/forms';
  let { data } = $props()
</script>

<main>
  <h1 class="text-center text-2xl font-bold">Create Event</h1>
  
  <form use:enhance method="post">
  
  <div class="px-4 mt-2 text-xs">
    <label for="name" class="block">Event name</label>
    <input type="text" id="name" class="w-full" name="name" />
  </div>
  
  <div class="px-4 mt-2 text-xs">
    <label for="start_date" class="">Start date</label>
    <input type="date" id="start_date" name="start_date" />
  </div>
  
  <div class="px-4 mt-2 text-xs">
    <label for="start_time" class="">Start time</label>
    <input type="time" id="start_time" name="start_time" />
  </div>
  
  <div class="px-4 mt-2 text-xs">
    <label for="end_date" class="">End date</label>
    <input type="date" id="end_date" name="end_date" />
  </div>
  
  <div class="px-4 mt-2 text-xs">
    <label for="end_time" class="">End time</label>
    <input type="time" id="end_time" name="end_time" />
  </div>
  
  <div class="px-4 mt-2 text-xs">
    <label for="cutsoff" class="">Cutoff date</label>
    <input type="date" id="cutsoff" name="cutsoff" />
  </div>

  <div class="px-4 mt-2 text-xs">
    <label for="description" class="">Event description/details</label>
    <textarea id="description" name="description"></textarea>
  </div>

  <div class="px-4 mt-2 text-xs">
    <label for="location" class="">Event location</label>
    <textarea id="location" name="location"></textarea>
  </div>
 
  <div class="px-4 mt-2 text-xs">
    <label for="categories" class="">Categories</label>
  </div>

  <div class="px-4 text-xs">
    <input type="checkbox" id="dining" name="categories" value="dining" />
    <label for="dining">Dining</label>
  </div>

  <div class="px-4 text-xs">
    <input type="checkbox" id="excursion" name="categories" value="excursion"/>
    <label for="excursion">Excursion</label>
  </div>

  <div class="px-4 text-xs">
    <input type="checkbox" id="party" name="categories" value="party"/>
    <label for="party">Party</label>
  </div>

  <div class="px-4 text-xs">
    <input type="checkbox" id="get-together" name="categories" value="get-together"/>
    <label for="get-together">Get-together</label>
  </div>
    
  <div class="px-4 mt-2 text-xs">
    <label for="price" class="block">Price</label>
    <input type="number" id="price" name="price" />
  </div>
    
  <div class="px-4 mt-2 text-xs">
    <label for="max_attendees" class="block">Maximum attendees</label>
    <input type="number" id="max_attendees" name="max_attendees" />
  </div>
    
  <div class="px-4 mt-2 text-xs">
    <label for="access" class="">Access</label>
  </div>

  <div class="px-4 text-xs">
    <input type="radio" id="public" name="access" value="public"/>
    <label for="public">Public</label>
  </div>

  <div class="px-4 text-xs">
    <input type="radio" id="private" name="access" value="private"/>
    <label for="private">Private</label>
  </div>

  <div class="px-4 text-xs">
    <input type="radio" id="vip" name="access" value="vip"/>
    <label for="vip">VIP members only</label>
  </div>

  <input type="hidden" name="event_id" value="{data.event_id}">

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

  label {
    @apply font-semibold;
  }
</style>