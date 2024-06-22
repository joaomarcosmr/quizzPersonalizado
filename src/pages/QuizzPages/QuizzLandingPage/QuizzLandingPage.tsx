import React from "react";

type Props = {};

const QuizzLandingPage = (props: Props) => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-2 mt-4">Seu plano está pronto!</h1>
      <p className="text-lg mb-8">Resultados já na primeira semana</p>

      <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <div className="flex md:flex-row justify-around items-center">
          <div className="text-center mb-6 md:mb-0">
            <span className="block text-gray-500 mb-2">Agora</span>
            <img
              src="../src/assets/images/woman/results/normal.webp"
              alt="Current Body"
              className="w-48 mx-auto mb-4"
            />
            <div>
              <p className="text-gray-700">Gordura Corporal</p>
              <p className="text-xl font-bold mb-2">Alta</p>
              <p className="text-gray-700">Vida saúdavel</p>
              <p className="text-xl font-bold mb-4">Baixa</p>
              <div className="flex justify-center space-x-2">
                <div className="h-2 w-10 bg-green-500 rounded"></div>
                <div className="h-2 w-10 bg-green-500 rounded"></div>
                <div className="h-2 w-10 bg-green-200 rounded"></div>
                <div className="h-2 w-10 bg-green-200 rounded"></div>
              </div>
            </div>
          </div>
          
          <div className="m-2"></div>

          <div className="text-center mb-6 md:mb-0">
            <span className="block text-gray-500 mb-2">Sua meta</span>
            <img
              src="../src/assets/images/woman/results/forte.webp"
              alt="Goal Body"
              className="w-48 mx-auto mb-4"
            />
            <div>
              <p className="text-gray-700">Gordura Corporal</p>
              <p className="text-xl font-bold mb-2">Pouca</p>
              <p className="text-gray-700">Vida saúdavel</p>
              <p className="text-xl font-bold mb-4">Avançada</p>
              <div className="flex justify-center space-x-2">
                <div className="h-2 w-10 bg-green-500 rounded"></div>
                <div className="h-2 w-10 bg-green-500 rounded"></div>
                <div className="h-2 w-10 bg-green-500 rounded"></div>
                <div className="h-2 w-10 bg-green-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizzLandingPage;