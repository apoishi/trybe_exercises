const costOfProduct = 1;
const saleValue = 2;

if (costOfProduct >= 0 && saleValue > 0) {
	const totalCostOfProduct = costOfProduct * 1.2;
	const totalProfit = (saleValue - totalCostOfProduct) * 1000;
	console.log(totalProfit);
} else {
	console.log ( "Erro");
}

