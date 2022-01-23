import { useDispatch, useSelector } from "react-redux";

import * as actionTypes from "../redux/constants/theme.constants";

export enum Theme {
    light = 'light',
    dark = 'dark',
}

interface ITheme {
    theme: Theme,
    toggleTheme: () => void
}

const useTheme = (): ITheme => {
    const dispatch = useDispatch();
    const theme = useSelector((state: any) => state.theme)

    const toggleTheme = () => {
        dispatch({ type: actionTypes.THEME__TOGGLE })
    }

    const root = document.getElementsByTagName("html")[0];
    root.setAttribute("class", theme);

    return { theme, toggleTheme }
}

export default useTheme