import './Card.css';
import image from './images/image.png'
import wed from './images/wedding-photography.png'
import bike from './images/mountain-bike.png'
import star from './images/Star 1.png'


function Card (props) {
    let badgeText 
    if(props.item.openSpot === 0){
        badgeText = "SOLD OUT"
    }
    else if (props.item.location === "Online"){
        badgeText = "Online"
    }
    return (
        <div className="card">
           { badgeText && <div className='card--badge'>{badgeText}</div>}
            <div className='card--entity'>
                <img src ={props.item.coverImg} className='card--img'/>
                <div className='card--span'>
                <img src={star} className='card--star'/>
                <span> {props.item.stats.rating}</span>
                <span className='spn'>({props.item.stats.reviewCount}).{props.item.location}</span>
                </div>
                <p>{props.item.title}</p>
                <p> <span className='bold'>From ${props.item.price}</span>/ person</p>
            </div>

        </div>
    )
}

export default Card