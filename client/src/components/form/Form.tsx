import { useContext, useEffect, useState } from 'react';
import {
  MisdemeanourRecord,
  MISDEMEANOURS,
  Misdemeanours,
} from '../../data/MisdemeanourRecord';
import getCitizenId from '../../helpers/CitizenId';
import getMisdemeanourText from '../../helpers/MisdemeanourDescription';
import MisdemeanourContext, {
  IMisdemeanourContext,
} from '../../hooks/MisdemeanourContext';
import { NameValueStringPair } from '../../interfaces/SelectOptionChoices';
import FormButton from './FormButton';
import FormOutcome from './FormOutcome';
import FormSelectInput from './FormSelectInput';
import FormTextArea from './FormTextArea';
import FormTextInput from './FormTextInput';
import FormValidationMessage from './FormValidationMessage';
import Confession from '../pages/Confession';

const Form: React.FC = () => {
  const { misdemeanourList, misdemeanourSetter } =
    useContext<IMisdemeanourContext>(MisdemeanourContext);
  const [subject, setSubject] = useState<string>('');
  const [option, setOption] = useState<Misdemeanours | '' | 'talk'>('');
  const [options, setOptions] = useState<NameValueStringPair[]>([]);
  const [details, setDetails] = useState<string>('');
  const [record, setRecord] = useState<MisdemeanourRecord>();
  const [showValidation, setShowValidation] = useState<boolean>(false);

  useEffect(() => {
    const list = [
      ...MISDEMEANOURS.map((item, index) => ({
        name: index.toString(),
        value: item,
      })),
      { name: 'talk', value: 'talk' },
    ] as NameValueStringPair[];

    setOptions(list);
  }, []);

  const buildMisdemeanourRecord = () => {
    if (option === '') {
      setShowValidation(true);
    } else {
      if (option === 'talk') {
        console.log(`Citizen Id: ${getCitizenId()}`);
        console.log(`I just want to talk...`);
        console.log(`Date: ${new Date().toLocaleDateString()}`);
        console.log(`Misdemeanour Subject: ${subject}`);
        console.log(`Misdemeanour Details: ${details}`);
      } else {
        const newRecord = {
          citizenId: getCitizenId(),
          misdemeanour: option as Misdemeanours,
          date: new Date().toLocaleDateString(),
          misdemeanourDescription: getMisdemeanourText(option),
          misdemeanourSubject: subject,
          misdemeanourDetail: details,
        };

        setRecord(newRecord);
      }
    }
  };

  useEffect(() => {
    misdemeanourList &&
      record &&
      misdemeanourSetter([...misdemeanourList, record]);
    setSubject('');
    setOption('');
    setDetails('');
    setShowValidation(false);
  }, [record]);

  return (
    <>
    <Confession/>
      {record && <FormOutcome {...record} />}
      <form className='form'>
        <label htmlFor='formTextInput' className='form--label'>
          Subject:{' '}
        </label>
        <FormTextInput
          text={subject}
          update={setSubject}
          placeholder={'subject'}
        />

        <label htmlFor='misdemeanourSelect' className='form--label'>
          Reason for contact:{' '}
        </label>
        <FormSelectInput
          selectedOption={option}
          optionList={options}
          update={setOption}
        />

        <label htmlFor='details' className='form--label'>
          Details:{' '}
        </label>
        <FormTextArea text={details} update={setDetails} />

        <FormButton
          buttonLabel={'Confess'}
          saveForm={buildMisdemeanourRecord}
        />
        {option === '' && showValidation && <FormValidationMessage />}
      </form>
    </>
  );
};

export default Form;
