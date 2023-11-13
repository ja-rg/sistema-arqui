<template>
    <div class="bg-gray-100 min-h-screen p-4 sm:p-8">
        <h1 class="text-2xl sm:text-4xl font-semibold mb-4 sm:mb-6">Cybersecurity Notifications</h1>

        <div v-if="notification" class="bg-red-500 text-white p-4 sm:p-6 rounded-lg shadow-md">
            <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Icon name="carbon:warning-alt-inverted-filled" class="w-8 sm:w-10 h-8 sm:h-10" />

                <NuxtImg :src="notification.imagen_url" alt="Sospechoso"
                    class="w-20 sm:w-24 h-20 sm:h-24 rounded-full object-cover object-center mb-2 sm:mb-0" />

                <div>
                    <h3 class="font-semibold text-lg sm:text-xl">Threat Detected!</h3>
                    <p>{{ notification.nombre }} at {{ notification.ultima_deteccion }}</p>
                </div>
            </div>

            <button @click="dismissNotification" class="mt-4 text-white hover:text-red-300">Dismiss</button>
        </div>
    </div>
</template>


<script setup lang="ts">
import io from 'socket.io-client'
import { Howl } from 'howler'
type Sospechoso = {
    sospechosos_id: number;
    nombre: string;
    imagen_url: string;
    ultima_deteccion: string;
}

const notification = ref<Sospechoso | null>(null);
let socket;

function dismissNotification() {
    notification.value = null;
}

onMounted(() => {
    // Connect to the server
    socket = io("http://main.brazilsouth.cloudapp.azure.com:8080");

    // When an official-notification is received from the server
    socket.on("official-notification", (data) => {
        console.log("Received notification:", data);

        // Update the notification content
        console.log(data);
        notification.value = data;

        // Play a sound alert
        const sound = new Howl({
            src: ["alert.mp3"],
            autoplay: true,
        });

        sound.play();
        useFetch(`http://main.brazilsouth.cloudapp.azure.com:8000/log_server`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mensaje: `Se ha confirmado una alerta de seguridad`,
            }),
        });
    });
});

</script>
  