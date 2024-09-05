import { IOpenStoreNames, useIsOpenStore } from 'store/isOpenStore'
import Fade from 'common/components/Fade'
import XSvg from '../SvgIcons/SvgFiles/XSvg'

interface Props {
  id: IOpenStoreNames
  onClickConfirm: () => void
  modalTitle: string
  mainMessage: string
  confirmButtonType?: 'YesNo' | 'OkCancel' | 'Ok'
  messageInfo?: string
}

const ModalConfirm = (props: Props) => {
  const { isOpen, closeByName } = useIsOpenStore()
  const {
    id,
    onClickConfirm,
    modalTitle,
    mainMessage,
    messageInfo,
    confirmButtonType = 'YesNo',
  } = props

  const _isOpen = isOpen(id)

  const handleClose = () => {
    closeByName(id)
  }

  const handleClickConfirm = () => {
    onClickConfirm && onClickConfirm()
    handleClose()
  }

  if (!_isOpen) return <></>
  return (
    <Fade show={_isOpen} id={id}>
      <div
        className="modal fade show"
        style={{ display: 'block' }}
        id={id}
        role="dialog"
        tabIndex={-1}
      >
        <div className="overlay" onClick={handleClose} />
        <div className="modal-dialog modal-dialog-centered">
          {/*<!-- Modal content-->*/}
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{modalTitle}</h4>

              <XSvg onClick={handleClose} role="button" />
            </div>
            <div className="modal-body">
              <h5>{mainMessage}</h5>
              <br />
              <h6>{messageInfo}</h6>
            </div>
            <div className="modal-footer">
              <div className="d-flex gap-3">
                <button
                  type="button"
                  className=" btn btn-outline"
                  onClick={handleClickConfirm}
                >
                  {confirmButtonType === 'YesNo' && 'Sim'}
                </button>
                {confirmButtonType !== 'Ok' ? (
                  <button
                    type="button"
                    className=" btn btn-outline"
                    onClick={handleClose}
                  >
                    {confirmButtonType === 'YesNo' ? 'Não' : 'Cancelar'}
                  </button>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default ModalConfirm
