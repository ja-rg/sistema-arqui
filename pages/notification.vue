<template>
    <div>
        <Authenticate v-if="!authenticated" @login-success="showNotifications" />
        <NotificationReceiver v-if="authenticated" />
    </div>
</template>
  
<script setup lang="ts">
const authenticated = ref(false);

function showNotifications() {
    authenticated.value = true;
}
</script>
  