import ReviewCard from "../ReviewCard/ReviewCard";
import pic from '../../../public/alljob.jpg';

const reviews = [
  {
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Freak",
    review: "Regular updates on new job openings kept me motivated and engaged. Thank you for helping me secure my next career move.",
    stars: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1522198684868-88edd8463fc9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jane Smith",
    review: "Responsive customer support team addressed my queries promptly. Great experience overall!",
    stars: 4,
  },
  {
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Alice Johnson",
    review: "Personalized job recommendations tailored to my preferences. Saved me hours of scrolling through irrelevant listings.",
    stars: 3.5,
  },
  {
    image: "https://images.unsplash.com/photo-1618568949779-895d81686151?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael Brown",
    review: "Informative resources and expert tips helped me craft a standout resume. Landed multiple interviews within weeks",
    stars: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1552960366-b330a2f83823?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily Davis",
    review: "Wide range of job listings catering to diverse skill sets. Seamless application process. Highly recommended!",
    stars: 5,
  },
  {
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Chris Wilson",
    review: "Efficient and user-friendly interface makes job searching a breeze. Found my dream job within days",
    stars: 4,
  },
];

const Review = () => {
  return (
    <div
      className="bg-gray-100 py-10 rounded-lg"
      style={{
        backgroundImage: `url('${pic}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '5px',
      }}
    >
      <h2 className="text-[30px] lg:text-[50px] font-extrabold text-center text-lime-500 py-10">
        Customer Reviews
      </h2>
      <div className="grid lg:grid-cols-4 gap-4 p-4">
        {reviews.map((review, index) => (
            <ReviewCard
             key={index}
              image={review.image}
              name={review.name}
              review={review.review}
              stars={review.stars}
            />
        ))}
      </div>
    </div>
  );
};

export default Review;
