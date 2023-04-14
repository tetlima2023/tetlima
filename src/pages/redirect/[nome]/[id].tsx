import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import useSWR from "swr"

export type APiTypes = {
  id: string
  nome: string
  url: string
}

export default function Redirect() {
  const router = useRouter()
  const { id } = router.query
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data } = useSWR<APiTypes>(`/api/link/${id}`, fetcher)

  if (data) {
    router.push(data.url)
  }

  return (
    <>
    </>
  )
}