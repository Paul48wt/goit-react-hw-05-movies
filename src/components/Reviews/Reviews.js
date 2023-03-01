import { fetchMovieReviews } from 'components/api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    async function getReview() {
      try {
        const response = await fetchMovieReviews(id);
        setReview(response.results);
      } catch (error) {}
    }
    getReview();
  }, [id]);
  if (review.length === 0) {
    return <p>Empty</p>;
  } else {
    return (
      <ul>
        {review.map(item => (
          <li key={item.id}>
            <p>Author: {item.author}.</p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    );
  }
};
