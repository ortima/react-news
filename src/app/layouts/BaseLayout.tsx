import Main from "@/pages/main/ui/Page";
import { Header } from "@/widgets/header/ui";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <div className="container h-[100vh] py-6">
        <Main />
      </div>
    </>
  );
};

export default BaseLayout;
