import { useEffect, useState } from "react";

export const UseEffectSample = () => {
  // Model view controller

  // Every latest application, front end and backend is seprate..
  // How will you communication ? using API's..

  const [dataResponse, setDataResponse] = useState<any>();
  // const[genderValue, setGenderValue] = useState<string>();
  const[genderValMale, setGnderValMale] = useState<string>();
  const[genderValFemale, setGenderValFemale] = useState<string>();

  useEffect(() => {
    // const xhr = new XMLHttpRequest();
    // xhr.open("Get", "https://api.chucknorris.io/jokes/random");
    // xhr.send();
    // xhr.onreadystatechange = () => {
    //   if (xhr.status == 200) {
    //     console.log(xhr.response);
    //   }
    // };
    //
    // json --> array, objects, strings, number, boolean
    // const myJson = {
    // "name": "Govardhan",
    // "phoneNumbers": ["9705547115", "6361798441"],
    //  "address": {
    //         "doorNum": "4-35",
    //         "postOffice": "Honnampalli",
    //         "pinCode": 515261
    //  },
    //  "Gender": "Male",
    //   "isMarried": true
    // }

    // json --> contains arrays and objects

    // javascript object -->
    //    {
    //     name: "Govardhan"
    //    }

    //

    const response = fetch("https://api.chucknorris.io/jokes/random", {
      method: "Get",
      headers: { Accept: "application/json" },
    });

    response
      .then((resp) => {
        return resp.json(); // convert to json to javascript object
      })
      .then((data) => {
        setDataResponse(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Api is triggered successfully");
      });
  }, []);

  function genderChanged(event: any) {

    const genderData: string = event.value;
    
    console.log("genderData:", genderData, "Type:", typeof genderData);

    if(genderData === "123456"){
      // setGnderValMale(event.value)
    }else{
      setGenderValFemale(event.value)
    }
    
  }

  return (
    <div>
      <h1> Jokes</h1>
      <ul>
        <li>Ant and Elephant are fighting - updated the data</li>
        {/* <li>{dataResponse?.value == "" ? "no joke yet, please try again later" : dataResponse.value}</li> */}
        <li>{dataResponse?.value}</li>
      </ul>

      <label>Gender</label>
      <br />
      <label>Male</label>
      <input
        type="radio"
        name="gender"
        value="Male -- Hello Handsome"
        onChange={(event) => genderChanged(event.target)}
      ></input>
      <label>Female</label>
      <input
        type="radio"
        name="gender"
        value="Female -- Hello Beauty"
        onChange={(event) => genderChanged(event.target)}
      ></input>


      {/* <h1>{genderValMale}</h1> */}
      <h1>{genderValFemale}</h1>
      {/* <h1>{genderValue ? genderValMale : genderValFemale}</h1> */}
      {/* <h1>{genderValFemale}</h1> */}
    </div>
  );
};

export default UseEffectSample;
