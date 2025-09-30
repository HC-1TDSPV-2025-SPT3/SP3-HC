import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout"
import { Inicial } from "./pages/inicial"
import { Servicos } from "./pages/serviços"
import { Area_do_paciente } from "./pages/area_do_paciente"
import { Contato } from "./pages/contato"
import { Entrar } from "./pages/entrar"
import { Iniciar } from "./pages/iniciar"
import { Faq } from "./pages/faq"
import { Integrantes } from "./pages/integrantes"
import { AgendamentoForm } from "./components/agendamentoForm"
import { NotFound } from "./pages/not-found"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicial />} />
          <Route path='/servicos' element={<Servicos />} />
          <Route path='/agendamentos' element={<AgendamentoForm/>} />
          <Route path='/area_do_paciente' element={<Area_do_paciente />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/entrar' element={<Entrar />} />
          <Route path='/iniciar' element={<Iniciar />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/integrantes' element={<Integrantes />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
