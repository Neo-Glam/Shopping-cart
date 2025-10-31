import "./Card.css"
export function Card({name,image,price,bio}){

    return(
        <div className="Card">
            <img src={image} alt="" />
            <div className="info">
                <h3>{name}</h3>
                <h4>{price}</h4>
                <h5>{bio}</h5>
            </div>
        </div>
    )
}