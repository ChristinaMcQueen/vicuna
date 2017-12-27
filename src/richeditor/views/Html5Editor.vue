<template>
    <div class="wrap">
        <h1>Html5 Editor</h1>
        <editor id="editor" class="editor-warp" :content="content" @change="updateData"></editor>
        <counter :text="text"></counter>
    </div>
</template>

<script>
import VueHtml5Editor from 'vue-html5-editor';
// import logo from '../assets/logo.png';
import Counter from '../components/Counter';
import data from '../assets/data';

const opts = {
    showModuleName: false,
    icons: {
        // text: 'fa fa-pencil',
        // color: 'fa fa-paint-brush',
        // font: 'fa fa-font',
        align: 'fa fa-align-justify',
        // list: 'fa fa-list',
        // link: 'fa fa-chain',
        // unlink: 'fa fa-chain-broken',
        // tabulation: 'fa fa-table',
        image: 'fa fa-file-image-o'
        // hr: 'fa fa-minus',
        // eraser: 'fa fa-eraser',
        // undo: 'fa-undo fa',
        // 'full-screen': 'fa fa-arrows-alt',
        // info: 'fa fa-info'
    },
    image: {
        // sizeLimit: 512 * 1024,
        upload: {
            url: null,
            headers: {},
            params: {},
            fieldName: {}
        },
        compress: {
            // width: 1400,
            // height: 100
            // quality: 80
        },
        uploadHandler(responseText) {
            const json = JSON.parse(responseText);
            if (!json.ok) {
                console.error(json.msg);
            }
            return json.data;
        }
    },
    language: 'zh-cn',
    hiddenModules: [
        'text',
        'color',
        'font',
        'list',
        'link',
        'unlink',
        'tabulation',
        'hr',
        'eraser',
        'undo',
        'full-screen',
        'info'
    ],
    visibleModules: [
        'align',
        'image'
    ],
    modules: {
        // omit,reference to source code of build-in modules
    }
};

const Editor = new VueHtml5Editor(opts);

export default {
    components: {
        Editor,
        Counter
    },
    data() {
        return {
            content: data.replace('<img', '<img width="100%"').replace(/width:\s*\d+(.\d+)?px(;)?/g, '').replace(/white-space: normal;/g, '').replace(/<\/?section>/g, ''),
            text: data.replace(/<[^>]+>/g, '')
        };
    },
    created() {
    },
    methods: {
        updateData(updateContent) {
            // sync content to component
            console.log(updateContent);
            this.content = updateContent.replace('<img', '<img width="100%"');
        }
    },
    computed: {
    }
};
</script>

<style lang="less" ref="stylesheet/less">
.editor-warp {
    height: 100%;
    overflow-y: scroll;
}
.fa-align-justify {
    background-image: url('../assets/logo.png');
    background-size: 16px;
}
.fa-file-image-o {
    background-image: url('../assets/logo.png');
    background-size: 16px;
}
</style>
