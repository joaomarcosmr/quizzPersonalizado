import { faWeight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

type Props = {
  IMC: number;
};

const IMCCalculation = ({ IMC }: Props) => {
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (IMC < 18.5) {
      setStatus("MAGREZA");
    } else if (IMC >= 18.5 && IMC < 25) {
      setStatus("NORMAL");
    } else if (IMC >= 25 && IMC < 30) {
      setStatus("SOBREPESO");
    } else if (IMC >= 30 && IMC < 40) {
      setStatus("OBESIDADE");
    } else {
      setStatus("OBESIDADE GRAVE");
    }
  }, [IMC]);

  const getStatusColor = () => {
    switch (status) {
      case "MAGREZA":
        return "bg-yellow-300";
      case "NORMAL":
        return "bg-green-300";
      case "SOBREPESO":
        return "bg-red-100";
      case "OBESIDADE":
        return "bg-red-200";
      case "OBESIDADE GRAVE":
        return "bg-red-300";
    }
  };

  const getStatusDescription = () => {
    switch (status) {
      case "MAGREZA":
        return "Você tem algum trabalho pela frente, mas é ótimo que esteja dando esse primeiro passo. Vamos usar seu IMC para criar um programa personalizado pra você.";
      case "NORMAL":
        return "Você está começando de um ótimo ponto! Agora vamos usar seu IMC para criar um programa adaptado às suas necessidades.";
      case "SOBREPESO":
        return "Você tem algum trabalho pela frente, mas é ótimo que esteja dando esse primeiro passo. Vamos usar seu IMC para criar um programa de perda de peso personalizado pra você.";
      case "OBESIDADE":
        return "Você pode ganhar muito ao perder um pouco de peso. Vamos usar seu IMC para criar o programa de perda de peso personalizado pra o que você precisa.";
      case "OBESIDADE GRAVE":
        return "Você está numa situação delicada. Vamos usar seu IMC para criar o programa de perda de peso para resolver isso!.";
    }
  };

  return (
    <div
      id="info"
      className={`w-80 flex flex-col p-4 gap-3 rounded-lg shadow-md mt-5 ${getStatusColor()}`}
    >
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={faWeight}
          className={`rounded-full p-1 ${getStatusColor()}`}
        />
        <h2 className="font-extrabold text-gray-600 text-lg">
          Seu IMC é {IMC}, o que é considerado {status}!
        </h2>
      </div>
      <span className="font-bold text-gray-500 text-sm">
        {getStatusDescription()}
      </span>
    </div>
  );
};

export default IMCCalculation;
