import {IReview} from '../../types/types';
import {conversionDate} from '../../util/util';

interface IProps {
  review: IReview;
}


export const ReviewsItem = ({review}:IProps) => (
  <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt={review.user.name}/>
      </div>
      <span className="reviews__user-name">
        {review.user.name}
      </span>
      {review.user.isPro ? <span style={{fontSize: '12px', lineHeight: '1.167', color: '#696969'}}>Pro</span> : null}
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `${review.rating * 20}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {review.comment}
      </p>
      <time className="reviews__time" dateTime={review.date}>{conversionDate(review.date)}</time>
    </div>
  </li>
);

