import { faFire } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IMCGoal = () => {
  return (
    <div
      id="info"
      className="bg-gray-100 w-80 flex flex-col p-4 gap-3 rounded-lg shadow-md mt-5"
    >
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={faFire}
          className="bg-red-300 rounded-full p-1" // ALTERA TITULO NA PERCA 10% < é REALISTA 10% > é beneficios de saude
          // NO GANHO é GET MOVING: pra tudo so muda %
          // descricao é de acordo tambem com % e mostrnado estudos relacionados a quatindade
        />
        <h2 className="font-bold text-gray-600 text-lg">
          REALISTIC GOAL: lose X% of your weight UNLOCK HEALTH BENEFITS: lose
          13% of your weight GET MOVING: gain 4% of your weight
        </h2>
      </div>
      <span className="font-medium text-gray-500 text-sm">
        According to the CDC, burning off 4 kg per month is safe, healthy, and
        can reduce your risk of chronic health problems like type 2 diabetes and
        heart disease.
      </span>
    </div>
  );
};

export default IMCGoal;
