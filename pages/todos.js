import {useState,useEffect} from 'react';
import axios from 'axios';
import styles from '../styles/todos.module.css'
const Todos = ()=>{
    const [data,setData] = useState('')
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((data)=>{
            setData(data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
    const renderData = ()=>{
        return data.map((dataItem)=>{
            return (
                <div key={dataItem.id} className={styles.todobox}>
                    <span style={{'color':'grey','marginRight':'10px'}}>Title: </span> <p style={{'display':'inline-block','fontSize':'1.1rem','fontWeight':'600'}}>{dataItem.title}</p><br />
                    <span style={{'color':'grey','marginRight':'10px'}}>Status: </span> {dataItem.completed ? <p style={{'display':'inline-block'}}>completed</p>:<p style={{'display':'inline-block'}}>not completed</p>}
                </div>
            )
        })
    }
    return (
        <div className={styles.todoscontsiner}>
            <h1 style={{'textAlign':'center','color':'grey','marginBottom':'10px'}}>All The Tweets</h1>
            {data === "" ? <h1>Loading...</h1>:renderData()}
        </div>
    )
}
export default Todos;