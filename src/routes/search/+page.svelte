<script>
</script>

<main>
  <!-- search by name -->
  <div class="px-4">
    <label for="name" class="">Search by name</label>
    <input type="name" id="name" name="name" placeholder="Event name"/>
  </div>
  <!-- search by date -->
  <div class="px-4">
    <label for="date" class="">Search by date</label>
    <input type="date" id="date" name="date" />
  </div>
  <!-- search by category -->
  <div class="px-4">
    <div class="text-xl">Search by category</div>
    <div>
      <input type="radio" id="Dining" name="category" />
      <label for="Dining" class="">Dining</label>
    </div>
    <div>
      <input type="radio" id="Excursion" name="category" />
      <label for="Excurson" class="">Excursion</label>
    </div>
    <div>
      <input type="radio" id="Party" name="category" />
      <label for="Party" class="">Party</label>
    </div>
    <div>
      <input type="radio" id="Get-Together" name="category" />
      <label for="Get-Together" class="">Get-Together</label>
    </div>
  </div>
  <!-- search by host -->
  <div class="px-4">
    <label for="host" class="">Search by host</label>
    <select id="host" name="host">
      <option value="1">Gen Helms</option>
      <option value="2">Anne Archer</option>
      <option value="3">Betty Brown</option>
    </select>
</main>
