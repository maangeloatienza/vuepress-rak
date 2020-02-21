<template>
    <div class="container">
        <div class="row">
            <h1>Documentation</h1>
        </div>
        <div class="row">
            <div class="card docs-card col-lg-5 offset-lg-1 mt-5" v-for="product in products">
                <div class="card-body">
                    <h2>{{product.item.name}}</h2>
                        <ul class="list-unstyled">
                            <li v-for="list in product.lists">
                                <a v-bind:href="`${list.link}`">{{list.name}}</a>
                            </li>
                        </ul>
                    <a v-bind:href="`${product.showall}`" >Show all</a>
                </div>
            </div>
        </div>
        
    
    </div>
</template>

<script>
export default {
    data(){
        return {
            products : [
                {
                    item : {
                        name: 'RAK7246G LoRaWAN Developer Gateway',
                        link : ''
                    },
                    lists : [
                        {
                            name : 'Product Overview',
                            link : '/rak7246g-lorawan-developer-gateway/'
                        },
                        {
                            name : 'Product Configuration',
                            link : '/'
                        },
                        {
                            name : 'Miscellaneous',
                            link : '/'
                        }
                    ],
                    showall : 'rak7246g-lorawan-developer-gateway/'
                },
                {
                    item : {
                        name: 'RAK7249 Macro Outdoor Gateway',
                        link : ''
                    },
                    lists : [
                        {
                            name : 'Product Overview',
                            link : '/'
                        },
                        {
                            name : 'Product Configuration - Hardware',
                            link : '/'
                        },
                        {
                            name : 'Product Configuration - Software',
                            link : '/'
                        }
                    ],
                    showall : 'rak7249-macro-outdoor-gateway/'
                }
            ]
        }
    },
    methods : {

        log : function (data){
            console.log(data);
        }
    },
}
</script>

<style scoped>
    .docs-card {
        height: 265px;
    }
</style>