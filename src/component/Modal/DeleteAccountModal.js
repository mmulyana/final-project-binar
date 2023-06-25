import Button from '../Button'
import api from '@/services/api'
import withModal from './withModal'
import { logout } from '@/utils/authUtils'
import { removeUser } from '@/redux/reducers/auth'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

function DeleteAccount({ toggleModal, id }) {
  const dispatch = useDispatch()
  
  async function handleDelAccount() {
    try {
      const jwt = Cookies.get('jwt')
      const { data } = await api.delete(`/users/${id}`, {
        headers: {
          Authorization: jwt
        }
      })
      if (data.status) {
        logout()
        dispatch(removeUser())
        toggleModal()
      }
    } catch (err) {}
  }

  return (
    <div className='fixed w-full left-1/2 top-20 -translate-x-1/2 h-fit z-[60] px-4'>
      <div className='bg-white rounded-lg p-8 max-w-[600px] mx-auto'>
        <p className='mt-2 mb-4 text-center text-lg'>
          Apa anda yakin untuk menghapus akun?
        </p>
        <Button
          onClick={handleDelAccount}
          className='px-6 py-2 rounded bg-red-600 text-white block mx-auto'
        >
          Konfirmasi penghapusan
        </Button>
      </div>
    </div>
  )
}

const DeleteAccountModal = withModal(DeleteAccount)
export default DeleteAccountModal
