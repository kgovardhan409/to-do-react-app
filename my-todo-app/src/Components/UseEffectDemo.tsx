import './UseEffectDemo.css'
import { useEffect, useState } from 'react';
import { profileTypes } from '../model/ToDoModel';


interface childProfileData{
    profileData : profileTypes
}



interface dataType {
    name: string;
    id: number;
    phone: string;
    email: string;
}

const UseEffectDemo : React.FC<childProfileData> = ({profileData}) => {

    const [userData, setUserData] = useState<dataType[]>([])
    const [profile, setProfile] = useState<childProfileData>()


    // useEffect(()=>{
         
    //     setProfile()

    // },[setProfile])

    const handleProfile = (profileData:childProfileData)=>{
        
        setProfile(profileData)
        console.log("Checking the Data :", profileData)
    }



    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'Application/json'
            }
        })
            .then(responce => responce.json())
            .then(data => {
                console.log(data)
                setUserData(data)
          
            })
            .catch(err => console.log(err))

    }, [])




    return (
        <>
            <h1>Hello there, i am useEffect Demo Component</h1>

            {/* useEffect() */}

            <table id='tabaleMain'>
                <thead >
                    <tr>
                        <th className='tableHead'>User ID</th>
                        <th className='tableHead'>ID</th>
                        <th className='tableHead'>Title</th>
                        <th className='tableHead'>Body</th>
                    </tr>
                </thead>

                <tbody>
                    {userData.map((userInfo: dataType) => {
                        return (
                            <tr key={userInfo.id}>
                                <td className='tableBody'>{userInfo.id}</td>
                                <td className='tableBody'>{userInfo.name}</td>
                                <td className='tableBody'>{userInfo.phone}</td>
                                <td className='tableBody'>{userInfo.email}</td>
                                

                            </tr>
                        )

                    })}
                </tbody>
            </table>

                    <div>
                        <button onClick={handleProfile}>Click Here get Profile Data</button>

                        <h3></h3>
                        <h3></h3>
                        <h3></h3>
                        <h3></h3>

                    </div>


        </>
    )
}

export default UseEffectDemo;