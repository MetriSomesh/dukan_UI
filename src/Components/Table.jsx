import TableSearch from "./TableSearch";
import { orderData } from "../Data/data";
function Table() {
  return (
    <div className="bg-white px-3 pt-3 pb-2 rounded-lg grid gap-4">
      <TableSearch />

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rlt:text-right text-gray-900">
          <thead className="text-xm font-medium rounded uppercase text-neutral-900">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                order ID
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Status
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Transaction ID
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Refund Date
              </th>
              <th scope="col" className="px-6 py-3 text-right font-medium">
                Order amount
              </th>
            </tr>
          </thead>

          {orderData.map((order) => {
            return (
              <tbody>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-blue-700 whitespace-nowrap"
                  >
                    #{order.id}
                  </th>

                  <td className="px-2 py-4 flex items-center gap-2 text-neutral-600">
                    {order.status === "Successful" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                    )}
                    {order.status === "Processing" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                    )}
                    {order.status === "Failed" && (
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                    )}
                    {order.status}
                  </td>

                  <td className="px-8 py-4 text-neutral-600">
                    {order.transactionID}
                  </td>
                  <td className="px-5 py-4 text-neutral-600">
                    {order.refundDate}
                  </td>
                  <td className="pr-12 py-4 text-right text-neutral-700">
                    {order.amount}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Table;
