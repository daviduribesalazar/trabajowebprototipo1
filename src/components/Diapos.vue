<template>
  <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      class="uno"
      caption="First slide"
      img-src="https://acortar.link/QZdTta"
    ></b-carousel-slide>
    <b-carousel-slide
      class="uno"
      caption="Second Slide"
      img-src="https://acortar.link/NcBm4s" 
    ></b-carousel-slide>
    <b-carousel-slide
      class="uno"
      caption="Third Slide"
      img-src="https://acortar.link/dGmt8K" 
    ></b-carousel-slide>
  </b-carousel>
</div>
</template>

<style>
 .uno{
   max-width: 80%;
   margin-left: 10%;
   margin-right: 10%;
   max-height: 400px;
   object-fit: cover;

 }
</style>