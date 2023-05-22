import Banner from "../../../component/Banner/Banner";
import Gallery from "../../../component/gallery/Gallery";
import Review from "../../../component/reviews/Review";
import Category from "../../../component/sub-category/Category";
import Video from "../../../component/video/Video";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <Category/>
            <Video/>
            <Review/>
        </div>
    );
};

export default Home;