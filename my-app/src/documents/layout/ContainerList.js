import React from 'react'
import ChildEx from '../scratch/ChildEx'

function ContainerList(props) {
    const outer_style_container_list ='flex flex-col bg-red-500 border-black border-4 m-1 '
    const prop_placholder = [
        {            
        'id' : 1,
        'name' : 'Bike'
        },
        {            
        'id' : 2,
        'name' : 'Car'
        },
        {            
        'id' : 3,
        'name' : 'trike'
        }
    ]

    var childList = prop_placholder.map(function(trans){
        return <ChildEx key={trans.id} data={trans} />;
      })


    return (
        <section className={outer_style_container_list}>
            header section of container list
            <div>{childList}</div>
        </section>
    )
}

export default ContainerList
