import React from 'react';
import {Spinner} from '../spinner/spinner';
import {Link} from 'react-router-dom';

interface IProps {
isLoading?: boolean;
errorMessage?: string | null;
children: JSX.Element;
error?: boolean;
}

export const StatusWrapper = ({isLoading, error, errorMessage = 'Кажется, что‑то пошло не так. Попробуйте позднее', children} : IProps) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div style={{
        padding: '16px',
        backgroundColor: '#fefefe',
        borderLeft: '4px solid #f44336',
        opacity: 0.95,
        maxWidth: '380px',
        margin: '16px auto'
      }}
      >
        <p style={{
          color: '#424242',
          marginBottom: '8px',
          fontSize: '14px'
        }}
        >
          {errorMessage || 'Произошла непредвиденная ошибка'}
        </p>
        <p style={{
          color: '#757575',
          marginBottom: '12px',
          fontSize: '13px'
        }}
        >
        Попробуйте позже или
          <Link
            to="/"
            style={{
              color: '#2196f3',
              textDecoration: 'underline',
              fontWeight: '500'
            }}
          > вернитесь на главную
          </Link>
        </p>
      </div>
    );
  }
  return children;
};
