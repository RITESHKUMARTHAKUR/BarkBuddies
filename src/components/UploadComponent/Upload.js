import React, { useState } from "react";
import AlertModal from "../AlertModalComponent/AlertModalComponent";
import { db,storage } from "../database/firebase-config";
import {collection, addDoc } from "firebase/firestore"
import {getDownloadURL, ref,uploadBytes } from "firebase/storage"

const Upload = () => {
    const [file, setFile] = useState(null);
    const [Name,setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age,setAge] = useState(0);
    const [gender,setGender] = useState("")
    const [modal, showModal] = useState("");
    const types = ["image/jpeg", "image/png"];

    const handleSubmit = (e) => {
      e.preventDefault();
      if (file == null) return;
      const imageRef = ref(storage, `adopt/${file.name}`);
      uploadBytes(imageRef, file).then(() => {
    
        getDownloadURL(imageRef).then( async (url) => {
          await addDoc(collection(db, "Adoption"), {
            name: Name,
            breed:breed,
            age:age,
            photo: url
          }).then(() => {
            alert("Data uploaded")
          })
        })
      }); 

    }


  return (
    <div className="pt-12">
      <section class="bg-[#B9A89B] ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <div class="w-full p-8">
            {modal}
            <form class="flex w-full gap-12" >
              <div id="left" className="w-full"> 
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 :text-white"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    placeholder="Dog's name"
                    required=""
                    onChange={(event) => { setName(event.target.value) } }
                  />
                </div>
                <div>
                  <label
                    for="breed"
                    class="block mb-2 text-sm font-medium text-gray-900 :text-white"
                  >
                    Breed:
                  </label>
                  <input
                    type="text"
                    name="breed"
                    id="breed"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    placeholder="Dog's breed"
                    required=""
                    onChange={(e) => {setBreed(e.target.value)}}
                  />
                </div>
                <div className="flex gap-8">
                  <div className="w-full">
                    <label
                      for="age"
                      class="block mb-2 text-sm font-medium text-gray-900 :text-white"
                    >
                      Age:
                    </label>
                    <input
                      type="text"
                      name="age"
                      id="age"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Dog's age"
                      required=""
                      onChange={(e) => {setAge(e.target.value)}}
                    />
                  </div>
                  <div className="w-full">
                    <label
                      for="gender"
                      class="block mb-2 text-sm font-medium text-gray-900 :text-white"
                    >
                      Gender:
                    </label>

                    <select
                      name="gender"
                      id="gender"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                      placeholder="Dog's gender"
                      required=""
                      onChange={(e) => {setGender(e.target.value)}}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>            
                <div>
                  <label
                    for="photo"
                    class="block mb-2 text-sm font-medium text-gray-900 :text-white"
                  >
                    Photo:
                  </label>
                  <input
                    type="file"
                    name="photo"
                    id="myFile"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500 "
                    placeholder="Dog's name"
                    onChange={(event ) => {setFile(event.target.files[0])}}
                  />
                </div>
                <div>
                  <label
                    for="nature"
                    class="block mb-2 text-sm font-medium text-gray-900 :text-white"
                  >
                    Description:
                  </label>
                  <textarea
                    rows="4"
                    cols="50"
                    className="pl-2.5"
                    name="comment"
                    placeholder="Enter text here"
                    form="usrform"
                  ></textarea>
                </div>
                
              </div>
              <div id="right" className="w-full">
                <div>
                  <label
                    for="nature"
                    class="block mb-2 text-sm font-medium text-gray-900 :text-white"
                  >
                    Nature:
                  </label>
                  <input
                    type="text"
                    name="nature"
                    id="nature"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    placeholder="Dog's nature"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="city"
                    class="block mb-2 text-sm font-medium text-gray-900 :text-white"
                  >
                    City:
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    placeholder=""
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="state"
                    class="block mb-2 text-sm font-medium text-gray-900 :text-white"
                  >
                    State:
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    placeholder=""
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="landmark"
                    class="block mb-2 text-sm font-medium text-gray-900 :text-white"
                  >
                    Landmark:
                  </label>
                  <input
                    type="text"
                    name="landmark"
                    id="landmark"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    placeholder=""
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="address"
                    class="block mb-2 text-sm font-medium text-gray-900 :text-white"
                  >
                    Address:
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"
                    placeholder=""
                    required=""
                  />
                </div>
              </div>
            </form>
              <div class="flex items-start my-4">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 :bg-gray-700 :border-gray-600 :focus:ring-primary-600 :ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div class="ml-3  text-sm">
                  <label
                    for="terms"
                    class="font-light text-gray-500 :text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      class="font-medium text-primary-600 hover:underline :text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button 

              onClick={handleSubmit}
                type="submit"
                class="w-full  bg-white  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-primary-600 hover:bg-gray-200 duration-150 :focus:ring-primary-800"
              >
                Upload
              </button> 
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upload;
