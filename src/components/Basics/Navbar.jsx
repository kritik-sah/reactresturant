import React from 'react'

const Navbar = ({filterItem , menuList}) => {

    return (
        <>
            <nav className="navbar">
                <div className="btn-group-lg m-auto bg-light rounded">
                {
                    menuList.map((curElem) => {
                        return (
                        <button type="button" className="btn btn-light p-4" onClick={()=> filterItem(curElem)}>{curElem.toUpperCase()}</button>
                        )
                    })
                }

                
                
                </div>
            </nav>
        </>
    )
}

export default Navbar
