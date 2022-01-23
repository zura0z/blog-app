import { useHistory as routerHistory, useParams, useLocation } from 'react-router-dom'

export enum Action {
    add = 'add',
    edit = 'edit'
}

interface IUseHistory {
    navigate: (location: string) => void,
    params: { id?: number, action?: Action };
    search: string | null
}

const useHistory = (): IUseHistory => {
    const history = routerHistory();
    const params = useParams();
    const { search: routerSearch } = useLocation();

    const search = new URLSearchParams(routerSearch);

    return { navigate: history.push, params, search: search.get('search') }
}

export default useHistory;