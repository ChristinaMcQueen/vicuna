import Vue from 'vue';
import Router from 'vue-router';
import ProtoInherit from '../views/ProtoInherit';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/proto',
            name: 'ProtoInherit',
            component: ProtoInherit
        }
    ]
});
