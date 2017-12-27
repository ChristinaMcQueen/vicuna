<template>
    <div id="counter">{{calculate}}</div>
</template>

<script>
export default {
    props: ['text'],
    components: {
    },
    data() {
        return {
            textLength: 0
        };
    },
    created() {
        // console.log(this.text);
    },
    methods: {
    },
    computed: {
        calculate() {
            return this.text.length;
        }
    }
};
</script>

<style>
</style>
