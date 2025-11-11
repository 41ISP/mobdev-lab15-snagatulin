import { useEffect, useState } from "react";
import { GetMyStavki } from "../api/api";

function MyBids()
{
  const [bids, setBids] = useState([]);


  const leadingBidsCount = bids.filter(bid => bid.isWinning).length;
  const totalSum = bids.reduce((sum, bid) => sum + bid.amount, 0);
  const formatRUB = (amount) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(amount);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetMyStavki(); 
        setBids(data);
        console.log(data);
    };
    fetchData();
  }, []);


  return( 
    <>
        <div className="page-header">
        <h1>Мои ставки</h1>
        <p className="page-subtitle">История ваших ставок на товары</p>
    </div>

    <div className="bids-summary">
        <div className="summary-card">
            <span className="summary-value">{bids.length}</span>
            <span className="summary-label">Всего ставок</span>
        </div>
        <div className="summary-card winning">
            <span className="summary-value">{leadingBidsCount}</span>
            <span className="summary-label">Лидирующих ставок</span>
        </div>
        <div className="summary-card">
            <span className="summary-value">{formatRUB(totalSum)}</span>
            <span className="summary-label">Общая сумма</span>
        </div>
    </div>

    <div className="bids-list">
        {bids.map((bid, index) => (
          <div key={index} className={`bid-item ${bid.isWinning ? 'winning' : ''}`}>
            <img
              alt={bid.itemTitle}
              className="bid-item-image"
            />
            <div className="bid-item-content">
              <div className="bid-item-header">
                <a href={bid.link} className="bid-item-title">{bid.itemTitle}</a>
                {bid.isWinning && <span className="winning-badge">🏆 Лидирую</span>}
              </div>
              <div className="bid-item-meta">
                <span>⏰ {bid.createdAt}</span>
              </div>
            </div>
            <div className="bid-item-amount">
              <span className="bid-amount">{bid.amount}</span>
              <span className="bid-status">Моя ставка</span>
            </div>
          </div>
        ))}
      </div>
    </>
  ) 
}

export default MyBids