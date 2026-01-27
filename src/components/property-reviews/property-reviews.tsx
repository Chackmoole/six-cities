import {PropertyReviewForm} from '../property-review-form/property-review-form';
import {ReviewsItem} from '../reviews-item/reviews-item';

export const PropertyReviews = () => (
  <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
    <ul className="reviews__list">
      <ReviewsItem/>
    </ul>
    <PropertyReviewForm/>
  </section>);
