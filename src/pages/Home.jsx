import Categories from "../components/Categories";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";

function Home() {
    return (
        <>
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
        </>
    )
}

export default Home 