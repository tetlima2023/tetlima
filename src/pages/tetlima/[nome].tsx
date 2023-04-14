import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import useSWR from "swr"
import { APiTypes } from "../api/types"



export default function Redirect() {
  const router = useRouter()
  const { nome } = router.query
  const fetcher = (url: string) => fetch(url).then(r => r.json())
  const { data } = useSWR<APiTypes[]>(`/api/links`, fetcher)

  if (data) {
    const newData = data.find(dat => dat.nome === nome)
    if(newData) {
      router.push(newData.url)
    }
  }

  return (
    <>
    </>
  )
}