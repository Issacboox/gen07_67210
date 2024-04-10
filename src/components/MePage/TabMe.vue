<template>
  <div>
  <section>
    <div class="text">
      <div class="one">
        <p>Burapha University ( 2020 - 2024 ) </p>
        <h1>Information Technology</h1>
      </div>

      <div class="two">
        <p>Mahannaparam School ( 2017 - 2020 ) </p>
        <h1>Science - Math</h1>
      </div>

      <div class="three">
        <p>NaboKham WittayaKhom ( 2014 - 2017 ) </p>
        <h1>Normal Class</h1>
        <span></span>
      </div>
    </div>

    <div class="dote">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <hr />
  </section>
  </div>
</template>
  <script>
export default {
  data: () => ({
    tab: null
  })
};
</script>
  <style>
section {
  width: 1000px;
  position: relative;
}

.text {
  display: flex;
  justify-content: space-evenly;
}

.text p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.text h1 {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2.4rem;
}

hr {
  height: 0.2em;
  background-color: #b19bc7;
  border-radius: 2em;
}

.dote div {
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: #7d00fb;
  position: absolute;
  border: 0.6em solid #fff;
  top: 5.2em;
}

.dote div:nth-of-type(1) {
  left: 9em;
}

.dote div:nth-of-type(2) {
  left: 24.5em;
}

.dote div:nth-of-type(3) {
  left: 48.5em;
}
</style>