<script setup lang="ts">
type Alert = {
  alert_id: number
  message: string
  alert_timestamp: string
}
const { data: alerts } = await useFetch<Alert[]>('http://main.brazilsouth.cloudapp.azure.com:8000/alerts')
</script>

<template>
  <div class="dashboard bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">

    <h1 class="text-2xl font-semibold mb-4 border-b pb-2">Dashboard</h1>

    <div class="camera-feed mt-6 relative rounded-lg overflow-hidden">
      <img src="https://media2.giphy.com/media/P9iws4imseYNg5KkhQ/giphy.gif" alt="Camera Feed" class="w-full">
      <div class="absolute top-0 left-0 p-3">
        <p class="text-xs bg-black bg-opacity-50 py-1 px-2 rounded">Live Feed</p>
      </div>
    </div>

    <div class="alerts mt-6">
      <h2 class="text-xl font-medium mb-3">Recent Alerts</h2>
      <ul class="space-y-2">
        <li v-for="alert in alerts" :key="alert.alert_id" class="bg-red-600 p-3 rounded-lg hover:bg-red-500 transition">
          {{ alert.message }}
        </li>
      </ul>
    </div>

  </div>
</template>