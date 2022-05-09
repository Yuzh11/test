import React from 'react'

import { HashRouter as Hash, useRoutes, Navigate } from "react-router-dom"
import TextOne from './textOne/index'
const index=() => {
  return (
    <div><LayoutConfig/></div>
  )

}

const LayoutConfig = () => {
    return (
        <Hash>
            <RouterIndex></RouterIndex>
        </Hash>
    )
}

const RouterIndex = ()=>{
    interface Router{
        path:string,
        children?:any,
        element:any 
    }
    const elements = useRoutes([
        {
            path:"/",
            element:<Navigate  replace to="/textOne" />
        },
        {
            path:"/textOne",
            element:<TextOne/>
        }
        // {
        //     path:"*",
        //     element:<Navigate replace to="/textOne" ></Navigate>
        // }
    ])

    return elements
}
export default index