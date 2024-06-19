import { faWeight } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IMCCalculation = () => {
  return (
    <div
      id="info"
      className="bg-gray-100 w-80 flex flex-col p-4 gap-3 rounded-lg shadow-md mt-5" // altera o bg de acordo com o status
    >
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={faWeight}
          className="bg-red-300 rounded-full p-1" // altera o bg de acordo com o status
        />
        <h2 className="font-bold text-gray-600 text-lg">
          Seu IMC é X, o que é considerado Y!
        </h2>
      </div>
      <span className="font-medium text-gray-500 text-sm">
        Youre starting from a great place! Now we’ll use your BMI to create a
        program tailored to your needs.
      </span>
    </div>
  );
};

export default IMCCalculation;
