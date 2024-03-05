import api from "@/data/api";
import Link from "next/link";

async function getInventory() {
  const response = await api('/survivors/list/1/50', {
    cache: "no-cache"
  })
  return await response.json()
}

export default async function InventoryPage() {
  const survivorsList = await getInventory();

  function flattenInventory(inventory) {
    if (inventory && inventory.items && inventory.items.length > 0) {
      const itemsString = inventory.items.map(i => `${i.quantity} ${i.item.name}`).join(', ');
      return itemsString;
    }
    return 'No items';
  }

  const renderRows = () => {
    return (
      survivorsList.survivors.map( survivor => {
        return (
          <tr>
            <td className="px-6 py-4">{survivor.name}</td>
            <td className="px-6 py-4">{flattenInventory(survivor.inventory)}</td>
            <td className="px-6 py-4">
              <Link href={`/request-item/?survivorId=${survivor.id}`}
                className="text-sm bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600 transition duration-150 ease-in-out">Request
                Item
              </Link>
            </td>
          </tr>
        )
      })
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-4xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Inventories</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
          { renderRows() }
          </tbody>

        </table>
      </div>

      <div className="flex mt-4">
        <a href="#"
           className="mr-2 px-4 py-2 text-sm text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">Anterior</a>
        <a href="#"
           className="ml-2 px-4 py-2 text-sm text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">Próximo</a>
      </div>
    </div>
  );
}
