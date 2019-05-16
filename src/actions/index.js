export const TOGGLE_NAVMENU = 'TOGGLE_NAVMENU';
export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';

export function toggleNavMenu(isNavToggled) {
    return {
        type: TOGGLE_NAVMENU,
        payload: isNavToggled
    };
}

export function toggleLoginForm(isFormToggled) {
    return {
        type: TOGGLE_LOGIN_FORM,
        payload: isFormToggled
    }
}
