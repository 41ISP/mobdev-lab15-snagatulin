import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { UseTovarStore, useUserStore } from "../store/store";
import { StavkiNaTovar } from "../api/api";

function DetailOfTovar()
{
  const { id } = useParams();
  const [bids, setBids] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await StavkiNaTovar(id);
      setBids(data);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <div className="price-section">
        <div className="bids-section">
          <div className="bids-header">
            <h2 className="bids-title">История ставок</h2>
          </div>

          <div className="bids-list">
            {bids.length > 0 ? (
              bids.map((bid, index) => (
                <div key={index} className="bid-item">
                  <div className="bid-user">
                    <div className="bid-details">
                      <span className="bid-username">{bid.username}</span>
                      <span className="bid-time">{bid.timeAgo}</span>
                    </div>
                  </div>
                  <div className="bid-amount">{bid.amount} ₽</div>
                </div>
              ))
            ) : (
              <p>Нет ставок</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}     
    

export default DetailOfTovar