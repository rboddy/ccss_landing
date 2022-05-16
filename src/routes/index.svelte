<script>
  import Intro from "$lib/components/intro.svelte";
  import Cta from "$lib/components/cta.svelte";
  import About from "$lib/components/about.svelte";
  import FreeTemplate from "$lib/components/freeTemplate.svelte";
</script>

<section>
  <div>
    <img src="images/BookStack.png" alt="CSS logo" />
  </div>
  <div>
    <Intro />
    <Cta />
  </div>
</section>
<About />
<FreeTemplate />

<style>
  :global(body) {
    background: url("/images/jagged.svg");
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0;
  }
  img {
    width: 90%;
    height: auto;
  }
  section {
    width: 100%;
    margin: 0 auto;
    margin-top: 5em;
    display: grid;
    grid-template-columns: 2fr 2fr;
    margin-bottom: 50px;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    :global(body) {
      background: #231651;
      background-repeat: no-repeat;
      background-size: cover;
      margin: 0;
    }
    section {
      grid-template-columns: 1fr;
    }
    img {
      width: 90%;
      display: block;
      margin: 0 auto;
      margin-bottom: 50px;
      background-color: #6290c8;
      border-radius: 45px;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    section {
      grid-template-columns: 1fr;
      width: 100%;
    }
    :global(body) {
      background: #231651;
      background-repeat: no-repeat;
      background-size: cover;
      margin: 0;
    }
    img {
      width: 90%;
      display: block;
      margin: 0 auto;
      margin-bottom: 50px;
      background-color: #6290c8;
      border-radius: 45px;
    }
  }
</style>
