import React from "react";

const Interview = ({ item }) => {
  const date = new Date(parseInt(item.startTime, 10)).toLocaleDateString();
  const startTime = new Date(parseInt(item.startTime, 10)).toLocaleTimeString(
    "en-IN",
    { hour12: false, hour: "numeric", minute: "numeric" }
  );
  const endTime = new Date(parseInt(item.endTime, 10)).toLocaleTimeString(
    "en-IN",
    { hour12: false, hour: "numeric", minute: "numeric" }
  );

  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-10 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">Date</span>
                <span class="mt-1 text-gray-500 text-sm">{date}</span>
              </div>
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  Participants
                </h2>
                {item.email.map((email, index) => (
                  <p class="leading-relaxed" key={index}>
                    {email}
                  </p>
                ))}

                <p class="text-indigo-500 mt-4">
                  {startTime} - {endTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>
    </div>
  );
};
export default Interview;
