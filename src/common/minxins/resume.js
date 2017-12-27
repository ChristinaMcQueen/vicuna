import isFunction from 'lodash/isFunction';
import indexOf from 'lodash/indexOf';
import { visibilityEvent, hidden } from '../utils/visibility';

const eventList = [];
window.$$resume = () => {
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
        const resumeFuntion = this.$options.resume;
        this.$$resumeActive = true;
        if (resumeFuntion && isFunction(resumeFuntion)) {
            this.$$resume = () => {
                if (!document[hidden] && this.$$resumeActive) {
                    resumeFuntion.call(this);
                }
            };
            window.addEventListener(visibilityEvent, this.$$resume);
            eventList.push(this.$$resume);
        }
    },
    activated() {
        this.$$resumeActive = true;
    },
    deactivated() {
        this.$$resumeActive = false;
    },
    beforeDestroy() {
        this.$$resumeActive = false;
        if (this.$$resume) {
            window.removeEventListener(visibilityEvent, this.$$resume);
            const index = indexOf(eventList, this.$$resume);
            if (index >= 0) {
                eventList.splice(index, 1);
            }
        }
    }
};
