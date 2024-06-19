import { faFire } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IMCInfo = () => {
  return (
    <div
      id="IMCInfo"
      className="bg-gray-100 w-80 flex flex-col p-4 gap-3 rounded-lg shadow-md mt-5"
    >
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={faFire}
          className="bg-red-300 rounded-full p-1"
        />
        <h2 className="font-bold text-gray-600 text-lg">
          Vamos calcular seu IMC!
        </h2>
      </div>
      <span className="font-medium text-gray-500 text-sm">
        O índice de massa corporal (IMC) é uma métrica da porcentagem de gordura
        corporal comumente usada para estimar os níveis de risco de potenciais
        problemas de saúde.
      </span>
    </div>
  );
};

export default IMCInfo;
