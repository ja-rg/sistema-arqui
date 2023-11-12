<template>
  <div class="user-management bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto">

    <h1 class="text-2xl font-semibold mb-4 border-b pb-2">User Management
      <button @click="refresh" class="text-gray-400 hover:text-gray-200">
        <Icon name="material-symbols:refresh-rounded" class="w-6 h-6" />
      </button>

      <!-- to the right add an icon to go to a page -->
      <button @click="$router.push('/iam')" class="text-gray-400 hover:text-gray-200 float-right">
        <Icon name="material-symbols-light:arrow-outward-rounded" class="w-6 h-6" />
      </button>
    </h1>

    <ul class="mt-4 space-y-2">
      <li v-for="user in users?.slice((currentPage - 1) * perPage, currentPage * perPage)" :key="user.user_id"
        class="bg-gray-700 p-3 rounded-lg hover:bg-gray-600 transition flex justify-between items-center">
        <span class="flex items-center space-x-2">
          <i class="fas fa-user-circle text-blue-400"></i> <!-- An icon for user -->
          <Icon name="carbon:user-avatar-filled-alt" class="text-blue-400 w-6 h-6" />
          <span>{{ user.username }}</span>

          <span class="text-gray-400">({{ user.email }})</span>
        </span>
        <span class="bg-blue-500 text-white px-2 py-1 rounded text-xs">{{ user.role }}</span>
      </li>
    </ul>

    <div class="flex justify-between items-center mt-6" v-if="totalPages > 1">
      <button @click="currentPage--" :disabled="currentPage <= 1"
        class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed">
        Previous
      </button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="currentPage++" :disabled="currentPage >= totalPages"
        class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>

  </div>
</template>
  
<script setup lang="ts">
type User = {
  user_id: string
  username: string
  email: string
  password: string
  role: string
}

const { data: users, refresh } = await useFetch<User[]>('http://main.brazilsouth.cloudapp.azure.com:8000/users')
const perPage = 4
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil((users.value?.length ?? 0) / perPage));
</script>
  