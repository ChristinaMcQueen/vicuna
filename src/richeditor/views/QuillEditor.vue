<template>
    <div class="wrap">
        <h1>Quill Editor</h1>
        <quill-editor :content="content"
                        ref="quillEditor"
                        :options="option"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)"
                        @change="onEditorChange($event)"
                        class="editor">
        </quill-editor>
        <toolbar></toolbar>
        <counter :text="text"></counter>
    </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor';
import Counter from '../components/Counter';
import Toolbar from '../components/Toolbar';
import logo from '../assets/logo.png';
import data from '../assets/data';

const toolbarOptions = [
    ['bold'],
    [{ header: 1 }, { header: 2 }],
    [{ align: [] }],
    [{ image: logo }]
];

export default {
    name: 'TextEditor',
    components: {
        quillEditor,
        Counter,
        Toolbar
    },
    data() {
        return {
            content: data,
            editorOption: {
                modules: {
                    toolbar: '#toolbar'
                }
            },
            option: {
                modules: {
                    toolbar: toolbarOptions
                }
            },
            text: data.replace(/<[^>]+>/g, '')
        };
    },
    methods: {
        onEditorBlur(quill) {
            console.log('editor blur!', quill);
        },
        onEditorFocus(quill) {
            console.log('editor focus!', quill);
        },
        onEditorReady(quill) {
            this.content = data;
            this.text = quill.container.textContent;
            console.log('editor ready!', quill);
        },
        onEditorChange({ quill, html, text }) {
            console.log('editor change!', quill, html, text);
            this.text = text;
        }
    },
    computed: {
        editor() {
            return this.$refs.quillEditor.quill;
        }
    }
};
</script>

<style>
</style>
