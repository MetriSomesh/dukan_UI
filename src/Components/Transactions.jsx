function Transactions() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xl font-medium">Transaction | This Month</p>
      </div>
      <div className="flex gap-3 text-sm">
        <span className="rounded-full bg-neutral-200 py-1.5 px-4 text-neutral-500">
          {"Payouts (22)"}
        </span>
        <span className="rounded-full py-1.5 px-4 text-white bg-[#146EB4]">
          {"Refunds (6)"}
        </span>
      </div>
    </div>
  );
}

export default Transactions;
