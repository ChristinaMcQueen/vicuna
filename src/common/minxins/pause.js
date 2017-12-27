import isFunction from 'lodash/isFunction';
import indexOf from 'lodash/indexOf';
import { visibilityEvent, hidden } from '../utils/visibility';

const eventList = [];
window.$$pause = () => {
    eventList.forEach((func) => {
        setTimeout(() => {
            if (func && isFunction(func)) {
                func();
            }
        }, 0);
    });
};

export default {
    created() {
        const pauseFuntion = this.$options.pause;
        this.$$pauseActive = true;
        if (pauseFuntion && isFunction(pauseFuntion)) {
            this.$$pause = () => {
                if (document[hidden] && this.$$pauseActive) {
                    pauseFuntion.call(this);
                }
            };
            window.addEventListener(visibilityEvent, this.$$pause);
            eventList.push(this.$$pause);
        }
    },
    activated() {
        this.$$pauseActive = true;
    },
    deactivated() {
        this.$$pauseActive = false;
    },
    beforeDestroy() {
        if (this.$$pause) {
            this.$$pauseActive = false;
            window.removeEventListener(visibilityEvent, this.$$pause);
            const index = indexOf(eventList, this.$$pause);
            if (index >= 0) {
                eventList.splice(index, 1);
            }
        }
    }
};
