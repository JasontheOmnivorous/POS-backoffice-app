export interface CreateMenuCategoryPayload {
  name: string;
  isAvailable: boolean;
}

export interface MenuCategoryType extends CreateMenuCategoryPayload {
  id: number;
  isArchived: boolean;
}

export interface InitialMenuCategorySliceState {
  items: MenuCategoryType[];
  isLoading: boolean;
  error: Error | null;
}
