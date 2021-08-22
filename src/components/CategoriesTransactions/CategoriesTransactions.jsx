import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCategory } from "../../redux/categories/categoriesOperations";
import Button from "../_share/Button/Button";

export default function CategoriesTransactions({ transType }) {
  const [newCategory, setNewCategory] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const { costsCat, incomesCat } = useSelector(state => state.categories);

  const handleNewCatInput = (e) => {
    setNewCategory(e.currentTarget.value);
  };

  const handleNewCatSubmit = (e) => {
    e.preventDefault();

    const category = {
      title: newCategory
    }

    dispatch(addCategory({ transType, category }));
    setNewCategory('');
  };

  const handleGoBack = () => {
    history.push(history.location.state?.from || "/");
  };

  const dataList = transType === "costs" ? costsCat : incomesCat;

  return (
    <>
      <Button title="GoBack" cbOnClick={handleGoBack} />
      <h1>Категории</h1>
      <ul>
        {dataList.map((dataItem) => (
          <li key={dataItem.title}>
            <button
              type="button"
              style={{ border: "none" }}
            >
              {dataItem.title}
            </button>
            <Button title="..." />
          </li>
        ))}
      </ul>
      <form onSubmit={handleNewCatSubmit}>
        <input
          type="text"
          name="newCategory"
          value={newCategory}
          placeholder="Новая категория"
          onChange={handleNewCatInput}
        />
        <Button title="Add" type="submit" />
      </form>
    </>
  );
}
