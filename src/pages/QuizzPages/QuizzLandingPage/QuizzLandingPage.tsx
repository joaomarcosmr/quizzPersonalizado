import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const QuizzLandingPage = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-2 mt-8 text-center">
        Personalizado pro <br /> seu biotipo!
      </h1>
      <p className="text-lg mb-8">Resultados já na primeira semana</p>

      <div className="bg-gray-100 rounded-lg shadow-lg max-w-3xl w-full">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mt-4 p-4">
        <h1 className="text-3xl font-bold mb-10 mt-4">Seu plano está pronto!</h1>
        <div className="text-center mb-4">
          <p>
            Objectif: <strong>Perdre du poids</strong>
          </p>
          <p>
            Poids ciblé: <strong>65 kg</strong>
          </p>
        </div>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <label className="flex justify-between items-center">
              <span>Essai d'1 semaine</span>
              <span className="font-bold">R$9,99</span>
            </label>
            <p className="text-gray-500 text-sm">PLAN 4-LA SEMAINE</p>
          </div>
          <div className="border p-4 rounded-lg bg-red-100">
            <label className="flex justify-between items-center">
              <span className="font-bold text-red-600">Plan 4-Semaines</span>
              <span className="font-bold text-red-600">R$8,56</span>
            </label>
            <p className="text-gray-500 text-sm">R$239,70</p>
          </div>
          <div className="border p-4 rounded-lg">
            <label className="flex justify-between items-center">
              <span>Plan 12-Semaines</span>
              <span className="font-bold">R$4,27</span>
            </label>
            <p className="text-gray-500 text-sm">R$359,10</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <button className="bg-red-500 text-white py-2 px-4 rounded-full">
            OBTENIR MON PROGRAMME
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mt-8 p-4">
        <h2 className="text-xl font-bold text-center mb-4">
          Les points forts de votre programme
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="mr-2">🏋️</span>
            <div>
              <p className="font-bold">
                Simples séances d'entraînement en salle
              </p>
              <p className="text-gray-500 text-sm">
                pour mincir et se tonifier facilement à la maison
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">⏱️</span>
            <div>
              <p className="font-bold">Exercices de 10 à 15 minutes</p>
              <p className="text-gray-500 text-sm">
                pour obtenir une taille fine, des fesses plus rondes et des
                cuisses plus fines.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">🏠</span>
            <div>
              <p className="font-bold">Exercices pour débutants</p>
              <p className="text-gray-500 text-sm">
                que vous pouvez faire facilement à la maison
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">🍽️</span>
            <div>
              <p className="font-bold">Plan alimentaire personnalisé</p>
              <p className="text-gray-500 text-sm">
                avec plus de 1000 délicieuses recettes pour perdre du poids
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="mr-2">💡</span>
            <div>
              <p className="font-bold">Conseils d'experts et astuces</p>
              <p className="text-gray-500 text-sm">
                pour améliorer votre mode de vie et ne pas reprendre de poids
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mt-8 p-4">
        <h2 className="text-xl font-bold text-center mb-4">
          Des résultats qui nous rendent fiers
        </h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
        >
          <div>
            <img
              src="../src/assets/images/testimonial1.jpg"
              alt="Testimonial 1"
            />
            <p className="legend">Eun, -5 kg</p>
            <p className="text-gray-500 text-sm px-4">
              Le programme vous aide à suivre tout ce dont vous avez besoin pour
              vous aider à perdre du poids ou à le conserver, de l'eau à la
              nourriture en passant par les...
            </p>
          </div>
          <div>
            <img
              src="../src/assets/images/testimonial2.jpg"
              alt="Testimonial 2"
            />
            <p className="legend">Nom, -X kg</p>
            <p className="text-gray-500 text-sm px-4">
              Le programme vous aide à suivre tout ce dont vous avez besoin pour
              vous aider à perdre du poids ou à le conserver, de l'eau à la
              nourriture en passant par les...
            </p>
          </div>
        </Carousel>
        <div className="text-center mt-6">
          <button className="bg-red-500 text-white py-2 px-4 rounded-full">
            En savoir plus
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mt-8 p-4">
        <h2 className="text-xl font-bold text-center mb-4">
          Les utilisateurs aiment nos plans
        </h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <p className="font-bold">JD</p>
            <p className="text-gray-500 text-sm">★★★★★</p>
            <p className="text-gray-500 text-sm">
              L'application BetterMe a une façon unique de rester en contact
              avec moi tout au long de la journée. Elle me donne des objectifs
              réalisables et m'incite à être plus active.
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <p className="font-bold">Joelle</p>
            <p className="text-gray-500 text-sm">★★★★★</p>
            <p className="text-gray-500 text-sm">
              J'adore ! J'aime comment le défi de la marche m'a donné confiance
              en mon corps. Mon humeur a changé ! BetterMe a changé ma vision de
              l'exercice et de la santé.
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <p className="font-bold">Firdevs1945</p>
            <p className="text-gray-500 text-sm">★★★★★</p>
            <p className="text-gray-500 text-sm">
              BetterMe m'aide à rester motivé et à atteindre mes objectifs de
              mise en forme. C'est un excellent outil pour suivre mes progrès.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg max-w-md w-full mt-8 p-4">
        <h2 className="text-xl font-bold text-center mb-4">
          garantie satisfait ou remboursé de 30 jours
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          Nous sommes convaincus que notre plan fonctionnera pour vous et que
          vous devriez voir des résultats visibles en seulement 4 semaines !
          Nous sommes même prêts à vous rembourser si vous pouvez prouver que
          vous avez suivi le programme mais que vous n'avez pas obtenu de
          résultats.
        </p>
        <p className="text-gray-500 text-sm">
          Pour en savoir plus sur les limitations applicables, consultez notre{" "}
          <a href="#" className="text-blue-500">
            politique de remboursement
          </a>
          .
        </p>
        <p className="text-gray-500 text-xs mt-4">
          BetterMe International Limited | Themistokli Dervi 39, 1st floor,
          Office 104, 1066, Nicosia, Cyprus
        </p>
      </div>
    </section>
  );
};

export default QuizzLandingPage;
