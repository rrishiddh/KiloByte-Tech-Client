import Banner from "./Banner";
import MostPopular from "./MostPopular";
import NewsLetter from "./NewsLetter";
import RecentBlogPost from "./RecentBlogPost";
import TrustedContact from "./TrustedContact";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlogPost></RecentBlogPost>
            <MostPopular></MostPopular>
            <TrustedContact></TrustedContact>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;