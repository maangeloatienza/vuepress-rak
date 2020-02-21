<template>
    <div class="text-center">
        <button class="btn btn-primary">
            <a :href='"{{button.link}}"' class="text-white"> {{button.name}} </a>
        </button>
    </div>
</template>

<script>
export default {
    props : {
        button : {type: Object}
    },
    data (){
        return {

        }
    }
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>