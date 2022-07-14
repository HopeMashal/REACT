const Btn = (props) => {
  function Click() {
    props.onClick(props.value);
  }
  return (
    <button onClick={Click}>
      {props.value}
    </button>
  );
};

export default Btn;