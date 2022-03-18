import React, { useState, useEffect } from "react";
import { users, createInt } from "../utilites/url";
import axios from "axios";
import { Button } from "@material-ui/core";
import DateTimePicker from "react-datetime-picker";
import Box from "@material-ui/core/Box";

const CreateInterview = () => {
  const [loading, setLoading] = useState(true);
  const [emailsList, setEmails] = useState([]);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [usersList, setUserList] = useState([]);

  useEffect(async () => {
    try {
      const getUsers = await axios.get(users);
      setLoading(false);
      setUserList(getUsers.data);
    } catch (e) {
      console.log("error");
    }
  }, []);

  const check = (email) => {
    return emailsList.includes(email);
  };

  const addEmail = (email) => {
    const dummylist = [...emailsList];
    dummylist.push(email);
    setEmails(dummylist);
  };

  const removeEmail = (email) => {
    const dummylist = emailsList.filter((item) => item !== email);
    setEmails(dummylist);
  };

  const submit = async () => {
    try {
      if (startTime > endTime)
        return alert("Start time must be before end time");
      const UsersList = usersList.filter((item) =>
        emailsList.includes(item.email)
      );
      let request = {
        user: UsersList,
        startTime: startTime.getTime().toString(),
        endTime: endTime.getTime().toString(),
      };
      // eslint-disable-next-line
      await axios.post(createInt, request);
      const dummy = [];
      const start = new Date();
      const end = new Date();
      setEmails(dummy);
      setStartTime(start);
      setEndTime(end);
      alert("Interview created  successfully");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return loading ? (
    <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 text-center">
      Loading...
    </h1>
  ) : (
    <Box sx={{ borderRadius: "50%" }}>
      <h1 class="mt-5 flex-grow underline sm:pr-16 text-2xl font-medium title-font text-gray-800 text-center">
        Create New Interview
      </h1>
      <h3 class="flex-grow sm:pr-16 text-xl font-medium title-font text-gray-900 m-5 text-center">
        Add Users{" "}
      </h3>
      {usersList.map((item, index) => (
        <section
          class="text-gray-400 bg-gray-300 body-font ml-20 mr-20"
          key={index}
        >
          <div class="container px-2 py-4 mx-auto">
            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 class="flex-grow sm:pr-16 text-l font-medium title-font text-black">
                {item.email}
              </h1>
              {!check(item.email) ? (
                <button
                  onClick={() => {
                    addEmail(item.email);
                  }}
                  class="flex-shrink-0 text-white bg-gray-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-3xl mt-8 sm:mt-0"
                >
                  +
                </button>
              ) : (
                <button
                  onClick={() => {
                    removeEmail(item.email);
                  }}
                  class="flex-shrink-0 text-white bg-gray-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-3xl mt-8 sm:mt-0"
                >
                  -
                </button>
              )}
            </div>
          </div>
          <hr></hr>
        </section>
      ))}
      <div
        style={{ backgroundColor: "white", color: "#282c34", padding: "30px" }}
      >
        <h3 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900 mt-5 text-center">
          Select Time{" "}
        </h3>
        <div class="container px-2 py-4 mx-auto text-center">
          <p style={{ fontSize: "1.5rem" }}>Start Time:-</p>
          {<DateTimePicker onChange={setStartTime} value={startTime} />} <br />
          <p style={{ fontSize: "1.5rem" }}>End Time:-</p>
          {<DateTimePicker onChange={setEndTime} value={endTime} />} <br />
          <br />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => submit()}
          >
            Create
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default CreateInterview;
