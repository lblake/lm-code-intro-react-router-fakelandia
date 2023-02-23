interface Props {
  text: string;
  update: React.Dispatch<React.SetStateAction<string>>;
}
const FormTextArea: React.FC<Props> = ({ text, update }) => {
  return (
    <>
      <textarea
        id='details'
        className='form--rowitem'
        value={text}
        onChange={(e) => update(e.target.value)}
      />
    </>
  );
};

export default FormTextArea;
