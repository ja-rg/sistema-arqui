<template>
    <div class="flex flex-col min-h-screen">
        <header class="bg-gray-800 text-white p-4 shadow-lg">
            <div class="container mx-auto flex justify-between items-center">
                <h1 class="text-3xl font-bold tracking-tight">
                    <NuxtLink to="/" class="hover:text-green-400 transition-colors duration-300">
                        <Icon name="carbon:police" class="w-8 h-8 inline-block" />
                        Cyber-Security
                    </NuxtLink>
                </h1>
                <nav class="flex gap-6">
                    <NuxtLink to="/monitor" class="py-2 px-3 hover:bg-gray-700 rounded transition-all duration-300">
                        <Icon name="carbon:cloud-monitoring" class="w-6 h-6 mr-2" />
                        Monitor
                    </NuxtLink>
                    <NuxtLink to="/identification" class="py-2 px-3 hover:bg-gray-700 rounded transition-all duration-300">
                        <Icon name="carbon:face-cool" class="w-6 h-6 mr-2" />
                        Identificación de sospechosos
                    </NuxtLink>
                    <NuxtLink to="/logs" class="py-2 px-3 hover:bg-gray-700 rounded transition-all duration-300">
                        <Icon name="carbon:terminal" class="w-6 h-6 mr-2" />
                        Registro de actividades
                    </NuxtLink>
                    <NuxtLink to="/model" class="py-2 px-3 hover:bg-gray-700 rounded transition-all duration-300">
                        <Icon name="carbon:3d-cursor" class="w-6 h-6 mr-2" />
                        Ciudad digital
                    </NuxtLink>
                    <NuxtLink to="/notification" class="py-2 px-3 hover:bg-gray-700 rounded transition-all duration-300">
                        <Icon name="carbon:notification" class="w-6 h-6 mr-2" />
                        Notificaciones
                    </NuxtLink>
                </nav>
            </div>
        </header>

        <main class="container mx-auto px-4 flex-grow p-6 space-y-6 gap-6 min-h-screen">
            <slot />
        </main>

        <footer class="bg-gray-800 text-gray-300">
            <div class="container mx-auto px-4 py-8 space-y-8">
                <h2 class="text-xl sm:text-2xl font-bold mb-4">Conoce nuestro equipo:</h2>
                <ul class="flex flex-wrap justify-between gap-4">
                    <li v-for="member in teamMembers" :key="member.name" class="mb-4 w-full sm:w-1/2 lg:w-1/4">
                        <div class="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-all duration-300">
                            <NuxtImg :src="member.image_url" alt="" class="mb-2 w-24 h-24 rounded-full mx-auto" />
                            <h3 class="text-lg text-center">{{ member.name }}</h3>
                            <p class="text-center">{{ member.position }}</p>
                        </div>
                    </li>
                </ul>

                <!-- Footer Navigation and Info -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                    <!-- Links -->
                    <div>
                        <h4 class="font-semibold mb-3">
                            <Icon name="carbon:link" class="w-6 h-6 inline-block" />
                            Enlaces útiles:
                        </h4>
                        <ul>
                            <li><a href="#" class="hover:text-blue-400">Términos y condiciones</a></li>
                            <li><a href="#" class="hover:text-blue-400">Política de privacidad</a></li>
                            <li><a href="#" class="hover:text-blue-400">FAQ</a></li>
                            <li><a href="#" class="hover:text-blue-400">Contacto</a></li>
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div>
                        <h4 class="font-semibold mb-3">
                            <Icon name="carbon:location-filled" class="w-6 h-6 inline-block" />
                            Contáctanos:
                        </h4>
                        <ul>
                            <li>
                                <Icon name="carbon:email" class="w-6 h-6 inline-block" />
                                Email: contacto@cybersecurity.com
                            </li>
                            <li>
                                <Icon name="carbon:phone-filled" class="w-6 h-6 inline-block" />
                                Tel: +123 456 7890
                            </li>
                            <li>
                                <Icon name="carbon:ibm-vsi-on-vpc-for-regulated-industries" class="w-6 h-6 inline-block" />
                                123 Security St., City, Country
                            </li>
                        </ul>
                    </div>

                    <!-- About or Description -->
                    <div>
                        <h4 class="font-semibold mb-3">
                            <Icon name="carbon:information" class="w-6 h-6 inline-block" />
                            Acerca de nosotros:
                        </h4>
                        <p>Nuestro compromiso es garantizar la seguridad digital a través de soluciones innovadoras y
                            efectivas.</p>
                    </div>

                    <!-- Social Media and Call-to-Action -->
                    <div>
                        <h4 class="font-semibold mb-3">
                            <Icon name="carbon:hybrid-networking-alt" class="w-6 h-6 inline-block" />
                            Síguenos:
                        </h4>
                        <div class="flex space-x-4">
                            <a href="#" class="hover:text-blue-400 flex items-center space-x-2">
                                <Icon name="carbon:logo-facebook" class="w-6 h-6" />
                                <span>Facebook</span>
                            </a>
                            <a href="#" class="hover:text-blue-400 flex items-center space-x-2">
                                <Icon name="carbon:logo-twitter" class="w-6 h-6" />
                                <span>Twitter</span>
                            </a>
                            <a href="#" class="hover:text-blue-400 flex items-center space-x-2">
                                <Icon name="carbon:logo-instagram" class="w-6 h-6" />
                                <span>Instagram</span>
                            </a>
                            <a href="#" class="hover:text-blue-400 flex items-center space-x-2">
                                <Icon name="carbon:logo-linkedin" class="w-6 h-6" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="text-center text-xs">
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