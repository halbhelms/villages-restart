<script>
  async function submit() {
    await pause(1000);
    alert('submitting');
  }

  function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function handleEnter(event) {
    if (event.key === 'Enter') {
      submit();
    }
  }
</script>

<main class="grid justify-center">
  <!-- search by name -->
  <div class=" mt-2">
    <label for="name" class="block text-l font-medium">Search by name</label>
    <input type="name" class="" id="name" name="name" placeholder="Event name" onblur={submit} onkeydown={handleEnter}/>
  </div>
  <!-- search by date -->
  <div class=" mt-2">
    <label for="date" class="block text-l font-medium">Search by date</label>
    <input type="date" class="" id="date" name="date" onchange={submit} onkeydown={handleEnter}/>
  </div>
  <!-- search by category -->
  <div class=" mt-2">
    <div class="text-l font-medium">Search by category</div>
    <div class="">
      <input type="radio" id="Dining" name="category" onchange={submit}/>
      <label for="Dining" class="">Dining</label>
    </div>
    <div class="">
      <input type="radio" id="Excursion" name="category" onchange={submit}/>
      <label for="Excursion" class="">Excursion</label>
    </div>
    <div class="">
      <input type="radio" id="Party" name="category" onchange={submit}/>
      <label for="Party" class="">Party</label>
    </div>
    <div class="">
      <input type="radio" id="Get-Together" name="category" onchange={submit}/>
      <label for="Get-Together" class="">Get-Together</label>
    </div>
  </div>
  <!-- search by host -->
  <div class=" mt-2">
    <label for="host" class="block text-l font-medium">Search by host</label>
    <select id="host" name="host" class="" onchange={submit}>
      <option value="0" disabled selected>Select host</option>
      <option value="1">Gen Helms</option>
      <option value="2">Anne Archer</option>
      <option value="3">Betty Brown</option>
    </select>
</main>
