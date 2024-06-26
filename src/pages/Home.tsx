import AuthOverlay from "../components/AuthOverlay";
import Sidebar from "../components/Sidebar";
import MainLayout from "../layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <>
        <AuthOverlay />
        <Sidebar />
      </>
    </MainLayout>
  );
};

export default Home;
