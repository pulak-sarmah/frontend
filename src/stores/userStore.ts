import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../gql/graphql";

interface UserState {
  id: number | undefined;
  avatarUrl: string | null;
  fullname: string;
  email?: string;
  updateProfileImage: (image: string) => void;
  updateUsername: (name: string) => void;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      id: undefined,
      avatarUrl: null,
      fullname: "",
      email: "",

      updateProfileImage: (image: string) =>
        set((state) => ({ ...state, avatarUrl: image })),
      updateUsername: (name: string) =>
        set((state) => ({ ...state, fullname: name })),

      setUser: (user: User) =>
        set({
          id: user.id || undefined,
          avatarUrl: user.avatarUrl,
          fullname: user.fullName,
          email: user.email,
        }),
    }),
    {
      name: "user-store",
    }
  )
);
