import {MapPin, Calendar,ArrowRight, Settings2, UserRoundPlus} from "lucide-react"
import { FormEvent, useState } from "react"
import { ConfirmInvite } from "./pages/companents/confirmVacation"
import { ModalInvite } from "./pages/companents/modalInvite"



export function App() {
  const [isGuestInputOpen,setIsGuestInputOpen] = useState(false)
  const [openModalInvite, setOpenModalInvite] = useState(false)
  const [openToConfirmVacation,setOpenToConfirmVacation ] =useState(false)

  function openGuestInput(){
    setIsGuestInputOpen(true)
  }

  function closeGuestInput(){
    setIsGuestInputOpen(false)
  }


  function modalInvite (){
    setOpenModalInvite(true)
  }

  function closeModalInvite(){
    setOpenModalInvite(false)
    
  }
  const [emailToInvite, setEmailToInvite] = useState([])



  function addNewEmailToInvite(event : FormEvent<HTMLFormElement>){
    event.preventDefault()
    
    const data =new FormData(event.currentTarget)
    const email =data.get('email')?.toString()

    if(!email){
      return
    }

    if(emailToInvite.includes(email)){
      return (
        <span>Email ja adicionado! tente adicionar outro</span>
      )
    }

    setEmailToInvite([
      ...emailToInvite,
      email
    ])

    event.currentTarget.reset() 

  }

  function removeEmailToInvite (emailToRemove:string){
    const newEmailList = emailToInvite.filter(email => email!==  emailToRemove)

    setEmailToInvite(newEmailList)

  }

  function confirmVacation(){
    setOpenToConfirmVacation(true)
  }

  function closeToconfirmVacation(){
    setOpenToConfirmVacation(false)
  }

  
  {/**Main */}
  return (
    <div className="h-screen flex items-center justify-center bg-patter bg-no-repeat bg-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10 ">
          
          <div className="flex flex-col items-center gap-3">

            <img src="../Public/logo.svg" alt="plann.er" />
            <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>

          </div>

            <div className="space-y-4">

            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">     

              <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400"/> 
                <input disabled={isGuestInputOpen} type="text" placeholder="Para onde voce vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
              </div>

              <div className="flex items-center gap-2 flex-1 ">
                <Calendar className="size-5 text-zinc-400"/>
                <input disabled={isGuestInputOpen} type="text" placeholder="Quando ?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
              </div>
    
              <div className="w-px h-6 bg-zinc-800"/>

              {isGuestInputOpen ? (
                <button onClick={closeGuestInput} className=" flex  items-center bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium gap-2 hover:bg-zinc-700">
                Alterar loca/data
                <Settings2 className=" size-5"/>
              </button>
              ) : (
                <button onClick={openGuestInput} className=" flex  items-center bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium gap-2 hover:bg-lime-400">
                Continuar
                <ArrowRight className="text-lime-950 size-5"/>
              </button>
              )}
            </div>
            {isGuestInputOpen &&(
              <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
          

              <button type="button" onClick={modalInvite} className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400"/> 
               {emailToInvite.length>0 ?
               ( <span className="bg-transparent text-lg placeholder-zinc-100 outline-none" >{emailToInvite.length} pessoa(s) convidada(s) </span>):
               ( <span className="bg-transparent text-lg placeholder-zinc-400 outline-none" >Quem estara na viagem? </span>)}
              </button>

              {openModalInvite &&(
                <ModalInvite 
                addNewEmailToInvite={addNewEmailToInvite}
                closeModalInvite={closeModalInvite}
                emailToInvite={emailToInvite}
                removeEmailToInvite={removeEmailToInvite}/>
              )}


              <div className="w-px h-6 bg-zinc-800"/>

              <button type="button" onClick={confirmVacation} className=" flex  items-center bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium gap-2 hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight className="text-lime-950 size-5"/>
              </button>
              {openToConfirmVacation && (
                <ConfirmInvite closeToconfirmVacation={closeToconfirmVacation} />
                )}
            </div>
            )}
          </div>

          <p className="text-zinc-500 text-sm">
              Ao planejar sua viagem pela plann.er você automaticamente concorda
            com nossos <a href="#">termos de uso</a> e <a href="#">políticas de privacidade</a>.
          </p>
        </div>
      </div>
  )
}
