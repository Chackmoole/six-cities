import {IReview} from '../../types/types';
import {conversionDate} from '../../util/util';

interface IProps {
  reviews: IReview[];
}


export const ReviewsItem = ({reviews}:IProps) => (
  <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={reviews[0].user.avatarUrl} width="54" height="54" alt={reviews[0].user.name}/>
      </div>
      <span className="reviews__user-name">
        {reviews[0].user.name}
      </span>
      {reviews[0].user.isPro ? <span style={{fontSize: '12px', lineHeight: '1.167', color: '#696969'}}>Pro</span> : null}
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `${reviews[0].rating * 20}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {reviews[0].comment}
      </p>
      <time className="reviews__time" dateTime={reviews[0].date}>{conversionDate(reviews[0].date)}</time>
    </div>
  </li>
);

