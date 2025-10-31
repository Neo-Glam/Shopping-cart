import "./Card.css"
export function Card({name,image,price,bio}){

    return(
        <div className="Card">
            <img src={image} alt="" />
            <div className="info">
                <h3>{name}</h3>
                <p>{bio}</p>
            </div>
            <p>{price}</p>
        </div>
    )
}