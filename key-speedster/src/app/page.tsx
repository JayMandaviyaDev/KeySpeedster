import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainComponent";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <Header/>
      </div>
      <main className="">
        <MainContent/>
      </main>
      <div className="">
       <Footer/>
      </div>
    </div>
  );
}
