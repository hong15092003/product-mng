
import React,{useState} from 'react'

export default function InputField({ label,type ,fn}: { label: string, type?:string|null, fn:(event: HTMLInputElement) => void }) {
  function onChange({ target: e }: { target: HTMLInputElement }) {
    return fn(e);
  }
  return (
    <div>
      <label htmlFor={`input-${label}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input type={type?type!:'text'} id={`input-${label}`} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
  )
}
