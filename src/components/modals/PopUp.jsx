import React, { useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PopUp.css';

const PopUp = () => {
  const [modal, setModal] = useState(false);
  const [radioInput, setRadioInput] = useState('');
  const [message, setMessage] = useState('');
  const onOpenModal = () => {
    setModal(true);
  };

  const onCloseModal = () => {
    setModal(false);
    setRadioInput('');
    setMessage('');
  };

  const onSubmitHandler = (e) => {
    if ((radioInput && message) === '') {
      toast.error('Please fill all the fields', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: 'dark',
        transition: Bounce,
      });
    } else {
      e.preventDefault();
      console.log('From:', radioInput);
      console.log('Message:', message);
      toast.success('Form submitted successfully!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: 'dark',
        transition: Bounce,
      });
      setModal(false);
      setRadioInput('');
      setMessage('');
    }
  };

  const onChangeHandler = (e) => {
    setRadioInput(e.target.id);
  };

  const onMessageHandler = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className="popup" onClick={onOpenModal}>
        click to see pop up
      </div>

      {modal && (
        <>
          <div className="overlay" onClick={onCloseModal}></div>
          <div className="pop">
            <form className="form" onSubmit={onSubmitHandler}>
              <div className="from">
                <label htmlFor="from">From:</label>
                <label htmlFor="bot">
                  <input
                    type="radio"
                    id="bot"
                    name="From"
                    checked={radioInput === 'bot'}
                    onChange={onChangeHandler}
                  />
                  bot
                </label>
                <label htmlFor="customer">
                  <input
                    type="radio"
                    id="customer"
                    name="From"
                    checked={radioInput === 'customer'}
                    onChange={onChangeHandler}
                  />
                  customer
                </label>
              </div>
              <div className="message">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={onMessageHandler}
                />
              </div>
              <div className="btn">
                <div type="submit" onClick={onSubmitHandler}>
                  Submit
                </div>
                <div onClick={onCloseModal}>Close</div>
              </div>
            </form>
          </div>
        </>
      )}
      <ToastContainer />
    </>
  );
};

export default PopUp;
