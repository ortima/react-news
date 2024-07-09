import Header from "@components/Header/Header";
import Main from "@pages/Main";

const App = () => {
  return (
    <>
      <Header />
      <div className="container h-[100vh] py-6">
        <Main />
      </div>
    </>
  );
};

export default App;
