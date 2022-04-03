new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        add: function(ageParams){
            this.age += ageParams;
        },
        substract: function(ageParams){
            this.age -= ageParams;
        },
        updateXY: function(event){
            const { offsetX, offsetY } = event;
            this.x = offsetX;
            this.y = offsetY;
        }
    }
})