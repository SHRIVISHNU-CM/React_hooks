import { useState, useEffect } from "react"
let id = 0;
function Example2() {
    const [data, Setdata] = useState([])
    const [todo, SetTodo] = useState("");

  const handleDrop = (i)=>{
    const newList = [...data];
    newList.splice(i,1);
    Setdata(newList)
  }


    return (
        <>
            <div className="flex justify-center items-center flex-col gap-2">
                <h2 className="underline">Todo App</h2>
                <div>
                    <input type="text"

                        className="border rounded-sm p-2 text-black"
                        value={todo}
                        onChange={(e) => {
                            SetTodo(e.target.value)
                        }}
                    />
                    <button className="bg-blue-500 text-white p-2"
                        onClick={() => {
                            Setdata([...data, { id: id++, label: todo }])
                            SetTodo("")
                        }}
                    >
                        Add Todo
                    </button>
                </div>


            </div>
            <div className="flex justify-center items-center">
                <ul>
                    {data.map((el, i) => {
                        return (
                            <li className="border w-94 p-1 flex justify-center items-center gap-2" key={i} value={i}>
                                <h3 className="border w-44 min-w-44 h-min">{el.label}</h3>
                                <button className="border bg-red-600 p-2 text-white rounded-lg" onClick={()=>{
                                    handleDrop(i)
                                }}>Drop</button>
                            </li>
                        )

                    })}

                </ul>

            </div>

        </>
    )
}
export default Example2