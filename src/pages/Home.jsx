import styles from "../style";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddReceita from "../components/AddReceita";

const Home = () => (
  <div className="bg-primary w-full overflow-hidden min-h-screen flex flex-col">

    {/* =================================NavBar========================================== */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* ==============================Main Content=========================================== */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} flex-grow`}>
      <div className={`${styles.boxWidth}`}>
        <h1 className="border p-2 rounded-[10px] mb-5 flex justify-center items-center font-poppins text-[25px] font-extrabold text-gradient">INFORMAÇÃO:</h1>
        <AddReceita />
      </div>
    </div>
    
    {/* ==============================Footer=========================================== */}
    <div className="mt-auto w-full">
      <Footer />
    </div>
  </div>
);

export default Home;
