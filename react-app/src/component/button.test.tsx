import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Button from './button'

describe('ClickByYou component',()=>{
    it('should been render',()=>{
    const buttonEl = render(
        <Button></Button>
    )
    const el = buttonEl.getByText('0')
    expect(el).toBeDefined()
    })
    it('should been change',()=>{
        const buttonEl = render(
            <Button></Button>
        ) 
        const el = buttonEl.getByText('0')
        fireEvent.click(el)
        const el1 = buttonEl.getByText('1')
        expect(el1).toBeDefined()
    })
})