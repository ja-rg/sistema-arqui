<template>
  <div class="dashboard bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">

    <h1 class="text-2xl font-semibold mb-4 border-b pb-2">Dashboard</h1>

    <div class="camera-feed mt-6 relative rounded-lg overflow-hidden">
      <!-- Simulate a camera feed with an image or use a video element for real webcam feed -->
      <img src="@/assets/camera-feed-placeholder.jpg" alt="Camera Feed" class="w-full">
      <div class="absolute top-0 left-0 p-3">
        <p class="text-xs bg-black bg-opacity-50 py-1 px-2 rounded">Live Feed</p>
      </div>
    </div>

    <div class="alerts mt-6">
      <h2 class="text-xl font-medium mb-3">Recent Alerts</h2>
      <ul class="space-y-2">
        <li v-for="alert in alerts" :key="alert.id" class="bg-red-600 p-3 rounded-lg hover:bg-red-500 transition">
          {{ alert.message }}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      alerts: [
        { id: 1, message: "Suspicious activity detected" },
        // ... more fake alerts
      ]
    };
  }
}
</script>
  