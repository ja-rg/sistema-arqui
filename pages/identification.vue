<template>
    <div class="bg-gray-100 min-h-screen p-8">
        <h1 class="text-4xl font-bold mb-6 text-gray-800">Identificación de sospechosos</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Suspense>
                <div v-for="sospechoso in sospechosos" :key="sospechoso.sospechosos_id"
                    class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                    <div class="flex items-center space-x-4">
                        <NuxtImg :src="sospechoso.imagen_url" alt="Sospechoso"
                            class="w-20 h-20 rounded-full object-cover border-2 border-gray-300" />
                        <div>
                            <p class="text-xl font-semibold text-gray-700">{{ sospechoso.nombre }}</p>
                            <p class="text-sm text-gray-500 mt-1">Visto por última vez: {{
                                new Date(sospechoso.ultima_deteccion).toLocaleDateString() }} a las {{ new
        Date((sospechoso.ultima_deteccion)).toLocaleTimeString() }}
                            </p>
                        </div>
                        <Icon name="carbon:user-avatar-filled-alt" class="text-blue-400 w-6 h-6" />
                    </div>
                    <button @click="socket.emit('notify-official', sospechoso)"
                        :class="activeButtons[sospechoso.sospechosos_id] ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'"
                        class="mt-4 text-white rounded px-4 py-2 w-full text-center transition-colors duration-300">
                        Notificar oficial
                    </button>
                </div>
            </Suspense>
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

const { data: sospechosos } = await useFetch<Sospechoso[]>('http://main.brazilsouth.cloudapp.azure.com:8000/sospechosos')
const socket = io('http://main.brazilsouth.cloudapp.azure.com:8080/');
const notificationReceived = ref(false);
const activeButtons = ref({} as Record<number, boolean>);

socket.on('official-notification', (message) => {
    console.log('Notification received:', message);
    notificationReceived.value = true;
    const id = message.sospechosos_id; // Adjust this to the correct property in your actual message
    activeButtons.value[id] = true;

    useFetch(`http://main.brazilsouth.cloudapp.azure.com:8000/log_server`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mensaje: `Se ha notificado a un oficial sobre el sospechoso ${message.nombre}`,
        }),
    });

    setTimeout(() => {
        activeButtons.value[id] = false;
    }, 5000);
})

onUnmounted(() => {
    socket.disconnect();
});
</script>
  