import { Link } from "react-router-dom"


const Button = ({children, disabled, to, type}) => {

    const className = "inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    const base = "inline-block border-2 border-stone-300 rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    const styles = {
        primary: base + ' px-4 py-3 md:px-6 md:py-4',
        small: base + ' px-4 py-2 md:px-5 md:md:py-2.5 text-xs',
        secondary: "inline-block border-2 border-stone-300 rounded-full bg-transparentc font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
    }
    if(to) return <Link to={to} className={className}>{children}</Link>
    return (
        <button disabled={disabled} className={styles[type]}>
            {children}
        </button>
    )
}

export default Button