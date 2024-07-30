<template>
  <div>
    <!-- <p>Cabeçalho</p> -->
    <RouterView></RouterView>
    <!-- <p>rodapé. v 0.0.1</p> -->
  </div>
</template>

<style>
.visible{
  transition: transform 2s ease, opacity 2s ease !important;
  opacity: 1 !important;
}

.invisible{
  opacity: 0 !important;
}
</style>