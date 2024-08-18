<script>
  import EventCard from '$lib/components/event-card.svelte';
  
  let { data } = $props();
  console.log('events', data.allEvents);

 

</script>

<!-- loop over all events -->
{#each data.allEvents as event}

  <!-- pass each event to the EventCard component -->
  <EventCard {event} />

{/each}

