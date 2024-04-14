function BlueRevenueCard({ title, amount, orderAmount }) {
  return (
    <div className="rounded overflow-hidden text-white">
      <div className="shadow-md bg-[#1174C2] text-white  p-4 hover:bg-[#0E4F82] cursor-pointer">
        <div className="flex justify-center flex-col">
          <div className="flex m-2 ">
            <div>{title}</div>
            <div className="flex justify-center flex-col ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between m-1">
          <div className="font-semibold text-3xl">₹ {amount}</div>
          <div className="flex underline underline-offset-1  font-medium">
            {orderAmount} {"Orders"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                className="fill-[#146eb4]"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-[#0E4F82] font-medium text-1xl px-6 py-2">
        <div>Next Payout Date:</div>
        <div>Today, 04:00 PM</div>
      </div>
    </div>
  );
}

export default BlueRevenueCard;
