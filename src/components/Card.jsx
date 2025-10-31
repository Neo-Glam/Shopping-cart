import "./Card.css"
export function Card({quantity,name,image,price,bio}){

    return(
        <div className="Card">
            <img src={image} alt="" />
            <div className="info">
                <h3>{name}</h3>
                <p>{price}</p>
                <p>{bio}</p>
                <p>{quantity}</p>
            </div>
        </div>
    )
}