<template>
  <q-page class="row items-center justify-evenly">
    Componente da página
    <q-input
      v-model="ctrl.texto1"
      label="insira algo aqui."
      stack-label
      dense
      filled
      @update:model-value="mostrarTexto2"
    />
    <div v-if="ctrl.mostrarTexto2">
      <q-input
        v-model="ctrl.texto2"
        label="insira algo aqui tbm!"
        stack-label
        dense
        filled
      />
      {{ctrl.texto2 ? ctrl.texto2 : 'insira algo aqui em cima...'}}
    </div>
    <q-btn
      label="me aperte"
      dense
      color="primary"
      @click="funcaoteste"
    />
    <componente-exemplo-vue />
  </q-page>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { QInput, QBtn} from 'quasar';
import componenteExemploVue from 'src/components/componenteExemplo.vue';

/**
 * Interface para definição de dados do componente.
 */
interface ComponentProps {
  texto1?: string;
  texto2?: string;
  mostrarTexto2: boolean;
}

function funcaoteste() {
  console.log('ola, arthur');
}

/**
 * Objeto para controle do componente.
 */
const ctrl = ref<ComponentProps>({
  texto1: undefined,
  texto2: undefined,
  mostrarTexto2: false,
});

/**
 * Caso o usuário insira algo no primeiro input, mostrar o segundo.
 */
function mostrarTexto2(): void {
  if(ctrl.value.texto1)
    ctrl.value.mostrarTexto2 = true;
  else
    ctrl.value.mostrarTexto2 = false;
}

/** Printar Hello, World no console. */
function olaMundo() {
  console.log('Hello, World!');
}

/* onBeforeMount é uma função do vue.
 * Ela sempre vai ser chamada antes da renderização do componente.
 */
onBeforeMount(()=>{
  olaMundo();
});
</script>
