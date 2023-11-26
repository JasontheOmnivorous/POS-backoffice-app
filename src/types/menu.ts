// menu type that client sends
export interface CreateMenuPayload {
  name: string;
  price: number;
  assetUrl?: string;
}

// menu type responded from server
export interface Menu extends CreateMenuPayload {
  id: number;
  isArchived: boolean;
}

export interface InitialMenuSliceState {
  items: Menu[];
  isLoading: boolean;
  error: Error | null;
}

export interface UpdateMenuPayload {
  id: number;
  name: string;
  price: number;
}
