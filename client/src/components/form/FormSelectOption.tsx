import { Misdemeanours } from '../../data/MisdemeanourRecord';

interface Props {
  value: string;
  display: string;
  misdemeanourOption: Misdemeanours | '' | 'talk';
  selectedOption: Misdemeanours | '' | 'talk';
}
const FormSelectOption: React.FC<Props> = ({
  display,
  value,
  selectedOption,
  misdemeanourOption,
}) => {
  return (
    <>
      {misdemeanourOption === selectedOption ? (
        <option value={value} selected>
          {display}
        </option>
      ) : (
        <option value={value}>{display}</option>
      )}
    </>
  );
};

export default FormSelectOption;
