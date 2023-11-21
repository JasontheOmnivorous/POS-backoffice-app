export interface CreateMenuCategoryPayload {
  name: string;
  isAvailable: boolean;
}

export interface MenuCategoryType extends CreateMenuCategoryPayload {
  id: number;
  isArchived: boolean;
}
