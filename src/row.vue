<template>
    <div class="g-row">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "GuluRow"
}
</script>

<style lang="scss" scoped>
.g-row{
    display: flex;
}
</style>
