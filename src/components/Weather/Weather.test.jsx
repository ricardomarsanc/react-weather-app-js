import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("Weather sunny render", async () => {
    // AAA Arrange Act Assert
    const { findByRole } = render(<Weather state="clear" temperature={ 10 }></Weather>)
    const temp = await findByRole("heading")
    expect(temp).toHaveTextContent("10")
})