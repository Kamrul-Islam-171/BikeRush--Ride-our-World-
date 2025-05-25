import Banner from "./homeComponent/Banner";
import ExtraSection from "./homeComponent/ExtraSection";
import FeaturedProducts from "./homeComponent/FeaturedProducts";
import OfferedProducts from "./homeComponent/OfferedProducts";
import ShopByCategory from "./homeComponent/ShopByCategory";


const HomeContent = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <FeaturedProducts></FeaturedProducts>
            </div>
            <div>
                <ShopByCategory></ShopByCategory>
            </div>
            <div>
                <OfferedProducts></OfferedProducts>
            </div>
            <div>
                <ExtraSection></ExtraSection>
            </div>
        </div>
    );
};

export default HomeContent;