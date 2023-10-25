<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="camera-feed">
      <!-- Simulate a camera feed with an image or use a video element for real webcam feed -->
      <img src="@/assets/camera-feed-placeholder.jpg" alt="Camera Feed">
    </div>
    <div class="alerts">
      <h2>Recent Alerts</h2>
      <ul>
        <li v-for="alert in alerts" :key="alert.id">{{ alert.message }}</li>
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
