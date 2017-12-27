<template>
    <div>
        <div>
            <h1>Sub1</h1>
            <strong>val: </strong><span>{{ sub1.val }}</span>
            <strong>arr: </strong><span>[{{sub1.arr.toString()}}]</span>
        </div>
        <div>
            <h1>Sub2</h1>
            <strong>val: </strong><span>{{ sub2.val }}</span>
            <strong>arr: </strong><span>[{{sub2.arr.toString()}}]</span>
        </div>
    </div>
</template>


<script>
function Super() {
    this.val = 1;
    this.arr = [1];
}
function Sub() {
    // console.log('sub');
}
Sub.prototype = new Super();

const sub1 = new Sub();
const sub2 = new Sub();
sub1.val = 2;
sub1.arr.push(2);

export default {
    data() {
        return {
            sub1,
            sub2
        };
    },
    created() {
    },
    methods: {
    },
    computed: {
    }
};
</script>
