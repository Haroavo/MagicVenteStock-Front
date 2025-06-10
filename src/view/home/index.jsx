import Header from "../../component/header";
import ProductCard from "../../component/productOfTheDay";
import LoginForm from "../../component/loginForm";
import Footer from "../../component/footer";


function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
          <Header />
          
          <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
            <ProductCard />
            <LoginForm />
          </main>
          
          <Footer />
        </div>
      );
}

export default Home;