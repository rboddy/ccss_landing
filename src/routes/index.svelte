<script>
  import Intro from "$lib/components/intro.svelte";
  import Cta from "$lib/components/cta.svelte";
  import About from "$lib/components/about.svelte";
</script>

<section>
  <div>
    <img src="images/CSS3D_nobg_cropped.png" alt="CSS logo" />
    <img class="shrink" src="images/Arrow.png" alt="Arrow Text" />
  </div>
  <div>
    <Intro />
    <Cta />
  </div>
</section>
<About />

<style>
  :global(body) {
    background: url("images/jagged.svg");
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0;
  }
  .shrink {
    width: 250px;
    padding: 0px 50px 0px 80px;
    display: block;
  }
  img {
    width: 400px;
    height: auto;
  }
  section {
    width: 80%;
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
    .shrink {
      display: none;
    }
    img {
      width: 70%;
      display: block;
      margin: 0 auto;
      margin-bottom: 50px;
      background-color: #e6af2e;
      padding: 20px;
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
    img:first-of-type {
      margin-left: 10%;
      background-color: #e6af2e;
      padding: 20px;
      border-radius: 45px;
      margin-bottom: 10%;
    }
    .shrink {
      display: none;
    }
  }
</style>
