import Banner from "../../../Components/Banner/Banner";
import JobCategoryTabs from "../../../Components/JobCategoryTabs/JobCategoryTabs";


const Home = () => {
    return (
        <div className="py-16">
            <Banner></Banner>
            <div className="py-10">
            <JobCategoryTabs></JobCategoryTabs>
            </div>
        </div>
    );
};

export default Home;