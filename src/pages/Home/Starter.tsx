type Props = {};

const Stater = (props: Props) => {
  return (
    <section className='container'>
      <div id='title'>
        <h1 className='text-3xl text-red-400 font-extrabold text-center mt-8'>Um plano personalizado de Dieta Cetogênica</h1>
        <h3 className='mt-3 text-xl font-light text-center text-gray-900'>De acordo com sua <br/> <span className='font-bold text-gray-400'>IDADE </span> e seu <span className='font-bold text-gray-400'> OBJETIVO</span></h3>
      </div>

      <div id='subTitle' className='flex items-center justify-center flex-col'>
        <p className='mt-7 text-lg font-extrabold'>Questionário de 1 minuto de duração</p>
      </div>

      <div id="options">
        <div id='male'>
            <img src="" alt="" />
        </div>
        <div id='female'>
            <img src="" alt="" />
        </div>
      </div>

      <div id='optionsDescription' className='flex items-center justify-center'>
        <span className='text-center'>Ao selecionar o seu genêro e continuar <br/> você concorda com nossos <br/> 
        <a href="#">Termos de Serviço</a> | <a href="#">Políticas de Privacidade</a> <br/>
        Por favor veja antes de continuar!
        </span>
      </div>
    </section>
  );
};

export default Stater;
