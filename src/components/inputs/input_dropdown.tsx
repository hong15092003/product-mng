import React from 'react'

export default function InputDropdown({label}:{label:string}) {
    const Options = [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
    ]
  return (
    <div className="flex flex-col">
    <label htmlFor={`small-input-${label}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <select id={`small-input-${label}`}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            <option selected>Select {label}</option>
            {Options.map((option, index) =>
                <option key={index} value={option}>{option}</option>)
            }
        </select>
    </div>
  )
}
