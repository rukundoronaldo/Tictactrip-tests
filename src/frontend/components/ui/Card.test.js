import {render, fireEvent, queryByTitle} from "@testing-library/react"

import Card from './Card'

it("checkCitiesRender", () => {
    const { queryAllByTitle} = render(<Card/>)
    const dv = queryAllByTitle('carte')

    expect(dv).toBeTruthy();
})