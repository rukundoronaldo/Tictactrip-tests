import {render, fireEvent, queryByTitle} from "@testing-library/react"

import Form from './form'

it("checkCitiesRender", () => {
    const { queryAllByTitle} = render(<Form/>)
    const form = queryAllByTitle('formula')

    expect(form).toBeTruthy();
})