import { FormEvent, useState } from "react"
import { Input } from '@/components/input';
import { Button } from "@/components/button";
import axios from 'axios';
import { APiTypes } from "./redirect/[nome]/[id]";
import useSWR from "swr"
import useSWRMutation from 'swr/mutation'

async function addOption(url: string, { arg }: { arg: { nome: string, url: string } }) {
  return await axios.post(url, arg)
}

export default function Home() {
  const [nome, setNome] = useState('')
  const [url, setUrl] = useState('')
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data } = useSWR<APiTypes[]>(`/api/links`, fetcher)
  const { trigger } = useSWRMutation('/api/links', addOption)

  async function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    try {
      await trigger({ nome, url })
      setNome('')
      setUrl('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form onSubmit={handleSubmit} className="w-[40vw] flex flex-col gap-3 max-md:w-[90vw]">
        <Input value={nome} onChange={(ev) => setNome(ev.currentTarget.value)} label="Nome" />
        <Input value={url} onChange={(ev) => setUrl(ev.currentTarget.value)} label="Link" />
        <Button isActive={nome && url !== '' ? false : true}>Enviar</Button>
      </form>

      <ul>
        {data?.map(dat => (
          <li key={dat.id}>
            <div>
              <p>nome: {dat.nome}</p>
              <p>link: {dat.url}</p>
              <p>url: {`https://redirect-hxsggsz.vercel.app/redirect/${dat.nome}/${dat.id}`}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
