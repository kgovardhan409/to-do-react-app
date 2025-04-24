import { useEffect, useState } from "react";

export const UseEffectSample = () => {
  // Model view controller

  // Every latest application, front end and backend is seprate..
  // How will you communication ? using API's..

  const [dataResponse, setDataResponse] = useState<any>();

  const [selectedGender, setSelectedGender] = useState<string>();

  const [iamHungry, setIamHungry] = useState<boolean>();

  const name = "Govardhan";

  const pi = 3.27;

  useEffect(() => {
    let userName = localStorage.getItem("userName"); // []
    document.title = "Effects"; // []
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
  }, []); // [] empty array - component is loaded successfully, so you do whatever you want.. ex. - call an api, give welcome banner,

  //   useEffect(() => {
  //     if (selectedGender) {
  //       alert("Hello Gender has been changed");
  //     }
  //   }, [selectedGender]); //selectedGender changed, so you do wahtever you want ex. - show alert, call an api, etc..

  useEffect(() => {
    if (selectedGender && iamHungry) {
      alert("Hello Gender has been changed and also i am hungry");
    }
  }, [selectedGender, iamHungry]); //selectedGender changed, so you do wahtever you want ex. - show alert, call an api, etc..

  useEffect(() => {
    console.log("I am triggered");
  }); // no square brackets, no empty array, no dependencies..

  // samples - setSamples state

  //   useEffect(() => {
  // setting data to the global context
  //   }, [samples]);

  // parts - setParts state

  // images - setFiles state

  // multiple dependency --> 1. data changed and 1. also user confirmed yes -- then only save it.. [selectedGender, iamHungry]

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
        value="Male"
        onChange={(event) => {
          setSelectedGender(event.target.value);
          alert("This is just for gender related event");
        }}
      ></input>
      <label>Female</label>
      <input
        type="radio"
        name="gender"
        value="Female"
        onChange={(event) => setSelectedGender(event.target.value)}
      ></input>
      {selectedGender ? (
        selectedGender == "Male" ? (
          <h1>Male -- Hello Handsome</h1>
        ) : (
          <h1>Female -- Hello Beautiful</h1>
        )
      ) : (
        <h1>No gender selected!!</h1>
      )}

      <h2 onMouseOver={() => setIamHungry(true)}>Hover me</h2>
    </div>
  );
};

export default UseEffectSample;
