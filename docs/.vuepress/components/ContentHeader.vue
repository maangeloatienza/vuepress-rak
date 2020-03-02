<template>
    <div class="container">
        <div>
            <Content slot-key="content-header"></Content>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        header : { type : String} 
    },
    data(){
        return {

        }
    }
}
</script>