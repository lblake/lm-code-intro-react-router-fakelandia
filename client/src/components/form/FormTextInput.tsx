interface Props {
  text: string;
  placeholder: string;
  update: React.Dispatch<React.SetStateAction<string>>;
}

const FormTextInput: React.FC<Props> = ({ text, placeholder, update }) => {
  return (
    <>
      <input
        id='formTextInput'
        name='formTextInput'
        value={text}
        className='form--input'
        placeholder={placeholder}
        onChange={(e) => update(e.target.value)}
      />
    </>
  );
};

export default FormTextInput;
