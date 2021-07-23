import TransactionForm from "../TransactionForm/TransactionForm";
import Button from "../_thare/button/Button";

const TransactionPage = ({ transType, handleCloseTransaction }) => {
    const title = transType === "costs" ? "Pасходы" : "Доходы";
    return (
        <>
            <Button title="GoBack" cbonClick={handleCloseTransaction}/>
            <h1>{title}</h1>
            <TransactionForm transType={transType} handleCloseTransaction={handleCloseTransaction}/>
        </>
    )
}

export default TransactionPage;