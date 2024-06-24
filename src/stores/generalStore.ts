import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GeneralState {
  isProfileSettingsModalOPen: boolean;
  isLoginModalOpen: boolean;
  isCreateRoomModalOpen: boolean;

  toogleProfileSettingsModal: () => void;
  toogleLoginModal: () => void;
  toogleCreateRoomModal: () => void;
}

export const useGeneralStore = create<GeneralState>()(
  persist(
    (set) => ({
      isProfileSettingsModalOPen: false,
      isLoginModalOpen: false,
      isCreateRoomModalOpen: false,

      toogleProfileSettingsModal: () =>
        set((state) => ({
          ...state,
          isProfileSettingsModalOPen: !state.isProfileSettingsModalOPen,
        })),
      toogleLoginModal: () =>
        set((state) => ({
          ...state,
          isLoginModalOpen: !state.isLoginModalOpen,
        })),
      toogleCreateRoomModal: () =>
        set((state) => ({
          ...state,
          isCreateRoomModalOpen: !state.isCreateRoomModalOpen,
        })),
    }),
    {
      name: "general-storage",
    }
  )
);
