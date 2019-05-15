export const TOGGLE_NAVMENU = 'TOGGLE_NAVMENU';

export function toggleNavMenu(isNavToggled) {
    return {
        type: TOGGLE_NAVMENU,
        payload: isNavToggled
    };
}
