<script setup lang="ts">
type Alert = {
  alert_id: number;
  message: string;
  alert_timestamp: string;
}
const { data: alerts } = await useFetch<Alert[]>('http://main.brazilsouth.cloudapp.azure.com:8000/alerts')
</script>

<template>
  <div class="dashboard bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">

    <h1 class="text-2xl font-semibold mb-4 border-b pb-2">Dashboard</h1>

    <div class="camera-feed mt-6 relative rounded-lg overflow-hidden">
      <NuxtImg src="https://media2.giphy.com/media/P9iws4imseYNg5KkhQ/giphy.gif" alt="Camera Feed" class="w-full" />
      <div class="absolute top-0 left-0 p-3 transition-transform duration-300">
        <p class="text-xs bg-black bg-opacity-50 py-1 px-2 rounded">Live Feed</p>
      </div>

    </div>

    <div class="alerts mt-6 bg-gray-900 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-medium mb-3 text-gray-200 border-b border-gray-700 pb-2">Recent Alerts</h2>
      <ul class="space-y-3 mt-4">
        <li v-for="alert in alerts" :key="alert.alert_id"
          class="flex items-center bg-red-600 p-3 rounded-lg hover:bg-red-500 transition-transform transform hover:scale-105 duration-200 shadow hover:shadow-lg font-mono text-sm">
          <svg class="h-5 w-5 mr-3 text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M11 14.17l-2.879-2.879a.25.25 0 01-.034-.324l.516-.856a.25.25 0 01.293-.11l.904.326a.25.25 0 01.177.226V11l2.293 2.293a1 1 0 001.414 0L15 11.707V8a1 1 0 10-2 0v1.586L10.707 7.293a1 1 0 00-1.414 0L7 9.586V7a1 1 0 10-2 0v3.879l-1.096-.394a.25.25 0 01-.177-.227l.018-.088.516-.856a.25.25 0 01.35-.11l2.538 1.862a1 1 0 001.216-.39l1.1-1.654a1 1 0 001.792-.703V3a1 1 0 112 0v5.168a1 1 0 00.812.981L16 10l2.879-2.879a1 1 0 011.415 0z">
            </path>
          </svg>
          {{ alert.message }}
        </li>
      </ul>
    </div>

  </div>
</template>