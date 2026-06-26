import { ReviewsItem } from '../reviews-item/reviews-item';
import {IAuthorizationStatus, IReview} from '../../types/types';
import {PropertyReviewForm} from '../property-review-form/property-review-form';

interface IProps {
  reviews: IReview[];
  authorizationStatus: IAuthorizationStatus;
}

export const PropertyReviews = ({ reviews, authorizationStatus }: IProps) => (
  <section className="property__reviews reviews">
    <h2 className="reviews__title">
      Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
    </h2>
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </ul>
    { authorizationStatus === 'auth' ? <PropertyReviewForm /> : null }
  </section>
);
