<template>
  <div>

    <h1 class="pb-2">
     <icons :icon="['fas', 'star']" /> 
       
     <icons :icon="['fas', 'star']" /> 
     Contacto
     </h1>  
     <h4> <p> ¿Tienes alguna duda o quieres compartir algo con nosotros? Contactanos!</p> </h4>


    <div>
      <p> Nos encontraras en <strong> C/ de Jaume II, 69, 25001 Lleida</strong></p>
      <p> Envianos un correo a <strong>recetasasiadavidymaria@gmail.com</strong>.</p>
      <p> O si prefieres envia un mensaje a través de nuestro <b-link href="https://www.instagram.com/creartive.lleida/">Instagram!</b-link></p>
    </div>
    <!--<div>
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/0sQGtf-JyUE"
        allowfullscreen
      ></b-embed>
    </div>-->

 </div>

</template>

<script>


export default {
  props: {  
   name: {
      type: String,
      default: 'OtraPagina'
    }
  }
}
</script>