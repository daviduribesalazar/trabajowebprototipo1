<template>
<div>

    <h1 class="pb-2">
     <icons :icon="['fas', 'star']" /> 
       
     <icons :icon="['fas', 'star']" /> 
     ¿Quiénes somos?
     </h1>  


    <div>
      <p> Nosostros somos David y Maria, dos estudiantes del grado de DDTEC a quien nos gusta también la cocina.</p>
      <p> Nos encanta cocinar y compartir recetas distintas para poder así descubrir de nuevas. Es por eso que inciamos este proyecto de crear una web donde poder compartir aquello que cocinasemos y pudiesemos también aprender de los lectores sobre como hacen las recetas o que nos enseñasen de nuevas que les guste. </p>
      
    </div>

 </div>

 <!-- <b-container>
<div class="about">

   <h1>Objetivo de este sitio web</h1>
    <p>Esta web es un <strong>ejemplo</strong> de la asignatura de Web Dinámica del   
      <b-link href="http://www.graudissenydigitalitec.udl.cat/">Grado Diseño Digital y Tecnologías Creativas</b-link> 
      de la 
      <b-link href="http://www.udl.cat/">Universitat de Lleida</b-link>.
    </p>
    <p>Consulta
      <b-link href="https://www.instagram.com/creartive.lleida/">Instagram</b-link>
      para ver más información del grupo de alumnos.
    </p>
  </div>

  <div class="mt-5 mb-5">
    <h2>Un ejemplo de división de página con grid</h2>

  <b-row>
    <b-col lg="12" md="9" sm="3" class="borde-rojo">En pantalla grande, se veran completo (12 columnas). En pantalla mediana (con 9 columnas), en ventana mediana (con 3 columnas)</b-col>
    <b-col lg="12" md="3" sm="9" class="borde-azul">En pantalla grande, se veran completo (12 columnas). En pantalla mediana (con 3 columnas), en ventana mediana (con 9 columnas)</b-col>
  </b-row>
</div>

<div class="mt-5">

  <h2>Otro ejemplo, sacado de la web </h2>
  En este enlace encontraras información sobre el grid responsive: 
  <b-link href="https://bootstrap-vue.org/docs/components/layout#responsive-classes">Enlace a la web de boostra vue con la explicación del grid responsive</b-link>
   Stack the columns on mobile by making one full-width and the other half-width -->
 <!-- <b-row>
    <b-col cols="12" md="8" class="borde-rojo">cols="12" md="8"</b-col>
    <b-col cols="6" md="4" class="borde-azul">cols="6" md="4"</b-col>
  </b-row>-->

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
<!--  <b-row>
    <b-col cols="6" md="4" class="borde-azul">cols="6" md="4"</b-col>
    <b-col cols="6" md="4" class="borde-rojo">cols="6" md="4"</b-col>
    <b-col cols="6" md="4" class="borde-azul">cols="6" md="4"</b-col>
  </b-row>

   Columns are always 50% wide, on mobile and desktop -->
 <!-- <b-row>
    <b-col cols="6" class="borde-rojo">cols="6"</b-col>
    <b-col cols="6" class="borde-azul">cols="6"</b-col>
  </b-row>

  </div>
</b-container>-->



  
 
</template>


<script>

export default {
   name: 'about'
}
</script>

<style scoped>
.borde-rojo{
  border: 1px solid red;

}
.borde-azul{
  border: 1px solid blue;
}

</style>