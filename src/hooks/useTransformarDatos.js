export const useTransformarEstado = estado => {
	const estados = {
		gas: 'Gas',
		liquid: 'Liquido',
		solid: 'Solido'
	}

	return estados[estado] || 'No definido'
}

export const useTransformarYearAntiguo = year => {
	if (typeof year === 'number') return year

	return 'Antiguo'
}

export const useSetNoDefinedValue = value => {
	if (value === '') return 'No definido'

	return value
}
