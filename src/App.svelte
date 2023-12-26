<script>
  import { onMount } from 'svelte';
  import Navbar from './components/navbar.svelte';
 
  let paintings = [];

  onMount(async () => {
    const res = await fetch('./images.json')
    paintings = await res.json();
  })

</script>

<Navbar />
<main>
  <section id="about_me" >
    <img class="rounded mx-auto d-block" src="/120275647_1367693733436663_8663752487400813982_n.jpg" alt="Martin Winkler" />
    <h2 class="display-5">About me</h2>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
  </section>
  <section id="background">
    <h2 class="display-5">Background</h2>
  </section>
  <section id="work">
    <h2 class="display-5">Work</h2>
    {#each paintings as painting}
      <h3>{painting.name}</h3>
      <div>
        <img src={painting.path} alt={painting.name} />
        <h4 class="display-6"></h4>
      </div>
    {/each}
  </section>
</main>


<style>
  section:nth-child(odd) {
    background: #eee
  }

  h2 {
    text-align: center;
    margin: 50px 0;
  }

  p {
    text-align: center;
    display: block;
    padding: 0 150px 50px 150px;
  }
</style>