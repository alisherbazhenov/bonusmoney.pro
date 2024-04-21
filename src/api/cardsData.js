export const fetchCardsData = async ({ offset = 0 }) => {
  try {
    const response = await fetch('http://devapp.bonusmoney.pro/mobileapp/getAllCompaniesIdeal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        TOKEN: '123',
      },
      body: JSON.stringify({
        limit: 10,
        offset: offset,
      }),
    })

    if (response.status === 401) {
      throw new Error('Ошибка авторизации')
    }

    if (response.status === 400) {
      const { message } = await response.json()
      throw new Error(message)
    }

    if (response.status === 500) {
      throw new Error('Все упало')
    }

    if (!response.ok) {
      throw new Error('Произошла ошибка при загрузке данных')
    }

    const data = await response.json()
    return data.companies
  } catch (error) {
    throw new Error(error.message)
  }
}
