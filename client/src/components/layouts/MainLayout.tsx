import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import generateMisdemeanours from '../../data/GenerateMisdemenours';
import { MisdemeanourRecord } from '../../data/MisdemeanourRecord';
import getMisdemeanourText from '../../helpers/MisdemeanourDescription';
import MisdemeanourContext from '../../hooks/MisdemeanourContext';

const MainLayout: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<MisdemeanourRecord[]>([]);

  useEffect(() => {
    const callApi = async () => {
      const records = await generateMisdemeanours(10);
      records.map(
        (record) =>
          (record.misdemeanourDescription = getMisdemeanourText(
            record.misdemeanour
          ))
      );
      setMisdemeanours([...records]);
    };
    callApi();
  }, []);

  return (
    <>
      <main className='container'>
        <MisdemeanourContext.Provider
          value={{
            misdemeanourList: misdemeanours,
            misdemeanourSetter: setMisdemeanours,
          }}
        >
          <Outlet />
        </MisdemeanourContext.Provider>
      </main>
    </>
  );
};

export default MainLayout;
