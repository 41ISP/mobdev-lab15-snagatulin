const Input1 = ({...props}) => {
    return <input {...props}  type="number" 
                            class="bid-input" 
                            placeholder="Введите вашу ставку (мин. 70 001 ₽)"
                            min="70001"
                            step="100" />
}

export default Input1