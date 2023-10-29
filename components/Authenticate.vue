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

const username = ref('');
const password = ref('');
const emit = defineEmits(['login-success']);

function authenticate() {
    // Authentication logic here
    if (username.value === 'admin' && password.value === 'pass') {
        emit('login-success');
    } else {
        alert('Incorrect credentials!');
    }
}
</script>
