import useSWR from "swr"
import axios from "axios"
import useSWRMutation from 'swr/mutation'
import { fetcher } from "@/pages/api/fetcher"
import { LinkSimple, Trash } from "@phosphor-icons/react"

type CartType = {
  id: string
  nome: string
  url: string
}

async function RemoveLink(url: string) {
  return await axios.delete(url)
}

export const Card = () => {
  const { data: link } = useSWR<CartType[]>(`/api/links`, fetcher)
  const { trigger } = useSWRMutation(`/api/link/`, RemoveLink)

  function handleCopy(copy: string) {
    navigator.clipboard.writeText(`https://redirect-hxsggsz.vercel.app/tetlima/${copy}`)
  }

  async function handleDelete(id: string) {
    await trigger()
  }

  return (
    <>
      {link?.map(item => (
        <div key={item.id} className="bg-gray-300 text-lg font-bold rounded-lg w-[40vw] max-md:w-[90vw]">
          <header className="bg-gray-500 flex justify-between text-3xl items-center p-2 rounded-t-lg">
            <h1>Nome: {item.nome}</h1>
            <Trash onClick={() => handleDelete(item.id)} cursor="pointer" size={40} weight="bold" />
          </header>

          <div className="p-2 text-black">
            <h1>Link: {item.url}</h1>
            <div onClick={() => handleCopy(item.nome)} className="flex cursor-pointer pt-2 gap-2">
              <LinkSimple size={30} weight="bold" />
              <h1>: {`https://redirect-hxsggsz.vercel.app/tetlima/${item.nome}`}</h1>
            </div>
          </div>

        </div>
      ))}
    </>
  )
}