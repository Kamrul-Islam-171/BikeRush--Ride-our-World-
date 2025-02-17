import Banner from "./homeComponent/Banner";
import FeaturedProducts from "./homeComponent/FeaturedProducts";


const HomeContent = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <FeaturedProducts></FeaturedProducts>
            </div>
        </div>
    );
};

export default HomeContent;