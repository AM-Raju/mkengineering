import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function HomeLayout({ children }) {
  return (
    <div>
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </div>
  );
}
