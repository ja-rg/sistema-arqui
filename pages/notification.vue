<template>
    <div>
        <Authentication v-if="!authenticated" @login-success="showNotifications" />
        <Notifications v-if="authenticated" />
    </div>
</template>
  
<script setup lang="ts">
const authenticated = ref(false);

function showNotifications() {
    authenticated.value = true;
}
</script>
  