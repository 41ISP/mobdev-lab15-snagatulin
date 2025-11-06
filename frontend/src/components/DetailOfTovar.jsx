import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { UseTovarStore, useUserStore } from "../store/store";

function DetailOfTovar()
{
const {jwt} = useUserStore();
const { id } = useParams();
const { tovar } = UseTovarStore();



    return(
    <>
    <div className="item-detail">
    <Link to="/" className="back-link">← Вернуться к списку товаров</Link>
        <div className="item-header">
            <div>
                <img src="https://i.pinimg.com/originals/b0/e6/f8/b0e6f896f56e6acc7bbd3de6846854fe.png" alt="Ноутбук Dell XPS 15" className="item-image-large"/>
            </div>
            <div className="item-info">
                <span className="item-status">status</span>
                
                <h1 className="item-title-large">title</h1>
                
                <div className="item-seller-info">
                    <div className="seller-details">
                        <div className="seller-name">username</div>
                        <div className="seller-date"> createdat </div>
                    </div>
                </div>

                <div className="item-description-full">description</div>

                <div className="price-section">
                    <div className="starting-price">Начальная цена:</div>
                    <div className="current-price">price</div>
                    <div className="highest-bid">Текущая ставка: highestBid</div>

         {jwt ? (
                    <form className="bid-form">
                        <input 
                            type="number" 
                            className="bid-input" 
                            placeholder="Введите вашу ставку (мин. 70 001 ₽)"
                            min="70001"
                            step="100"
                        />
                        <button type="submit" className="btn-bid">Сделать ставку</button>
                    </form>
                     ) : ( <></> )}
                </div>
                  {/* Навигация для владельца товара */}
                 {jwt ? ( <button className="btn-delete">Удалить товар</button> ) : ( <></> )}
            </div>
        </div>

        <div className="bids-section">
            <div className="bids-header">
                <h2 className="bids-title">История ставок</h2>
                <span className="bids-count">bidCount</span>
            </div>

            <div className="bids-list">
                <div className="bid-item highest-bid-item">
                    <div className="bid-user">
                        <div className="bid-avatar">BB</div>
                        <div className="bid-details">
                            <span className="bid-username">buyer_best</span>
                            <span className="bid-time">2 часа назад</span>
                        </div>
                        <span className="highest-badge">🏆 Лидирует</span>
                    </div>
                    <div className="bid-amount">70 000 ₽</div>
                </div>
                </div>
                </div>
                </div>
        </>
    )
}

export default DetailOfTovar