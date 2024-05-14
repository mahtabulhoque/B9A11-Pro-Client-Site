

const ReviewCard = ({ image, name, review, stars }) => {
  
  
    return (
    <div className="card w-full bg-base-200 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl ">Name: {name}</h2>
        <p className="text-lg font-medium">
          <span className="font-bold text-xl">Review:</span> {review}
        </p>
        <p className="text-lg font-bold">Rating: {stars}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
