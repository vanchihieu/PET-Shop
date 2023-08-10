import React, { useContext, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";

const DogsCard = (props) => {
    const { id, name, description, breed, price, imageUrl } = props;
    const { addToCart, setTotal } = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(false);
    const handleClick = () => {
        setIsAdded(true);
        const newItems = {
            name: name,
            price: price,
            imageUrl: imageUrl,
        };
        addToCart((item) => [...item, newItems]);
        setTotal((total) => (total += Number(price)));
    };
    return (
        <>
            <section className="dogs">
                <div className="dogs-info">
                    <p>{name}</p>
                    <p>{breed}</p>
                </div>
                <div className="dogs-img-container">
                    <img src={imageUrl} alt={"dogs"} className="dog-img" />
                </div>
                <div className="dogs-desc">{description}</div>
                <div className="dogs-price">{price}$</div>
                {isAdded ? (
                    <button disabled className="dogs-btn-disabled">
                        ADDED
                    </button>
                ) : (
                    <button className="dogs-btn" onClick={handleClick}>
                        ADD TO CART
                    </button>
                )}
            </section>
        </>
    );
};

export default DogsCard;
