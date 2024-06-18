type Props = {
  progressPercentagem: number
}

const Header = ({progressPercentage}: Props) => {

  
  return (
    <header className="container flex items-center flex-col justify-center gap-5">
      <section id="logoSection" className='mt-5'>
        <img src="" alt="Logo" />
      </section>

      <div className="w-3/4 bg-gray-300 rounded-full h-6 overflow-hidden">
        <div
          className="bg-green-500 h-full text-center text-white rounded-full"
          style={{ width: "10%" }}>
        </div>
      </div>
    </header>
  );
};

export default Header;
