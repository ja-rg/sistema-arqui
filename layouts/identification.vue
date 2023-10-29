<template>
    <div class="bg-gray-200 min-h-screen p-8">
        <h1 class="text-4xl font-semibold mb-6">Identificación de sospechosos</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="sospechoso in sospechosos" :key="sospechoso.sospechosos_id"
                class="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300">

                <div class="flex items-center space-x-6">
                    <NuxtImg :src="sospechoso.imagen_url" alt="Sospechoso"
                        class="w-24 h-24 rounded-full object-cover object-center" />

                    <div>
                        <p class="text-xl font-medium">{{ sospechoso.nombre }}</p>
                        <p class="text-sm text-gray-500 mt-1">Visto por última vez: {{
                            formatDate(sospechoso.ultima_deteccion) }} a las {{ formatTime(sospechoso.ultima_deteccion) }}
                        </p>
                    </div>

                </div>

                <button @click="notificar(sospechoso)"
                    :class="activeButtons[sospechoso.sospechosos_id] ? 'bg-green-600' : 'bg-blue-600'"
                    class="hover:bg-blue-700 text-white rounded px-4 py-2 w-full text-center transition-colors duration-300">
                    Notificar oficial
                </button>
            </div>
        </div>
    </div>
</template>

  
<script setup lang="ts">
import io from 'socket.io-client'


type Sospechoso = {
    sospechosos_id: number;
    nombre: string;
    imagen_url: string;
    ultima_deteccion: string;
}

// Usar useAsyncData o useFetch para obtener datos en tiempo real del backend
const sospechosos = useFetch<Sospechoso[]>('http://main.brazilsouth.cloudapp.azure.com:8000/sospechosos').data
const socket = io('http://main.brazilsouth.cloudapp.azure.com:8080/');
const notificationReceived = ref(false);
const activeButtons = ref({} as Record<number, boolean>);

socket.on('official-notification', (message) => {
    console.log('Notification received:', message);
    notificationReceived.value = true;
    const id = message.sospechosos_id; // Adjust this to the correct property in your actual message
    activeButtons.value[id] = true;

    setTimeout(() => {
        activeButtons.value[id] = false;
    }, 5000);
});

function notificar(sospechoso: Sospechoso) {
    socket.emit('notify-official', sospechoso);
}

function formatDate(timestamp: string) {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
}

function formatTime(timestamp: string) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
}

onUnmounted(() => {
    socket.disconnect();
});
</script>
  