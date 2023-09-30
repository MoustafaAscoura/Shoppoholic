import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fullStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

export default function Stars (props) {
    let {rating} = props
/*
    return (<>{Array(5).map(()=>{
        if (rating >= 1) {
            rating -= 1
            return stars.push(<FontAwesomeIcon icon={fullStar} />)
        } else if ( 0 < rating ) {
            rating = 0
            return stars.push(<FontAwesomeIcon icon={faStarHalfStroke} />)
        } else {
            return stars.push(<FontAwesomeIcon icon={emptyStar} />)
        }        
    })}</>)
*/
    const stars = []
    for (let x=0; x < 5; x++){
        if (rating >= 1) {
            stars.push(<FontAwesomeIcon icon={fullStar} key={x}/>)
            rating -= 1
        } else if ( 0 < rating ) {
            stars.push(<FontAwesomeIcon icon={faStarHalfStroke} key={x}/>)
            rating = 0
        } else {
            stars.push(<FontAwesomeIcon icon={emptyStar} key={x}/>)
        }
    }

    return <div className="rating">{stars}</div>
}
