
import Banner from "../../../Components/Banner/Banner";
import JobCategoryTabs from "../../../Components/JobCategoryTabs/JobCategoryTabs";
import OurFuturePlan from "../../../Components/OurFuturePlan/OurFuturePlan";


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
        </div>
    );
};

export default Home;