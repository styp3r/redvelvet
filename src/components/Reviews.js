import React, {useState} from 'react';
import ReviewsList from './ReviewsList';

function Reviews() {
    
    const [rev, setRev] = useState(0);

    function dispRev(r){
        if(r.id === rev){
            return (r.content);
        }
    }

    function handleClick(){
        if(rev === 3){
            setRev(0);
        }
        else{
            setRev(rev + 1);
        }
    }

    return (
        <div id="reviews">
            <div className="reviewsBlocks">
                <div className="revLeft">
                    <h1>This is what Our Customers Say</h1>
                    <div className = "reviewBox">
                        <h3>Name</h3>
                        <p>{ReviewsList.map(dispRev)}</p>
                        <button onClick={handleClick}>Next</button>
                    </div>
                </div>
                <div className="revRight"></div>
            </div>
        </div>
    );
}

export default Reviews;