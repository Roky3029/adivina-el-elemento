export const useTransformarEstado = estado => {
	const estados = {
		gas: 'Gas',
		liquid: 'Liquido',
		solid: 'Solido'
	}

	return estados[estado]
}

export const useTransformarYearAntiguo = year => {
	if (typeof year === 'number') return year

	return 'Antiguo'
}
