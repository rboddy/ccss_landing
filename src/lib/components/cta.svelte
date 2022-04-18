<script>
  import { slide } from "svelte/transition";
  let visible = false;
  function closeModal() {
    visible = false;
  }
  function openModal() {
    visible = true;
  }
</script>

<button class="ctaBtn" on:click|preventDefault={openModal}
  >Notify Me at Launch</button
>

{#if visible}
  <div class="modal" id="modal" transition:slide>
    <button class="close" on:click|preventDefault={closeModal}>x</button>
    <h2>All I need is your email!</h2>
    <form>
      <label for="email">Email</label>
      <input placeholder="email@awesome.com" type="email" name="email" />
      <br />
      <input type="checkbox" name="optOut" />
      <label for="optOut">Only send me emails about this book.</label>
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
{/if}

<style>
  * {
    font-family: "Open Sans", sans-serif;
  }
  .close {
    border: none;
    background: none;
    font-size: 20px;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .close:hover {
    cursor: pointer;
  }
  .ctaBtn {
    background: #e6af2e;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    padding: 20px;
    width: 300px;
    font-size: 24px;
    font-family: "Open Sans", sans-serif;
    border: none;
  }
  input[type="email"] {
    width: 250px;
    height: 30px;
    border-radius: 15px;
    border: 2px solid #231651;
    padding-left: 5px;
  }
  input {
    margin-top: 10px;
  }
  button[type="submit"] {
    width: 100px;
    height: 40px;
    margin-top: 10px;
    font-size: 16px;
    padding: 5px;
    border: none;
    background: #e6af2e;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
  }
  button:hover {
    cursor: pointer;
  }
  .modal {
    color: #231651;
    position: fixed;
    top: 25%;
    left: 25%;
    width: 50%;
    background-color: white;
    border-radius: 45px;
    padding: 50px 100px 50px 100px;
    box-sizing: border-box;
    box-shadow: 8px 8px 16px 16px rgba(0, 0, 0, 0.25);
  }
  h2 {
    font-size: 5vh;
    font-family: "Oswald", sans-serif;
    margin: 0;
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    .ctaBtn {
      margin-left: 10%;
    }
  }
</style>
