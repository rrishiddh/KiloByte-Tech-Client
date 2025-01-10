import Banner from "./Banner";
import Faq from "./Faq";
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
            <Faq></Faq>
        </div>
    );
};

export default Home;