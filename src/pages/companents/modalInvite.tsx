import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react"

interface ModalInviteProps {
    closeModalInvite: ()=>void,
    emailToInvite:string[],
    addNewEmailToInvite: (event : FormEvent<HTMLFormElement>)=> void,
    removeEmailToInvite: (email: string)=>void

}

export function ModalInvite (
    {addNewEmailToInvite
    ,closeModalInvite,
    emailToInvite,
    removeEmailToInvite}:ModalInviteProps){
   

return(
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="w-[640px] bg-zinc-900 rounded-xl shadow-shape py-5 px-6 space-y-5">
      <div className="space-y-2">
        <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados </h2>
            <button type="button" onClick={closeModalInvite}>
              <X className="size-5"/>
            </button>
          </div>
          <p className="text-sm text-zinc-400 text-left">
            Os convidados irão receber e-mails para confirmar a participação na viagem.
          </p>
      </div>

      <div className="flex flex-wrap gap-2">{/**box de emails  */}
        {emailToInvite.map(email =>{
          return(
            <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2 ">
            <span className="text-zinc-300">{email}</span>
            <button type="button" onClick={()=> removeEmailToInvite(email)}>
              <X className="size-4 text-zinc-400"/>
            </button>
          </div>
          )
        })}
      </div>

      <div className="w-full h-px bg-zinc-800"/>

      <form onSubmit={addNewEmailToInvite} className="bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2 p-2.5 justify-between">
        <div className="flex gap-2 items-center" >
        <AtSign className="size-5 text-zinc-400"/>
        <input 
          type="email"
          name="email"
          placeholder="Digite o e-mail do convidado" 
          className="bg-transparent text-lg placeholder-zinc-400 outline-none " 
        />
        </div>
        <button type="submit" className=" flex  items-center bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium gap-2 hover:bg-lime-400">
            Convidar
            <Plus className="text-lime-950 size-5"/>
        </button>

      </form>
      
    </div>
  </div> 
)
}