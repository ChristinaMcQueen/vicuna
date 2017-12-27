import Vue from 'vue';
import Router from 'vue-router';
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import QuillEditor from '../views/QuillEditor';
import Html5Editor from '../views/Html5Editor';

Vue.use(Router);
Vue.use(VueQuillEditor, {
    modules: {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block']
        ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow' // or 'bubble'
});

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     name: 'QuillEditor',
        //     component: QuillEditor
        // },
        {
            path: '/quill',
            name: 'QuillEditor',
            component: QuillEditor
        },
        {
            path: '/html5',
            name: 'Html5Editor',
            component: Html5Editor
        }
    ]
});
