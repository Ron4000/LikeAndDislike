import { useState } from 'react';

function ContentRating() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const handleDislike = () => {
    setDislikes((prevDislikes) => prevDislikes + 1);
  };

  return (
    <div className="content-rating">
      <p>
        Mas Bagay padin talaga ang papaya sa tinola kesa sa sayote!
      </p>

      <div className="rating-buttons">
        <button type="button" onClick={handleLike}>
          Like {likes}
        </button>
        <button type="button" onClick={handleDislike}>
          Dislike {dislikes}
        </button>
      </div>
    </div>
  );
}

export default ContentRating;
