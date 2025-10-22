import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/store";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { loginUser } from "../api/api";

function SignIn(){
    const [error, setError] = useState("")
    const {setJWT} = useUserStore()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        const user = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        try {
            const json = await loginUser(user)
            if (!json.success) throw new Error(json.error)
            setJWT(json.token)
            navigate("/")
        } catch (err) {
            console.error(err)
            setError(err.message)
        }
    }
    return(
       <div className="auth-container">
      <title>Вход - Маркетплейс</title>
      <div className="auth-header">
        <div className="auth-icon">🔐</div>
        <h1 className="auth-title">Вход</h1>
      {error.length > 0 && <div className="auth-error">{error}</div>}
        <p className="auth-subtitle">Войдите в свой аккаунт</p>
      </div>
        <div className="alert alert-error" id="error-alert">       
        </div>

      <form id="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Имя пользователя</label>
          <Input
            type="text"
            className="form-input"
            name="username"
            placeholder="Введите имя пользователя"
            required
            autoComplete="username"/>
        </div>

        <div className="form-group">
          <label className="form-label">Пароль</label>
          <Input
            type="password"
            className="form-input"
            name="password"
            placeholder="Введите пароль"
            required
            autoComplete="current-password" />
        </div>

        <Button type="submit" className="btn-submit">Войти</Button>
      </form>

      <div className="auth-divider">или</div>

      <div className="auth-link">
        Нет аккаунта? <Link to="/signup"> Зарегистрироваться</Link>
      </div>
    </div>
    )
}


export default SignIn;