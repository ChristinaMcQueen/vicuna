export function getBrowserPrefix() {
    if ('hidden' in document) {
        return null;
    }
    const browserPrefixes = ['moz', 'ms', 'o', 'webkit'];
    for (let i = 0; i < browserPrefixes.length; i++) {
        const prefix = `${browserPrefixes[i]}Hidden`;
        if (prefix in document) {
            return browserPrefixes[i];
        }
    }
    return null;
}
export function hiddenProperty(prefix) {
    if (prefix) {
        return `${prefix}Hidden`;
    }
    return 'hidden';
}
export function getVisibilityState(prefix) {
    if (prefix) {
        return `${prefix}VisibilityState`;
    }
    return 'visibilityState';
}
export function getVisibilityEvent(prefix) {
    return `${prefix || ''}visibilitychange`;
}

export const prefix = getBrowserPrefix();
export const hidden = hiddenProperty(prefix);
export const visibilityState = getVisibilityState(prefix);
export const visibilityEvent = getVisibilityEvent(prefix);
