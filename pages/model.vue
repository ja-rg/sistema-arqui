<script setup>
const { scene } = await useGLTF('/models/scene.gltf')
</script>

<template>
    <TresCanvas clear-color="#82DBC5">
        <OrbitControls />
        <Suspense>
            <primitive :object="scene" />
        </Suspense>
        <TresDirectionalLight :position="[-4, 8, 4]" :intensity="1.5" cast-shadow />
    </TresCanvas>
</template> 
