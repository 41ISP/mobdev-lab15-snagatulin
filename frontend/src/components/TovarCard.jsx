import { Link, useNavigate, useParams } from "react-router-dom"
import { UseTovarStore, useUserStore } from "../store/store";
import { useEffect } from "react";
import { StavkiNaTovar } from "../api/api";

function TovarCard({title, description, price, username, status, imageUrl, createdAt, highestBid, bidCount}) {
const { id } = useParams();
const navigate = useNavigate();

    return(
     <div className="item-card">
            <img src={imageUrl} className="item-image" alt={title}/>
            <div className="item-content">
                <span className="status-badge status-active">{status}</span>
                <h3 className="item-title">{title}</h3>
                <p className="item-description">{description}</p>
                <div className="item-footer">
                    <div>
                        <div className="item-price">{price} рублей </div>
                        <div className="bid-info">
                            Текущая ставка:{highestBid}
                            <span className="bid-count">{bidCount}</span>
                        </div>
                    </div>
                    <div className="item-meta">
                        <span className="item-seller">Продавец: {username}</span>                
                    </div>
                </div>
            </div>
            <Link to="/createbid">Сделать ставку</Link>
            <Link to="/detailsoftovar" onClick={() => navigate(`/detailsoftovar/${id}`)}>История ставок</Link>
        </div>
    )
}

export default TovarCard