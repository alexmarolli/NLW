import {MapPin, Calendar,ArrowRight} from "lucide-react"

export function App() {

  return (
    <div className="h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10 ">
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>

          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">

            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400"/> 
              <input type="text" placeholder="Para onde voce vai?" className="bg-transparent text-lg placeholder-zinc-400" />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400"/>
              <input type="text" placeholder="Quando ?" className="bg-transparent text-lg placeholder-zinc-400" />
            </div>

            <button className=" flex  items-center bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400">
              Continuar
              <ArrowRight className="text-lime-950 size-5"/>
            </button>
          </div>

          <p className="text-zinc-500 text-sm">
              Ao planejar sua viagem pela plann.er você automaticamente concorda
            com nossos <a href="#">termos de uso</a> e <a href="#">políticas de privacidade</a>.
          </p>
        </div>
      </div>
  )
}


