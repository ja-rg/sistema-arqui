<script setup>
</script>

<template>
    <div class="bg-gray-900 text-white min-h-screen">
        <!-- Hero Section -->
        <section class="pt-20 pb-28 px-8">
            <div class="max-w-6xl mx-auto text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-8">
                    <Icon name="carbon:police" class="w-12 h-12 inline-block mb-2" />
                    Cyber-Security
                </h1>
                <p class="text-xl mb-8">
                    Arquitectura e Ingeniería de Software
                </p>
                <button class="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded">
                    Ver más
                </button>
            </div>
        </section>

        <!-- Features Section -->
        <section class="bg-gray-800 py-20">
            <div class="max-w-6xl mx-auto px-8">
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

  
