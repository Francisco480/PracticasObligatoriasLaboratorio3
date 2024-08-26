import PropTypes from 'prop-types'
const Table = ({ netIncomes }) => {
    const averageIncome = netIncomes.reduce((total, company) => total + company.income, 0) / netIncomes.length;
  
    return (
      <div>
        <table border={"1px, solid, black"} width ={"400px"}>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Income</th>
            </tr>
          </thead>
          <tbody>
            {netIncomes.map((company) => (
              <tr key={company.id}>
                <td>{company.brand}</td>
                <td>{company.income}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Average Net Income: {averageIncome}</p>
      </div>
    );
  };
  
  export default Table;

  Table.propTypes = { 
    id: PropTypes.number,
    brand: PropTypes.string,
    income: PropTypes.number
}