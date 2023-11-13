<script setup lang="ts">
type Alert = {
  alert_id: number;
  message: string;
  alert_timestamp: string;
  enabled_alert: boolean;
}
const apiUrl = 'http://main.brazilsouth.cloudapp.azure.com:8000/alerts?enabled_alert=eq.true';
const { data: alerts, refresh } = await useFetch<Alert[]>(`${apiUrl}&limit=3`);

const disableAlert = async (alertId: number) => {
  // Make a PATCH request to update the alert's 'enabled_alert' status to false
  await fetch(`${apiUrl}&alert_id=eq.${alertId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Prefer': 'return=representation' // Ask PostgREST to return the modified row
    },
    body: JSON.stringify({ enabled_alert: false }),
  });
  refresh(); // Refetch the alerts to update the UI
};
</script>

<template>
  <div class="dashboard bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">

    <h1 class="text-2xl font-semibold mb-4 border-b pb-2">Dashboard</h1>

    <CameraFeed />

    <div class="alerts mt-6 bg-gray-900 p-4 rounded-lg shadow-md">
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-medium text-gray-200 border-b border-gray-700 pb-2">
          Recent Alerts
          <!-- refresh -->
          <button @click="refresh" class="text-gray-400 hover:text-gray-200">
            <Icon name="material-symbols:refresh-rounded" class="w-6 h-6" />
          </button>
        </h2>
      </div>

      <ul class="space-y-3 mt-4" v-if="alerts?.length">
        <li v-for="alert in alerts" :key="alert.alert_id"
          class="group flex justify-between items-center bg-red-600 p-3 rounded-lg hover:bg-red-500 transition-transform transform hover:scale-105 duration-200 shadow hover:shadow-lg font-mono text-sm relative">

          <div class="flex items-center">
            <Icon name="carbon:warning-alt-inverted-filled" class="w-6 h-6 text-red-200 mr-4" />
            {{ alert.message }}

            <!-- Timestamp -->
            <span class="left-0 ml-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {{ new Date(alert.alert_timestamp).toLocaleString() }}
            </span>
          </div>

          <button @click="disableAlert(alert.alert_id)" class="text-red-200 hover:text-red-100">
            <Icon name="carbon:close-filled" class="w-6 h-6" />
          </button>
        </li>
      </ul>

      <div v-else class="text-center text-gray-500 py-10">
        <Icon name="carbon:warning-alt-inverted-filled" class="w-16 h-16 text-gray-500 mx-auto" />
        <p>No hay alertas recientes</p>
      </div>
    </div>


  </div>
</template>