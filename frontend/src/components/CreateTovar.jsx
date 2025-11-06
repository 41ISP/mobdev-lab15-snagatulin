import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Input from "./Input"
import Button from "./Button"
import Textarea from "./Textarea"
import { useUserStore } from "../store/store"
import { CreateTovar } from "../api/api"


const CreateProductPage = () => {
  const [error, setError] = useState("");
  const { setJWT } = useUserStore();
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const item = {
      title: e.target.title.value,
      description: e.target.description.value,
      price: e.target.price.value,
      imageUrl: e.target.imageUrl.value,
    };

    try {
      const json = await CreateTovar(item); 
      if (!json.success) throw new Error(json.error)
      setJWT(json.token)
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <>
      <div className="page-header">
        <h1>Создать новый товар</h1>
      </div>
      {error && <div className="error">{error}</div>}

      <div className="form-container">
        <form id="create-item-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              Название товара <span className="required">*</span>
            </label>
            <Input
              type="text"
              className="form-input"
              name="title"
              placeholder="Например: iPhone 14 Pro 256GB"
              maxLength={100}
              required
            />
            <div className="char-counter">
              <span className="current">0</span> / 100
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              Описание <span className="required">*</span>
            </label>
            <Textarea
              className="form-textarea"
              name="description"
              placeholder="Подробно опишите товар, его состояние, характеристики..."
              maxLength={1000}
              required
            />
            <div className="char-counter">
              <span className="current">0</span> / 1000
            </div>
            <div className="form-hint">
              Чем подробнее описание, тем больше шансов продать товар
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              Начальная цена <span className="required">*</span>
            </label>
            <div className="input-group">
              <Input
                type="number"
                className="form-input with-prefix"
                name="price"
                placeholder="5000"
                min="1"
                step="100"
                required
              />
              <span className="input-prefix">₽</span>
            </div>
            <div className="form-hint">
              Укажите минимальную цену, с которой начнутся торги
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">URL изображения</label>
            <Input
              type="url"
              className="form-input"
              name="imageUrl"
              placeholder="https://example.com/image.jpg"
            />
            <div className="form-hint">
              Вставьте ссылку на изображение товара (опционально)
            </div>
            <div className="image-preview" id="image-preview">
              <img src="" alt="Предпросмотр" />
            </div>
          </div>

          <div className="form-actions">
            <Link to="/" className="btn-cancel">
              Отмена
            </Link>
            <Button type="submit" className="btn-submit">
              Создать товар
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProductPage;