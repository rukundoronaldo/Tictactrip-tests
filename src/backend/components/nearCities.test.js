import {render, fireEvent, queryByTitle} from "@testing-library/react"

import Cites from './nearCities'

it("checkCitiesRender", () => {
    const { queryAllByTitle} = render(<Cites/>)
    const dv = queryAllByTitle('allCites')

    expect(dv).toBeTruthy();
})