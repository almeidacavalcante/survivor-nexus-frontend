'use client'

import React, {FormEvent} from 'react';


export default function RequestItemForm({ survivorName, survivor }) {

  const handleRequestItem = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData)

    //...
  }

  return (
    <form onSubmit={handleRequestItem} className="space-y-6">
      <div>
        <h3 className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Survivor: {survivorName}
        </h3>
      </div>

      <div>
        <label htmlFor="item" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Item
        </label>
        <select
          id="item"
          name="itemId"
          className="mt-1 block w-full h-9 pl-3 pr-10 py-2 text-base bg-zinc-950 border-zinc-600 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm rounded-md"
        >
          {survivor.inventory.items.map(itemElement => (
            <option key={itemElement.item.id} value={itemElement.item.id}>
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
