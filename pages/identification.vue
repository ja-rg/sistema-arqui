<template>
    <div class="bg-gray-100 min-h-screen p-6">
        <h1 class="text-3xl font-bold mb-4">Identificación de sospechosos</h1>
        <div v-for="sospechoso in sospechosos" :key="sospechoso.sospechoso_id" class="bg-white p-4 rounded-lg shadow mb-4">
            <img :src="sospechoso.imagen_url" alt="Sospechoso"
                class="w-32 h-32 rounded-full mb-4 object-cover object-center">
            <p>{{ sospechoso.nombre }}</p>
            <p class="text-sm text-gray-500">{{ sospechoso.ultima_deteccion }}</p>
            <button @click="notificar(sospechoso)" class="bg-blue-500 text-white rounded px-3 py-1 mt-2">Notificar
                oficial</button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
type Sospechoso = {
    sospechoso_id: number;
    nombre: string;
    imagen_url: string;
    ultima_deteccion: string;
}

// Usar useAsyncData o useFetch para obtener datos en tiempo real del backend
const sospechosos = useFetch<Sospechoso[]>('http://main.brazilsouth.cloudapp.azure.com:8000/sospechosos').data

function notificar(sospechoso: Sospechoso) {
    // Lógica para notificar al oficial. Esta puede ser una llamada a una API que envía la notificación.
}
</script>
  