import React from 'react'
import Chapter from './Chapter'


function Book() {
    return (
        <section title="_Book" className="w-screen">
            <header title="annotation" class="flex flex-row justify-between p-2  text-white" >
            <div class="flex flex-row">
                <div class="font-bold text-gray-200 text-left uppercase">_Book</div>
            </div>
            <div title="title section " class="flex flex-row ">
                <div class="pl-3"><i class="text-blue-500 fas fa-sort-down"></i></div>
                </div>
            </header>
            <Chapter/>

    </section>
    )
}

export default Book
