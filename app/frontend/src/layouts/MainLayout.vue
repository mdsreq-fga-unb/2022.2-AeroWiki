<template>
  <q-layout view="lHr lpR lfr">

    <q-header bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="alternarGaveta" />

        <q-toolbar-title>
          <img src="images/LOGO_ZENIT.webp" />
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="ctrl.gavetaAberta" side="left" bordered>
      <div>
        <p>
          Ideia: colocar links para as páginas aqui
        </p>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

/**
 * Interface para definição da estrutura do componente.
 */
interface ComponentProps {
  gavetaAberta: boolean;
}

/**
 * Objeto para controle do componente.
 */
const ctrl = ref<ComponentProps>({
  gavetaAberta: false,
})

/**
 * Abrir/fechar a gaveta esquerda.
 */
function alternarGaveta(): void{
  ctrl.value.gavetaAberta = !ctrl.value.gavetaAberta;
}
</script>
