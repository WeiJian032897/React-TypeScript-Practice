interface ButtonProps {
  text: string;
  color: string;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button 
      onClick={props.onClick}
      style={{ 
        backgroundColor: props.color,
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '5px',
        fontSize: '16px'
      }}
    >
      {props.text}
    </button>
  );
}

export default Button;