<template>
  <div class="settings bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
    
    <h1 class="text-2xl font-semibold mb-4 border-b pb-2">Settings</h1>
    
    <div class="mt-6 flex items-center justify-start">
        <button @click="toggleCamera" class="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition">
            Toggle Camera
        </button>
    </div>
    
  </div>
</template>

  
<script>
export default {
  methods: {
    toggleCamera() {
      // Logic to toggle camera (this is just a placeholder for now)
      alert('Camera toggled');
    }
  }
}
</script>
  