export const calculateAverageRating = (comments) => {
  if (comments.length === 0) {
    return 0;
  }

  const totalRating = comments.reduce((sum, comment) => {
    return sum + comment.rating;
  }, 0);

  const averageRating = totalRating / comments.length;

  return averageRating;
};
