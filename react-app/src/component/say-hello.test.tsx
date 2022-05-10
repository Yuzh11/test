import * as React from 'react'
import { render } from '@testing-library/react'
import { SayHello } from './say-hello'

describe('SayHello component specs',()=>{
    it('should display the person name',()=>{
        const person = 'John'
        const component = render(<SayHello person={person}/>)
        const element = component.getByTestId('123')
        expect(element).not.toBeNull()
        expect(element.tagName).toEqual('H1')
    })
})