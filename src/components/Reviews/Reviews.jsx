import PropTypes from 'prop-types';
export const Reviews = ({ articles }) => {
  return (
    <ul>
      {articles.lenght > 0 ? (
        articles.map(({ author, content, id }) => (
          <li key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};

Reviews.propTypes = {
  articles: PropTypes.array.isRequired,
};
