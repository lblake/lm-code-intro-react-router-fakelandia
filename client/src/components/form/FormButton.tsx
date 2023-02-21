interface Props {
  buttonLabel: string;
  saveForm: Function;
}

const FormButton: React.FC<Props> = ({ buttonLabel, saveForm }) => {
  return (
    <>
      <button
        className='form--button'
        id='button'
        onClick={(e) => {
          e.preventDefault();
          saveForm();
        }}
      >
        {buttonLabel}
      </button>
    </>
  );
};

export default FormButton;
