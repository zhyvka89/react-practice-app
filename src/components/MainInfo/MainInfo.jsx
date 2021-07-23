import Button from "../_thare/button/Button"

const MainInfo = ({ title, periodsData, handleOpenTransaction, type }) => {
	const cbOpenTransaction = () => handleOpenTransaction(type);
	return (
		<>
			<h2>{title}</h2>
			<Button title='Add' cbonClick={cbOpenTransaction} />
			<p>UAH</p>
			<ul>
				{periodsData.map(({period, sum}) => (
					<li key={period}>
						<span>{period}</span>
						<span>{sum}</span>
					</li>
				))}
			</ul>
		</>
	)
}

export default MainInfo;