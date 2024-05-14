
import Banner from "../../../Components/Banner/Banner";
import JobCategoryTabs from "../../../Components/JobCategoryTabs/JobCategoryTabs";
import OurFuturePlan from "../../../Components/OurFuturePlan/OurFuturePlan";
import Review from "../../../Components/Review/Review";


const Home = () => {

  

    return (
        <div className="py-16">
            <Banner></Banner>
            <div className="py-10">
            <JobCategoryTabs></JobCategoryTabs>
            </div>
            <div>
                <OurFuturePlan></OurFuturePlan>
            </div>
            <div className="my-16">
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;