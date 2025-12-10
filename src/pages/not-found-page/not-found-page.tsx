import {Link} from 'react-router-dom';

export const NotFoundPage = () => (
  <main style={{marginTop: '500px'}}>
    <h1 style={{textAlign: 'center'}}>Sorry, but this page was not found.</h1>
    <Link to={'/'} style={{textAlign: 'center', display: 'block', textDecoration: 'underline'}}>Return to the main page</Link>
  </main>
);
