<template>
  <q-layout view="lHr lpR lfr">

    <q-header bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="alternarGaveta" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://scontent.fbsb9-1.fna.fbcdn.net/v/t39.30808-6/294373538_559763195852459_2568898542794734130_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mCZaZrhQTjMAX_53IRr&_nc_ht=scontent.fbsb9-1.fna&oh=00_AfC50HcR7YYNnQ1N0G9kixUjuVJQBCgK5L-Qt_mSmGsPeQ&oe=6372D99A" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="ctrl.gavetaAberta" side="left" bordered>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

/**
 * Interface para definição da estrutura do componente
 */
interface ComponentProps {
  gavetaAberta: boolean;
}

/**
 * Objeto para controle do componente
 */
const ctrl = ref<ComponentProps>({
  gavetaAberta: false,
})

/**
 * Ao clicar nas 3 barras, o usuário abre a gaveta.
 */
function alternarGaveta(): void{
  ctrl.value.gavetaAberta = !ctrl.value.gavetaAberta;
}
</script>
