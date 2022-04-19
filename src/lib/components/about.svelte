<section>
  <div class="aboutContent">
    <h2>What's in the Book?</h2>
    <ul>
      <li>A brief history of CSS</li>
      <li>The syntax of CSS</li>
      <li>How to organize your CSS to maxmize efficiency</li>
      <li>Responsive CSS</li>
      <li>The Box Model</li>
      <li>Pre and Post Processors</li>
      <li>Industry Standard Frameworks</li>
      <li>And much more</li>
    </ul>
  </div>
</section>

<style>
  ul {
    list-style: url("/images/bullet.png");
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    width: 80%;
    margin: 0 auto;
  }
  li {
    font-size: 3vh;
    font-family: "Caveat", cursive;
  }
  .aboutContent {
    width: 80%;
    margin: 0 auto;
    padding-top: 10px;
    color: #231651;
  }
  section {
    width: 100%;
    height: 500px;
    background-color: white;
  }
  h2 {
    font-family: "Oswald", sans-serif;
    font-size: 7vh;
    text-align: center;
  }
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
    ul {
      columns: 1;
      -webkit-columns: 1;
      -moz-columns: 1;
    }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    ul {
      columns: 2;
      -webkit-columns: 2;
      -moz-columns: 2;
    }
    li {
      font-size: 1.5em;
    }
  }
</style>
