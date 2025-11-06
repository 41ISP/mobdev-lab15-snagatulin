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
                <span className="item-status">Активно</span>
                
                <h1 className="item-title-large">Ноутбук Dell XPS 15</h1>
                
                <div className="item-seller-info">
                    <div className="seller-avatar">TS</div>
                    <div className="seller-details">
                        <div className="seller-name">techseller</div>
                        <div className="seller-date">Опубликовано: 15 октября 2025</div>
                    </div>
                </div>

                <div className="item-description-full">
                    Мощный ноутбук для работы и игр в отличном состоянии. 
                    
                    <p></p>
                    <strong>Характеристики:</strong>
                    <ul>
                        <li>Процессор: Intel Core i7-12700H (12 ядер)</li>
                        <li>Оперативная память: 16GB DDR5</li>
                        <li>Видеокарта: NVIDIA GeForce RTX 3050 (4GB)</li>
                        <li>Накопитель: 512GB NVMe SSD</li>
                        <li>Дисплей: 15.6" FHD (1920x1080), 144Hz</li>
                        <li>Операционная система: Windows 11 Pro</li>
                    </ul>
                    
                    Ноутбук используется около года, в идеальном состоянии. Все аксессуары в комплекте: зарядное устройство, коробка, документы. 
                    Гарантия действует еще 1 год.
                </div>

                <div className="price-section">
                    <div className="starting-price">Начальная цена:</div>
                    <div className="current-price">65 000 ₽</div>
                    <div className="highest-bid">Текущая ставка: 70 000 ₽</div>

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
                 <button className="btn-delete">Удалить товар</button>
            </div>
        </div>

        <div className="bids-section">
            <div className="bids-header">
                <h2 className="bids-title">История ставок</h2>
                <span className="bids-count">5</span>
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