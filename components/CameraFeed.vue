<template>
    <div class="flex flex-col items-center bg-gray-900 text-gray-100 min-h-screen pb-10">
        <h2 class="text-xl font-semibold text-green-400 mt-8">
            Cámaras de seguridad - Zona: {{ cameraFeeds[selected].location }}
        </h2>
        <div class="camera-feed-selector mt-6 mb-4 flex space-x-4 overflow-x-auto p-4 border border-gray-700 rounded-lg bg-gray-800">
            <!-- Loop through camera feeds to create thumbnails -->
            <div v-for="(feed, index) in cameraFeeds" :key="index" class="thumbnail">
                <!-- Adjust thumbnail sizes if needed -->
                <NuxtImg :src="feed.url" @click="selected = index" class="w-32 h-24 object-cover rounded-lg border border-gray-600 hover:border-green-500 cursor-pointer hover:opacity-80" alt="Camera Feed Thumbnail" :class="{ 'border-green-500': selected === index }" />
            </div>
        </div>
        <div class="camera-feed mt-6 relative rounded-lg overflow-hidden shadow-lg border border-gray-700 bg-gray-800 w-full">
            <!-- Use Tailwind's width utility to make the image responsive and cover more width -->
            <NuxtImg :src="cameraFeeds[selected].url" alt="Camera Feed" class="w-full h-auto object-cover" />
            <div class="absolute top-0 left-0 p-3">
                <p class="text-xs bg-black bg-opacity-60 py-1 px-2 rounded">Live Feed</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const cameraFeeds = ref([
    { url: "https://media2.giphy.com/media/P9iws4imseYNg5KkhQ/giphy.gif", location: "Condesa" },
    { url: "https://theawesomedaily.com/wp-content/uploads/2013/11/robbery4.gif", location: "Polanco" },
    { url: "https://dl.topnaz.com/2012/11/Man.gif", location: "Roma Norte" },
    { url: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHNjdWJ1cWFmanpscnQ2dDk5dTg1dGZkbGh2NWJ2cjc3eHl5M3RlbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LK0IYgyryNTmo/giphy.gif", location: "Santa Fe" },
    { url: "https://s4.scoopwhoop.com/anj/Luckiest_People_On_Earth/485393053.gif", location: "Coyoacán" },
])

const selected = ref(0);
</script>
