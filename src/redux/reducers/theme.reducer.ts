import * as actionType from '../constants/theme.constants';
import { IAction } from './post.reducer';

import { Theme } from '../../hooks/useTheme';

const theme = localStorage.getItem('theme')

export const themeReducer = (state = theme || Theme.light, action: IAction) => {
    switch (action.type) {
        case actionType.THEME__TOGGLE:
            const theme = state === Theme.light ? Theme.dark : Theme.light
            localStorage.setItem('theme', theme)
            return theme;

        default:
            return state;
    }
};