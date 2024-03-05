import React from 'react';

export default function RequestItemForm({ onSubmit, survivorName, survivor }) {
  console.log('************************')
  console.log(survivor)
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="survivor-name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Survivor
        </label>
        <input
          type="text"
          name="survivorName"
          id="survivor-name"
          className="mt-1 block w-full px-3 py-2 bg-zinc-950 border border-zinc-600  rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
          value={survivorName}
          readOnly
        />
      </div>

      <div>
        <label htmlFor="item" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Item
        </label>
        <select
          id="item"
          name="itemName"
          className="mt-1 block w-full h-9 pl-3 pr-10 py-2 text-base bg-zinc-950 border-zinc-600 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm rounded-md"
        >
          {survivor.inventory.items.map(itemElement => (
            <option key={itemElement.id} value={itemElement.name}>
              {itemElement.item.name} ({itemElement.quantity} units available)
            </option>
          ))}
        </select>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          Request Item
        </button>
      </div>
    </form>
  );
}
