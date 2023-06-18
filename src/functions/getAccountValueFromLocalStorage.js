
export function getAccountValueFromLocalStorage() {
    const accountValue = window.localStorage.getItem('account');
    return accountValue ? parseInt(accountValue) : null;
}