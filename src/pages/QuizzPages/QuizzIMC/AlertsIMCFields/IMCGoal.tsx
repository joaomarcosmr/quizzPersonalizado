import { faFire } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

type Props = {
  weight: number;
  targetWeight: number;
  setTargetWeightIsValidPercentage: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  goalStatus: string;
  setGoalStatus: React.Dispatch<React.SetStateAction<string>>;
};

const IMCGoal = ({
  weight,
  targetWeight,
  setTargetWeightIsValidPercentage,
  setGoalStatus,
  goalStatus,
}: Props) => {
  const [weightGoalPercentage, setWeightGoalPercentage] = useState<number>(0);

  useEffect(() => {
    if (weight < targetWeight) {
      setGoalStatus("Ganhar");
      const percentage = (((targetWeight - weight) / weight) * 100).toFixed(2);
      setWeightGoalPercentage(parseFloat(percentage));
    } else {
      setGoalStatus("Perder");
      const percentage = (((weight - targetWeight) / weight) * 100).toFixed(2);
      setWeightGoalPercentage(parseFloat(percentage));
    }
  }, [weight, targetWeight]);

  const getStatusColor = () => {
    if (weightGoalPercentage < 10) {
      setTargetWeightIsValidPercentage(true);
      return "bg-green-200";
    } else if (weightGoalPercentage >= 10 && weightGoalPercentage < 15) {
      setTargetWeightIsValidPercentage(true);
      return "bg-green-200";
    } else if (weightGoalPercentage >= 15 && weightGoalPercentage < 33) {
      setTargetWeightIsValidPercentage(true);
      return "bg-green-200";
    } else {
      setTargetWeightIsValidPercentage(false);
      return "bg-red-200";
    }
  };

  const getStatusDescription = () => {
    if (weightGoalPercentage < 10) {
      return "Segundo o CDC, perder cerca de 4 kg por mês é seguro, saudável e pode reduzir o risco de problemas de saúde crônicos como diabetes tipo 2 e doenças cardíacas.";
    } else if (weightGoalPercentage >= 10 && weightGoalPercentage < 15) {
      return "Você terá muitos benefícios ao perder esse peso. Vamos usar seu IMC para criar o programa de perda de peso que você precisa.";
    } else if (weightGoalPercentage >= 15 && weightGoalPercentage < 33) {
      return "Você tem algum trabalho pela frente, mas o resultado será fantástico. Vamos usar seu IMC para criar um programa de perda de peso especialmente para você.";
    } else {
      return `Essa meta para sua altura pode ser classificado como ${goalStatus === 'Ganhar' ? 'acima do peso' : 'abaixo do peso'} e não é recomendado pela Organização Mundial da Saúde (OMS).`;
    }
  };

  return (
    <div
      id="info"
      className={`bg-gray-100 w-80 flex flex-col p-4 gap-3 rounded-lg shadow-md mt-5 ${getStatusColor()}`}
    >
      <div className={`flex items-center gap-2`}>
        <FontAwesomeIcon
          icon={faFire}
          className="rounded-full p-1 text-black"
        />
        <h2 className="font-bold text-gray-600 text-lg">
          {goalStatus} {Math.abs(weightGoalPercentage)}% de peso!
        </h2>
      </div>
      <span className="font-medium text-gray-500 text-sm">
        {getStatusDescription()}
      </span>
    </div>
  );
};

export default IMCGoal;
