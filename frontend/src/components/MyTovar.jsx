import { useEffect, useState } from "react"
import { UseTovarStore, useUserStore } from "../store/store"
import TovarCard from "./TovarCard";
import { DeleteTovar } from "../api/api";
import { useParams } from "react-router-dom";

const Tovars1 = ({ totalItems, totalUsers, totalBids, activeItems, totalValue, averageItemPrice }) => {
    const { id } = useParams();
    const { jwt } = useUserStore();
    const { tovar, getTovar } = UseTovarStore();

    const userId = jwt?.userId;

    useEffect(() => {
        const handleFetch = async () => {
            try {
                await getTovar();
            } catch (err) {
                console.error(err);
            }
        };
        handleFetch();

    }, []);



    const myTovars = tovar?.filter(item => item.userId === userId);

    return (
        <>
        {jwt ? (
            <div className="messages-section">
                <div className="container">
                    <h2 className="section-title">Мои товары</h2>
                    <div className="messages-grid">
                        {myTovars && myTovars.map((tovar) => (
                            <TovarCard key={tovar.id} {...tovar} />
                        ))}
                    </div>
                </div>
            </div> 
        ) : ( 
            <p>Нету своих товаров</p>
        )}
        </>
    );
};

export default Tovars1;