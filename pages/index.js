// components
import Home from "../component/home";
import Footer from "../component/footer";
import Header from "../component/header";

export default function Index() {
  return (
    <>
      <header className="w-full h-12 bg-orange-400">
        <Header />
      </header>
      <main className="flex flex-1 flex-col w-full h-screen ">
        <Home />
      </main>
      <footer className="w-full h-12 bg-orange-400">
        <Footer />
      </footer>
    </>
  );
}
