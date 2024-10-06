"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }]);
    setTitle("")
    setDesc("")
    // console.log(mainTask);
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h2 className='text-gray-600'>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between'>
          <div className='w-[50%] flex items-center justify-between mb-2 py-1 px-2'>
            <h5 className='text-black inline-block'>{t.title}</h5>
            <h6 className='text-black inline-block font-semibold ml-5'>{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i)
            }}
            className='bg-red-600 py-1 px-4 rounded-md'>Delete</button>
        </li>
      )
    })
  }

  return (
    <>
      <h1 h1 className='text-center underline text-3xl p-5' > MY TO - DO LIST</h1>
      <div className='main flex justify-between w-full h-[88vh] py-2 px-10'>
        <div className='form w-[40%] pt-3 flex items-start justify-center'>
          <form className='ml-5 py-10 px-16 flex flex-col items-center justify-around w-96'
            onSubmit={submitHandler}>
            <input type="text" className='text-2xl text-black font-normal border-zinc-600 border-2 rounded-lg py-1 px-1'
              placeholder='Enter Your Task Name'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
            ></input>
            <textarea type="text" className='mt-10 h-48 w-72 text-2xl text-black font-normal border-zinc-600 border-2 py-1 px-1 resize-none rounded-xl' placeholder='Enter Description '
              value={desc}
              onChange={(el) => {
                setDesc(el.target.value)
              }}
            ></textarea>
            <button className='bg-white text-black px-9 py-2 mt-7 rounded-lg'>Add Task</button>
          </form>
        </div>
        <div className='storeTask w-[55%]'>
          <h1 className='text-center font-medium text-2xl mb-4'>My Tasks</h1>
          <div className='p-4 bg-slate-200 rounded-md'>
            <ul>
              {renderTask}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default page