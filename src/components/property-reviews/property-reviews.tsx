import {PropertyReviewForm} from '../property-review-form/property-review-form';
import {ReviewsItem} from '../reviews-item/reviews-item';
import {IReview} from '../../types/types';

interface IProps {
  reviews: IReview[];
}

export const PropertyReviews = ({reviews}:IProps) => (
  <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      <ReviewsItem reviews={reviews}/>
    </ul>
    <PropertyReviewForm/>
  </section>);

