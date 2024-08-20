<script>
  import { enhance } from '$app/forms';

  let { event, userAttending } = $props();

  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  }

  function formatDate(dateString) {
    const date = new Date(dateString);

    // Extract the formatted parts
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    // Get the time in 12-hour format with AM/PM
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format

    return `${formattedDate} at ${hours}:${minutes}${ampm}`;
  }
</script>

<main>
  <div class="card text-sm">
    <div class="card-content">
      <div class="content">
        <h3>{event.name}</h3>
        <p>Creator: {event.host_name}</p>
        <p>{event.description}</p>
        <p>Starts: {formatDate(event.starts)}</p>
        <p>Ends: {formatDate(event.ends)}</p>
        <p>{event.location}</p>
        <p>{formatCurrency(event.price)}</p>
      </div>
      <form method="POST" use:enhance>
        <input type="hidden" name="event_id" value="{event.id}">
        {#if userAttending}
          <div>You are attending this event</div>
        {:else}
          <button>Register</button>
        {/if}
      </form>
    </div>
  </div>
</main>