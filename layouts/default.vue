<template>
    <div class="flex flex-col min-h-screen">
        <header class="bg-blue-600 text-white p-4">
            <h1 class="text-2xl">Cyber-Security</h1>
            <nav class="flex gap-4 mt-4">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/app">App</NuxtLink>
                <NuxtLink to="/identification">
                    Identificación de sospechosos
                </NuxtLink>
            </nav>
        </header>
        
        <main class="container mx-auto px-4 flex-grow bg-gray-100 p-6 space-y-6 gap-6 min-h-screen">
            <slot />
        </main>

        <footer class="bg-blue-800 text-white mt-8 py-6">
            <div class="container mx-auto px-4 space-y-6">
                <h2 class="text-2xl font-semibold mb-4">Conoce nuestro equipo:</h2>

                <!-- Team Members -->
                <ul class="flex flex-wrap justify-between gap-1 mb-6">
                    <li v-for="member in teamMembers" :key="member.name" class="mb-4 w-full sm:w-1/2 lg:w-1/4">
                        <div class="bg-blue-700 rounded-lg p-4 hover:bg-blue-600 transition">
                            <NuxtImg :src="member.image_url" alt="" class="mb-2 w-24 h-24 rounded-full mx-auto" />
                            <h3 class="text-xl text-center">{{ member.name }}</h3> 
                            <p class="text-center text-blue-300">{{ member.position }}</p>
                        </div>
                    </li>
                </ul>

                <!-- Footer Navigation and Info -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Links -->
                    <div>
                        <h4 class="font-semibold mb-3">Enlaces útiles:</h4>
                        <ul>
                            <li><a href="#" class="hover:text-blue-400">Términos y condiciones</a></li>
                            <li><a href="#" class="hover:text-blue-400">Política de privacidad</a></li>
                            <li><a href="#" class="hover:text-blue-400">FAQ</a></li>
                            <li><a href="#" class="hover:text-blue-400">Contacto</a></li>
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div>
                        <h4 class="font-semibold mb-3">Contáctanos:</h4>
                        <ul>
                            <li>Email: contacto@cybersecurity.com</li>
                            <li>Tel: +123 456 7890</li>
                            <li>123 Security St., City, Country</li>
                        </ul>
                    </div>

                    <!-- About or Description -->
                    <div>
                        <h4 class="font-semibold mb-3">Acerca de nosotros:</h4>
                        <p>Nuestro compromiso es garantizar la seguridad digital a través de soluciones innovadoras y
                            efectivas.</p>
                    </div>

                    <!-- Social Media and Call-to-Action -->
                    <div>
                        <h4 class="font-semibold mb-3">Síguenos:</h4>
                        <div class="flex space-x-4">
                            <a href="#" class="text-blue-400 hover:text-blue-300 flex items-center space-x-2">
                                <Icon name="carbon:logo-facebook" class="w-6 h-6" />
                                <span>Facebook</span>
                            </a>
                            <a href="#" class="text-blue-400 hover:text-blue-300 flex items-center space-x-2">
                                <Icon name="carbon:logo-twitter" class="w-6 h-6" />
                                <span>Twitter</span>
                            </a>
                            <a href="#" class="text-blue-400 hover:text-blue-300 flex items-center space-x-2">
                                <Icon name="carbon:logo-instagram" class="w-6 h-6" />
                                <span>Instagram</span>
                            </a>
                            <a href="#" class="text-blue-400 hover:text-blue-300 flex items-center space-x-2">
                                <Icon name="carbon:logo-linkedin" class="w-6 h-6" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="text-center mt-8">
                    &copy; {{ new Date().getFullYear() }} Cyber-Security. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    </div>
</template>
  
  
<script setup lang="ts">
type TeamMember = {
    member_id: number;
    name: string;
    position: string;
    image_url: string;
}

const teamMembers = useFetch<TeamMember[]>('http://main.brazilsouth.cloudapp.azure.com:8000/team_members').data;
</script> 