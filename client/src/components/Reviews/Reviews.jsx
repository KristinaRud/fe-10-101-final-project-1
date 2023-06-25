import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Card, Typography } from "@mui/material";
import { fetchCommentsByProduct } from "../../store/actionCreator/comments.actionCreator";
import styles from "../../pages/SingleProduct/SingleProduct.module.scss";

const Reviews = ({ productId }) => {
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsByProduct(productId))
      .unwrap()
      .then((comments) => {
        setComments(comments);
      });
  }, [dispatch, productId]);

  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Card key={comment._id} sx={{ mt: 1, mb: 1, p: 2 }}>
            <Typography sx={{ mb: 2, fontStyle: "italic" }}>
              {comment.content}
            </Typography>
            <Typography variant="body2">
              Author: {comment.customer.firstName} {comment.customer.lastName}
            </Typography>
          </Card>
        ))
      ) : (
        <p className={styles["product-info__subtitle"]}>
          Be the first to review this product
        </p>
      )}
    </div>
  );
};

Reviews.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Reviews;
