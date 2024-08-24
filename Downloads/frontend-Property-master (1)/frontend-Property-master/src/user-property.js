import axios from "axios";
import { useEffect, useState } from "react"

export default function UserProperty(){
    const userId  = localStorage.getItem("userId");
    const [property,setProperty] = useState([]);
    useEffect(()=>{
        axios.post("http://localhost:3000/properties/view-property-of-user",{userId}).then(result=>{
            console.log(result.data)
            setProperty(result.data)
        }).catch(err=>{
            console.log(err);
        });
    },[]);
    return<>
    <h1>User Properties...</h1>
        <table>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th></th>
                </tr>
            </thead>
            {property.map((data,index)=><tbody>
                <tr>
                    <td>{index+1}</td>
                    <td><img src={data.images}/></td>
                </tr>
            </tbody>)}
        </table>
    </>
}