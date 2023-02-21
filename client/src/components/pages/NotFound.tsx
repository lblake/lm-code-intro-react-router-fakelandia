import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className='notfound'>
                <h1>Oops! You seem to be lost.</h1>
                <p>Here are some helpful links:</p>
                <Link to='/'>Home</Link>
                <Link to='/misdemeanours'>Misdemeanours</Link>
                <Link to='/confession'>Confession'</Link>
            
  </div>
);

export default NotFound;
