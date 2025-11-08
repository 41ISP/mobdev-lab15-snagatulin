import Input1 from "./Input1"

function CreateBid() {
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
      const json = await CreateBid(bid); 
      if (!json.success) throw new Error(json.error)
      setJWT(json.token)
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };


    return(
        <>
                <div class="price-section">

                    <form class="bid-form" onSubmit={handleSubmit}>
                        <Input1
                            name = "amount"
                            type="number" 
                            class="bid-input" 
                            placeholder="Введите вашу ставку (мин. 70 001 ₽)"
                            min="70001"
                            step="100"
                        />
                        <button type="submit" class="btn-bid">Сделать ставку</button>
                    </form>
                </div>
            </>
    )
}

export default CreateBid