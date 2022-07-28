export interface FdsSearchItem{
    icon?: String,
    svgIcon?: Boolean,
    text?: String,
    displayCloseBtn?: boolean;
}

export interface FdsSearchPageItem{
    id: string;
    name: string;
    logo: string;
}
export const FDS_GLOBAL_RECENT_SEARCH_KEY = "fdsRecentSearch";
export const MAX_RECENT_SEARCH = 5;
export const FDS_GLOBAL_SEARCH_INPUT_CHANGED = 'onSearchInputChanged';
export const FDS_GLOBAL_SEARCH_ITEM_REMOVED = 'onFdsGlobalSearchItemRemoved';
export const FDS_GLOBAL_SEARCH_ITEM_SELECTED = 'onFdsGlobalSearchItemSelected';
export const FDS_GLOBAL_SEARCH_PAGE_SELECTED = 'onFdsGlobalSearchPageSelected';
