const Textarea = ({...props}) => 
    {
    return ( <textarea {...props} className="form-textarea" 
                    name="description"
                    placeholder="Подробно опишите товар, его состояние, характеристики..."
                    maxLength="1000"
                    required>
                </textarea> 
    )
}

export default Textarea