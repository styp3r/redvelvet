import React, {useState} from 'react';
import ReviewsList from './ReviewsList';
import ReviewArt from '../images/Decoration/reviewArt.jpg';
import Avatar from '../images/Decoration/avatar.png';
import LazyLoad from 'react-lazy-load';

function Reviews() {
    
    const [rev, setRev] = useState(0);

    function dispRev(r){
        if(r.id === rev){
            return (r.content);
        }
    }

    function dispRevName(rn){
        if(rn.id === rev){
            return (rn.name);
        }
    }

    function handleClick(){
        //add animation when showing next review
        if(rev === 6){
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
                    <div className = "revTitleBlock">
                        <h3 className = "reviewsTitle">Testimonials</h3>
                        <h1>This is what Our Customers Say</h1>
                    </div>
                    <div className = "reviewBox">
                        <div className = "reviewText">
                            <div className = "revImg">
                                <img alt = "loading..." className = "avatarImg" src = {Avatar}/>
                            </div>
                            <h3>{ReviewsList.map(dispRevName)}</h3>
                            <p  className = "colorGrey">{ReviewsList.map(dispRev)}</p>
                        </div>
                        <button className = "revNextBtn" onClick={handleClick}>
                            <div className = "alArrowDiv">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="revRight">
                    <LazyLoad><img alt = "loading..." className = "reviewArtRight" src = {ReviewArt} /></LazyLoad>
                </div>
            </div>
        </div>
    );
}

export default Reviews;