type currentPageType =
  | "todos"
  | "add_todo"
  | "update_password"
  | "update_profile"
  | null;
type currentPageInitialState = {
  current_page: currentPageType;
};

export type { currentPageType, currentPageInitialState };
