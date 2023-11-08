<template>
    <div class="bg-gradient-to-r from-blue-600 to-green-400 min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-xl w-96">
            <h1 class="text-2xl font-semibold mb-6 text-center">Cybersecurity Login</h1>
            <div class="mb-4">
                <label class="block text-gray-600 mb-2" for="username">Username</label>
                <input class="w-full p-2 border rounded" type="text" id="username" v-model="username">
            </div>
            <div class="mb-6">
                <label class="block text-gray-600 mb-2" for="password">Password</label>
                <input class="w-full p-2 border rounded" type="password" id="password" v-model="password">
            </div>
            <button @click="authenticate"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white rounded py-2">Login</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import md5 from 'md5';

const username = ref('');
const password = ref('');
const emit = defineEmits(['login-success']);

function authenticate() {
    type User = {
        user_id: string;
        username: string;
        email: string;
        password: string;
        role: string;
    }

    // Authentication logic here
    const { data } = useFetch<User[]>(`http://main.brazilsouth.cloudapp.azure.com:8000/users?username=eq.${username.value}&password=eq.${password.value}`)!
    if (!data.value || data.value.length === 0) {
        alert('Incorrect credentials!!');
        console.log(`Username: ${username.value}, Password: ${password.value}`, data.value);
        
    } else {
        emit('login-success');
        console.log(md5('admin'));
    }
}
</script>
