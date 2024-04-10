<template>
    <div class="cards">
        <div class="card card-1">
            <h3>READ MANGA</h3>
            <p>Sci-fi, Another World</p>
            <h2>1</h2>
        </div>
        <div class="border"></div>
        <div class="card card-2">
            <h3>GO TO GYM</h3>
            <p>I like muscle</p>
            <h2>2</h2>
        </div>
        <div class="border"></div>
        <div class="card card-3">
            <h3>LISTEN PODCASTS</h3>
            <p>Weird Science , Life..</p>
            <h2>3</h2>
        </div>
        <div class="border"></div>
        <div class="card card-4">
            <h3>PLAY WITH MY CAT</h3>
            <p>Her name is Tama</p>
            <h2>4</h2>
        </div>
    </div>
</template>
<script>
// import '@mdi/font/css/materialdesignicons.css'
export default {};
</script>
<style >
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
:root {
  --background-color: #f0eae3;
  --main-text: #282f1e;
  --red-color: #52574d;
}


body {
  background: var(--background-color);
}
.cards {
  display: flex;
  
  /* transform: translate(-50%, -50%); */
}
.border {
  width: 1px;
  height: 30vh;
  background-image: linear-gradient(to top, var(--background-color), rgba(0, 0, 0, 0.5), var(--background-color));
}
.card {
  height: 45vh;
  aspect-ratio: 3/5;
  position: relative;
  text-align: center;
  cursor: pointer;

  background-repeat: no-repeat;
  border-radius: 1em;
  background-position-x: 0%;
  background-size: 0%;
}
.card:hover {
  background-position-x: center;
  background-size: cover;
  transition: background-position-x 1s ease;
}
.cards > .card:hover > h3,
.cards > .card:hover > p,
.cards > .card:hover > h2 {
  color: white;
  transition: color 0.5s ease;
}
.cards > .card > h3 {
  color: var(--main-text);
  font-size: 1.3rem;
  line-height: 1.2em;
  font-weight: 600;
  padding: 5%;
}
.cards > .card > p {
  color: rgba(0, 0, 0, 0.5);
}
.cards > .card > h2 {
  color: var(--red-color);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 10em;
  font-weight: 500;
}
.card-1 {
  background-image: url(https://i.pinimg.com/736x/c2/04/23/c204235e52e002a6d96b0058645f4204.jpg);
}
.card-2 {
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSs_AsLfxkM-BDYrjyqmWz-g3DLQ1oPf7_8u034Uettg&s);
}
.card-3 {
  background-image: url(https://www.ipsos.com/sites/default/files/styles/max_1300x1300/public/ct/news_and_polls/2023-09/podcasts.jpg?itok=b4uDyEGi);
}
.card-4 {
  background-image: url(../../assets/tama.jpg);
}

@media only screen and (max-width: 1000px) {
  .cards {
    top: 5%;
    padding-bottom: 5%;
    transform: translate(-50%, 0%);
  }
  .cards {
    flex-direction: column;
  }
  .cards > .card > h3 {
    font-size: 2em;
    padding-top: 15%;
  }
  .cards > .card > p {
    font-size: 0.9em;
  }
  .cards > .card > h2 {
    font-size: 8em;
  }
  .border {
    width: 100%;
    height: 2px;
    background-image: linear-gradient(to right, var(--background-color), rgba(0, 0, 0, 0.5), var(--background-color));
  }
}
@media only screen and (max-height: 900px) {
  .cards > .card > h3 {
    font-size: 2em;
    padding-top: 15%;
  }
  .cards > .card > p {
    font-size: 0.9em;
  }
  .cards > .card > h2 {
    font-size: 8em;
  }
}
</style>
