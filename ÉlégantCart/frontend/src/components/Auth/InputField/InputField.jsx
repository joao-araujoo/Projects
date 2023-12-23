export default function InputField(props) {
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <label htmlFor={props.id}>{props.labeltext}</label>
      <input {...props} />
    </>
  );
}
