const Button = ({ children, ...props }) => {
    return (
        <button {...props} className="btn-submit">
            {children}
        </button>
    )
}

export default Button