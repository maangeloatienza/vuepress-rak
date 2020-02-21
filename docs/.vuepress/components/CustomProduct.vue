<template>
    <div class="container">
        <div class="mt-3 mb-3">
            <div v-if="!Array.isArray(product.image)" class="text-center">
                <img 
                    v-bind:src="`${product.image.link}`"
                    v-bind:alt="`${product.image.meta}`"
                    class="img-fluid img-thumbnail">
                <p class=""> <b>Figure 1:</b> {{product.image.caption}}</p>
            </div>

            <div v-if="Array.isArray(product.image)" class="text-center">
                <div v-for="image in product.image">            
                    <img 
                        v-bind:src="`${image.link}`"
                        v-bind:alt="`${image.meta}`"
                        class="img-fluid img-thumbnail">
                </div>
                <p class=""> <b>Figure 2:</b> {{product.caption}}</p>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    props : {
        product : {type: Object}
    },
    data (){
        return {

        }
    }
}
</script>

<style scoped>

</style>