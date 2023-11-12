<template>
    <div class="bg-gradient-to-r from-blue-600 to-green-400 min-h-screen flex items-center justify-center">
        <div class="bg-gray-700 p-10 rounded-lg shadow-2xl w-96 border border-gray-600">

            <h1 class="text-3xl font-bold mb-8 text-center text-white">
                <Icon name="carbon:security" class="w-8 h-8 inline-block" />
                Cybersecurity Login
            </h1>
            <div class="mb-4">
                <label class="block text-gray-300 mb-2 font-medium" for="username">
                    <Icon name="carbon:user-avatar" class="w-6 h-6 inline-block" />
                    Username
                </label>
                <input
                    class="w-full p-3 border rounded focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    type="text" id="username" v-model="username">

            </div>
            <div class="mb-6">
                <label class="block text-gray-300 mb-2 font-medium">
                    <Icon name="carbon:password" class="w-6 h-6 inline-block" />
                    Password
                </label>
                <input
                    class="w-full p-3 border rounded focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    type="password" id="password" v-model="password">
            </div>
            <button @click="authenticate"
                class="w-full bg-gradient-to-r from-purple-600 to-blue-700 transition-all duration-300 hover:from-blue-700 hover:to-purple-900 text-white font-semibold p-3 rounded">
                Login
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
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
    const { data } = useFetch<User[]>(`http://main.brazilsouth.cloudapp.azure.com:8000/users?username=eq.${username.value}&password=eq.${md5(password.value).trim()}`)!
    if (!data.value || data.value.length === 0) {
        alert('Incorrect credentials!!');
        console.log(`Username: ${username.value}, Password: ${password.value}`, data.value);

    } else {
        emit('login-success');
        console.log(md5('admin'));
    }
}
</script>
