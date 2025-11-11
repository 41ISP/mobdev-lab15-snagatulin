import { useState } from "react";
import Input1 from "./Input1"
import { useUserStore } from "../store/store";
import { useNavigate, useParams } from "react-router-dom";
import { CreateStavka } from "../api/api";

function CreateBid() {
  const { id } = useParams();
  const [error, setError] = useState("");
  const { setJWT } = useUserStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const bid = {
      amount: e.target.amount.value,
    };

    try {
      const json = await CreateStavka(bid, id); 
      if (!json.success) throw new Error(json.error)
      setJWT(json.token)
      navigate("/");
    } catch (err) {
     navigate("/");
      console.error(err);
      setError(err.message);
    }
  };


    return(
        <>
                <div className="price-section">

                    <form className="bid-form" onSubmit={handleSubmit}>
                        <Input1
                            name = "amount"
                            type="number" 
                            className="bid-input" 
                            placeholder="Введите вашу ставку (мин. 70 001 ₽)"
                            min="70001"
                            step="100"
                        />
                        <button type="submit" className="btn-bid">Сделать ставку</button>
                    </form>
                </div>
            </>
    )
}

export default CreateBid