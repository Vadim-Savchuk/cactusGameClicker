
export function saveAccountValueToLocalStorage(value) {
    window.localStorage.setItem('account', value.toString());
}