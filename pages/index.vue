<script setup lang="ts">
const { nodes, } = await useGLTF('/models/scene.gltf')
const modelRef = ref()

watch(modelRef, model => {
    model.position.set(0, 0, 0)
})
</script>

<template>
    <Suspense>
        <TresCanvas clear-color="#82DBC5" shadows alpha power-preference="high-performance" preserve-drawing-buffer
            physically-correct-lights>
            <TresPerspectiveCamera :args="[45, 1, 0.1, 1000]" />
            <OrbitControls />
            <primitive :object="nodes.MyModel" />
        </TresCanvas>
    </Suspense>
</template>