import { Component } from 'react';
import Button from "../_thare/button/Button";
import LabelInput from "../_thare/labelInput/LabelInput";

class TransactionForm extends Component {
    state = {
        date: "",
        time: "",
        category: "Еда",
        sum: "",
        currency: "UAH",
        comment: ""
    }

    handlerInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handlerDataForm = e => {
        e.preventDefault();
        const { transType, handleCloseTransaction } = this.props;
        const dataFromLS = localStorage.getItem(transType);
        const dataParse = dataFromLS === null ? [] : JSON.parse(dataFromLS);
        const dataToLS = JSON.stringify([...dataParse, this.state]);
        localStorage.setItem(transType, dataToLS);
        handleCloseTransaction();
    }

    render() {
        const { date, time, category, sum, currency, comment } = this.state;
        return (
            <form onSubmit={this.handlerDataForm}>
                <Button title="OK" type="submit" />
                <LabelInput title="День" type="date" name="date" value={date} cbonChange={this.handlerInputChange}/>
                <LabelInput title="Время" type="time" name="time" value={time} cbonChange={this.handlerInputChange}/>
                <LabelInput title="Категория" type="button" name="category" value={category} cbonChange={this.handlerInputChange}/>
                <LabelInput title="Сумма" name="sum" value={sum} placeholder="Введите сумму" cbonChange={this.handlerInputChange}/>
                <LabelInput title="Валюта" type="button" name="currency" value={currency}  cbonChange={this.handlerInputChange}/>
                <LabelInput name="comment" value={comment} placeholder="Комментарий"cbonChange={this.handlerInputChange}/>
            </form>
    )
 }
}

export default TransactionForm;