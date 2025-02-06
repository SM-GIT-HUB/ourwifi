'use client'

import { useState } from "react"

function Search({ names, ips, macs }) {
    const [value, setValue] = useState("");

    const filteredNames = names.filter(name => name.toLowerCase().includes(value.toLowerCase()));
    const filteredIps = ips.filter(ip => ip.toLowerCase().includes(value.toLowerCase()));
    const filteredMacs = macs.filter(mac => mac.toLowerCase().includes(value.toLowerCase()));

    const labelCls = "text-center font-extrabold text-[20px] sm:text-[30px] border border-black rounded-[4px]";
    const itemCls = "p-[2px] sm:p-1.5";

  return (
    <div className="flex flex-col items-center justify-center gap-[10px]">
        <div>
            <div className="grid grid-cols-3 gap-4 mt-[50px]">
            <div className="border p-[2px] sm:p-2 border-blue-600 rounded-[4px] max-h-[500px] sm:max-h-[400px] overflow-auto">
                <h2 className={labelCls}>Names</h2>
                <ul className="text-center">
                {
                    filteredNames.length > 0 ? 
                    filteredNames.map((name, index) => (
                    <li key={index} className={itemCls}>{name}</li>
                    )) : <li>No match found</li>
                }
                </ul>
            </div>

            <div className="border p-[2px] sm:p-2 border-blue-600 rounded-[4px]">
                <h2 className={labelCls}>IPs</h2>
                <ul className="text-center">
                {
                    filteredIps.length > 0 ? 
                    filteredIps.map((ip, index) => (
                    <li key={index} className={itemCls}>{ip}</li>
                    )) : <li>No match found</li>
                }
                </ul>
            </div>

            <div className="border p-[2px] sm:p-2 border-blue-600 rounded-[4px]">
                <h2 className={labelCls}>MACs</h2>
                <ul className="text-center">
                {
                    filteredMacs.length > 0 ? 
                    filteredMacs.map((mac, index) => (
                    <li key={index} className={itemCls}>{mac}</li>
                    )) : <li>No match found</li>
                }
                </ul>
            </div>
            </div>
        </div>

        <div className="fixed bottom-[200px] sm:bottom-[100px] border rounded-[4px] p-[10px] border-sky-900">
            <input type="text" className="outline-none text-[18px] text-center" placeholder="SEARCH" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    </div>
  )
}

export default Search