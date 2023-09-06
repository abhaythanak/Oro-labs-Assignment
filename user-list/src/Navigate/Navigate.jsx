import {Link} from 'react-router-dom'
import './Navigate.css';
export default function Navigate() {
    return(
        <div className="Navigate-container">
            <nav>
            <Link to='/userlist' ><button className='NavigateUserList'>User-List</button></Link>
            <Link to='/anagram' ><button className='NavigateAnagram'>Anagram Checker</button></Link>
        </nav>
        </div>
        
    )
};
