import { Graphic, Htm, JavaScript } from "../components/Tc";
function Tc() {
    return (
        <main className='TcMain'>
            <section className=" h-All flex justify-start items-center w-full p-2 font-jet">
                <div className="w-tre justify-start items-center m-10">
                    <h1 className="text-60">TECNOLOGIA QUE SE IMPLEMENTAR</h1>
                    <p className="text-Gr">En ciertas tecnologias, mi destreza es muy buena, en cambio en otras no.
                        Hasta la ultima acutalizacion..
                        DT-06.03.24 </p>
                </div>
            </section>
            <Graphic/>
            <Htm/>
            <JavaScript/>
        </main>
    )
}
export default Tc;
