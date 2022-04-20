new Vue({
    el: '#vue-app',
    data: {
        avalaible: false,
        nearby: false
    },
    methods: {

    },
    computed: {
        compClasses: function(){
            return {
                avalaible: this.avalaible,
                nearby: this.nearby
            }
        }
    }
})