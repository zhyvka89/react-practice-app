import MainInfo from "../MainInfo/MainInfo";
import Button from "../_thare/button/Button";
import {mainInfoCosts, mainInfoComes, mainInfoBalance} from "../../assets/mainData.json";

const MainPage = ({handleOpenTransaction}) => {
  return (
    <>
      <h1>Журнал расходов</h1>
      <MainInfo title="Pасходы" periodsData={mainInfoCosts} type="costs" handleOpenTransaction={handleOpenTransaction}/>
      <MainInfo title="Доходы" periodsData={mainInfoComes} type="incomes" handleOpenTransaction={handleOpenTransaction}/>
      <MainInfo title="Баланс" periodsData={mainInfoBalance} handleOpenTransaction={handleOpenTransaction}/>
      <Button title='Все расходы'/>
      <Button title='Все доходы'/>
    </>
  )
}

export default MainPage;