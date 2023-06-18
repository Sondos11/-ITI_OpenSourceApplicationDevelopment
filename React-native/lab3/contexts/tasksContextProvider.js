import axios from "axios";
import React ,{createContext,useEffect,useState}from "react";
export const tasksContext=createContext();
const tasks=[
    {
        id:1,
        title:"study react native",
        done:false
    },
    {
        id:2,
        title:"study math",
        done:false
    }
]
const TasksContextProvider = (props) => {
    // console.warn(props)
    const [AllTasks,setTasks]=useState([]);
    let [id,setId]=useState(2);
    // const url="http://192.168.1.4:3000/tasks"
    useEffect(()=>{
        setTasks(tasks)
        // axios.get(url)
        // .then(res=>{
        //     setTasks(res)
        // }).catch((error) => {
        //     console.error("Error posting task:", error);
        //   });
        // fetch(url)
        // .then(res=>res.json()).then(data=>setTasks(res))
    },[])
    // let getAllTasks=axios.get(`${url}`)
    //                     .then(res=>{
    //                         console.warn(res)
    //                         setTasks(res)
    //                     }).catch((error) => {
    //                         console.error("Error getting task:", error);
    //                     });
    
    let postTask=(data)=>{
        let newTasks=AllTasks
        setId(++id)
        data.id=id
        newTasks.push(data)
        setTasks(newTasks)
        // axios.post(`${url}`,data,{
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }).catch((error) => {
        //     console.error("Error posting task:", error);
        //   });
        // getAllTasks()
        
    }
    let deleteTask =(data)=>{
        let newTasks=AllTasks.filter(task=>task.id!=data.id)
        setTasks(newTasks)

        // console.warn(newTasks)
        // axios.delete(`${url}/${id}`,{
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }).catch((error) => {
        //     console.error("Error posting task:", error);
        //   });
    }
    const updateTask =(data)=>{
        let newTasks=AllTasks.map(task=>{
            if(task.id!=data.id)
                return task
            task.done=!data.done
            return task
        })
        setTasks(newTasks)
        // axios.put(`${url}/${id}`,data,{
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }).catch((error) => {
        //     console.error("Error posting task:", error);
        //   });
    }
    const values={
        AllTasks,
        postTask,
        deleteTask,
        updateTask,
    }
    return (
        <tasksContext.Provider value={values}>
            {props.children}
        </tasksContext.Provider>
    );
}


export default TasksContextProvider;