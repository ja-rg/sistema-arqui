<template>
    <div class="min-h-screen flex flex-col p-5">
        <h1 class="text-3xl mb-4">Server Logs</h1>
        <div v-for="log in logs" :key="log.id" class="mb-2">
            <div class="flex justify-between">
                <div>
                    <Icon class="text-green-500 mr-2" name="carbon:checkmark-filled" size="20" />
                    {{ log.nombre }}
                </div>
                <span>{{ log.created_at }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const logs = ref([])
try {
    logs.value = useFetch('main.brazilsouth.cloudapp.azure.com:8000/log_server').data
} catch (error) {
    console.error('Error fetching logs:', error);
}
</script>

<style scoped>
.page-container {
    background-color: #121212;
    /* Dark background */
    font-family: 'Courier New', monospace;
}

.log-entry {
    border: 1px solid #0DFF92;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.log-entry:hover {
    background-color: #1A1A1A;
}

.log-title {
    color: #0DFF92;
    /* Neon green */
}

.log-timestamp {
    color: #FFFFFF;
    font-size: 0.8rem;
}
</style>
