<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand>CreARTive</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-container>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <!--
            <b-nav-item :to="{name: 'home'}" exact>Home</b-nav-item>
            <b-nav-item :to="{name: 'contacto'}">Contacto</b-nav-item>
           -->
            <b-nav-item class="nav-link"  to="Home">Inicio</b-nav-item>
            <b-nav-item class="nav-link"  to="ListaProyectos">Paises</b-nav-item>
            <b-nav-item class="nav-link"  to="AddPersonas">Forum</b-nav-item>
            <b-nav-item class="nav-link"  to="OtraPagina">Contacto</b-nav-item>
            <b-nav-item class="nav-link" to="About">Sobre Nosotros</b-nav-item>
            <b-nav-item class="nav-link" to="Tabla">tabla</b-nav-item>
            <b-nav-item class="nav-link" to="Resetas">recetas</b-nav-item>
            <!--<b-nav-item class="nav-link" to="/home">Home</b-nav-item>
            <b-nav-item class="nav-link" to="/listaproyectos">ListaProyectos</b-nav-item>-->
          </b-navbar-nav>
        </b-collapse>
      </b-container>
  </b-navbar>
</template>


<script>
export default {


}
</script>


<style scoped>

.router-link-exact-active, .router-link-active {
  background-color: rgb(0, 0, 0);
}
</style>

<style lang="scss">
</style>