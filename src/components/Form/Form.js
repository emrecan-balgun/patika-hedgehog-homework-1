import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux'
import { addPhoto } from '../../app/gallerySlice'
import AddIcon from './add.svg';
import { toast } from 'react-toastify';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
    //   padding: '50px'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
    }
  };

  Modal.setAppElement('#root');

function Form() {
  const dispatch = useDispatch();

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = 'black';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const successNotify = () => toast.success('Başarıyla eklendi!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const fillNotify = () => toast.info('Lütfen tüm alanları doldurun!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  });

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleClear = () => {
    setTitle("");
    setUrl("");
  }

  const handleAdd = () => {
    if(title.length > 0 && url.length > 0) {
      dispatch(addPhoto({title, url}));
      handleClear();
      closeModal();
      successNotify();
    } else {
      fillNotify();
    }
  }

  return (
    <div className="sm:container sm:mx-auto">
       <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={openModal}>
        <img className="w-6 h-6 mr-3" src={AddIcon} alt="Add Svg" />
        <span>New Item</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="New Item Modal"
      >
        <h2 className="text-3xl text-center font-bold mb-5" ref={(_subtitle) => (subtitle = _subtitle)}>New Photo</h2>
        <form>
            <div className="flex flex-col md:flex-row gap-4">
                <div>
                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">Title</label>
                    <input type="text" name="first-name" id="first-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder='Example title' onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">URL</label>
                    <input type="text" name="website" id="website" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="http://www.example.com" onChange={(e) => setUrl(e.target.value)} value={url} />
                </div> 
            </div>
        </form>
        <div className="flex gap-2 items-center justify-center mt-8 mb-2">
            <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => handleAdd()}>Add</button>
            <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={() => handleClear()}>Clear</button>
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  )
}

export default Form