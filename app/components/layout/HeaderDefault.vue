<script setup lang="ts">
import logo from "@/assets/images/Logo.svg"
</script>

<template>
    <header class="header">
        <NuxtImg src="~/assets/images/Logo.png" />
        <img src="~/assets/images/logo.png"/>

    </header>
</template>

<style scoped lang="scss">

.header {
    color: var(--color-secondary);
    background-color: var(--color-primary);
    height: 98px;
}
</style>