<script setup>
const isModalOpen = ref(false)
</script>

<template>
    <div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 text-white">

        <div class="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
            <div class="mx-auto max-w-2xl text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-8 text-white">
                    <Icon name="carbon:police" class="w-12 h-12 inline-block mb-2" />
                    Cyber-Security
                </h1>
                <p class="text-xl mb-8 text-gray-300">
                    Arquitectura e Ingeniería de Software
                </p>
                <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md shadow-md"
                    @click="isModalOpen = true">
                    Ver más
                </button>
            </div>

            <!-- Modal for more information -->
            <div v-if="isModalOpen" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
                <div class="bg-gray-700 p-6 rounded-lg shadow-xl max-w-lg mx-auto text-white">
                    <h2 class="text-xl font-bold mb-4">Más Información</h2>
                    <p class="text-gray-300 mb-4">
                        Bienvenido a la página de Cyber-Security, en esta página podrás encontrar información sobre el
                        proyecto de Arquitectura e Ingeniería de Software.
                    </p>
                    <button @click="isModalOpen = false"
                        class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>

        <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
            <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#0f0f0f] to-[#03c4a1] opacity-40 shadow-lg"
                style="clip-path: polygon(74% 44%, 85% 50%, 100% 62%, 98% 27%, 93% 10%, 86% 0, 81% 2%, 80% 15%, 73% 33%, 67% 50%, 60% 62%, 55% 70%, 52% 68%, 50% 60%, 48% 58%, 47% 45%, 45% 35%, 40% 45%, 35% 55%, 30% 65%, 28% 77%, 20% 85%, 10% 90%, 0 65%, 5% 50%, 10% 35%, 18% 25%, 25% 15%, 18% 100%, 28% 90%, 38% 80%, 48% 85%, 58% 90%, 68% 95%, 76% 98%, 82% 90%, 74% 80%, 74% 44%); animation: pulse 5s infinite ease-in-out;">
            </div>
        </div>

        <!-- Features Section -->
        <section class="bg-gray-800 py-20 lg:py-24">
            <div class="mx-auto max-w-6xl px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <!-- Feature 1 -->
                    <div class="feature-item">
                        <Icon name="carbon:face-activated-add" class="w-12 h-12 text-green-500 mb-4" />
                        <h3 class="font-semibold text-xl mb-2">Identificación en tiempo real</h3>
                        <p>
                            Identifique sospechosos en tiempo real con la tecnología de reconocimiento facial más avanzada.
                        </p>
                    </div>
                    <!-- Feature 2 -->
                    <div class="feature-item">
                        <Icon name="carbon:security" class="w-12 h-12 text-green-500 mb-4" />
                        <h3 class="font-semibold text-xl mb-2">Base de datos segura</h3>
                        <p>
                            Utiliza una base de datos segura y encriptada para almacenar y comparar datos de los usuarios.
                        </p>
                    </div>
                    <!-- Feature 3 -->
                    <div class="feature-item">
                        <Icon name="carbon:notification" class="w-12 h-12 text-green-500 mb-4" />
                        <h3 class="font-semibold text-xl mb-2">Notificación de oficiales</h3>
                        <p>
                            Notifique a los oficiales de policía cuando se detecte un sospechoso.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>