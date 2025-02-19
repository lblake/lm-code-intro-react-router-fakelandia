import React, { useContext, useEffect, useState } from 'react';
import {
  MisdemeanourRecord,
  Misdemeanours,
  MISDEMEANOURS,
} from '../../data/MisdemeanourRecord';
import FilteredMisdemeanourContext from '../../hooks/FilteredMisdemeanourContext';
import MisdemeanourContext, {
  IMisdemeanourContext,
} from '../../hooks/MisdemeanourContext';
import MisdmeanourTable from '../rows_and_tables/MisdemeanourTable';
import FormSelectInput from '../form/FormSelectInput';

const Misdemeanour: React.FC = () => {
  const { misdemeanourList } =
    useContext<IMisdemeanourContext>(MisdemeanourContext);
  const [filtered, setFiltered] =
    useState<MisdemeanourRecord[]>(misdemeanourList);
  const [option, setOption] = useState<Misdemeanours | '' | 'talk'>('');

  const options = MISDEMEANOURS.map((item, index) => ({
    name: index.toString(),
    value: item,
  }));

  useEffect(() => {
    if (option !== '') {
      const filteredRecords = misdemeanourList.filter(
        (rec) => rec.misdemeanour === option
      );
      setFiltered([...filteredRecords]);
    } else {
      setFiltered([...misdemeanourList]);
    }
  }, [misdemeanourList, option]);

  return (
    <>
      <h1>Misdemeanours</h1>
      <label className='filter--label' htmlFor='misdemeanourSelect'>
        Filter by Misdemeanour:
      </label>
      <FormSelectInput
        selectedOption={option}
        optionList={options}
        update={setOption}
      />
      <FilteredMisdemeanourContext.Provider value={filtered}>
        <MisdmeanourTable />
      </FilteredMisdemeanourContext.Provider>
    </>
  );
};

export default Misdemeanour;
