import { Calendar, MapPin, Settings2 } from "lucide-react"

export function TripDetail(){
    
    return(
        <div className="max-w-6xl py-10 px-6 mx-auto">
            <div className="px-4 h-16 bg-zinc-900 rounded-xl flex justify-between items-center ">
                <div className="flex gap-2">
                    <MapPin className="size-5 text-zinc-400"/>
                    <span className="text-zinc-100"> Florianopolis, Brasil</span>
                </div>
                <div className="flex items-center gap-5">
                    <div  className="flex gap-2">
                        <Calendar className="size-5 text-zinc-400"/>
                        <span className="text-zinc-100">17 a 23 de Agosto</span>
                    </div>

                    <div className="w-px h-6 bg-zinc-800 mx-auto"/>  {/** Separador  */}

                    <button className="w-[195px] bg-zinc-800 rounded-lg px-4 h-9 flex items-center gap-2 text-zinc-200">
                        Alterar local/data
                        <Settings2 className="size-5 text-zinc-200"/>
                    </button>
                </div>
            </div>
            <div className="flex w-full gap-6">
                    <div className="px-6 bg-zinc-500 w-1/2">
                        <h1>Atividades</h1>
                    </div>
                    <div className="px-6 bg-zinc-500 w-1/2">
                        <h1>Links importantes</h1>
                    </div>
                </div>
        </div>
    )
}