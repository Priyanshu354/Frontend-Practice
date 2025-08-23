

const Toast = ({message, type, onClose}) => {
  return (
    <div className={` ${type} flex gap-5 rounded shadow my-2`}>
        <p className='font-semibold p-2'>{message}</p>
        <button 
        onClick={onClose}
        className='text-xl font-bold p-2 cursor-pointer'> X </button>
    </div>
  )
}

export default Toast