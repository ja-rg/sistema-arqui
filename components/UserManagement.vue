<template>
  <div class="user-management bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto">

    <h1 class="text-2xl font-semibold mb-4 border-b pb-2">User Management</h1>

    <ul class="mt-4 space-y-2">
      <li v-for="user in users" :key="user.user_id"
        class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition flex justify-between items-center">
        <span class="flex items-center space-x-2">
          <i class="fas fa-user-circle text-blue-400"></i> <!-- An icon for user -->
          <font-awesome-icon :icon="['fas', 'user-circle']" class="text-blue-400" />
          <span>{{ user.username }}</span>
        </span>
        <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs">{{ user.role }}</span>
      </li>
    </ul>

  </div>
</template>
  
<script setup lang="ts">

// user_id is uuid
type User = {
  user_id: string
  username: string
  email: string
  password: string
  role: string
}

const { data: users } = await useFetch<User[]>('http://main.brazilsouth.cloudapp.azure.com:8000/users')
</script>
  