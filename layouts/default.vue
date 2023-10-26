<template>
    <div class="flex flex-col min-h-screen">

        <header class="bg-blue-600 text-white p-4">
            <h1 class="text-2xl">Cyber-Security</h1>
            <nav class="flex gap-4 mt-4">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/app">App</NuxtLink>
            </nav>
        </header>

        <main class="container mx-auto px-4 flex-grow bg-gray-100 p-6 space-y-6 gap-6">
            <slot />
        </main>

        <footer class="bg-blue-800 text-white mt-8 py-6">
            <div class="container mx-auto px-4 space-y-6">
                <h2 class="text-2xl font-semibold mb-4">Conoce nuestro equipo:</h2>

                <!-- Team Members -->
                <ul class="flex flex-wrap justify-between gap-1 mb-6">
                    <li v-for="member in teamMembers" :key="member.name" class="mb-4 w-full sm:w-1/2 lg:w-1/4">
                        <div class="bg-blue-700 rounded-lg p-4 hover:bg-blue-600 transition">
                            <img :src="member.image" alt="" class="mb-2 w-24 h-24 rounded-full mx-auto">
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
                            <a href="#" class="text-blue-400 hover:text-blue-300"><i class="fab fa-facebook"></i>
                                Facebook</a>
                            <a href="#" class="text-blue-400 hover:text-blue-300"><i class="fab fa-twitter"></i> Twitter</a>
                            <a href="#" class="text-blue-400 hover:text-blue-300"><i class="fab fa-instagram"></i>
                                Instagram</a>
                            <a href="#" class="text-blue-400 hover:text-blue-300"><i class="fab fa-linkedin"></i>
                                LinkedIn</a>
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
  
  
<script>
export default {
    data() {
        return {
            teamMembers: [
                {
                    name: "Joel Valencia González",
                    position: "Frontend Developer",
                    image: "https://www.prisonart.com.mx/wp-content/uploads/2016/08/dummy-prod-1-1.jpg" // Change to actual path of your image
                },
                {
                    name: "Ana Fernanda Ramírez Olmos",
                    position: "Backend Developer",
                    image: "https://www.prisonart.com.mx/wp-content/uploads/2016/08/dummy-prod-1-1.jpg" // Change to actual path of your image
                },
                {
                    name: "Jesús Alejandro Rosales González",
                    position: "Principal Architect",
                    image: "https://www.prisonart.com.mx/wp-content/uploads/2016/08/dummy-prod-1-1.jpg" // Change to actual path of your image
                },
                {
                    name: "Oscar Palomares Vargas",
                    position: "Backend Developer",
                    image: "https://www.prisonart.com.mx/wp-content/uploads/2016/08/dummy-prod-1-1.jpg" // Change to actual path of your image
                },

            ]
        }
    }
}
</script> 