import { FaBell } from 'react-icons/fa'

function Header({total, userName, title, img}) {

  return (
    <>
        <header className="w-full p-3 pl-6 flex place-items-center justify-between">
            <h1 className="text-4xl">{title}</h1>
            <div className="flex place-items-center space-x-6">
                <h1 className="text-xl">Balance:<span className="text-2xl font-bold"> ${ total }</span></h1>
                <FaBell className="text-2xl" />
                <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="user" />
                <h1 className="font-bold">{ userName }</h1>
            </div>
        </header>
    </>
  )
}
export default Header