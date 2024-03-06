import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";

export function App() {

  const valuesSchema = z.object({
    name: z.string(),
    age: z.coerce.number(),
    language: z.string()
  })

  const {register, handleSubmit} = useForm<ValuesSchema>({
    resolver: zodResolver(valuesSchema)
  })

  type ValuesSchema = z.infer<typeof valuesSchema>

  function onSubmit(values: ValuesSchema){
    alert(`Olá ${values.name}, você tem ${values.age} anos e já está aprendendo ${values.language}!`)

    const answer = prompt(`Você gosta de estudar ${values.language}? Responda com o número 1 para SIM ou 2 para NÃO.`)
    if (answer == "1"){
      alert("Muito bom! Continue estudando e você terá muito sucesso.")
    }
    if (answer == "2"){
        alert("Ahh que pena... Já tentou aprender outras linguagens?")
    }
  }

  return ( 
    <div className="max-w-md my-20 m-auto py-14 space-y-5 rounded-md bg-slate-700">
      <div className="flex justify-center">
        <h1 className="text-gray-200 text-xl">#7DaysOfCode</h1>
      </div>
      <div className="mx-12 flex flex-col">
        <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col gap-3 space-y-1">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-slate-200">Qual o seu nome?</label>
              <input {...register("name")} type="text" placeholder="Digite seu nome..." className="border-none rounded-sm outline-none p-1" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="age" className="text-slate-200">Qual sua idade?</label>
              <input {...register("age")} type="number" placeholder="Digite sua idade..." className="border-none rounded-sm outline-none p-1" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="language" className="text-slate-200">Qual linguagem de programação você está estudando?</label>
              <input {...register("language")} type="text" placeholder="Digite sua linguagem de programação..." className="border-none rounded-sm outline-none p-1" />
            </div>
            <button type="submit" className="mt-10 text-slate-200 rounded-md bg-slate-800 m-auto px-4 py-2 hover:text-green-400 hover:bg-slate-900 transition">Submit</button>
        </form>
      </div>
    </div>
  ) 
} 

