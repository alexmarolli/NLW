import { Mail, User, X } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface confirmInviteProps{
    closeToconfirmVacation : ()=> void
}

export function ConfirmInvite({
    closeToconfirmVacation, }:
     confirmInviteProps
    ){

    const navigate =useNavigate()

    function tripDetail(){
      navigate('/tripDetail/123')
    }
      
    return(
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-[640px] bg-zinc-900 rounded-xl shadow-shape py-5 px-6 space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between">
                <h2 className="text-lg font-semibold">Confirmar criação da viagem</h2>
                <button type="button" onClick={closeToconfirmVacation}>
                  <X className="size-5"/>
                </button>
              </div>
              <p className="text-sm text-zinc-400 text-left">
              Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis, Brasil</span> nas datas de <span className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
              </p>
          </div>

          <div className="flex flex-wrap gap-2">{/**box de emails  */}
           
          </div>

          <div className="w-full h-px bg-zinc-800"/>

          <form  className="space-y-4">
            <div className="bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2 p-2.5" >
            <User className="size-5 text-zinc-400"/>
            <input 
              name="Nome"
              placeholder="Seu nome completo" 
              className="bg-transparent text-lg placeholder-zinc-400 outline-none " 
            />
            </div>

            <div className="bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2 p-2.5" >
            <Mail className="size-5 text-zinc-400"/>
            <input 
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal" 
              className="bg-transparent text-lg placeholder-zinc-400 outline-none " 
            />
            </div>

            <button type="button" onClick={tripDetail} className=" flex  items-center w-full justify-center bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium gap-2 hover:bg-lime-400">
            Confirmar criação da viagem
            </button>

          </form>
          
        </div>
      </div> 
    )
  }
