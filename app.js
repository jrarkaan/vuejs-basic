new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'Backend Developer',
        website: 'https://www.google.com',
        websiteTag: 'https://www.google.com'
    },
    methods: {
        great: function(time){
            return `Good ${time} ${this.name}`;
        }
    }
})