export interface FdsSearchItem {
  id?: String;
  text?: String;
}

export interface FdsSearchSelectedItem extends FdsSearchItem {
  title?: String;
}

export type FdsSearchRemovedItem = FdsSearchSelectedItem;

export interface FdsSearchPageItem {
  id?: string;
  text?: string;
  logo?: string;
}

export interface FdsSearchPageSelectedItem extends FdsSearchPageItem {
  title?: string;
}

export const FDS_GLOBAL_RECENT_SEARCH_KEY = 'fdsRecentSearch';
export const MAX_RECENT_SEARCH = 5;
export const FDS_GLOBAL_SEARCH_INPUT_CHANGED = 'onSearchInputChanged';
export const FDS_GLOBAL_SEARCH_ITEM_REMOVED = 'onFdsGlobalSearchItemRemoved';
export const FDS_GLOBAL_SEARCH_ITEM_SELECTED = 'onFdsGlobalSearchItemSelected';
export const FDS_GLOBAL_SEARCH_PAGE_SELECTED = 'onFdsGlobalSearchPageSelected';
