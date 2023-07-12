import { useState, useEffect } from 'react';
import { BiSolidCheckCircle } from 'react-icons/bi';

export default function SearchMenu({ keyword, setKeyword, options, selectedMenu, setSelectedMenu }) {

  const [menu, setMenu] = useState(options);

  useEffect(() => {
    setMenu(options.filter((item) => {
      return item.name.toLowerCase().includes(keyword.toLowerCase());
    }))
  }, [keyword])

  return (
    <div>
      {
        selectedMenu && (
          <div className={"flex justify-between items-center px-3 py-2 border-b border-b-slate-600 " + (menu.length !== 1 ? "" : "")}>
            <div>
              {selectedMenu.name}
            </div>
            <div>
              <BiSolidCheckCircle className="text-sky-500 w-6 h-6" />
            </div>
          </div>
        )
      }
      <div className="h-80 overflow-y-scroll">
        {
          menu.length === 0 ? (
            <div className="text-center mt-4">Data tidak ditemukan!</div>
          ) : (
            menu.map((item, index) => {
              if (selectedMenu === null || item.uuid !== selectedMenu.uuid) {
                return (
                  <div 
                    key={"country " + item.uuid}
                    className={"pl-3 py-2 cursor-pointer " + (index !== menu.length-1 ? "border-b border-b-slate-300" : "")}
                    onClick={() => {
                      setSelectedMenu(item);
                      setMenu(options);
                      setKeyword("");
                    }}
                  >
                    {item.name}
                  </div>
                )
              }
            })
          )
        }
      </div>
    </div>
  );
} 