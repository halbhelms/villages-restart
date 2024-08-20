<script>
  import EventCard from '$lib/components/event-card.svelte';
  
  let { data, form } = $props();
</script>

{#if form?.success == false}
You are already signed up for this event
{/if}

<!-- loop over all events -->
{#each data.allEvents as event}
  {@const userAttending = data.memberEventIds.includes(event.id) ? true : false}
  <!-- pass each event to the EventCard component -->
  <EventCard {event} {userAttending} />

{/each}

