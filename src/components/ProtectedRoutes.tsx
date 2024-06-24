import { ReactNode, useEffect } from "react";
import { useUserStore } from "../stores/userStore";
import { useGeneralStore } from "../stores/generalStore";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const userId = useUserStore((state) => state.id);
  const toogleLoginModal = useGeneralStore((state) => state.toogleLoginModal);

  useEffect(() => {
    if (!userId) {
      toogleLoginModal();
    }
  }, [toogleLoginModal, userId]);

  if (userId) {
    return <>{children}</>;
  }
  return <>protected</>;
};

export default ProtectedRoutes;
