import { FormEvent, useState } from "react"
import { Input } from '@/components/input';
import { Button } from "@/components/button";
import axios from 'axios';
import useSWR from "swr"
import useSWRMutation from 'swr/mutation'
import { APiTypes } from "./api/types";
import { Card } from '@/components/card';
import { fetcher } from "./api/fetcher";

async function addOption(url: string, { arg }: { arg: { nome: string, url: string } }) {
  return await axios.post(url, arg)
}

export default function Home() {
  const [nome, setNome] = useState('')
  const [url, setUrl] = useState('')
  const { data } = useSWR<APiTypes[]>(`/api/links`, fetcher)
  const { trigger, isMutating } = useSWRMutation('/api/links', addOption)

  async function handleDelete(id: string) {

  }

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
    <main className="flex min-h-screen flex-col items-center justify-start pt-4">
      <form onSubmit={handleSubmit} className="w-[40vw] flex flex-col gap-3 max-md:w-[90vw]">
        <Input value={nome} onChange={(ev) => setNome(ev.currentTarget.value)} label="Nome" />
        <Input value={url} onChange={(ev) => setUrl(ev.currentTarget.value)} label="Link" />
        <Button isActive={nome && url !== '' ? false : true || isMutating}>Enviar</Button>
      </form>

      <section className=" flex flex-col gap-4 pt-12">
        <Card />
      </section>
    </main>
  )
}
