import Input1 from "./Input1"

function CreateBid() {

    return(
        <>
                <div class="price-section">

                    <form class="bid-form">
                        <Input1
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