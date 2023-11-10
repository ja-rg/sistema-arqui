<template>
    <div class="bg-gray-900 text-white min-h-screen p-8">
        <div class="max-w-7xl mx-auto">
            <h1 class="text-4xl font-bold mb-8">System Logs</h1>
            <div class="space-y-6">
                <div v-for="log in logs" :key="log.id" class="bg-gray-800 p-6 rounded-lg shadow-md">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <Icon name="carbon:terminal" class="w-6 h-6 text-blue-400 mr-4" />
                            <div>
                                <p class="font-medium">{{ log.mensaje }}</p>
                                <p class="text-gray-400 text-sm">{{ new Date(log.created_at).toLocaleString() }}</p>
                            </div>
                        </div>
                        <Icon name="carbon:copy" @click="copyToClipboard(log.mensaje)"
                            class="w-6 h-6 text-gray-400 hover:text-gray-200 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
type Log = {
    id: number;
    mensaje: string;
    created_at: string;
}

const { data: logs } = useFetch<Log[]>('http://main.brazilsouth.cloudapp.azure.com:8000/log_server')
function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
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
