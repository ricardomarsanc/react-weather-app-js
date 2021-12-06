import React from 'react'
import CityInfo from './CityInfo'
import { render } from '@testing-library/react'

test("CityInfo render", async () => {
    // AAA
    // Arrange
    // Act
    const city = "Valladolid"
    const country = "España"
    // Render: Renderiza el componente y retorna una serie de funciones
    const { findAllByRole } = render(<CityInfo city={city} country={country}></CityInfo>)
    
    // Assert
    // findAllByRole busca todos los componentes de tipo "heading" en este caso - Devuelve un array
    const cityAndCountryComponents = await findAllByRole("heading");

    // Cuándo el test va a ser correcto?
    // Cuando el 1er elemento sea Valladolid y el segundo sea España, correcto
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)


})