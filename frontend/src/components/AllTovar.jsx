import { useEffect, useState} from "react"
import { UseTovarStore, useUserStore } from "../store/store"
import TovarCard from "./TovarCard";


const Tovars = ({totalItems, totalUsers, totalBids, activeItems, totalValue, averageItemPrice}) => {
    const { tovar, getTovar} = UseTovarStore();
    const [stats, SetStats] = useState()

    useEffect(() => {
        const handleFetch = async() => {
            try{
           await getTovar();
            } catch(err) {
                console.error(err)
            }
        }

        const getstats = async () => {
    try {
        const req = await fetch("https://kitek.ktkv.dev/marketplace/api/stats")
        const res = await req.json()
        console.log(res)
        SetStats(res);
    } catch (err) {
        console.error(err)
    }
}
        getstats()
        handleFetch()
    }, []);

    return (
        <>
{stats &&
        <div className="stats">
        <div className="stat-item">
            <span className="stat-value">{stats.totalItems}</span>
            <span className="stat-label">Товаров</span>
        </div>
        <div className="stat-item">
            <span className="stat-value">{stats.totalBids}</span>
            <span className="stat-label">Ставок</span>
        </div>
        <div className="stat-item">
            <span className="stat-value">{stats.activeItems}</span>
            <span className="stat-label">Активных</span>
        </div>
        <div className="stat-item">
            <span className="stat-value">{stats.averageItemPrice}</span>
            <span className="stat-label">Средняя цена</span>
        </div>
    </div>
}


        <div className="messages-section">
            <div className="container">
                <h2 className="section-title">Товары</h2>
                <div className="messages-grid">
                    { tovar && tovar.map((tovar) => (
                            <TovarCard key={tovar.id} {...tovar} />
                        ))}
                </div>
            </div>
        </div>
        </>
    )
}


export default Tovars