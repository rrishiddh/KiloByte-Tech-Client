import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import RecentBlogPost from "./RecentBlogPost";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlogPost></RecentBlogPost>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;