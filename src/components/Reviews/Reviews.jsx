import PropTypes from 'prop-types';
import { ArticlesList, Article } from './Reviews.styled';
export const Reviews = ({ articles }) => {
  return (
    <ArticlesList>
      {articles.length > 0 ? (
        articles.map(({ author, content, id }) => (
          <li key={id}>
            <h4>{author}</h4>
            <Article>{content}</Article>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ArticlesList>
  );
};

Reviews.propTypes = {
  articles: PropTypes.array.isRequired,
};
