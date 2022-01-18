<template>
<div id="home">
     <h1>Página de recetas de cocina asiatica</h1>  

      <p>Esta web es un <strong>recetario</strong> de los más típicos platos de la cocina tradicional asiatica. Los paises cuyas recetas recojemos son: <strong>China</strong>, <strong>Japon</strong>, <strong>India</strong> y <strong>Tailandia</strong>.</p>
      
    <p>Siguenos en
      <b-link href="https://www.instagram.com/creartive.lleida/">Instagram</b-link>
      para estar al día con todas las nuevas recetas.
    </p>


    <Diapos/>

</div>

</template>

<script>
import Diapos from '../components/Diapos.vue'

export default {
   name: 'Home',
   components: {
        Diapos
  }
}
</script>